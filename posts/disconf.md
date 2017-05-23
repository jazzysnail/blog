---
title: Disconf 分布式配置管理平台
date: 2017-05-23 23:30:39
tags: 
  - 草稿
---

Distributed Configuration Management Platform(分布式配置管理平台)

---
接触到这个东西源于之前前端的配置文件原本是写在工程内的，但是随着环境的增多，发现配置文件也在日趋增多，运维在调整和管理起来非常麻烦。在调整配置时难不成还得改改工程，再提个代码？显然这是不科学的。

所以今天介绍的工具是 [Disconf](http://disconf.readthedocs.io/)，官方解释是：
> Distributed Configuration Management Platform(分布式配置管理平台)

## 使用
首先你得先在环境上部署一个 [disconf-web](http://disconf.readthedocs.io/zh_CN/latest/install/src/02.html) 。而且整个前后端都可以使用这个平台来进行配置管理，后端用到的反而会更多，微服务化产生的配置文件可真是一点都不少。

有了 `disconf-web` 下来就是 `disconf-client`，这里讲前端使用 `node` 来进行配置的读取，社区有一个开源的实现我们可以方便的拿来使用，[node-disconf-client](https://github.com/Corey600/node-disconf-client) 目前版本是 *0.1.5*。根据给出的 Api 文档进行配置也是很简单的，

> 目前发现在读取 json 数据后使用配置直接转存是存在问题的，会得到`[Object,Object]`，所以要么单独处理一下数据或者改用其它的文件格式的数据，disconf 官方使用的`*.properties`文件比较推荐，是可以直接读取的，其次前端常用的 `*.js` 模块文件也是相比较好用的。