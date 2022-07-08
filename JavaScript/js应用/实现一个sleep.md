方法1： for循环

``` 
function sleep(time) {
	var start = new Date();
	for(;new Date()-start<sleep;)
}
```

方法2：Promise

``` 
function sleep(time) {
	return new Promise(resolve => setTimeOut(resolve,time));
}
const t1 = new Date();
sleep(3000).then(()=>{
	const t2 = new Date();
	console(t2-t1)
})
```

