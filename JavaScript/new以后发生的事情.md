### 使用new调用类的构造函数会发生

1. 在内存中创建一个新对象
2. 这个新对象的内部特性指针指向构造函数的prototype对象
3. 构造函数内部this指向新对象
4. 执行构造函数内部的代码
5. 如果构造函数返回非空的对象，则返回该对象，新建的对象作废；否则返回刚创建的新对象