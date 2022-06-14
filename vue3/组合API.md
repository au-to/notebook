### Vue3中的组合API

1. ### setup函数

   > 组合API的起点；
   >
   > 在组件实例创建前执行；
   >
   > 函数中不能使用this；
   >
   > 模板中需要使用的数据和函数,需要在setup中以对象形式返回；
   >
   > 例：
   >
   > ``` 
   > setup() {
   >  // 数据
   >  const msg = "hello vue3";
   >  // 函数
   >  const say = () => {
   >    console.log("hi vue3");
   >  };
   >  return { msg, say };
   > }

2. ### 生命周期钩子

   > 组合式API的生命周期钩子共有7个，可以多次在组合api中使用钩子；
   >
   > - setup：创建实例前；
   > - onBeforeMount：挂载Dom前；
   > - onMounted：挂载Dom后；
   > - onBeforeUpdate：更新组件前；
   > - onUpdated：更新组件后；
   > - onBeforeUnmount：卸载销毁前；
   > - onUnmounted：卸载销毁后；
   
3. ### 定义响应式数据

   > **reactive函数：**将对象(数组)转化为响应式数据
   >
   > ``` 
   > setup() {
   >  普通数据
   >  const obj = {
   >    name: "zs",
   >    age: 20,
   >  };
   > 
   >  响应式数据
   >  const obj = reactive({
   >    name: "zs",
   >    age: 20,
   >  });
   > }
   > ```

   > **toRef函数：**模板中只用到响应式数据对象的某一个属性；
   >
   > 这种情况不能直接解构，需要用到toRef函数。
   >
   > ```
   > setup() {
   >  // 响应式数据
   >  const obj = reactive({
   >    name: "zs",
   >    age: 20,
   >  });
   >  // 模板中只需要使用name属性
   >  const name = toRef(obj, "name");
   >  const modify = () => {
   >    // 通过value获取属性值
   >    name.value = "ls";
   >  };
   >  return { name, modify };
   > }
   > ```

   > **toRefs函数：**通常用于解构或展开reactive定义对象，剥离响应式对象，直接使用所有的响应式属性
   >
   > ``` 
   > setup() {
   >     // 响应式数据
   >     const obj = reactive({
   >       name: "zs",
   >       age: 20,
   >     });
   >     // 剥离响应式对象，直接使用所有的响应式属性
   >     const obj2 = toRefs(obj);
   >     const updataName = () => {
   >       obj.name = "ls";
   >       obj.age = 30;
   >     };
   >     return { ...obj2 ,updataName};
   >   }
   > ```

   > **ref函数：**定义简单的响应式数据类型
   >
   > 注：在获取值，修改值的时候，需要用.value属性。
   >
   > ```
   > setup() {
   >     const name = ref('zs');
   >     const age = ref(10);
   >     const updataName = () => {
   >       name.value = 'ls';
   >     }
   >     return {name,age,updataName};
   >   }
   > ```

4. ### computed函数（计算属性）

   > 当你需要依赖现有的响应式数据，根据一定的逻辑得到一个新的数据时，就可以使用计算属性。
   >
   > ```
   >   setup() {
   >     const age = ref(16);
   >     const newAge = computed(() => {
   >       return age.value+2;
   >     })
   >     return {age,newAge}
   >   }
   > ```

5. ### watch侦听器

   >   watch()函数共有三个参数：分别是 <要监听的对象, 监听到发生的行为, 配置对象>
   >
   > ```
   >   // 1.监听ref数据
   >   setup() {
   >     const count = ref(0); //ref数据
   >     watch(count, (newVal, oldVal) => {
   >       console.log(newVal, oldVal);
   >     });
   >   }
   >   
   >   // 2.监听reactive数据
   >   setup() {
   >    const obj = reactive({
   >       age: 20,
   >       name: "zs"
   >   })
   >    watch(obj, (newVal, oldVal) => {
   >       console.log(newVal.age, oldVal.age);
   >     })
   >   }
   >   
   >   // 3. 监听多个数据的变化
   >     watch([count, obj], () => {
   >       console.log("监听的多个数据改变了");
   >     });
   >     
   >   // 4.监听对象中某个属性的变化,需要以函数的形式返回要监听的属性
   >     watch(() => obj.name,() => {
   >         console.log("监听的name改变了");
   >       }
   >     );
   >     
   >   // 5.深度监听与默认执行(使用第3个对象参数)
   >   setup() {
   >   const obj = reactive({
   >    brand: {
   >    name: '宝马'
   >    }
   >     });
   >     watch(() => obj.brand,() => {
   >     obj.brand.name = '奔驰';
   >     },{
   >     deep: true,//深度监听
   >     immediate: true //默认执行
   >     })
   >   }
   > ```

6. **ref属性:** 获取Dom或组件实例

   > - 单个元素: 先申明ref响应式数据,返回给模板使用,通过ref绑定数据
   > - 遍历的元素: 先定义一个空数组,定义一个函数获取元素,返回给模板使用,通过ref绑定这个函数

   > ``` 
   > <div ref= "box"></div>
   > setup() {
   > // 定义一个空的响应式数据
   > const box = ref(null);
   > // 返回该数据,在对应的dom元素上使用ref属性绑定该数据
   > return { box };
   > }
   > ```

7. ### 父子通信

   - **父传子** —— props

     > ```
     > export default {
     >   name: "app",
     >   components: {
     >     son,
     >   },
     >   // 父组件数据传递给子组件
     >   setup() {
     >     const money = ref(100);
     >     return { money };
     >   },
     > };
     > ```
     >
     > ``` 
     > export default {
     >   name: "son",
     >   // 子组件接收父组件的数据
     >   props: {
     >     money: {
     >       type: Number,
     >       default: 0,
     >     },
     >   },
     >   // setup中获取父组件的数据
     >   setup(props) {
     >     console.log(props.money);
     >   },
     > };
     > ```

   - **子传父** —— 自定义事件

     > ``` 
     >  // 子组件
     >  <template>
     >   <div>
     >     子组件{{ money }}
     >   </div>
     >   <button @click="chengMoney">50</button>
     > </template>
     > // 子组件使用props接收父组件数据
     >  props: {
     >     money: {
     >       type: Number,
     >       default: 0
     >     }
     >   },
     >  // emit 触发自定义事件的函数
     >   setup(props,emit) {
     >     const changeMoney = () => {
     >     emit('change-money',50)
     >     }
     >     return {changeMoney}
     >   }
     >   
     >   // 父组件
     >   <template>
     >   <div>
     >     父组件{{ money }}
     >     <son :money="money" @chang-money="updataMoney"></son>
     >   </div>
     > </template>
     >   setup() {
     >     const money = ref(100);
     >     const updataMoney = (newMoney) => {
     >       console.log(newMoney);
     >     };
     >     return { money, updataMoney };
     >   },
     > ```

8. ### v-model

   > 在之前，我们要想实现一个**自定义的非表单组件**的双向绑定，需要通过`xxxx.sync`的这种语法来实现，如今这个指令已经被废除，而是统一使用`v-model`这个指令。
   >
   > 新的v-model支持多个数据的双向绑定
   >
   > ``` 
   > // 父组件模板
   > <template>
   >   <VBtn v-model:value="valueRef" v-model:keyword="keywordRef" />
   > </template>
   > // 自定义组件模板
   > <template>
   >   <button @click="clickHandle">click</button>
   > </template>
   > // 自定义组件接收数据
   >   props: {
   >     value: 1,
   >     keyword: 2
   >   },
   >   // 自定义组件中的setup
   >    setup(props, { emit }) {
   >      // 用户点击按钮
   >     const clickHandle = (e: any) => {
   >       // 修改对应的props的数据
   >       emit('update:value', value)
   >       emit('update:keyword', value + '123')
   >     }
   > ```

9. ### 依赖注入

   > 使用场景：有一个父组件包含很多后代组件想要共享父组件的数据
   >
   > ``` 
   >  // 父组件
   >  setup() {
   >     const money = ref(100);
   >     const changeMoney = () => {
   >     console.log('changeMoney');
   >     };
   >     // 将数据提供给后代组件
   >     provide('mo',money);
   >     // 将方法提供给后代组件
   >     provide('change',changeMoney)
   >     return {money}
   >   }
   >   
   >   // 子组件
   >    setup() {
   >         // 接收祖先组件提供的数据
   >         const mo = inject('mo');
   >         // 接收祖先组件提供的方法
   >         const change = inject('changeMoney');
   >         return {mo,change};
   >     }
   > ```
