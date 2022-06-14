## object.defineProperty

> ``` 
> <script>
> 	    let number = 10;
>         let person = {
>             name: 'zs',
>             sex: '男',
>         }
>         
>         Object.defineProperty(person,'age',{
>             value: 18,
>             enumerable: true,     //控制属性是否可以枚举
>             writable: true,       //控制属性是否可以被修改
>             configurable: true,   //控制属性是否可以被删除
>             
>             // 当读取person的age属性，get(getter)函数会被调用，返回age值
>             get() {
>             return number;
>             }
>             // 当有人修改了age属性，set(setter)函数就会被调用，且会收到修改的具体值
>             set(value) {
>             number = value;
>             }
>         })
> </script>
> ```