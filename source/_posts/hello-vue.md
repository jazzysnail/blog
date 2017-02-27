---
title: vue从入门到放弃？
date: 2016-07-20 11:05:33
tags: vue
---

> 架构是对客观不足的妥协，规范是对主观不足的妥协。

<!-- more -->
## 初次见面
那时我还没有毕业，别人还称我为"同学"。第一次接触vue是我在丹露网实习时，大师兄推荐我学习的，当时还给我演示一个小demo，下面输入框输入什么，上面就同步跟着显示出来了。当时看起来不难也觉得似乎没意义不大（才疏学浅），故没有很在意。
## Model–view–viewmodel
后来大师兄给我说不理解很正常，又告诉我说去google一下mvvm。当然还是乖乖的先去baidu了一下，找到了一篇2014年三月[博客园Indream Luo的一篇博文](http://www.cnblogs.com/indream/p/3602348.html)（可能我会去整理一下转载过来）大致是在讲设计模式的一个进化过程（其实也就是分层进化），建议戳进去看看。

接下来单独来看mvvm（Model–view–viewmodel），其实也还是出于分离视图层的目的，请看下图：

<img src="http://oaul0t4t1.bkt.clouddn.com/imgs/IC564167.png" alt="生命周期图示">

大体上还是三层，就是** MVC **上`Controller`换成`viewmodel`或者** MVP **上`Presenter`换成`viewmodel`。
** MVC **相比，断开了`View`与`Model`的直接联系，将`View`与`viewmodel`进行双向绑定（data-binding，这里既是与MVP的区别），`viewmodel`通过检测数据的变化或者视图的变化来相应的做出视图更新或者数据更新。对于逻辑开发者来说只需要关心数据（model），对于视图开发者来说只需要关心视图（View）了。

<img src="http://oaul0t4t1.bkt.clouddn.com/imgs/mvvm.png" alt="MVVM">

**Vue**在mvvm中扮演的正是** ViewModel **这个角色。

## 题外话
之所以前端的发展会引入mvvm这种在桌面软件开发中常用的模式，是因为他们都不是用来看的而是用来使用的，使用都是需要有** user interface **的。既然有视图的存在，那么视图与逻辑或者数据他们必须分离。引用** Indream Luo ** 的一句话：

> 架构是对客观不足的妥协，规范是对主观不足的妥协。

作为开发者面对技术的革新要勇于拥抱，面对客观的不足我们要勇于创新！