**生命周期的this上下文指向调用它的vue实例**

### beforeCreate

### created

> 用来在一个实例被创建之后执行代码
>
> ``` 
> new Vue({
>   data: {
>     a: 1
>   },
>   created: function () {
>     // `this` 指向 vm 实例
>     console.log(this.a)
>   }
> })
> // 输出a
> ```

### beforeMount

### mounted

### beforeUpdate

### updated

### beforeDestroy

### destroyed



