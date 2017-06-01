---
title: 来聊一聊流畅设计系统（草稿）
date: 2017-05-31 23:23:13
cover: 'http://oaul0t4t1.bkt.clouddn.com/imgs/fluent_design.png'
tags: 
  - Art
  - 草稿
---

草稿

---
# fluent design system
发现这年头凡事都要搞个什么设计语言。最近微软搞的什么 fluent design system 貌似挺火的，官方中文是叫“流畅设计系统”。

跑去 Google 发现遗憾而且搞笑的是[官方展示页](http://fluent.microsoft.com/)，竟然崩掉了，崩！掉！了！

先去 [YouTube](https://www.youtube.com/watch?v=vcBGj4R7Fo0) 过把眼瘾，直观感受，嗯，CG倒是做的不错。感觉有一定难度，这光影确定不考虑 GPU？

`fluent design` 新的设计语言主要推崇5个方面，`Light`, `Depth`, `Motion`, `Material`, `Scale`（光效，深度，动效，材质，不知道怎么翻译）。
![](http://oaul0t4t1.bkt.clouddn.com/imgs/a6bbb861a49522f3b7018e157c460f62d3c798ba13e8-ypxzTg.jpeg)

这些地方观察这些方面我们不难发现，这些东西都是在强调一个东西叫“**现实增强**”。玩 Minecraft 的玩家大概知道，加光影材质和不加光影材质的游戏根本可以不是一个游戏了。

现在大部分的设计已经再像这个方向靠拢了，当然这也是必然，好的设计是自然的设计，自然的设计当然源于自然。

同时在 Windows 开发中心也给出了相应的 [设计资源](https://developer.microsoft.com/zh-cn/windows/apps/design)，其中有回归的毛玻璃效果（亚克力材质）、视差、交互式光效等。

## 毛玻璃
我觉得之所以对毛玻璃效果如此偏爱而且大家也都觉得很漂亮，我觉得还是源于“**现实增强**”，很真实嘛。在系统统一的窗口等界面上应用材质到底有点奇怪，毕竟窗口什么的不可能具有很强的厚度感，但是毛玻璃就不一样了，本身在现实中透明的东西或者通透的东西往往都是纤薄的，直接透明了不利于主体的识别，而毛玻璃就可以兼顾两点，同时模糊又是自然界[漫反射](http://baike.baidu.com/item/%E6%BC%AB%E5%8F%8D%E5%B0%84)的直接感官体验。

## 视差滚动
[视差滚动](http://baike.baidu.com/item/%E8%A7%86%E5%B7%AE%E6%BB%9A%E5%8A%A8/2290867)这个东西也很有趣，也是很早就有应用，也有前端插件有做支持，同样也是为了曾强设计的现实感。

## 光影
![](http://oaul0t4t1.bkt.clouddn.com/imgs/e1e55fcd171b3968adc2ce08a88691c1f84c42d325d6-gGzrSj.jpeg)
这个东西我还是觉得有点困难，或许是担心硬件。毕竟模拟真实光影还是很吃配置的，目前无论是 Windows 还是 OSX 投影大概都是死值吧，不仔细看觉得是那么回事，但是仔细想象现实并不是那么一回事，对于现实投影的不同距离的承载和不同介质的承载都是不同的。那么实现起来自然也是相对耗费资源的，连用 C4D 渲染都还是要一段时间的，更别说直接在桌面。



