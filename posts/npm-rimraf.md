---
title: npm-rimraf
date: 2016-07-30 16:05:14
tags: 
  - npm
---

A deep deletion module for node (like `rm -rf`)

---

我想有不少像我一样遇到过这样的一种情况的人，直接上图：

![sptl](http://oaul0t4t1.bkt.clouddn.com/imgs/SPTL.png)

**source path too long！** 

这TM就尴尬了！源路径太长？什么情况，难道还删除不了了不成？有一句话是这样说的，你遇到的BUG，肯定也有人遇到过，于是马上google。探索的结果就是发现一个绝活npm包，[rimraf](https://www.npmjs.com/package/rimraf)。

干掉`node_modules`仅仅需要三步:
1. `npm install -g rimraf`
2. `cd xxx[include node_modules folder]`
3. `rimraf node_modules`

** 强！无敌！ **