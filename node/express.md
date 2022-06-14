## **express**

* 提供了快速创建web服务器的便捷方法
* web服务器包括web网站服务器和api接口服务器

##### 创建服务器

``` 
// 创建服务器
const express = require('express');
const app = express();
app.listen('443',()=>{
    console.log('server running at http://127.0.0.1:443');
})
```

##### 监听与响应客户端请求

``` 
// 监听客户端get请求
app.get('请求url',(req,res)=>{})

// 响应客户端请求
app.get('url',(req,res)=>{
	res.send('响应内容')
})
```

##### 获取url中的query参数(/?name=''&age='')

``` 
app.get('/',(req,res)=>{
    let query = req.query;
})
```

##### 获取url中的动态params参数(/:id/:name)

``` 
app.get('/user/:id/:name',(req,res)=>{
    let params = req.params;
})
```

##### 托管静态资源

``` 
app.use(express.static('文件路径'));
// 挂载路径前缀
app.use('/public',express.static('public'))
```

##### nodemon

* 监听文件变动，代码被修改后，自动重启项目

##### Express路由

* 客户端请求与服务端处理函数之间的映射关系

* 由三部分组成：请求类型，请求url地址，处理函数
* 客户端请求到达服务器，先进行路由匹配，成功则调用相应的处理函数

##### 模块化路由

``` 
// 导入express
const express = require('express');
// 创建路由对象
const router = express.Router();
// 挂载具体路由
router.get('/', (req, res) => {
    res.send('get请求成功');
})
router.post('/', (req, res) => {
    res.send('post请求成功');
})
// 向外导出路由对象
module.exports = router;
```

``` 
// 在另一个文件中导入、注册路由模块
const router = require('./router.js');
app.use(router);
// 添加访问前缀
app.use('/api',router)
```

##### Express中间件

* 业务流程的中间处理环节

* 当一个请求到达Express服务器之后，可以连续调用多个中间件，从而对这次请求进行预处理
* 中间件函数的形参列表中，必须包含next参数
* next函数是实现多个中间件连续调用的关键

##### 全局生效的中间件

* 客户端发起的任何请求，到达服务端后，都会触发的中间件叫全局生效的中间件

``` 
app.use((req,res,next)=>{
	// 全局生效的中间件
	next();
})
```

##### 中间件的作用

* 多个中间件之间，共享同一个req和res，因此可以在上游中间件统一为下游中间件的req和res添加相应的属性和方法，供下游中间件使用

##### 局部生效的中间件

- 中间件只在当前路由中生效
- 局部生效中间件不使用use创建

``` 
const mw1 = function (req, res, next) {
    // 局部生效的中间件
    next();
}
const mw2 = function (req, res, next) {
    // 局部生效的中间件
    next();
}
app.get('/', mw1, mw2, (req, res) => { })
```

##### 中间件注意事项

* 在路由之前注册中间件
* 客户端请求可以连续调用多个中间件
* 需要调用next()函数

##### 中间件的分类

* 应用级中间件

* 路由级中间件

* 错误级中间件

  ``` 
  // 注册错误级别中间件，捕获项目异常
  app.use((err, req, res, next) => {
      console.log(err.message);
      res.send(err.message);
  })
  ```

* express内置中间件

  ``` 
  express.use(express.static());
  express.use(express.json());
  express.use(express.urlencoded({extented:false}));
  ```

* 第三方中间件

  ``` 
  body-parser //解析请求体数据
  ```