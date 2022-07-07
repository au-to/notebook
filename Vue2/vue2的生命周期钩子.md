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
