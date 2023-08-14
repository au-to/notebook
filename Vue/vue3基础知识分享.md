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
* reactive()
* ref()
* toRefs()
* watch()
* watchEffect()
* computed()
* 生命周期钩子

### setup(props, context)

* 组合API的入口，在组件实例创建之前执行，类比beforeCreate()
* props参数：用于接收父组件传来的props数据，默认是响应式的
* context上下文：有attrs、emit等属性；
* 关于setup的用法有两种：（推荐使用<script setup>语法）
