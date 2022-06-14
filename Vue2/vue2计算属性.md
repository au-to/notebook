### 计算属性的基本用法

```
<div id="app">
      姓:<input type="text" v-model="firstName"><br>
      名:<input type="text" v-model="lastName"><br>
      全名:<span>{{fullName}}</span>
</div>
<script>
	const vm = new Vue({
            el: '#app',
            data() {
                return {
                    firstName: '张',
                    lastName: '三'
                }
            },
            // 计算属性
            computed: {
                fullName: {
                    // 查询fullName时
                    get() {
                        return this.firstName + this.lastName;
                    },
                    // 修改fullName时：value就是改后的值
                    set(value) {
                        const arr = value.split('-');
                        this.firstName = arr[0];
                        this.lastName = arr[1];
                    }
                }
            },
        })
</script>
// 当只需要get时的简写形式
<script>
	computed: {
	fullName() {
	 return this.firstName + this.lastName;
	}
  }
</script>
```

