## session

适合于服务端渲染的web开发模式

缺陷：需要配合cookie才能实现，而cookie默认不支持跨域访问；当涉及到前端跨域请求时，需要做额外的配置

#### session认证的过程

* 客户端向服务器发起请求
* 服务器将用户信息保存在服务器内存中，同时生成与之对应的cookie
* 服务器把生成的cookie响应给客户端
* 客户端把cookie保存在相应的域名下
* 客户端再次发起请求，携带保存的cookie
* 服务器验证cookie，找到对应的用户信息
* 服务器根据用户信息，响应相应的内容

### 在Express中使用session

``` 
// 配置 Session 中间件
const session = require('express-session')
app.use(
  session({
    secret: 'itheima',
    resave: false,
    saveUninitialized: true,
  })
)

// 存储用户信息到 Session 中
req.session.user = req.body // 用户的信息
req.session.islogin = true // 用户的登录状态

// 从session中获取用户信息

// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
  // TODO_03：请从 Session 中获取用户的名称，响应给客户端
  if (!req.session.islogin) {
    return res.send({ status: 1, msg: 'fail' })
  }
  res.send({
    status: 0,
    msg: 'success',
    username: req.session.user.username,
  })
})

// 清空session
req.session.destroy()
```







