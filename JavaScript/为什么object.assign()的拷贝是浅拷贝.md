`Object.assign()` 是 ES6 提供的一个静态方法，用于将一个或多个源对象的 **可枚举自身属性** 拷贝到目标对象中。

---

## ✅ 一、基本语法

```js
Object.assign(target, ...sources)
```

* `target`：目标对象，属性将被添加到这个对象中。
* `sources`：一个或多个源对象，从中复制属性。

---

## ✅ 二、示例

```js
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const result = Object.assign(obj1, obj2);
console.log(result); // { a: 1, b: 2 }
```

> 注意：`Object.assign` 会**修改目标对象本身**，并返回该对象。

---

## ⚠️ 三、为什么是浅拷贝？

`Object.assign()` **只拷贝第一层属性的值**，如果属性是对象类型，它只是复制引用，而不是递归复制。

### 例子：

```js
const obj = {
  a: 1,
  b: { c: 2 }
};

const clone = Object.assign({}, obj);
clone.b.c = 999;

console.log(obj.b.c); // ❗999，被影响
```

### ✳️ 原因：

* 对于 `b` 这个嵌套对象，`Object.assign` 拷贝的是它的**引用地址**，不是它的值。
* 所以 `clone.b` 和 `obj.b` 是同一个对象，修改一个会影响另一个。

---

## 📌 四、注意事项

1. **不能复制继承属性**（只复制自身可枚举属性）。
2. **不能复制不可枚举属性**。
3. **Symbol 属性会被拷贝**（可枚举的 Symbol）。
4. 对于 `null` 或 `undefined` 会报错：

```js
Object.assign(null, { a: 1 }); // ❌ TypeError
```

---

## 🧠 五、总结

| 特性           | 是否支持      |
| ------------ | --------- |
| 拷贝嵌套对象       | ❌ 否（浅拷贝）  |
| 拷贝 Symbol 属性 | ✅ 可枚举时可拷贝 |
| 拷贝不可枚举属性     | ❌ 不支持     |
| 拷贝原型链属性      | ❌ 不支持     |
| 修改原对象        | ✅ 会修改目标对象 |

---

如果你想实现 **深拷贝**，需要用 `递归` 或使用 `lodash.cloneDeep` 等库，`Object.assign()` 本身**并不适合用于深层对象结构的复制场景**。