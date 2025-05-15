这是一个关于 Vue 组件 **mixin 混入机制** 的深入问题，涉及 Vue 的合并策略（Merge Strategy）。我们来分层回答：

---

## ✅ 一、什么是 Vue 的 mixin？

**`mixin` 是 Vue 中的一种复用逻辑的机制**，可以将一段逻辑（如 data、methods、生命周期钩子等）“混入”到多个组件中。

```js
const myMixin = {
  data() {
    return {
      shared: 'from mixin'
    }
  },
  methods: {
    sayHi() {
      console.log('hi from mixin');
    }
  }
};

export default {
  mixins: [myMixin],
  data() {
    return {
      shared: 'from component'
    }
  },
  methods: {
    sayHi() {
      console.log('hi from component');
    }
  }
};
```

---

## ✅ 二、混入机制的原理

Vue 内部会对组件的选项（data、methods、computed、生命周期等）进行**合并策略处理**：

### 🔧 本质是：Vue 会在初始化组件时，调用 `mergeOptions` 方法，把 mixin 中的选项合并进组件本身。

不同选项的合并规则不同：

| 类型                          | 合并策略说明                                  |
| --------------------------- | --------------------------------------- |
| `data`                      | 返回对象合并，组件 data 中的属性会覆盖 mixin 的          |
| `methods`                   | 方法同名时，组件中定义的覆盖 mixin 中的                 |
| `computed`                  | 同名时组件中的覆盖 mixin 中的                      |
| `生命周期钩子`                    | 混入和组件的钩子函数会**合并为一个数组**，**都执行，mixin 在前** |
| `watch`                     | 多个 watch 同名时也会合并，**都生效**                |
| `components` / `directives` | 合并为一个对象，同名时组件中优先                        |

---

## ✅ 三、如果组件和 mixin 出现同名属性，谁覆盖谁？

### ✅ 结论：

* **组件中的属性优先级高，覆盖 mixin 中的**
* 但生命周期函数例外：**都会执行，mixin 中的钩子先执行**

### 🔍 示例：

```js
const mixin = {
  data() {
    return { msg: 'mixin' }
  },
  created() {
    console.log('mixin created');
  },
  methods: {
    say() {
      console.log('mixin say');
    }
  }
};

export default {
  mixins: [mixin],
  data() {
    return { msg: 'component' };
  },
  created() {
    console.log('component created');
  },
  methods: {
    say() {
      console.log('component say');
    }
  }
};
```

运行结果是：

```
mixin created
component created
```

并且：

```js
console.log(this.msg); // 'component'
this.say();            // 'component say'
```

---

## ✅ 四、所有 API 都遵循这个规则吗？

不是所有 API 都完全一致。总结如下：

| API 类型       | 是否组件优先 | 是否合并  | 说明           |
| ------------ | ------ | ----- | ------------ |
| `data`       | ✅ 是    | ✅ 合并  | 对象合并，组件覆盖    |
| `methods`    | ✅ 是    | ❌ 不合并 | 同名覆盖         |
| `computed`   | ✅ 是    | ❌ 不合并 | 同名覆盖         |
| `watch`      | ❌ 否    | ✅ 合并  | 同名也可多个并存     |
| `生命周期钩子`     | ❌ 否    | ✅ 合并  | 都执行，mixin 在前 |
| `components` | ✅ 是    | ✅ 合并  | 对象合并，组件优先    |

---

## ✅ 五、面试口头回答建议

> “Vue 的 mixin 是一种逻辑复用机制，原理是 Vue 会在初始化组件时将 mixin 和组件的选项通过不同的合并策略整合在一起。如果组件和 mixin 有同名属性，组件优先，覆盖 mixin 的。生命周期钩子例外，会合并成数组按顺序都执行，mixin 的先执行。像 methods、computed 是组件覆盖，watch 和生命周期钩子是合并执行的。”

---