**store是怎么注册的? mutation，commit 是怎么实现的? 辅助函数是怎么实现的?**

1. store是怎么注册的
   * Vuex在vue 的生命周期中的初始化钩子前插入一段 Vuex 初始化代码，给 Vue 的实例注入一个$store属性，这也是我们可以在Vue的组件中通过this.$store.xxx的形式访问到Vuex的各种数据和状态的原因
2.  mutations，commit 是怎么实现的
3. 辅助函数