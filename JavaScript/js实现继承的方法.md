### js继承的方法与优缺点

1. #### 原型链继承

   实现方式：将子类的原型链指向父类的对象实例；

   原理：子类实例child的内部指针指向Child的原型对象；而Child又作为Parent的实例，它的内部指针指向Parent的原型对象，所以Child可以继承父类的属性和方法。

   ``` 
   function Parent(){
   	this.name = 'parent';
   	this.list = ['a'];
   }
   Parent.prototype.sayHi = function() {
   	console.log('Hi');
   }
   function Child(){};
   Child.prototype = new Parent();
   var child = new Child();
   ```

   优点：可继承构造函数的属性，父类构造函数的属性，父类原型的属性

   缺点：无法向父类构造函数传参；且所有实例共享父类实例的属性，若父类共有属性为引用类型， 一个子类实例更改父类构造函数共有属性时会导致继承的共有属性发生变化，比如：

   ``` 
   var a = new Child();
   var b = new Child();
   a.list.push('b');
   console.log(b.list); // ['a','b']
   ```

2. ####  构造函数继承

   实现方式：在子类构造函数中使用call或者apply劫持父类构造函数方法，并传入参数

   原理：使用call或者apply更改子类函数的作用域，使this执行父类构造函数，子类因此可以继承父 类共有属性

   优点：可解决原型链继承的缺点 

   缺点：不可继承父类的原型链方法，构造函数不可复用

   ``` 
   function Parent(name,id) {
   	this.name = name;
   	this.id = id;
   	this.printName = function() {
   		console.log(this.name);
   	}
   };
   Parent.prototype.sayName = function() {
   	console.log(this.name);
   };
   function Child(name,id) {
   	Parent.call(this,name,id);
   }
   var child = new Child('zs',1);
   child.printName(); //zs
   child.sayName(); //Error
   ```

3. #### 组合继承

   原理：综合使用构造函数继承和原型链继承;

   优点：可继承父类原型上的属性，且可传参；每个新实例引入的构造函数是私有的 

   缺点：会执行两次父类的构造函数，消耗较大内存，子类的构造函数会代替原型上的那个父类构造函数

   ``` 
   function Parent(name, id){
   this.id = id;
   this.name = name;
   this.list = ['a'];
   this.printName = function(){
   console.log(this.name);
      }
   }
   Parent.prototype.sayName = function(){
   console.log(this.name);
   };
   function Child(name, id){
   Parent.call(this, name, id);
   // Parent.apply(this, arguments);
   }
   Child.prototype = new Parent();
   var child = new Child("jin", "1");
   child.printName(); // jin
   child.sayName() // jin
   var a = new Child();
   var b = new Child();
   a.list.push('b');
   console.log(b.list); // ['a']
   ```

4. #### 原型式继承

   原理：类似Object.create，用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象，结果是将子对象的 __proto__ 指向父对象

   缺点：共享引用类型

   ``` 
   function Parent() {
   	name: ['a'];
   }
   function copy(object) {
   	function F() {};
   	F.prototype = object;
   	return new F();
   }
   var child = copy(Parent);
   ```

5. #### 寄生式继承

   原理：二次封装原型式继承，并拓展

   优点：可添加新的属性和方法

   ``` 
   function createObject(obj) {
   var o = copy(obj);
   o.getNames = function() {
   console.log(this.names);
   return this.names;
     }
   return o;
   }
   ```

6. #### 寄生组合式继承

   原理：改进组合继承，利用寄生式继承的思想继承原型

   ``` 
   function inheritPrototype(subClass, superClass) {
   // 复制一份父类的原型
   var p = copy(superClass.prototype);
   // 修正构造函数
   p.constructor = subClass;
   // 设置子类原型
   subClass.prototype = p;
   }
   function Parent(name, id){
   this.id = id;
   this.name = name;
   this.list = ['a'];
   this.printName = function(){
   console.log(this.name);
   }
   }
   Parent.prototype.sayName = function(){
   console.log(this.name);
   };
   function Child(name, id){
   Parent.call(this, name, id);
   // Parent.apply(this, arguments);
   }
   inheritPrototype(Child, Parent);
   ```

   