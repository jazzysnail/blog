---
title: npm-rimraf
date: 2016-07-30 16:05:14
tags: 
  - npm
---

A deep deletion module for node (like `rm -rf`)

---

我想应该还是有不少遇到过一样问题的人：

![sptl](http://oaul0t4t1.bkt.clouddn.com/imgs/SPTL.png)

**source path too long！** 

源路径太长，应该是路径太深了，Windows 系统对文件路径名的长度是有限制的，超过256个字符就访问不到了。好像有句话是这样说的，你能遇到的 bug 肯定有人早就遇到过了，于是 google之。

[rimraf](https://www.npmjs.com/package/rimraf) A deep deletion module for node (like `rm -rf`)

删掉 `node_modules` 仅需三步：
``` bash
npm install rimraf -g
cd xxx ## [include node_modules folder]
rimraf node_modules
```
