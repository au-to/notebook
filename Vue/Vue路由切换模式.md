vue-router控制路由切换主要有hash模式和history模式，默认使用hash模式；

 **hash路由**

* hash模式的工作原理是hashchange事件，可以监听hash的变化
* 我们在url后面随便添加一个#xx触发这个事件
* vue-router默认的是hash模式，当URL改变的时候,页面不会重新加载
* hash模式会创建hashHistory对象,在访问不同的路由时,会发生两件事: 
  * HashHistory.push()将新的路由添加到浏览器访问的历史的栈顶,
  * HasHistory.replace()替换到当前栈顶的路由

**history路由**

* 主要使用H5的history对象的pushState()和replaceState()这两个api结合window.popstate()事件（监听浏览器前进后退）实现
* popstate事件只会在浏览器的某些行为下触发，比如点击后退按钮，即在同一文档下的两个历史记录间导航时触发
* pushState()可以改变url地址且不会发送请求
* replaceState()会替换掉当前历史记录栈中的栈顶元素

区别

* hash模式较丑，history模式较优雅
* history模式中pushState设置的新URL可以是与当前URL同源的任意URL；而hash只可修改#后面的部分，故只可设置与当前同文档的URL
* pushState设置的新URL可以与当前URL一模一样，这样也会把记录添加到栈中；而hash设置的新值必须与原来不一样才会触发记录添加到栈中
* pushState通过stateObject可以添加任意类型的数据到记录中；而hash只可添加短字符串
*  pushState可额外设置title属性供后续使用
* hash兼容IE8以上，history兼容IE10以上
* history模式需要后端配合将所有访问都指向index.html，否则用户刷新页面，会导致404错误