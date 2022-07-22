### watch监听

``` 
const vm = new Vue({
            el: '#app',
            data() {
                return {
                    isHot: true,
                    nums: {
                    a: 111,
                    b: 222
                    }
                }
            },
            // 普通的watch监听
            watch: {
                isHot: {
                	//初始化时让handler调用一下
                    immediate: true, 
                    // isHot发生改变时，调用handler
                    handler(newValue, oldValue) {
                        console.log('isHot被修改了');
                    }
                },
                // 深度监听
                // 监听单一特定属性
                "nums.a": {
                	handler() {
                	...
                	}
                }，
                // 监听所有属性
                nums：{
                deep: true,
                handler() {
                ...
                }
                }
            }
        })
        
        // 简写
        watch() {
        info() {
        ...
        }
       }
       
        // 其它写法
        vm.$watch('info', {
            immediate: true, //初始化时让handler调用一下
            // isHot发生改变时，调用handler
            handler(newValue, oldValue) {
                console.log('info被修改', newValue, oldValue);
            }
        })
```

