---
title: every & some
date: 2017-05-28 22:37:30
cover: 'http://oaul0t4t1.bkt.clouddn.com/imgs/daily_pt_002.png'
tags: 
  - JS
  - Array
---

null

---
<br>
# Array.prototype.every()
---
> every() 方法测试数组的所有元素是否都通过了指定函数的测试。

## 语法
``` js
arr.every(callback[, thisArg])
```

## 参数
`callback` 用来测试每个元素的函数。

`thisArg` 执行 `callback` 时使用的 `this` 值。

## 返回值
测试结果，一个布尔值，如果全部值都通过了 `callback` 函数的测试将返回 `true` ,执行测试方法过程中一旦遇到未通过测试的值将立即返回 `false` 并中断测试，过程不破坏被测试数组。

## 事例
``` js
const array = [12,23,15,56,13];
console.log(array.every(val => val>10) ? 'pass' : 'not pass'); // => pass
```

<br>

# Array.prototype.some()
---
> some() 方法测试数组中的某些元素是否通过了指定函数的测试。

## 语法
``` js
arr.some(callback[, thisArg])
```

## 参数
`callback` 用来测试每个元素的函数。

`thisArg` 执行 `callback` 时使用的 `this` 值。

## 返回值
测试结果，一个布尔值，如果全部值都未通过了 `callback` 函数的测试将返回 `false` ,执行测试方法过程中一旦遇到通过测试的值将立即返回 `true` 并中断测试，过程不破坏被测试数组。

## 事例
``` js
const array = [12,23,15,56,13];
console.log(array.some(val => val>60) ? 'exist' : 'not exist'); // => not exist
```







