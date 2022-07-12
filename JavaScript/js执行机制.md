**关于js**：

- js是一门单线程的脚本语言，任何的异步行为都是使用同步方法模拟的
- 广义的任务分为同步任务与异步任务
- 同步和异步任务最后都会到主线程中执行
- 不同类型的任务在真正被执行前会进入不同的任务队列

**事件循环**

1. 所有任务都在主线程上执行，形成一个执行栈
2. 在主线程之外还存在一个任务队列,系统把异步任务放到任务队列中，然后主线程继续执行后续的任务
3. 一旦执行栈中所有的任务执行完毕，系统就会读取任务队列。如果这时异步任务已结束等待状态， 就会从任务队列进入执行栈，恢复执行
4. 重复上面的3步

**宏任务和微任务**

- 根据任务队列中任务的不同，划分为宏任务和微任务
- 事件循环由宏任务和执行宏任务期间产生的微任务组成
- 主线程在执行完本次宏任务后，会立即执行入队的微任务
- 在下一轮事件循环中，再从宏任务开始，相当于给了微任务一次插队的机会
- 常见的宏任务有：script、setTimeOut、setInterval、setImmediate、I/O
- 常见的微任务有：process.nextTick、Promise、Object.observe、MutationObserver

示例：

``` 
setTimeout(function() {
    console.log(1);
})
new Promise(function(resolve) {
    console.log(2);
}).then(function() {
    console.log(3);
})
console.log(4);
// 输出结果；2—4-3-1
```

执行过程：

* 这段代码作为宏任务，进入主线程
* 先遇到`setTimeout`，将其回调函数注册后分发到宏任务Event Queue
* 接下来遇到了`Promise`，`new Promise`立即执行，`then`函数分发到微任务Event Queue
* 遇到`console.log()`，立即执行
* 整体代码script作为第一个宏任务执行结束
* 接着执行微任务：then
* 第一轮事件循环结束
* 开始第二轮循环，从宏任务Event Queue开始。1发现宏任务Event Queue中`setTimeout`对应的回调函数，立即执行
* 结束



