---
title: atom.xml
date: 2017-05-05 11:13:50
tags:
- atom
- rss
author: system@fajfar.com
---

{% asset_img rss.png %}

Site aggregator is now available/working.

<!-- more -->

It turns out that the aggregaror plugin is not part of the default hexo installation. 

A quick

```bash
$ npm install hexo-generator-feed -save
```

and adding 

```yaml
# atom feed
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content:
```

to _config.yaml fixed the issue.