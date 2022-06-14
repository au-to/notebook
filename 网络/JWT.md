## JWT（跨域认证）

适合于前后端分离的web开发模式，适合有跨域请求时

#### JWT的组成

JWT通常由三部分组成，分别是Header头部，Payload有效负载，Signature签名

* Payload才是真正的用户信息，是用户信息经过加密之后生成的字符串
* Header和Signature是安全性相关的部分，只是为了保证Token的安全性

``` 
Header.Payload.Signature
```

#### JWT的工作原理

* 客户端登录，提交账号密码等信息
* 服务器将用户的信息对象加密后生成Token字符串，并响应给客户端
* 客户端将收到的Token存储在本地存储或会话存储中
* 客户端再次发起请求，通过Authorization字段，将Token发送给服务器
* 服务器把Token字段还原成用户的信息对象
* 用户的身份认证成功，服务器争对当前用户生成对应的响应内容
* 服务器响应，将用户对应的页面相应给浏览器

#### JWT的使用方式

把JWT放在http请求头的Authorazition字段中

``` 
格式：Authorization: Bearer <token>

// 中间件的使用
jsonwebtoken：用于将用户信息生成token字符串
express-jwt：将token字符串解析还原成信息对象

// 定义 secret 密钥，建议将密钥命名为 secretKey
const secretKey = 'itheima No1 ^_^'

// 登录成功
// TODO_03：在登录成功之后，调用 jwt.sign() 方法生成 JWT 字符串。并通过 token 属性发送给客户端
// 参数1：用户的信息对象
// 参数2：加密的秘钥
// 参数3：配置对象，可以配置当前 token 的有效期
// 记住：千万不要把密码加密到 token 字符中
const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '30s' })
res.send({
  status: 200,
  message: '登录成功！',
  token: tokenStr, // 要发送给客户端的 token 字符串
  })
})

注册将 JWT 字符串解析还原成 JSON 对象的中间件
// 注意：只要配置成功了 express-jwt 这个中间件，就可以把解析出来的用户信息，挂载到 req.user 属性上
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))
```

