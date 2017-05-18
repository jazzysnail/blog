---
title: not defined和undefined和Null到底谁是异教徒？
date: 2016-08-08 19:29:52
tags: 
  - javascript
---

又一个需求完结了，最近好“闲”！总结一个好玩的东西，那就是`not defined` 和 `undefined` 以及`Null`这三兄弟。这三兄弟简直了，一个不小心就要出问题。

---

别看这三兄弟不仅长的像而且意思也真是TM的“像”，可是他们之间还有很大的区别的。

## undefined
> `undefined`类型只有一个值，即特殊的`undefined`。在使用var声明变量但未对其加以初始化时，这个变量的值就是`undefined`。

熟悉么？没错就 **js高程** 的原话。讲道理读书还是重要，有些时候遇到问题快速解决可以google或是寻找技术博客什么的，实践很重要理论做支撑，需求完结后回到理论深究一下，才能真正的提高，所谓知其然知其所以然~又TMD扯远了。

上面这段什么意思呢？就是说这个变量不是没有（未定义）而是没有初始化。听说马上七夕，讲个笑话，你有一天闲得蛋疼，在给未来的孩子取名字，好不容易想到一个好的，然而你连女朋友的没有。不要打我！来人护驾！

## not defined
别看他和`undefined`长的挺像，就以为他们是失散多年的亲兄弟，其实不然，数据类型大家族之中根本就没有他，他只是浏览器经常报的一个错误信息而已。
当我们看到`VM316:1 Uncaught ReferenceError: XXX is not defined(…)`的时候其实就意味着这个叫“XXX”的家伙根本就不存在（未定义）。浏览器的意思是“您拨打的号码有误，请核实后再拨”。

## Null
哇~这个就厉害了。从逻辑上讲`Null`表示是一个空对象指针(也就是对象的名字用于存放地址)。
``` js
var obj1 ={};
var obj2 = null;
var var1 = undefined;
console.log(typeof(obj1)); // 返回object
console.log(typeof(obj2)); // 返回object
console.log(typeof(var1)); // 返回undefined
```
这个东西不是很好解释，就好比是物理老师告诉你，1.0和1是不一样的，考试的时候要是精确两位小数你答个1，就尴尬了。他们可以一样也可以不一样(严格意义上不一样)，`Null`是对象指针本身也是个对象，在内存中其实就是未来要存个地址但是还没想好要存哪个地址而已（多个变量可以指向同一个对象）。
``` js
var pointerA = null;
var var2 = undefined;
var objA = {
    biu:"biu~biu~biu~"
};
pointerA = objA;
var2 = pointerA;
objA.heheda = "heheda";
console.log(pointerA === objA); // 返回true （同一个地址引用）
console.log(var2 === objA); // 返回true （同一个地址引用,undefined派生于null）
```
但是`undefined`他可就不是对象指针了，如果存实际的数据，可就真的存进去了。
``` js
var variableA = undefined;
var variableB = 3;
variableA = variableB;
variableB = 4;
console.log(variableA === variableB); // 返回false （不同的地址引用）
```
但是！他们在技术角度有TM的一样了，`undefined`派生于`null`并且都广义上代表“没有”：
``` js
console.log(undefined == null) // 返回true
console.log(undefined === null) // 返回false
```
所以说`null`才是`undefined` 多年未见的亲哥哥呀。

## null&undefined VS not defined
好的他们三个的关系已经清楚了，只有`not defined`不是自家兄弟。对于这样的异教徒我们要怎么办？
假如有后端跟你对接口时说，当这个属性没有的时候他就真的没有了(`not defined`)！难道你还傻傻的：
``` js
if (shashade.attr2) { // 此时已然报错
    return console.log(shashade.attr2);
}else {
    // 执行为空操作
}
```
这样写过的同学举一下手~
那么要怎么办呢？`typeof`笑而不语。
``` js
var obj = {
    attr1:"attr1"
}
test(obj);
function test(busha) {
    if (typeof(busha.attr2) == null) { // 不会报错
        return console.log(busha.attr2);
    }else {
        return console.log("为空操作已执行！")
    }
}
```