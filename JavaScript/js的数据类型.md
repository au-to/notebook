我们来系统地讲一讲 JavaScript 的数据类型、不同数据类型之间的比较，以及判断数据类型的几种方式：

---

### **1. JavaScript 的数据类型**

JavaScript 中的数据类型分为 **原始类型（Primitive Types）** 和 **引用类型（Reference Types）**：

#### ✅ 原始类型（Primitive Types）：

* `Number`：数字类型，例如 `1`、`3.14`、`NaN`、`Infinity`
* `String`：字符串类型，例如 `'hello'`、`"world"`
* `Boolean`：布尔类型，`true` 或 `false`
* `Null`：表示“空值”或“无值”，只有一个值：`null`
* `Undefined`：变量声明了但没有赋值
* `Symbol`：ES6 引入，用于创建唯一值
* `BigInt`：ES2020 引入，表示非常大的整数（如 `123n`）

#### ✅ 引用类型（Reference Types）：

* `Object`：对象，如 `{ name: "Alice" }`
* `Array`：数组，其实是对象的子类型，如 `[1, 2, 3]`
* `Function`：函数类型，本质上也是对象
* `Date`、`RegExp` 等也是对象的变种

---

### **2. 不同数据类型之间的比较**

比较运算符有两个主要的类型：

* **宽松相等（==）**：会进行**类型转换**后再比较
* **严格相等（===）**：**不进行类型转换**，类型不同就直接返回 `false`

#### 🔍 示例：

```js
0 == '0'          // true （字符串'0'被转成数字 0）
0 === '0'         // false（类型不同：Number vs String）

false == 0        // true （false 转为数字是 0）
false === 0       // false

null == undefined // true （特殊规则）
null === undefined // false

[] == ''          // true （数组转字符串是 ''）
[] == 0           // true （数组转字符串是 ''，再转数字是 0）
[1] == 1          // true （[1] -> '1' -> 1）

{} == {}          // false（对象是引用类型，比较的是地址）
```

#### 🧠 总结：

* 使用 `==` 会有隐式类型转换，容易出错。
* 建议总是使用 `===` 和 `!==` 进行严格比较。

---

### **3. 如何判断不同的数据类型**

#### ✅ 常用方法有以下几种：

#### 1. **typeof**

用于判断原始类型和函数：

```js
typeof 123           // 'number'
typeof 'hello'       // 'string'
typeof true          // 'boolean'
typeof undefined     // 'undefined'
typeof null          // 'object' ❗️（这是一个历史 bug）
typeof Symbol()      // 'symbol'
typeof function(){}  // 'function'
```

#### 2. **Array.isArray()**

专门判断是否为数组：

```js
Array.isArray([1, 2, 3])  // true
Array.isArray({})         // false
```

#### 3. **instanceof**

判断某个对象是否是某个构造函数的实例（用于引用类型）：

```js
[] instanceof Array        // true
{} instanceof Object       // true
function(){} instanceof Function // true
```

#### 4. **Object.prototype.toString.call()**

最准确的类型判断方式，适用于所有类型：

```js
Object.prototype.toString.call(null)      // "[object Null]"
Object.prototype.toString.call([])        // "[object Array]"
Object.prototype.toString.call({})        // "[object Object]"
Object.prototype.toString.call('hello')   // "[object String]"
Object.prototype.toString.call(123)       // "[object Number]"
```

---

### ✅ 总结表格：

| 类型          | `typeof`      | `instanceof` | `toString.call()`    |
| ----------- | ------------- | ------------ | -------------------- |
| `null`      | `'object'`    | `false`      | `[object Null]`      |
| `undefined` | `'undefined'` | `false`      | `[object Undefined]` |
| `123`       | `'number'`    | `false`      | `[object Number]`    |
| `'abc'`     | `'string'`    | `false`      | `[object String]`    |
| `true`      | `'boolean'`   | `false`      | `[object Boolean]`   |
| `[]`        | `'object'`    | `true`       | `[object Array]`     |
| `{}`        | `'object'`    | `true`       | `[object Object]`    |
| `()=>{}`    | `'function'`  | `true`       | `[object Function]`  |

---