我们来用**简单好记的方式**，总结一下 JavaScript 中的几种继承方式、它们的原理和优缺点。可以把它们想象成几个“工具箱”，不同的方式解决不同的问题，有的老旧、有的灵活。

---

## 🧱 一、原型链继承（Prototype Chain）

### 🌟核心思想：

子类的原型对象 = 父类的实例。

```js
function Parent() {
  this.name = 'parent';
}
Parent.prototype.sayHi = function() {
  console.log('Hi');
};

function Child() {}
Child.prototype = new Parent();

const c = new Child();
console.log(c.name); // 'parent'
```

### ✅ 优点：

* 简单，能继承父类的方法和属性

### ❌ 缺点：

* **所有子实例共享父实例的引用属性**（如数组、对象），会互相污染
* 无法向父类传参

---

## 🧱 二、借用构造函数继承（Constructor Borrowing）

### 🌟核心思想：

在子类构造函数里**调用父类构造函数**。

```js
function Parent() {
  this.colors = ['red', 'blue'];
}
function Child() {
  Parent.call(this); // 借用构造函数
}

const c1 = new Child();
const c2 = new Child();
c1.colors.push('green');
console.log(c2.colors); // 不受影响
```

### ✅ 优点：

* **避免引用属性共享问题**
* 可传参

### ❌ 缺点：

* 无法继承原型上的方法（`Parent.prototype` 中的函数没了）

---

## 🧱 三、组合继承（最常用）

### 🌟核心思想：

原型链 + 构造函数的组合方式。

```js
function Parent(name) {
  this.name = name;
}
Parent.prototype.sayHi = function() {
  console.log('Hi');
};

function Child(name) {
  Parent.call(this, name); // 第一次调用
}
Child.prototype = new Parent(); // 第二次调用
Child.prototype.constructor = Child;
```

### ✅ 优点：

* 既能继承属性，也能继承方法
* 实例之间互不影响

### ❌ 缺点：

* 调用了两次父构造函数（一次在原型，一次在子类构造函数里）

---

## 🧱 四、寄生组合继承（完美写法 ✅推荐）

### 🌟核心思想：

优化“组合继承”的冗余，避免父类构造函数被调用两次。

```js
function Parent(name) {
  this.name = name;
}
Parent.prototype.sayHi = function() {
  console.log('Hi');
};

function Child(name) {
  Parent.call(this, name);
}

// 核心：只继承原型
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
```

### ✅ 优点：

* 原型上的方法不会重复创建
* 属性不共享，结构清晰

### ❌ 缺点：

* 代码稍复杂（但实际是最合理的继承方式）

---

## 🧱 五、ES6 class 继承（现代方式 ✅推荐）

### 🌟核心思想：

使用 `class` 和 `extends` 语法糖，本质上还是原型+构造函数的组合继承。

```js
class Parent {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log('Hi');
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // 相当于 Parent.call(this)
    this.age = age;
  }
}
```

### ✅ 优点：

* 语法清晰，易读
* 支持 super 调用父构造函数/方法
* 与 TS 搭配使用更强大

### ❌ 缺点：

* 底层依然是原型链机制
* 某些旧浏览器不支持（需要 Babel 编译）

---

## 🧠 总结（对比表）

| 方式           | 能继承属性 | 能继承方法 | 避免共享 | 支持传参 | 复杂度  | 推荐指数  |
| ------------ | ----- | ----- | ---- | ---- | ---- | ----- |
| 原型链继承        | ✅     | ✅     | ❌    | ❌    | ⭐    | ⭐     |
| 借用构造函数继承     | ✅     | ❌     | ✅    | ✅    | ⭐⭐   | ⭐⭐    |
| 组合继承         | ✅     | ✅     | ✅    | ✅    | ⭐⭐⭐  | ⭐⭐⭐⭐  |
| 寄生组合继承       | ✅     | ✅     | ✅    | ✅    | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| ES6 class 继承 | ✅     | ✅     | ✅    | ✅    | ⭐⭐⭐  | ⭐⭐⭐⭐⭐ |

---