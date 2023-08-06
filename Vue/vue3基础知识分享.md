# vue3基础知识分享

## 创建应用

## 模板语法

## 响应式基础

### 有状态方法

在某些情况下，我们可能需要动态地创建一个方法函数，比如创建一个预置防抖的事件处理器：

``` 
import { debounce } from 'lodash-es'

export default {
  methods: {
    // 使用 Lodash 的防抖函数
    click: debounce(function () {
      // ... 对点击的响应 ...
    }, 500)
  }
}
```

不过这种方法对于被重用的组件来说是有问题的，因为这个预置防抖的函数是 **有状态的**：它在运行时维护着一个内部状态。如果多个组件实例都共享这个预置防抖的函数，那么它们之间将会互相影响。

要保持每个组件实例的防抖函数都彼此独立，我们可以改为在 `created` 生命周期钩子中创建这个预置防抖的函数：

``` 
export default {
  created() {
    // 每个实例都有了自己的预置防抖的处理函数
    this.debouncedClick = _.debounce(this.click, 500)
  },
  unmounted() {
    // 最好是在组件卸载时
    // 清除掉防抖计时器
    this.debouncedClick.cancel()
  },
  methods: {
    click() {
      // ... 对点击的响应 ...
    }
  }
}
```

### 为什么会相互影响呢

按照第一种写法只会在模块加载时执行一次，等同于：

``` 
const click = debounce(function () {
    // 点击响应
}, 500)
export default {
    methods: {
        click,
    }
}
```

所以如果页面上有同时存在两个该组件，那么这两个组件的`click`是共享`debounce`内部的状态的.

``` 
function debounce(fn,delay=300) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    }
  }
```

由于`timer`是共享的，就会导致——当其中一个组件点击时，`debounce`包裹的回调会延迟执行，当在这期间你点击了另一个组件，那么就会清除前一个组件启动的`timer`,导致前一个点击回调失效，不过如果你的`delay`足够短，一般也是很难出现这种情况

## 计算属性

## 类与样式绑定

## 条件渲染

## 列表渲染

## 事件处理

### 表单输入绑定

## 生命周期

## 侦听器

## 模板引用

## 组件基础

