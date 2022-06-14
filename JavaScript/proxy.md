### **Proxy**

在目标对象前架设一个拦截层，外界对该对象的访问都必须通过这层拦截

提供了一种机制，可以对外界的访问进行过滤和改写

具体的说，可以给目标对象定义一个关联的代理对象，而这个代理对象可以作为抽象的目标对象来使用

### 创建空代理：除了作为一个抽象的目标对象外，无其它行为

Proxy接收两个参数：目标对象和处理程序对象

``` 
const target = {id: 'target'};
const handler = {}; //空代理
const proxy = new Proxy(target,handler); //创建proxy实例
// id属性会访问到同一个值
console.log(target.id) //target
console.log(proxy.id) //target
// 给目标属性赋值会反应在两个对象上，因为两个对象访问的是同一个值
target.id = 'foo';
console.log(target.id) //foo
console.log(proxy.id) //foo
```

### 定义捕获器

捕获器就是在处理程序对象中定义的“基本操作的拦截器”；每个捕获器都对应一种基本操作，每次在代理对象上调用这些基本操作时，代理可以在这些操作到达目标对象前先调用捕获器函数，从而拦截并修改相应的行为。

``` 
例如，定义一个get捕获器，在es操作以某种形式调用get时触发
cosnt target = {foo: 'bar'};
const handler = {
	get() {return handler override}
}
const proxy = new Proxy(target,handler)
```

这样，在通过代理对象执行get操作时，就会触发定义的get捕获器，即被get捕获器拦截。

### 捕获器参数

所有捕获器都可以访问相应的参数，基于这些参数可以重建被捕获方法的原始行为。

### Reflect

所有捕获器都可以基于自己的参数重建原始操作，可以通过调用全局Reflect对象上的同名方法来完成重建

``` 
const target = {foo: 'bar'};
const handler = {
	get(){
	  return Reflect.get(...arguments);
	}
};
const proxy = new Proxy(target,handler)
console.log(target.foo) //bar
console.log(proxy.foo) //bar
```

### 可撤销代理

用于中断代理对象和目标对象之间的联系——revokable()方法

撤销函数和代理对象在实例化时同时生成

``` 
const target = { foo: 'bar' };
const handler = {
    get() {
        return 'intercepted';
    }
}
const { proxy, revoke } = proxy.revokable(target, handler);
console.log(proxy.foo); //intercepted
console.log(target.foo); //bar
revoke();
console.log(proxy.foo); //TypeError
```

### 代理另一个代理

代理可以拦截反射API的操作，意味着完全可以创建一个代理，通过他去代理另一个代理，这样就可以在一个目标对象上构建多层拦截网。