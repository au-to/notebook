Cookie 是一种在客户端（通常是浏览器）中存储少量数据的机制，通常用于保持用户会话、记录用户偏好或进行跟踪分析。它是由服务器发送给客户端的一段小文本数据，浏览器会在之后的请求中将其自动发送回服务器。

---

### 一、Cookie 的基本原理

当你访问某个网站时，服务器可以通过 HTTP 响应头中的 `Set-Cookie` 字段告诉浏览器保存某些数据。之后，每次请求该网站，浏览器都会将相关 Cookie 信息通过请求头 `Cookie` 携带回服务器。

---

### 二、常用的 Cookie 配置字段（属性）

1. **`Name=Value`**

   * Cookie 的键值对内容，是最基本的数据部分，例如：`session_id=abc123`。

2. **`Expires`**

   * 指定 Cookie 的过期时间（一个绝对时间），格式通常为 GMT 时间。
   * 示例：`Expires=Wed, 21 Oct 2025 07:28:00 GMT`
   * 超过这个时间后，浏览器会自动删除 Cookie。
   * 如果不设置该字段，Cookie 为**会话 Cookie**（浏览器关闭后自动删除）。

3. **`Max-Age`**

   * Cookie 的生命周期，单位为秒。
   * 示例：`Max-Age=3600` 表示 1 小时后过期。
   * 它的优先级高于 `Expires`。

4. **`Domain`**

   * 指定 Cookie 可用于哪个域名（或子域名）。
   * 示例：`Domain=example.com`，则 `www.example.com` 也能访问该 Cookie。
   * 如果不设置，默认为当前访问的域名。

5. **`Path`**

   * 指定 Cookie 在该路径及其子路径下生效。
   * 示例：`Path=/admin`，则访问 `/admin` 和 `/admin/settings` 时才会带上该 Cookie。

6. **`Secure`**

   * 表示该 Cookie 仅在 HTTPS 连接中被发送。
   * 提高安全性，防止中间人攻击。

7. **`HttpOnly`**

   * 表示该 Cookie 无法通过 JavaScript（如 `document.cookie`）访问。
   * 防止 XSS 攻击窃取 Cookie 信息。

8. **`SameSite`**

   * 控制跨站请求时是否发送 Cookie，用于防止 CSRF 攻击。
   * 可能的值：

     * `Strict`: 绝不在跨站请求中发送 Cookie。
     * `Lax`: 仅在“安全的”跨站请求中（如 GET）发送 Cookie。
     * `None`: 总是发送 Cookie（需同时设置 `Secure`）。
   * 示例：`SameSite=Lax`

---

### 三、示例：完整的 Set-Cookie 响应头

```http
Set-Cookie: session_id=abc123; Max-Age=3600; Path=/; Domain=example.com; Secure; HttpOnly; SameSite=Lax
```

---