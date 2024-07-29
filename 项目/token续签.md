### 背景

目前用户的登录态记录在后端，用户在30min内不活跃会自动登出，是否活跃的标准：前端是否调用了后端接口；但有些页面需要大量的文本录入，如有用户信息填写页面（用户定义的信息项多，且需要用户准备的材料较多时）、评分模版页（指标项较多时），可能会出现用户30min内无法完成填写，自动登出的情况。用户需重新登录重新填写，比较崩溃。

### 方案一：捕获用户活动

* **前端捕捉用户活动**：可以捕捉用户在页面上的鼠标移动、键盘输入、滚动等行为
* **定时续签**：如果检测到用户活动，则每隔一段时间（例如5分钟）向后端发送一个请求，续签用户的登录态

**优化手段**

* **减少请求频率**：虽然前端可以频繁捕捉用户活动，但不需要每次活动都发送请求，可以设置一个较长的间隔时间（例如5分钟）来发送续签请求
* **防抖处理**：对于频繁的事件（如鼠标移动、键盘输入），可以使用防抖技术，确保在一定时间内只触发一次续签请求
* **请求合并**：可以将多个续签请求合并为一个请求，减少对后端的压力
* **异步处理**：续签请求可以使用异步方式，确保不会阻塞前端的其他操作

**公共方法封装**

``` javascript
// sessionRenewal.js

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// 续签会话方法
function renewSession() {
    fetch('/api/renew-session', {
        method: 'POST',
        credentials: 'include',
    }).then(() => {
        console.log('Session renewed');
    }).catch((error) => {
        console.error('Error renewing session:', error);
    });
}

// 初始化活动监测和续签
export function initSessionRenewal(activityTimeout = 5 * 60 * 1000) {
    let activityTimer;

    function resetActivityTimer() {
        clearTimeout(activityTimer);
        activityTimer = setTimeout(() => {
            renewSession();
        }, activityTimeout);
    }

    window.onload = resetActivityTimer;
    window.onmousemove = debounce(resetActivityTimer, 300);
    window.onkeydown = debounce(resetActivityTimer, 300);
    window.onscroll = debounce(resetActivityTimer, 300);
}
```

**按需引入**

``` vue
<template>
  <div>
    <!-- 你的表单代码 -->
  </div>
</template>

<script>
import { initSessionRenewal } from '@/utils/sessionRenewal';

export default {
  name: 'SupplierForm',
  mounted() {
    // 初始化会话续签功能，默认活动超时为5分钟
    initSessionRenewal();
  },
};
</script>

<style scoped>
/* 你的样式代码 */
</style>
```

**全局挂载**

``` javascript
import { createApp } from 'vue';
import App from './App.vue';
import { initSessionRenewal } from '@/utils/sessionRenewal';

const app = createApp(App);

// 初始化会话续签功能，默认活动超时为5分钟
initSessionRenewal();

app.mount('#app');
```

### 方案二：自动保存进度

* **自动保存表单数据**：在用户填写表单时，自动保存用户的输入数据到本地存储或后端
* **重新加载时恢复数据**：用户重新登录后，可以从本地存储或后端恢复用户之前填写的数据

示例代码：

``` javascript
const formElement = document.getElementById('myForm');

function saveFormData() {
    const formData = new FormData(formElement);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    localStorage.setItem('formData', JSON.stringify(formObject));
}

function loadFormData() {
    const formData = JSON.parse(localStorage.getItem('formData'));
    if (formData) {
        Object.keys(formData).forEach(key => {
            const element = formElement.querySelector(`[name="${key}"]`);
            if (element) {
                element.value = formData[key];
            }
        });
    }
}

formElement.addEventListener('input', saveFormData);
window.onload = loadFormData;
```

### 方案三：增加用户提示

* **提示用户即将登出**：在用户即将登出前几分钟，提示用户即将登出，可以通过点击按钮延长会话时间
* **手动续签会话**：用户点击延长会话按钮，向后端发送请求续签会话

示例代码：

``` javascript
let logoutTimer;
const logoutWarningTime = 25 * 60 * 1000; // 25分钟
const logoutTime = 30 * 60 * 1000; // 30分钟

function startLogoutTimers() {
    logoutTimer = setTimeout(() => {
        alert('您即将被登出，请保存您的工作。点击延长会话可以继续工作。');
        // 可以显示一个弹窗，让用户手动续签
        if (confirm('是否延长会话？')) {
            renewSession();
        }
    }, logoutWarningTime);
}

function renewSession() {
    fetch('/api/renew-session', {
        method: 'POST',
        credentials: 'include',
    }).then(() => {
        clearTimeout(logoutTimer);
        startLogoutTimers();
    });
}

startLogoutTimers();
window.onmousemove = startLogoutTimers;
window.onkeydown = startLogoutTimers;
window.onscroll = startLogoutTimers;
```