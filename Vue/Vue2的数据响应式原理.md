Vue2的数据响应式原理

* 基于发布订阅模式的依赖追踪：在组件渲染时，跟踪并记录哪些属性被访问；当数据变化时，通知所有依赖该数据的观察者进行更新
* 基于getter、setter的数据劫持：使用`Object.defineProperty`对数据对象的属性进行拦截

缺陷

* Vue实例创建后，无法检测到对象属性的新增和删除，只能追踪到数据是否被修改
* 当创建一个Vue实例时，将遍历所有的data对象，并为每个对象添加get和set
* 如果你在Vue实例化后添加（或删除）一个属性，这个属性不会被vue处理
* 不能监听数组的变化，因为Object.defineProperty()只能劫持对象属性
* 数组的响应式是重写了数组原型对象上的方法，也只限于数组的push/pop/shift/unshift/splice/sort/reverse七个方法