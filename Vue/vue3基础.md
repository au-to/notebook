# Vue3基础



## 1. 新特性

* Composition API
* 响应式
* 生命周期
* 自定义Hooks
* Tree-Shaking
* Fregment
* Suspense
* Teleport
* ...

## 2. Composition API

* setup()
* ref()
* reactive()
* toRefs()
* watch()
* watchEffect()
* computed()
* 生命周期钩子
* ...

### setup(props, context)

* 组合API的入口，在组件实例创建之前执行，类比beforeCreate()
* props参数：用于接收父组件的props数据，默认是响应式的；不能直接对props进行解构，否则会丢失响应性
* context上下文：能拿到attrs、emit、slots、expose等属性
* 关于setup的用法有两种：（推荐使用<script setup>语法）
* <script setup>的优势：不用手动暴露数据和行为，可以在模板中直接使用

### ref()

* 可以定义任意类型的响应式数据
* 返回值为一个带有value属性的对象
* 通过劫持对象的访问和修改，即`getter()、setter()`实现响应式

### reactive()

* 通过Proxy，配合reflect实现响应式
* 只能用来定义对象类型的响应式数据
* 不需要通过`.value`访问，对象会自动解包
* 解构某个对象属性，会使其响应性丢失

### toRefs()

*  用于将一个 reactive 对象转化为属性全部为 ref 对象的普通对象
* 解决响应性丢失的问题

### watch(source, callback, [options])

* source：源数据
* callback：回调函数
* options：支持deep、immediate、flush等
* 支持手动停止监听

### watchEffect()

* 不需要手动传入source源数据
* watchEffect会自动执行一次，以收集依赖
* 只能拿到变化后的值

### computed()

* 调用computed()方法定义一个计算属性
* 计算属性的值会被缓存，依赖变化时会重新计算

### 生命周期

* `beforeCreate`===>`setup()`
* `created`=======>`setup()`
* `beforeMount` ===>`onBeforeMount`
* `mounted`=======>`onMounted`
* `beforeUpdate`===>`onBeforeUpdate`
* `updated` =======>`onUpdated`
* `beforeDestroy` ==>`onBeforeUnmount`
* `destroyed` =====>`onUnmounted`

### 其它组合API

* shallowRef()：ref的浅层作用形式，只对 `.value` 的访问是响应式的
* shallowReactive()：reactive的浅层作用形式

