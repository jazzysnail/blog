---
title: find & indexOf
date: 2017-05-31 23:20:50
cover: 'http://oaul0t4t1.bkt.clouddn.com/imgs/daily_pt_005.png'
tags: 
  - JS
  - Array
---

null

---
<br>
# Array.prototype.find()
> find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

## 语法
``` js
arr.find(callback[, thisArg])
```

## 参数
- `callback` 在数组每一项上执行的函数，接收 3 个参数：
  - `element` 当前遍历到的元素。
  - `index` 当前遍历到的索引。
  - `array` 数组本身。
- `thisArg` 可选，指定 callback 的 this 参数。

## 返回值
通过测试元素的值，同样的 find 方法不会破坏原数组。

## 示例
``` js
var inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function findCherries(fruit) { 
  return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
```

大部分为参考文档的精简和摘录，例子如果不难我就一概复制来了，毕竟很简单。最近在搬家，真的累成狗，碎觉了，晚安，欠账一篇，明日补齐。

## 参考链接
[javascript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)