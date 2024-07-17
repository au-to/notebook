### apply

> apply方法调用一个具有给定this值的函数，以及以一个数组（类数组对象）形式提供的参数；
>
> ``` 
> func.apply(thisArg,[argsArray]);
> ```
>
> thisArg:
> 必选的。在 func 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象
> argsArray:
> 可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。
>
> ``` 
> const numbers = [1,2,4,5];
> const max = Math.max.apply(null,numbers);
> console.log(max);  //5
> ```

### call

> call() 方法使用一个指定的 `this` 值和单独给出的一个或多个参数来调用一个函数。
>
> ```
> function.call(thisArg, arg1, arg2, ...)
> ```
>
> thisArg:
>
> 可选的。在 *`function`* 函数运行时使用的 `this` 值。请注意，`this`可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 `null` 或 `undefined` 时会自动替换为指向全局对象
>
> 用call()实现继承：
>
> ``` 
> function person(name,age) {
> 	this.name = name;
> 	this.age = age;
> }
> function Son(name,age) {
> 	person.call(this,name,age);
> }
> ```
>
> 

### 相同点

> call()和aplly()都是用来调用一个函数
>
> 可以给call和apply指定一个this，通过它来改变函数内部的this值
>
> 都可以给这俩方法添加参数

### 区别

> apply方法接收一个包含多个参数的数组，call方法接收一个参数列表

### 补充：bind()

> bind()方法不会调用函数，但是能改变函数内部this指向
>
> 返回由指定的this值和初始化参数改造的原函数拷贝
>
> 如果有的函数我们不需要立即调用，但是又需要改变这个函数的this指向，此时用bind再合适不过了

### 主要应用场景：

1. call 经常做继承。 
2. apply 经常跟数组有关系，比如借助于数学对象实现数组最大值最小值。 
3. bind 不调用函数，但是还想改变this指向，比如改变定时器内部的this指向。

