---
title: filter
date: 2017-05-30 23:45:51
cover: 'http://oaul0t4t1.bkt.clouddn.com/imgs/weekly_pt_4.png'
tags: 
  - JS
  - Array
---

null

---
<br>
# Array.prototype.filter()
> filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

方法名字面理解就是过滤器，大部分情况下过滤器是非常有用的。

## 语法
``` js
let new_array = arr.filter(callback[, thisArg])
```

## 参数
`callback`<br>
用来测试数组的每个元素的函数。调用时使用参数 (element, index, array)。<br>
返回true表示保留该元素（通过测试），false则不保留。<br>
`thisArg`<br>
可选。执行 callback 时的用于 this 的值。

## 返回值
一个新的通过测试的元素的集合的数组，同样的过程不破坏原数组。

## 示例
``` js
var filtered = [12, 5, 8, 130, 44].filter(val => val >= 10);
// filtered is [12, 130, 44]
```

## 参考链接
[javascript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

> 这个方法总之十分有用也十分常用，如果遇到了非常好的例子再行补充，今天有点累了，晚安。


