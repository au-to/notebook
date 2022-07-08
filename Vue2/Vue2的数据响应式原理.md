Vue2实现数据响应式的原理

* 数据劫持结合发布订阅模式
* 使用Object.defineProperty()来劫持各个属性的getter和setter

缺陷

* Vue实例创建后，无法检测到对象属性的新增和删除，只能追踪到数据是否被修改。当创建一个Vue实例时，将遍历所有的DOM对象，并为每个对象添加get和set。get和set 允许Vue观察数据的更改并触发更新。但是，如果你在Vue实例化后添加（或删除）一个属性，这个属性不会被vue处理
* 不能监听数组的变化，因为Object.defineProperty()只能劫持对象属性；而数组的响应式是重写了数组原型对象上的方法，这也只限制在数组的push/pop/shift/unshift/splice/sort/reverse七个方法