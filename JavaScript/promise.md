**promise**

所谓promise，简单来说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果；

从语法上讲，promise是一个对象；

**promise的特点**

* 有3种状态：Pending（进行中）、Fulfilled（已成功）、Rejected（已失败）
* 只有异步操作的结果可以决定当前是哪一种状态
* 状态一旦改变就不会再变，任何时候都可以得到状态结果
* 状态变化：Pending——Fulfilled，Pending——Rejected
* promise一旦创建就会立即执行

**基本用法**

* promise接受一个函数作为参数，而该函数又有两个参数：resolve和reject，它们是两个函数
* resolve：将promise的状态从Pending变为Resolved；在异步操作成功时调用；并将异步操作的结果作为参数传递出去
* reject：将promise的状态从Pending变为Rejected；在异步操作失败时调用；并将异步操作报出的错误作为参数传递出去
* 可以通过then方法分别指定Resolved状态和Rejected状态的回调：then(resolved,rejected)，这两个函数都接受promise对象传出的值作为参数

**Promise.prototype.then()**

* 为promise的实例添加状态改变时的回调
* then方法返回的是一个新的promise实例，因此可以采用链式写法

**Promise.prototype.catch()**

* 用于指定发生错误时的回调函数
* promise的对象具有冒泡性质，会一直向后传递，直到被捕获为止

**Promise.all()**

* 用于将多个promise实例包装成一个新的promise实例
* var p = new Promise([p1,p2,p3])，p的状态由p1，p2，p3决定，分为两种情况：
  1. 只有p1,p2,p3的状态都变为Fulfilled，p的状态才会变成Fulfilled；此时p1,p2,p3的返回值构成一个数组，传递给p的回调函数
  2. 只要p1,p2,p3有一个被Rejected，p的状态就变为Rejected，此时第一个被Rejected的实例的返回值会传递给p的回调函数
* 如果参数的promise实例自身定义了catch方法，那么它被Rejected时不会触发promise.all()的catch方法

**Promise.race()**

* 同样是将多个promise实例包装成一个promise实例
* 只要p1,p2,p3中的一个实例率先改变，p的状态就会跟着改变

**Promise.resolve()**

* 将现有对象转为promise对象
* 如果promise.reslove()参数是一个promise实例，那么不做修改，原封不动的返回实例
* 参数是一个thenable对象：先转换为promise实例，再立即执行thenable对象的then方法
* 参数对象不具有then方法或根本不是对象：返回一个新的promise对象，状态为Rejected
* 不带任何参数：直接返回一个Resolved状态的promise对象

**Promise.reject()**

* 返回一个状态为Rejected的promise实例
* promise.reject()的参数会原封不动的作为reject的理由，变成后续方法的参数

**两个有用的附加方法**

1. **done()**
   * 总是处于回调链的尾端，保证捕获任何可能出现的错误，并向全局抛出
2. **finally()**
   * 用于指定不管最后状态如何都会执行的操作
   * 接收一个普通的回调函数作为参数，该函数不管怎样都会执行

**promise实现文件的读取**

``` 
const fs = require('fs');
const path = require('path');
function getFilePath(p){
	return new Promise((resolve,reject)=>{
		fs.readFile(path.join(__dirname,p),(err,data)=>{
			if(err) {
				reject(err);
			} else{
				resolve(data)
			}
		})
	})
}
getFilePath('./files/1.txt').then(
	(data)=>{
		console.log(data);
	},(err)=>{
		console.log(err);
	}
)
```

**用promise实现sleep**

``` 
function sleep(time){
	return new Promise((resolve)=>{
		setTimeOut(resolve,time);
	})
}
const t1 = new Date();
sleep(3000).then(()=>{
	const t2 = new Date();
	log(t2-t1);
})
```

