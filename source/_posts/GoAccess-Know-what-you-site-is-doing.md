---
title: GoAccess - Know what you site is doing
date: 2017-04-08 22:56:16
tags:
- nginx
- goaccess
- monitoring
- shell
- web
- real-time
author: dejan@fajfar.com
---

{% asset_img goaccess.png https://goaccess.io %}

Get the information out of those __access.log__ files!

<!-- more --> 

In my professional live I noticed quite a few time that nothing beats looking at the server log files to really see 
who is doing what to your website. 

As some of you may know, from personal experience, analysing big files is no easy nor is it time effective. That's why
log file visualisation goes a long way. 

Some will take money and buy a preexisting solution or develop their own. This is not an option for me and because of 
that something _cheaper_ must be organized. Googling my way through the ads and dead ends I came across a real gem that
I have to share with you.

I am talking about [goaccess](https://goaccess.io)

Written completely in __C__ with only one dependency to [gwsocket.io](http://gwsocket.io/) it provides a small package
with a great punch. 

At its simplest it takes access log files in any form and display them in eighter a shell or web centric display. 

Samples below:

{% asset_img shell_dashboard.png Shell goaccess dashboard %}


{% asset_img web_dashboard.png Web goaccess dashboard %}

This alone was enough to get me hooked on the idea that this will make its way onto my server.

But then you notice that this can do __live analysis__ to. For this it starts it own little web server and serves live 
data to the web dashboard. As far as I am aware the same is not possible for the shell dashboard.

As of now I have not fully realized the potential that this tool offers. But I hope that I will be able to get the most
out of it in the future.


To be continued...