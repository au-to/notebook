每个Vue实例在被创建的时候都要经过一系列的初始化过程，例如：需要设置数据监听、模板编译、将实例挂载到Dom并在实例变化时更新Dom等；同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。

注意：生命周期钩子的this上下文指向调用它的Vue实例

Vue的生命周期分为3个大的阶段：

* 创建阶段
* 更新阶段
* 销毁阶段

创建阶段包括： beforeCreate()、 created()、 beforeMount()、 mounted()；

更新阶段包括： beforeUpdate()、updated()

销毁阶段包括： beforeDestory()、 destoryed()

其它生命周期钩子：activated()、deactivated()

详细来说

* 开始创建、初始化数据、模板编译、挂载Dom、渲染→更新→渲染、销毁等一系列过程

**具体过程**

1. 实例化Vue组件对象：new Vue()

2. 初始化事件和生命周期

3. beforeCreate()
   * 在实例初始化之后，数据观测和事件配置之前被调用。即此时vue的组件实例被创建了，但是vue组件实例对象的属性还没有绑定；如data属性，computed属性，所以还没有数据和真实DOM； 即：属性还没有赋值，也没有动态创建template属性对应的HTML元素。

4. 挂载数据
   * 包括组件实例对象的属性和computed的运算

5. created()

   * 组件实例已经创建完成

   * vue组件实例对象上的属性有值了，但还没有生成真实的DOM，$el属性也还不存在。 即：data，computed都执行了，属性也已经赋值，但没有动态创建template属性对应的HTML元素，所以此时更改数据并不会触发updated函数；如果数据的初始值就来自于后端，可以发送ajax，或者fetch请求获取数据，但不会触发更新。

6. 检查
   * 检查是否有el属性：即检查new Vue({})里面的el项是否存在，有就继续检查template项，没有则等到手动绑定调用 vm.$mount()来完成全局变量$el的绑定
   * 检查是否有template属性：如果vue的实例对象中有 template属性，那么template后面的HTML会替换$el对应的内容。如果有render属性，那么render就会替换template。 即：优先关系是： render > template > el

7. beforeMount()
   * 模板编译、数据挂载之前执行的钩子函数；此时this.$el有值，但是数据还没有挂载到页面上；即此时页面中的{{}}里的变量还没有被数据替换

8. 模板编译：用vue对象data中的数据替换模板中的内容

9. mounted()
   * 模板编译完成，数据挂载完毕
   * 此时已经把数据挂载到了页面上，页面已经能够看到正确的数据了。 一般来说，我们在此处发送异步请求（ajax，fetch，axios等），获取服务器上的数据显示在DOM。

10. beforeUpdate()
    * 组件更新之前执行的函数，只有数据更新后才能触发beforeUpdate，注意：此数据一定是在模板上出现的数据，否则不会触发组件更新（因为数据不出现在模板里，就没有必要再次渲染）；同时，vue组件实例对应的dom中的innerHTML没有变，所以叫作组件更新前。

11. updated()
    * 组件更新之后执行的函数，vue的组件实例对象对应的dom中的内部（innerHTML）改变了，所以叫组件更新之后

12. activated()：keep-alive缓存的组件激活时调用

13. activated()：keep-alive缓存的组件停用时调用

14. beforeDestroy()：vue组件销毁之前调用

    1. destroyed()：vue组件实例销毁后调用
