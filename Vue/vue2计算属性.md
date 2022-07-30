计算属性的基本用法

```
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
	}
// 当只需要get时的简写形式
computed: {
fullName() {
	return this.firstName + this.lastName;
	}
 }
```

