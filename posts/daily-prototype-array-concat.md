---
title: daily prototype
date: 2017-05-27 23:03:46
tags: 
  - JS
  - Array
---

【每日原型】Day 001-100

**Array.prototype.concat()**

---

最近思来想去，毕业也接近一年了，也不知道每天都在忙些什么，整天看些乱七八糟的东西。

疲于构建业务，天天写一些带毒的代码，疲于追逐新的‘玩意儿’，而忽略了那些相对基础但很重要的东西。

所以决定立一个‘百日计划’，每天巩固一个 javascript 的原型，看看自己究竟能不能做到。

---

# Array.prototype.concat()

> concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

## 语法
``` js
let new_array = old_array.concat(value1[, value2[, ...[, valueN]]]);
```

## 参数
valueN: 数组或非数组值

## 返回值
合并后的新数组

## 简单应用（数组复制）
由于方法返回一个新的数组，利用这个特性可以简单的用来复制数组。

``` js
  const a = ['A'];
  let b = a.concat(); // => ['A']
```

> **注意：**虽然返回值是一个新的数组，但是当其元素为对象引用时，复制的是对象引用而非新的值。

``` js
let leon = {name: "leon"}
let mike = {name: "mike"}
let arrayA = [leon,mike]
let arrayB = arrayA.concat();
arrayB[1].name = 'jon';
console.log(mike.name) // => "jon"
```

但是可以通过 `Object.assign()` 来复制对象，常用来断开对象的引用而复制一个新的对象。

``` js
let leon = {name: "leon"}
let mike = {name: "mike"}
// 修改
let arrayA = [leon,Object.assign({},mike)]
let arrayB = arrayA.concat();
arrayB[1].name = 'jon';
console.log(mike.name) // => "mike"
```
