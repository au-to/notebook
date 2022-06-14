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

### 区别

> call方法接收一个参数列表，apply方法接收一个包含多个参数的数组

