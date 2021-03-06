**XSS（跨站脚本攻击）**

- 浏览器遇到 html 中的 script 标签时，会解析并执行其中的js代码
- 攻击者在目标网站植入恶意脚本，用户在浏览器上运行时可以获取用户的敏感信息
- 主要原理是插入恶意脚本，直接注入攻击

XSS注入点

* html的节点内容或属性
* js代码
* 富文本

类型：

* 持久型XSS：将脚本植入到服务器上，从而导致每个访问的用户都会执行
* 非持久型XSS：通过URL参数直接注入攻击

防御措施

* 对用户输入的内容和服务器返回的内容进行过滤和转义
* 对重要的内容进行加密传输
* 合理使用get/post等请求方式
* 谨慎使用URL携带参数

**CSRF（跨站请求伪造）**

- 攻击者盗用了用户身份，进行恶意请求；比如以用户身份发邮件、购买商品
- 主要原理为盗取用户身份，伪造请求

攻击思想

* 你浏览并登陆信任的网站，比如某宝
* 登录之后你的个人信息被存储在浏览器中，比如cookie
* 用户在没有退出淘宝的情况下访问恶意网站
* 恶意网站中的代码携带刚刚存储在浏览器的用户信息，发送了一个恶意请求
* 淘宝无法判断用户真实身份，验证为合法
* 达到恶意目的

预防措施

* 涉及到数据修改操作严格使用 post 请求而不是 get 请求
* HTTP 协议中使用 Referer 属性对请求来源进行过滤
* 请求地址添加 token ，使黑客无法伪造用户请求
* HTTP 请求头自定义属性验证
* 显示验证方式：添加验证码、密码等

