---
title: New
date: 2017-11-13 11:09:47
cover: ''
tags: 
  - JS
---

new 到底是怎么一回事呢？不如一起来实现以下。

---

## Object
Object 的内部属性使用 [[Prototype]] 来表示对象的原型，在大多数的 js 内核的实现中使用 `__proto__` 属性，如 chrome。


## Function
Function 的 实例属性 `prototype` 的值用于初始化一个新创建对象的的 [[Prototype]] 内部属性，为了这个新创建对象要先将函数对象作为构造器调用。这个属性拥有特性 { [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false }。


## Constructor
构造器的 `prototype` 属性值是一个原型对象，它用来实现继承和共享属性。


## Prototype
当构造器创建一个对象，为了解决对象的属性引用，该对象会隐式引用构造器的 `prototype` 属性。通过程序表达式 `constructor.prototype` 可以引用到构造器的 `prototype` 属性，并且添加到对象原型里的属性，会通过继承与所有共享此原型的对象共享。另外，可使用 Object.create 内置函数，通过明确指定原型来创建一个新对象。


## New
产生式 NewExpression : new NewExpression 按照下面的过程执行 :

1. 令 ref 为解释执行 NewExpression 的结果 .
2. 令 constructor 为 GetValue(ref).
3. 如果 Type(constructor) is not Object ，抛出一个 TypeError 异常 .
4. 如果 constructor 没有实现 [[Construct]] 内置方法 ，抛出一个 TypeError 异常 .
5. 返回调用 constructor 的 [[Construct]] 内置方法的结果 , 传入按无参数传入参数列表 ( 就是一个空的参数列表 ).


产生式 MemberExpression : new MemberExpression Arguments 按照下面的过程执行 :

1. 令 ref 为解释执行 MemberExpression 的结果 .
2. 令 constructor 为 GetValue(ref).
3. 令 argList 为解释执行 Arguments 的结果 , 产生一个由参数值构成的内部列表类型 (11.2.4).
4. 如果 Type(constructor) is not Object ，抛出一个 TypeError 异常 .
5. 如果 constructor 没有实现 [[Construct]] 内置方法，抛出一个 TypeError 异常 .
6. 返回以 argList 为参数调用 constructor 的 [[Construct]] 内置方法的结果 .

__Note:__ `NewExpression` 为对象创建表达式，`MemberExpression` 为成员表达式，`GetValue` 为引用规范类型获取具体值的方法，参看 ES 规范 __ 左值表达式__ 部分和 __引用规范类型__ 部分。

细心会发现，依据不同的产生式，步骤有一些差别。其实这个差别看起来就像是 `new Object` 和 `new Object(...argList)` 的差别，如果 `argList` 为空应该是无差别的。前面是构造器，其实就构造函数而言还有一种差别是 `Date()` 和 `new Date()` 的差别，可以通过在构造器内部使用 `instanceof` 操作符来进行安全类型检测，不多写。

根据规范原理描述，我们大致可以以下步骤作为简单的实现：

1. 创建一个空对象
2. 绑定原型
3. 以 `argList` 为入参执行构造函数，函数 this 指向新的对象
4. 返回该对象

简单书写一下：

``` js
const _new = function (constructor, ...argList) {
  let _object = new Object()
  _object.__proto__ = constructor.prototype
  constructor.call(_object, ...argList)
  return _object
}
```

``` js
let v = function (val) {
  this.base = val2
}

v.prototype.getValue = function () {
  return this.base
}

// NewExpression : new NewExpression
const _v = _new(v)
// MemberExpression : new MemberExpression Arguments
const _vv = _new(v, 3)

_v instanceof v // => true
_vv instanceof v // => true
```

:完