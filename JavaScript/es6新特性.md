ES6（ECMAScript 2015）是 JavaScript 的一次重大更新，新增了大量语言特性，极大提升了 JS 的表达力、模块化能力和可维护性。以下是最核心和常用的 ES6 新特性整理：

---

## ✅ 一、变量声明优化

| 特性      | 说明                    |
| ------- | --------------------- |
| `let`   | 块级作用域，不能重复声明，不变量提升    |
| `const` | 块级作用域，常量（值不可变或引用地址不变） |

---

## ✅ 二、模板字符串

```js
const name = 'Alice';
const msg = `Hello, ${name}!`;  // 模板字面量 + 支持换行
```

---

## ✅ 三、箭头函数 `=>`

简洁语法、自动绑定 `this`：

```js
const sum = (a, b) => a + b;
```

---

## ✅ 四、解构赋值（数组 / 对象）

```js
const [a, b] = [1, 2];
const { name, age } = { name: 'Tom', age: 18 };
```

---

## ✅ 五、默认参数值

```js
function greet(name = 'Guest') {
  console.log(`Hello, ${name}`);
}
```

---

## ✅ 六、扩展运算符 `...` / 剩余参数

```js
const arr1 = [1, 2], arr2 = [...arr1, 3];  // 拷贝/合并
function sum(...args) { return args.reduce((a, b) => a + b); }
```

---

## ✅ 七、对象字面量增强

```js
const age = 18;
const person = {
  name: 'Alice',
  age,            // 属性简写
  greet() {       // 方法简写
    console.log('Hi');
  }
};
```

---

## ✅ 八、Promise

异步编程的标准方案：

```js
new Promise((resolve, reject) => {
  // 异步操作
}).then(res => {
  // 成功
}).catch(err => {
  // 失败
});
```

---

## ✅ 九、类（Class）

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} says hello`);
  }
}
```

---

## ✅ 十、模块化（`import` / `export`）

```js
// a.js
export const name = 'Tom';
export default function greet() {}

// b.js
import greet, { name } from './a.js';
```

---

## ✅ 十一、Symbol（独一无二的值）

```js
const id = Symbol('id');
const obj = { [id]: 123 };
```

---

## ✅ 十二、迭代器 / for...of / Generator（配合 `yield`）

```js
for (const item of [1, 2, 3]) {
  console.log(item); // 更适用于可迭代对象
}
```

---

## ✅ 十三、Map / Set 数据结构

```js
const s = new Set([1, 2, 2]);  // 去重
const m = new Map([['a', 1]]);  // 键值对更强大
```

---

### 📌 你可以这样理解 ES6 的目标：

> “让 JavaScript 更现代、更结构化、更适合构建复杂应用。”

---