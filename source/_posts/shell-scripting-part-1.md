---
title: shell scripting - part 1
date: 2017-05-01
tags:
author: dejan@fajfar.com
---

{% asset_img logo.png %}

The journey begins!

Get to know the basics like:

* shebang
* granting the execute right to scripts
* Discovering why we need this all

<!-- More -->

This not being my first attempt to explain shell scripting to someone I will try and answer the most obvious question first.

# Why?

This is something that I get asked over and over again, especially from the windows user community. In today's age of 
touch interfaces and the emergence of virtual and augmented reality. 

__Why do we still need a CLI interface?__

> Because it is repeatable on a system level. 

Just think about it. 

You write it once and execute it indefinitely. There is no propriatary software or _recorder_ between you and the system. 

In a [GUI](https://en.wikipedia.org/wiki/Graphical_user_interface) driven operating system the only way to interact with
the computer is to _click_ on something. And maybe after _clicking_ on something you _type_ into something. 

This is extremely simple to do for a human, but quite hard for a program. 
 
If you would like to repeat the _clicks_ you would first have to find a program that can interact with your special brand
of [window manager](https://en.wikipedia.org/wiki/Window_manager) and then explain to him what to do. Most probably 
this will be handled in the form of click events that will be triggered on a predefined target on the GUI.

This already sounds like a lot of trouble. Now imagine that you have to vary your _inputs_ depending on some arbitrary 
conditions an you are facing an interesting problem. 

On the other hand using a script we could vary our input depending on any number of conditions. For example we could open
chrome with a different page if a file exists or not.


```bash
#! /bin/bash

if [ -f /tmp/chrome_change ]
then
  chrome https://9gag.com
else
  chrome https://facebook.com
fi
```

In this few lines of code you check for the existence of a file on the file system and if it is there you open chrome with
[9gag](https://9gag.com) and if we do not find it we open it with [facebook](https://facebook.com).

I know that this is an arbitrary sample but it shows that we can repeat the same "__script__" with a different outcome
depending on external factors.

# What is a script?

There is a quite extensive definition provided by [wikipedia](https://en.wikipedia.org/wiki/Scripting_language) and I 
encourage you to read it. But for my purposes I understand scripts as the following.

> A script is a sequential program written in a scripting language

Now lets take this apart.

## Sequential program

Funny enough that wikipedia does not have a dedicated article on this subject matter. There is a redirect for 
[sequential programming](https://en.wikipedia.org/w/index.php?title=Sequential_programming&redirect=no) but it only links
to an article about [concurrent programming](https://en.wikipedia.org/wiki/Concurrent_computing), which is the polar
opposite.

There is actually no uniform definition provided by a credible source that I could find. But you could peace it all 
together with the following search terms:

* [Sequential programming](http://lmgtfy.com/?q=sequential+programming)
* [Sequential flow](http://lmgtfy.com/?q=sequential+flow)
* [Sequential execution](http://lmgtfy.com/?q=sequential+execution)

__Sequential__ being the core adjective here.

In short I would describe this as

> Executing a predetermined sequence of instructions

## Scripting language

An except of the wikipedia definition reads:

> A scripting or script language is a programming language that supports scripts; programs written for a special run-time environment that automate the execution of tasks that could alternatively be executed one-by-one by a human operator. Scripting languages are often interpreted (rather than compiled).

The rest can be found [here](https://en.wikipedia.org/wiki/Scripting_language).

In my humble opinion a scripting language must be interpreted and not compiled. So that we can make changes and improvements
on the fly without the need for a __full development environment__.
 
