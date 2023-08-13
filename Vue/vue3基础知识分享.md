# vue3基础知识分享



## Vue3 VS Vue2

### 1.性能提升

- 打包大小减少41%

- 初次渲染快55%, 更新渲染快133%

- 内存减少54%

  ......

### 2.源码升级

- 使用Proxy代替Object.defineProperty实现响应式

- 重写虚拟DOM的实现和Tree-Shaking

  ......

### 3.拥抱TypeScript

- Vue3可以更好的支持TypeScript

### 4.新的特性

1. Composition API（组合API）

   - setup配置
   - ref与reactive
   - watch与watchEffect
   - provide与inject
   - ......
2. 新的内置组件
   - Fragment 
   - Teleport
   - Suspense
3. 其他改变

   - 新的生命周期钩子
   - data 选项应始终被声明为一个函数
   - 移除keyCode支持作为 v-on 的修饰符
   - ......

## 选项API  VS  组合API

* 选项API会导致实现某功能的逻辑代码分散在各个选项中，当代码量上升时，不易维护；现状：数据和行为分离
* 组合API使得逻辑代码更加集中，也便于逻辑复用；数据和行为一体

## 创建应用

## 模板语法

## 响应式基础

## 计算属性

## 类与样式绑定

## 条件渲染

## 列表渲染

## 事件处理

## 表单输入绑定

## 生命周期

## 侦听器

## 模板引用

## 组件基础

