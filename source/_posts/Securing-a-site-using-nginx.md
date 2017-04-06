---
title: Securing a site using nginx
date: 2017-04-06 18:27:14
tags:
- nginx
- ssllab
- certificate
- certbot
author: dejan@fajfar.com
---

{% asset_img fajfar.com_ssl.png SslLab results for fajfar.com %}

How to secure your site running behind Nginx.

<!-- more -->

In the past securing a webpage meant spending money and buying a certificate. There was always the 
__self signed__ alternative but that was not viable for _public_ projects because of the invalid certificate warning.

Today this is not really a issue anymore because there are some alternatives that provide you with free signed
certificates for personal and non-profit use. 

So there is nothing holding you back from securing your website. 


# Acquiring a certificate

{% asset_img certbot-logo.svg https://certbot.eff.org/ %}

Before we can continue we will have to get a certificate to use with your website. In the past I have used __starSSL__ 
which has since fallen from grace with the browser vendors, now I am at [letsenrypt.org](https://letsencrypt.org/).

The nice thing about [letsenrypt.org](https://letsencrypt.org/) is that they provide you brilliant way of getting and
renewing the certificates. If you have shell access to the server. 

A way of doing it without shell access is also described, but I have not tried it. 

Lets assume that you got certbot running and have retrieved a certificate for __testdomain.com__, using the default
settings.
 
You should find the following files in the __/etc/letsencrype/live/testdomain.com__

``` bash
me@server:/etc/letsencrypt/live/testdomain.com$ ls
cert.pem  chain.pem  fullchain.pem  privkey.pem  README
```

Congratulation you have just acquired the needed certificates for your website. 

# Using the certificates

Now we delve "deep" into the _Nginx_ configuration files. If your installation of the server is remotely standard you
should have a directory __/etc/nginx/sites-available__ where all available sites are listed. In this folder find the
configuration for _testdomain.com_ and open with your editor of choice. 

Update the __server__ configuration following the steps:

* Change the listening port from __80__ to __443__
* Add the __ssl__ flag to the _listen_ directive
* Add a __ssl__ directive with th __on__ flag
* Add a __ssl_certificate__ directive that points to you fully chained certificate
* Add a __ssl_certificate_key__ directive that points to your certificate key file

In the end you should have something like the following:

```
server {
	listen 			443 ssl;
	server_name		testdomain.com;
	ssl 			on;
	ssl_certificate		/etc/letsencrypt/live/testdomain.com/fullchain.pem;
	ssl_certificate_key	/etc/letsencrypt/live/testdomain.com/privkey.pem;
    
	# other server stuff
}
```

This is basically all you need to make your website use __HTTPS__ to communicate with the world. 

At this point our communication with the user is __mostly secure__. If we want that __A+__ rating we will have to
do some additional things.

#Protocol and Ciphers

```
ssl_protocols	TLSv1.1 TLSv1.2;
ssl_ciphers	'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';
ssl_prefer_server_ciphers on;
```

## Protocol

By default all [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) versions are active. Because __TLSv1.0__ is
now considered insecure it should be removed from the list of available TLS versions.

> Disabling TLSv1.0 will prevent older clients from connecting to your website

A good starting point for this is the blog post from [PCI security standards](https://blog.pcisecuritystandards.org/migrating-from-ssl-and-early-tls).


## Ciphers

Honestly I do not __fully__ understand what is happening here but i get the concepts and reason for doing it. 

After reading about [Forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy) and then good guide on 
[Server site TLS](https://wiki.mozilla.org/Security/Server_Side_TLS) I opted for the _medium_ cipher setting.

## Diffie Hellman

Diffie Hellman is a method to exchange cryptographic keys over an unsecured channel. More on this can be found in this 
wikipedia article about [Diffie–Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange).

After trying to understand all that I just defaulted to __longer D-H parameters are better__ but there has to be an 
upper bound! Currently the recommended D-H parameter length is 2048 so after reading these to blogs:

* [https://www.yubico.com/2015/02/big-debate-2048-4096-yubicos-stand/](https://www.yubico.com/2015/02/big-debate-2048-4096-yubicos-stand/)
* [https://blog.nytsoi.net/2015/11/02/nginx-https-performance](https://blog.nytsoi.net/2015/11/02/nginx-https-performance)

I would suggest and personally use the 4096 bit variant. In combination with the __ssl_session_cache__ all negative
impact of the longer parameters should be negated.

So how do we generate them? 

Using __openssl__ this is just a question of time.

```bash
openssl dhparam -out dhparam.pem 4096
```

This command will let you enjoy this screen for quite some time:

{% asset_img dhparam.jpeg generating D-H parameters %}

After 45 minutes I just left it to itself and went to sleep. So expect to spend some time with this. 

There are __alternatives__. 

Sites like [https://2ton.com.au/dhtool/](https://2ton.com.au/dhtool/) provide you with
pre-calculated D-H parameters. 


# Lighten the load

The easiest way to lighten the load is to reuse all of that math being done. This is luckily easily done with the
 __ssl_session_cache__ directive. 
 
```bash
ssl_session_cache	shared:SSL:10m;
```

This will create a shared cache of 10Mb. According to the internet 1Mb should be good for 4K sessions.

What exactly this means is beautifully described at [https://vincent.bernat.im/en/blog/2011-ssl-session-reuse-rfc5077](https://vincent.bernat.im/en/blog/2011-ssl-session-reuse-rfc5077)

And a benchmark can be found at [https://www.peterbe.com/plog/ssl_session_cache-ab](https://www.peterbe.com/plog/ssl_session_cache-ab)

The benchmark is also the source of the configuration sample :)


# Putting it all together

To not cause confusion, here is the complete server configuration for _testdomain.com_

```
server {
	listen			443 ssl;
	server_name		testdomain.com;
	ssl on;
	ssl_certificate		/etc/letsencrypt/live/testdomain.com/fullchain.pem;
	ssl_certificate_key	/etc/letsencrypt/live/testdoamain.com/privkey.pem;
	ssl_protocols		TLSv1.1 TLSv1.2;
	ssl_ciphers		'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';
	ssl_prefer_server_ciphers on;
	ssl_session_cache	shared:SSL:10m;
	ssl_dhparam		/etc/ssl/dhparam.pem;
	add_header		Strict-Transport-Security "max-age=31536000";
        
	location / {
		root /var/www/;
		index index.html;
                try_files $uri $uri/ /index.html;
        }
}

```

# Redirecting HTTP -> HTTPS

Now you have a nice little HTTPS configuration going. It gets an __A+__ ratting but you still have to get your traffic
from the unsecured "channel" to the secured one. 
 
I suggest to do that with a __301 Moved Permanently__ so that each browser only makes the mistake once :)
 
Here is the server configuration for _testdomain.com_

```bash
server {
	listen		80;
	server_name	testdomain.com www.testdomain.com;
	return		301 https://testdomain.com$request_uri;
}
```