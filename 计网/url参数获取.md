方法1：split拆分

``` 
function getRequest(){
	const url = location.search; //获取?后面的字符串
	let res = {}; /以对象形式保存参数
	if(url.indexOf(?)!==-1) {
		let str = url.subString(1); //截取参数部分
		let strs = str.split('&'); //以&为分隔符获取参数数组
		for(let i=0;i<strs.length;i++) {
			res[strs[i].split('=')[0]] = strs[i].split('=')[1];
		}
	}
	return res;
}
```

方法2：

``` 
function getQuery(val) {
	var str = window.location.search.subdtring(1);
	var arr = str.split('&');
	for(let i=0;i<arr.length;i++){
		let vals = arr[i].split('=');
		if(vals[0]==val) {
		return vals[1];
		}
	}
	return 
}
```

