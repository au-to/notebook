### es6中有哪些新特新

1. #### 变量和作用域

   * let、const以及它们的块级作用域
   * 变量的解构赋值

2. #### 原生对象的方法扩展

   * String：支持字符串遍历、模板字符串、repeat()
   * RegExp：构造函数第一个参数是正则表达式，指定第二个参数不再报错
   * Number：二进制与八进制的新写法、parseInt()
   * Function：rest参数、箭头函数、严格模式、name属性
   * Array：扩展运算符...
   * Object：属性同名简写、Object.is()、Object.assign()、Object.entries()、Object.keys()、Object.values()
   * 新增Symbol类型

3. #### 新增Set和Map数据结构

   * Set：一种类似数组的数据结构，区别在于其存储的成员都是不重复的
   * WeakSet：成员只能是对象类型、对象都是弱引用、不可被遍历
   * Map：K-V的集合，其K可以取任意类型
   * WeakMap：只接受对象作为键名、键名所指向的对象不计入垃圾回收机制。

4. #### 新增代理Proxy和反射Reflect

   * Proxy：对目标对象加一层“拦截”，外界对目标对象的访问、修改都必须先通过这层拦截。因而可以通过它对外界的访问进行过滤和改写。
   * Reflect：与Proxy一样是ES6在语言层面用于操作对象提供的新API，目前它所拥有的对象方法与Proxy 对象对应

5. #### 异步Promise、Generator、Async

   * Promise：相当于一个容器，里面保存了未来会使用的结果，它是一个对象
   * Generator：是ES6提供的异步编程解决方案。对于Generator函数，可以将它理解为一个状态机，封装了多个内部状态；此外它还是一个遍历器生成函数，这个函数可以遍历出状态机的所有状态。
   * Async：Generator函数的语法糖，它进行了改进：1.自带执行器；2.返回值是Promise

6. #### class类

   * 基于原型实现

7. #### 模块module

   * import和export的导入导出方式
   * 编译时加载：编译时就能确定模块间的依赖关系

8. #### Iterator遍历器

   * 一种接口，为各种不同的数据结构提供统一的访问机制；任何数据结构只要部署了iterator接口，就能实现遍历操作

9. #### for of循环