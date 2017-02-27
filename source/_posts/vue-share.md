---
title: 【分享】vue
date: 2016-08-25 18:00:58
tags: vue
---

在公司做的一个关于vue的技术小分享，分享内容不多，拿来填一点文字当一篇博文了吧，懒癌晚期，哈哈~
不过里面有关于“深度响应式”的深入研究，有源码可以看~

<!-- more -->

## 什么是vue？(定义)

**数据驱动** 的 **组件系统** ~

![](http://vuejs.org.cn/images/mvvm.png)

## 为什么?(好处)

1. 组件化
1. mvvm
1. 轻量化

## 深度响应式原理

[Reactivity in Depth - vue.js](https://vuejs.org/guide/reactivity.html)

![](https://vuejs.org/images/data.png)

### 代码实例
以下是我连抄带查写出来的模拟vue的双向绑定的js源码，分享给大家看一哈，以下代码模拟了vue的变量填充和input的双向绑定。不想看代码可以直接拉到下面看效果或下载源码~ :-)

**html:**
``` html
<div id="biu">
 <span>{{msg}}</span>
 <span>{{say}}</span><br>
 <input type="text" v-model="msg">
 <input type="text" v-model="say">
</div>
```
**javascript:**
```js
var bindingMark = 'data-element-binding';

function biu(el, initData) {
  var self = this;

  var el = self.el = document.getElementById(el);

  var bindings = {}; // 内部暂存绑定数据及dom

  var data = self.data = {}; // 由外部传入的data对象
  // 构造挂载点
  console.info("构造挂载钩子");
  // 挂载变量
  var content = el.innerHTML.replace(/\{\{(.*)\}\}/g, markToken);
  // 挂载表单
  content = content.replace(/v-model=\"(.*)\"/g, markTokenVmodel);
  // 填充模板
  el.innerHTML = content;
  // 将每个数据的名称比如'msg'绑定到data
  for (var variable in bindings) {
    bind(variable);
  }
  // 遍历传入的对象映射到data
  if (initData) {
    for (var variable in initData) {
      data[variable] = initData[variable]
    }
    keyup(Object.keys(initData));
  }
  /*
  * string.property.replace 的函数参数
  * @param {string} match ($&)
  * @param {string} variable ((.*))
  * @return {string} markTokenString
  */
  function markToken(match, variable) {
    bindings[variable] = {}
    return '<span ' + bindingMark + '="' + variable + '"></span>'
  }

  function markTokenVmodel(match, variable) {
    bindings[variable] = {}
    return 'id="' + variable + '"' + bindingMark + '="' + variable + '"'
  }
  /*
  * 表单事件
  * @param {array} id
  */
  function keyup (id) {
    id.forEach(function (ids,index,array) {
      document.getElementById(ids).onkeyup = function () {
        app.data[ids] = this.value;
      };
    });
  }

  /* binding
  * @param {string} variable (data.property)
  */
  function bind(variable) {
    // 选中挂载点 {nodeObj} bindings.variable.els
    console.info("选中挂载点");
    bindings[variable].els = el.querySelectorAll('[' + bindingMark + '="' + variable + '"]');
    console.info("删除挂载钩子");
    // Array.prototype.forEach.call(...);为了使用forEach
    [].forEach.call(bindings[variable].els, function(e) { //删除data-element-binding属性
      e.removeAttribute(bindingMark);
    })
    // 创建观察者
    console.info("创建观察者");
    Object.defineProperty(data, variable, { //es5观察属性
      set: function(newVal) {
        [].forEach.call(bindings[variable].els, function(e) {
          bindings[variable].value = e.value = newVal;
          bindings[variable].value = e.textContent = newVal;
        })
      },
      get: function() {
        return bindings[variable].value //取数据仅仅是内部暂存的数据
      }
    })
  }
}

  var app = new biu('biu', {
    msg: 'hello',
    say: 'world!'
  })
```
<div class="tip">
  下面是以上代码的演示：你可以使用`F12`打开控制台更改`app.data.msg`和`app.data.say`的值来查看变化，或在输入框输入内容，后在控制台输出`app.data.msg`和`app.data.say`的值来查看变化，或 <a href="http://oaul0t4t1.bkt.clouddn.com/file/vue-binding-demo.html">下载源码</a>
</div>

<pre>
  <div id="biu">
    <span>\{\{msg\}\}</span>
    <span>\{\{say\}\}</span><br>
    <input type="text" v-model="msg">
    <input type="text" v-model="say"><br>
  </div>
</pre>

<script>
  var bindingMark = 'data-element-binding';
  function biu(el, initData) {
    var self = this;

    var el = self.el = document.getElementById(el);

    var bindings = {}; // 内部暂存绑定数据及dom

    var data = self.data = {}; // 由外部传入的data对象
    // 构造挂载点
    console.info("构造挂载钩子");
    // 挂载变量
    var content = el.innerHTML.replace(/\\{\\{(.*)\\}\\}/g, markToken);
    // console.log(content);
    // 挂载表单
    content = content.replace(/v-model=\"(.*)\"/g, markTokenVmodel);
    // 填充模板
    el.innerHTML = content;
    // 将每个数据的名称比如'msg'绑定到data
    for (var variable in bindings) {
      bind(variable);
    }
    // 遍历传入的对象映射到data
    if (initData) {
      for (var variable in initData) {
        data[variable] = initData[variable]
      }
      keyup(Object.keys(initData));
    }
    /*
    * string.property.replace 的函数参数
    * @param {string} match ($&)
    * @param {string} variable ((.*))
    * @return {string} markTokenString
    */
    function markToken(match, variable) {
      bindings[variable] = {}
      return '<span ' + bindingMark + '="' + variable + '"></span>'
    }

    function markTokenVmodel(match, variable) {
      bindings[variable] = {}
      return 'id="' + variable + '"' + bindingMark + '="' + variable + '"'
    }
    /*
    * 表单事件
    * @param {array} id
    */
    function keyup (id) {
      id.forEach(function (ids,index,array) {
        document.getElementById(ids).onkeyup = function () {
          app.data[ids] = this.value;
        };
      });
    }

    /* binding
    * @param {string} variable (data.property)
    */
    function bind(variable) {
      // 选中挂载点 {nodeObj} bindings.variable.els
      console.info("选中挂载点");
      bindings[variable].els = el.querySelectorAll('[' + bindingMark + '="' + variable + '"]');
      console.info("删除挂载钩子");
      // Array.prototype.forEach.call(...);为了使用forEach
      [].forEach.call(bindings[variable].els, function(e) { //删除data-element-binding属性
        e.removeAttribute(bindingMark);
      })
      // 创建观察者
      console.info("创建观察者");
      Object.defineProperty(data, variable, { //es5观察属性
        set: function(newVal) {
          [].forEach.call(bindings[variable].els, function(e) {
            bindings[variable].value = e.value = newVal;
            bindings[variable].value = e.textContent = newVal;
          })
        },
        get: function() {
          return bindings[variable].value //取数据仅仅是内部暂存的数据
        }
      })
    }
  }

  var app = new biu('biu', {
    msg: 'hello',
    say: 'world!'
  })
</script>


## 组件系统

![](http://vuejs.org/images/components.png)

[Facebook - 典型的单页多模块](https://www.facebook.com/)

### 代码实例
``` html
<div id="example">
  <my-component></my-component>
</div>
```
```js
// 定义
var MyComponent = Vue.extend({
  template: '<div>hello danlu!</div>'
})

// 注册
Vue.component('my-component', MyComponent)

// 创建根实例
new Vue({
  el: '#example'
})
```
**输出：**
```html
<div id="example">
  <div>hello danlu!</div>
</div>
```
### 模块化&单文件组件(Webpack)
在使用vue构建大型应用时，可以使用vue + Webpack来构建工程，使用Webpack来进行文件打包，这样我们可以将稳定的单页拆分成多个组件，并且可以以单个文件的形式来将模块样式和模板以及业务封装在一起。当然这需要<a href="https://github.com/vuejs/vue-loader"> vue-loader </a>的帮助。
```html
<!-- 单文件组件 -->
<style lang="less">
  /*这里是样式*/
</style>

<template>
  <!-- 这里是模板 -->
</template>

<script>
  // 这里是脚本
</script>
```
## 生命周期钩子

有时我们需要在vue构建页面的一些阶段来执行一些代码或者请求一个接口，而不是等待页面构建完成后由用户行为触发，这时我们需要使用到vue的生**命周期钩子**，他可以帮助我们在，不同的阶段自动的执行一些特定的代码。如下图：

[查看官方的介绍](http://vuejs.org.cn/api/#)

![](http://vuejs.org.cn/images/lifecycle.png)

```js
// 使用
var vm = new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
// -> "a is: 1"
```

## 拓展阅读

[vue.js](http://vuejs.org)

[webpack module bundler](http://webpack.github.io)

[vuejs/vue-loader](https://github.com/vuejs/vue-loader)