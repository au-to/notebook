keep-alive可以实现组件缓存，是Vue.js的一个内置组件

作用

*  它能够把不活动的组件实例缓存在内存中，而不是直接将其销毁
* 它是一个抽象组件，不会被渲染到真实DOM中，也不会出现在父组件链中

使用

* 常用的两个属性 include/exclude ，允许组件有条件的进行缓存
* 两个生命周期 activated/deactivated ，用来得知当前组件是否处于活跃状态
* keep-alive的中还运用了 LRU(Least Recently Used) 算法
* 可以运用于在列表和详情页之间频繁切换的场景

原理

* Vue 的缓存机制并不是直接存储 DOM 结构，而是将 DOM 节点抽象成了一个个 VNode节点，keep- alive的缓存也是基于VNode节点的，而不是直接存储DOM结构
* 将需要缓存的VNode节点保存在this.cache中，如果VNode的name符合缓存条件（可以用include以及exclude控制），则会从this.cache中取出之前缓存的VNode实例进行渲染