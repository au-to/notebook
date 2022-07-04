## 	for in vs for of

### 相同点

- 都是对对象/数组进行遍历操作

### for in

- for in遍历数组索引
- for in适合遍历对象
- for in遍历的数组索引是字符串型，不能用于运算
- for in遍历数组顺序不定
- 使用for in会遍历数组所有的可枚举属性，包括原型

### for of

- for of遍历数组元素值
- for of遍历的是数组元素值，而且for of遍历的只是数组元素，不包括原型属性和索引
- for of适用遍历数/数组对象/字符串/map/set等拥有迭代器对象（iterator）的集合
- 不能遍历对象，因为没有迭代器对象，但如果想遍历对象属性，你可以用for in循环，或用内建的Object.keys()方法

