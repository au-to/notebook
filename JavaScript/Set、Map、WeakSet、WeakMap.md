### Set

* 成员不能重复
* 只有键名，没有键值
* 可以遍历，方法有：add，delete，has

### WeakSet

* 成员都是对象
* 弱引用，不计入垃圾回收机制，可以防止内存泄漏
* 不能遍历，方法：add，delete，has

### Map

* 本质是键值对的集合，可以是任意的数据类型
* 可以遍历，支持的方法很多

### WeakMap

* 键名只能是对象
* 键名指向的对象，不计入垃圾回收机制
* 不能遍历，方法：set，get，delete，has