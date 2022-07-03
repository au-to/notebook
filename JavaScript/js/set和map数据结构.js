// 1.set
const set = new Set([1, 2, 3, 4, 4]);
[...set] //[1,2,3,4]
function divs() {
    return [...document.querySelectorAll('div')];
}
// 数组去重
const array = [1, 2, 3, 3];
const arr = [...new Set(array)];
const items = new Set([1, 2, 3, 4, 4]);
const arr1 = Array.from(items);
function unique(arr2) {
    return Array.from(new Set(arr2));
}
// set实例的属性与方法
// .has()
// .add()
// .delete()
// .clear()

// 遍历操作
let set1 = new Set(['red', 'green', 'blue']);
for (let i of set1.keys()) {
    console.log(i);
}
for (let i of set1.values()) {
    console.log(i);
}
for (let i of set1.entries()) {
    console.log(i);
}
for (let i of set1) {
    console.log(i);
}
set1.forEach((item) => {
    console.log(item * 2);
})
// 并集，交集，差集
let a = new Set([1, 2, 3]);
let b = new Set([2, 3, 4]);
// 并集
let union = new Set([...a, ...b]);
// 交集
let insertSect = new Set([...a].filter((x) => { b.has(x) }));
// 差集
let diffrence = new Set([...a].filter((x) => { !b.has(x) }));
// 遍历操作同步改变原set
let set3 = new Set([1, 2, 3]);
set3 = new Set([...set3].map((val) => { val * 2 }));

// 2.weakset
// WeakSet的成员只能是对象
// WeakSet中的成员是弱引用
// 成员不可遍历,没有size属性
const a1 = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
const w = new WeakSet();
const obj = {};
w.add(obj);
w.delete(obj);
w.has(obj);
const foos = new WeakSet();
class Foo {
    constructor() {
        foos.add(this);
    }
    method() {
        if (!foos.has(this)) {
            throw new Error('错误')
        }
    }
}

// 3.Map
const m = new Map();
const o = { p: 'hello' };
const map = new Map([
    ['name', 'zh'],
    ['title', 'author']
])
map.size();
map.get(key);
map.set(key, value);
map.has(key);
map.delete(key);
map.clear();
// 遍历方法
for (let key of map.keys()) {
    console.log(key);
}
for (let value of map.values()) {
    console.log(value);
}
for (let i of map.entries()) {
    console.log(i);
}
// Map转数组
const myMap = new Map();
myMap.set(true, 7);
myMap.set({ foo: 3 }, 'abc');
[...myMap];
// 数组转Map
new Map([
    [true, 7]
])
// Map转对象
function str(s) {
    let obj = Object.create(null);
    for (let [k, v] of s) {
        obj[k] = v;
    }
    return obj;
}
// 对象转Map
function toMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k])
    }
    return strMap;
}

// WeakMap
const vm = new WeakMap();
const key = { foo: 1 };
vm.set(key, 2);
vm.get(key)//2
const k1 = [1, 2, 3];
const k2 = [2, 3, 4];
const vm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);

let myElement = document.getElementById('logo');
let myWeakMap = new WeakMap();
myWeakMap.set(myElement, { timesClicked: 0 });
myElement.addEventListener('click', function () {
    let logoData = myWeakMap.get(myElement);
    logoData.timesClicked++;
}, false);