---
title: 关于闭包之我见
date: 2016-07-18 21:48:04
tags: 
  - javascript
  - closure
---

[闭包](http://baike.baidu.com/view/648413.htm#4)是一个拥有许多变量和绑定了这些变量的环境的表达式（通常是一个函数），因而这些变量也是该表达式的一部分。

---

> [闭包](http://baike.baidu.com/view/648413.htm#4)是一个拥有许多变量和绑定了这些变量的环境的表达式（通常是一个函数），因而这些变量也是该表达式的一部分。

接触前端不久，我也不太懂闭包，但感觉貌似好腻害研究一哈，特别感谢大师兄的栗子！（以下理解纯属个人理解，不一定正确和准确，欢迎讨论）

研究开始...


闭包，我的理解就是一个利用函数作用域，创建了一个中间变量表达式，内部代码执行依赖闭包中的变量，而内部又被外部引用。因此只要内部函数需要的资源都不会被回收，该闭包中的变量也不会被回收。

也就是在函数外套了个罩子，这个罩子就是闭包。这个罩子把外部和内部隔离开，罩子里的变量可以被内部调用且又不能被外部调用，而且还不能被回收掉！下面是一个闭包的栗子：

```js
var c = (function a() {
    var i = 0;

    function b() {
        alert(++i);
    }
    return b;
});
onclick = function() {
    c();
}
```


函数b嵌套在函数a中，函数a返回函数b，变量c引用函数a。

当执行c()时由于函数a返回函数b所以实际上函数指向b，b的执行依赖函数a中的变量i，所以当函数执行过后a中的变量i的值不会被回收。当再次触发点击事件时会输出++i。喜闻乐见的反例：

```js
var c = (function a() {
    var i = 0;

    (function b() {
        alert(++i);
    })();
    // return b;
});
onclick = function() {
    c();
}
```


假如我们不返回函数b而是直接执行函数b，会是什么情况呢？

实际上当函数执行时函数直接指向a，a内部函数b直接执行并没有作为返回值返回给外部，这时内部函数b与外部函数完全没有什么关系（自娱自乐）因此函数a中的资源（变量i）就被回收了，所以当再次触发点击事件的时候打印出的还是1，而且将永远是1，变量i并没有被加上去。

到底有什么卵用？
**保持一个变量常住内存，保护函数内部变量不被回收！**下面是一个完整的栗子：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title></title>
</head>

<body>
    <div id="haha1">这是第1个div</div>
    <div id="haha2">这是第2个div</div>
    <div id="haha3">这是第3个div</div>
    <div id="haha4">这是第4个div</div>
    <div id="haha5">这是第5个div</div>
    <div id="haha6">这是第6个div</div>
    <div id="haha7">这是第7个div</div>
    <div id="haha8">这是第8个div</div>
    <div id="haha9">这是第9个div</div>
    <div id="haha10">这是第10个div</div>
</body>
<script>
for (var i = 1; i <= 10; i++) {

    document.querySelector("#haha" + i).addEventListener('click', function() {
        console.log("第一个方式", i);
    });

    (function(i) {
        document.querySelector("#haha" + i).addEventListener('click', function() {
            console.log("第二个方式", i);
        });
    })(i);
}
</script>

</html>
```

**建议复制下来执行一下**
代码什么意思呢？

给这十个div都绑定一个点击事件，来控制台打印div的索引值（就等于闭包函数的i值）。

方式一、没有使用闭包，只是单纯的给每一个div绑定了点击事件，内部方法打印的i即为全局变量i（即为for循环后留下的变量i，值为11）。

方式二、使用了闭包，每当循环执行一次就给当前div绑定点击事件时同时创建一个闭包，闭包里的变量i即为创建时当前i的值，当相应的div触发点击事件时打印出的即为相应绑定时i的值。

这样闭包就很好的保护了内部函数所使用的是当时的i而不是全局下的i。是不是感觉吊吊的？？

**总结：**
> 一个拥有许多变量和绑定了这些变量的环境的表达式（通常是一个函数），因而这些变量也是该表达式的一部分。
回过头来看这句话应该理解了不少，虽然还是有点模糊，但起码会用了不是么？**保持一个变量常住内存，保护函数内部变量不被回收也不被覆盖。**

写到这里应该可以简单的理解javascript的闭包了~

由csdn《[关于闭包之我见](http://blog.csdn.net/jazzysnail/article/details/49301283)》 2015-10-21 10:45 转移至此