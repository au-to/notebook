v-model的作用

* 在表单及元素上创建双向数据绑定
* 会根据控件类型自动选取正确的方法来更新元素
* 监听用户的输入事件以更新数据，并对一些极端场景做一些特殊处理
* 会忽略所有表单元素的value、checked、selected等特性的初始值；而将Vue实例的数据作为数据来源，因此应该在组件的data选项中声明初始值

扩展

* v-model在内部为不同的元素使用不同的属性，并抛出不同的事件
* text 和 textarea 元素使用 value 属性和 input 事件
* checkbox 和 radio 使用 checked 属性和 change 事件
* select 字段将 value 作为 prop 并将 change 作为事件

v-model实现原理

* 用v-bind给input的value属性动态绑定一个响应式数据，这样就实现了data向页面的单向数据流
* 给表单元素的oninput事件添加一个回调：$event.target.value动态获取输入的值赋值给data下的响应式数据就可以