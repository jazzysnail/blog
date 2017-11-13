---
title: map & reduce
date: 2017-05-29 21:08:25
cover: 'http://oaul0t4t1.bkt.clouddn.com/imgs/weekly_pt_3.png'
tags: 
  - JS
  - Array
---

null

---
<br>
# Array.prototype.map()
---
> map() 方法创建一个新数组，其结果是该数组中的每个元素调用一个提供的函数。

意如其名，就是一个数组到另一个数组的映射。

## 语法
``` js
const new_array = arr.map(callback[, thisArg])
```

## 参数
- `callback`生成新数组元素的函数，使用三个参数：
  - `currentValue` callback 的第一个参数，数组中正在处理的当前元素。
  - `index` callback 的第二个参数，数组中正在处理的当前元素的索引。
  - `array` callback 的第三个参数，map 方法被调用的数组。
- `thisArg`
可选的。执行 callback 函数时使用的 this 值。

## 返回值
一个新数组，每个元素都是回调函数的结果。同样的，过程不破坏原数组。

## 事例
计算绝对值（使用 **声明式** 替代 **命令式** ）：
``` js
// 使用 Array.prototype.map() 替代 forEach
// 到绝对值的映射
const semeNumbers = [1,-2,3,-4];
// 声明式
const absNumbers = semeNumbers.map(Math.abs);
// 命令式
let absNumbers = [];
semeNumbers.forEach(val => {
  sqrtNumbers.push(Math.abs(val));
});
```

<br>
# Array.prototype.reduce()
---
> reduce() 方法对累加器和数组中的每个元素 (从左到右)应用一个函数，将其减少为单个值。

反转累器加起点使用 `Array.prototype.reduceRight()` (从右到左)。

## 语法
``` js
arr.reduce(callback,[initialValue])
```

## 参数
- `callback执行数组中每个值的函数，包含四个参数`
  - `accumulator` 上一次调用回调返回的值，或者是提供的初始值（initialValue）
  - `currentValue` 数组中正在处理的元素
  - `currentIndex` 数据中正在处理的元素索引，如果提供了 initialValue ，从0开始；否则从1开始
  - `array` 调用 reduce 的数组
- `initialValue` 可选项，其值用于第一次调用 callback 的第一个参数。

## 返回值
累加所求得的结果。同样的，过程不破坏原数组。

## 事例
简单的相加：
``` js
const total = [0, 1, 2, 3].reduce((acc, cur) => acc + cur, 0);
// total is 6
```
数组扁平化：
``` js
const flattened = [[0,1], [2,3], [4,5]].reduce((acc, cur) => acc.concat(cur), []);
// flattened is [0, 1, 2, 3, 4, 5]
```
计算数组中各个值出现次数（使用 **声明式** 替代 **命令式** ）：
``` js
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce(function(allNames, name) {
  allNames[name] = name in allNames
  ? allNames[name] + 1
  : 1;
  return allNames;
}, {});
// countedNames is { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```
<br>
# 题外话
---
本篇有提到两个有趣的例子，一个是求绝对值，一个是计算数组中元素出现次数的例子。下面我们来分析一下，这两个例子。

关于 **声明式代码** ,首先要问为什么。我们一直在利用编程来告诉计算机要怎么做，这看起来似乎很合理。但是仔细想一想，我们其实是想通过计算机来得到我们想要的结果。

回看求绝对值的例子，命令式的代码反映出的程序思想是，告诉计算机你应该利用循环来遍历数组将每一个元素取绝对值然后放进一个事先声明的变量数组，以此来得到一个包含原数组所有元素求绝对值后的新的数组。

而使用数组的 **高阶函数** `map()` 则反映出我们只是想要得到一个关于绝对值映射的新数组而已。

仔细观察发现我将所有可以使用 `const` 的地方均使用 `const` 替代了 `let` 或者 `var`。原因是我想突出，声明而非命令。甚至我还吹毛求疵的将 `if` 语句使用三目运算符进行了替换。

原因在于 `if` 更倾向于判断或者是运算分支，而我们实际上想做的事情是操作某对象的键值而已。这样一来编程将更倾向于自然目的，而非告诉计算机该怎么做。



