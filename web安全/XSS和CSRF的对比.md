这是前端安全的经典面试问题之一。我们来分别讲解：

---

## ✅ 一、XSS（跨站脚本攻击）

### 🧠 原理：

攻击者将**恶意脚本**注入页面中，诱导用户在浏览器执行，造成信息泄露或劫持行为。

### 👇 常见类型：

| 类型        | 说明                 | 示例                                        |
| --------- | ------------------ | ----------------------------------------- |
| 反射型 XSS   | 脚本出现在 URL 参数中      | `https://xxx.com/?q=<script>...</script>` |
| 存储型 XSS   | 脚本被存储在数据库中并展示      | 评论区中插入脚本                                  |
| DOM 型 XSS | 前端代码拼接不当注入 HTML/JS | `element.innerHTML = location.hash;`      |

### 🔐 防御手段：

1. **前端输出内容时进行转义（HTML、JS、CSS）**

   * Vue、React 默认模板自动转义
   * 避免 `innerHTML`、`document.write` 等

2. **Content Security Policy (CSP)** 限制脚本加载来源

   ```http
   Content-Security-Policy: script-src 'self'
   ```

3. **HttpOnly 设置 Cookie**，防止 JS 读取敏感信息

4. **后端对输入做过滤或白名单校验**（重要）

---

## ✅ 二、CSRF（跨站请求伪造）

### 🧠 原理：

攻击者诱导用户点击链接或自动请求第三方站点接口，利用浏览器自动携带的 Cookie 发起**伪造请求**，实现未授权操作（如转账、改密码等）。

### 🎯 条件：

* 用户已登录目标网站并 Cookie 生效
* 攻击者诱导用户访问伪造请求

### 🔐 防御手段：

1. **CSRF Token 验证机制**

   * 服务端生成随机 token，嵌入页面并校验
   * token 不会自动随请求发送，需由前端主动携带

2. **SameSite Cookie 属性（现代浏览器）**

   ```http
   Set-Cookie: token=xxx; SameSite=Strict
   ```

   * `Strict`：完全禁止第三方携带 Cookie
   * `Lax`：允许 GET 请求携带（默认）
   * `None`：允许全部，但必须设置 `Secure`

3. **验证 Referer / Origin**

   * 服务端检查请求来源域是否可信（非万能）

4. **重要操作改为 POST，增加验证码、二次确认等**

---

## ✅ 总结对比

| 项目    | XSS               | CSRF                           |
| ----- | ----------------- | ------------------------------ |
| 攻击目标  | 用户浏览器             | 服务端接口                          |
| 攻击手段  | 注入 JS 执行          | 利用 Cookie 发伪造请求                |
| 防御重点  | 内容转义、CSP、HttpOnly | CSRF Token、SameSite、Referer 检查 |
| 是否需登录 | ❌ 不一定             | ✅ 需要                           |

---

## ✅ 面试简答版本（30秒讲清楚）：

> **XSS 是注入恶意脚本，攻击浏览器端用户，防御靠转义、CSP、HttpOnly；CSRF 是伪造请求攻击服务器端接口，防御靠 CSRF Token、SameSite Cookie 和 Referer 校验。**

---