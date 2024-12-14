CSRF

- 攻击者盗用了用户身份，进行恶意请求；比如以用户身份发邮件、购买商品
- 主要原理为盗取用户身份，伪造请求

攻击思想

* 你浏览并登陆信任的网站，比如某宝
* 登录之后你的个人信息被存储在浏览器中，比如cookie
* 你在没有退出淘宝的情况下访问恶意网站
* 恶意网站中的代码携带刚刚存储在浏览器的用户信息，发送了一个恶意请求
* 淘宝无法判断用户的真实身份，验证为合法
* 达到恶意目的

预防措施

* Token：每次请求时，服务器生成一个唯一的Token返回给客户端。客户端在后续请求中需携带此Token，服务器验证Token是否合法
* Referer 和 Origin 头验证：服务器通过检查HTTP请求头中的Referer或Origin字段，确保请求来源于合法站点
* SameSite Cookie 属性：通过设置Cookie的SameSite属性，限制Cookie在跨站请求中被发送
  * `Strict`：Cookie仅在同站点请求中发送
  * `Lax`：允许GET请求携带Cookie，但禁止其他方法（如POST）
  * `None`：跨站请求总是发送Cookie，但需配合Secure标记（仅在HTTPS传输）
* 双重Cookie验证：在服务器上生成一个CSRF Token并通过Cookie返回给客户端，同时在每次请求时从Cookie中读取Token进行验证
* 显示验证方式：添加验证码、密码等
