---
title: 学习vue过程当中的易错点
date: 2016-07-29 10:54:09
tags: 
  - vue
---

这里不写vue教程，只归纳一些在学习/使用vue时的一些易错点，教程请移步官方文档[教程](http://vuejs.org.cn/guide/)。

---

## data & computed
这个地方我认为在使用的时候经常会出错，类似Es6的`Let`&`Const`。

#### data
`data`用于存放vue实例属性，通常他们是“不变”的，只根据**view**的变化而变化，或者是主动的更新**model**。

```js
var vm = new Vue({
  data: {
    a: 1
  }
})
```
#### computed
`computed`用于存放计算属性，通常人们希望他们根据关联属性的变化而计算自身属性的值。

```js
var vm = new Vue({
  data: {
    a: 1
  },
  computed: {
    b: function() {
      return this.a + 2
    }
  }
})
```
#### computed的getter & setter
`getter`vue计算属性默认getter。

```js
// ...
// 等同于上面的用法
computed: {
  b: {
    // getter
    get: function () {
      return this.a + 2
    },
  }
}
// ...
```

`setter`必要时vue提供`setter`方法。

```js
// ...
computed: {
  b: {
    // getter
    get: function () {
      return this.a + 2
    },
    // setter
    set: function (newValue) {
      this.a = newValue - 2
    }
  }
}
// ...
```

## v-if & v-show

他们兄弟两个都是用于条件显示的。他们之间的区别就类似于css的`display: none ;`和`visibility: hidden;`对布局影响的区别。

`v-if`选择最终是否渲染进模板的Dom中，如果Value为false，那么内容将不会被渲染进Dom。

`v-show`会渲染进Dom但是选择是否显示，通过切换css的`display: `属性实现。

> **举个栗子~**

#### v-if
当一个页面出现权限问题时，你可能不希望页面上展示本不属于该用户权限下应该看到的内容。甚至是Dom都不应该出现，这时就应当使用`v-if`。

```html
<div id="app">
  <div class="tpl-admin" v-if="getPermissions">管理员可以看到</div>
  <div class="tpl-user" v-if="!getPermissions">用户可以看到</div>
</div>
```

```js
new Vue({
  el: '#app',
  methods: {
    getPermissions: function() {
      // 假设已经获取到相关用户信息 1:admin 0:user
      return this.user.userInfo == 1 ? true : false;
    }
  }
})
```

#### v-show
另一种情况是，有一个列表，用户可以对这些列表项进行删除，但是你不希望用户从中间开始删除，而是从最下面开始删除。这时应当使用`v-show`，因为其他列表项其实也是带有删除这个按钮的，只是他被隐藏起来了。

```html
<div id="app">
  <ul>
    <li v-for="item in list">
      <span>{{ item.text }}</span>
      <button v-show="showDelBtn($index)" v-on:click="removeItem">X</button>
    </li>
  </ul>
</div>
```


```js
new Vue({
  el: '#app',
  data: {
    list: [
      { text: 'item1' },
      { text: 'item2' },
      { text: 'item3' }
    ]
  },
  methods: {
    showDelBtn: function(index) {
      return this.lists.length == index + 1 && this.lists.length != 1 ? true : false;
    },
    removeItem: function() {
      this.list.pop();
    }
  }
})
```

#### v-if **VS** v-show

在切换 `v-if` 块时，Vue.js 有一个局部编译/卸载过程，因为 `v-if` 之中的模板也可能包括数据绑定或子组件。`v-if` 是真实的条件渲染，因为它会确保条件块在切换当中合适地销毁与重建条件块内的事件监听器和子组件。

`v-if` 也是惰性的：如果在初始渲染时条件为假，则什么也不做——在条件第一次变为真时才开始局部编译（编译会被缓存起来）。  

相比之下，`v-show` 简单得多——元素始终被编译并保留，只是简单地基于 CSS 切换。

一般来说，v-if 有更高的切换消耗而 `v-show` 有更高的初始渲染消耗。因此，如果需要频繁切换 `v-show` 较好，如果在运行时条件不大可能改变 `v-if` 较好。