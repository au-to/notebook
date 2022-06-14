// 迭代器模式
// 把某些结构称为可迭代对象，他们实现了正式的iterable接口，且可以通过迭代器iterator消费
// 可迭代对象不一定是集合对象，也可以是类数组
// 迭代器是按需创建的一次性对象，每个迭代器都会关联一个可迭代对象
// 迭代器无需了解关联的可迭代对象的结构，只需要知道如何取得连续值
// 实现iterable接口要求同时具备两种能力：支持迭代的自我辨识能力和创建实现iterator接口的能力

// 可迭代协议
// 迭代器协议
// 迭代器是一种一次性使用的对象，用于迭代与其关联的可迭代对象
// 迭代器使用next()方法在可迭代对象中遍历数据
// next方法返回的迭代器对象iteratoResult包含两个属性，done和value
// done是一个布尔值，表示是否还可以再次调用next取得下一个值
// done：true称为耗尽
// value包含可迭代对象的下一个值
let arr = ['foo', 'bar'];
// 迭代器工厂函数
arr[Symbol.iterator];
// 迭代器
let iter = arr[Symbol.iterator]();
// 执行迭代
iter.next(); //done:false,value:foo

// 不同迭代器实例之间没有联系，只会独立遍历可迭代对象
let arr1 = ['foo'];
let it1 = arr1[Symbol.iterator]();
let it2 = arr1[Symbol.iterator]();
it1.next();
it2.next();

// 迭代器维护着一个指向可迭代对象的引用，因此迭代器会阻止垃圾回收程序回收可迭代对象

// 自定义迭代器
class counter {
    constructor(limit) {
        this.limit = limit;
    }
    [Symbol.iterator]() {
        let count = 1;
        limit = this.limit;
        return {
            next() {
                if (count <= limit) {
                    return { done: false, value: count++ }
                } else {
                    return { done: true, value: undefined };
                }
            }
        }
    }
}
// 提前终止迭代器



// 生成器
// 拥有在一个函数块内暂停和恢复代码执行的能力
// 箭头函数不能定义生成器函数
function* generatorFn() { };
let generatorFn = function* () { };
let foo = {
    *generatorFn() { }
};
class Foo {
    *generatorFn() { }
}
class Bar {
    static * generatorFn() { }
}
// 调用生成器函数会产生一个生成器对象
// 生成器对象开始会处于暂停执行的状态
// 生成器对象也实现了iterator接口，具有next()方法

// 通过yield中断执行
function* generatorFn() {
    yield;
}
let generatorObject = generatorFn();
console.log(generatorObject.next()); //{done: false,value: undefiend}
console.log(generatorObject.next()); //{done: true,value: undefiend}

// 生成器对象作为可迭代对象
function* generatorFn() {
    yield 1;
    yield 2;
    yield 3;
}
for (const x of generatorFn()) {
    console.log(x);
}
//1
//2
//3

// 使用yield实现输入输出
function* ntimes(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}
for (let x of ntime(3)) {
    console.log(x);
}
function* ntimes(n) {
    let i = 0;
    while (n--) {
        yield i++;
    }
}
function* range(start, end) {
    while (end > start) {
        yield start++
    }
}
for (const x of range(4, 7)) {
    console.log(x);
}
// 用星号增强yield的行为，迭代一个可迭代对象
yield * [1, 2, 3];
function* generatorFnA() {
    for (let x of [1, 2, 3]) {
        console.log(x);
    }
}
function* generatorFnB() {
    yield* [1, 2, 3];
}

// 使用yield实现递归
function* nTimes(n) {
    if (n > 0) {
        yield* nTimes(n - 1);
        yield n - 1;
    }
}
// 提前终止生成器
function* generatorFn() {
    for (let i of [1, 2, 3]) {
        yield i;
    }
}
const g = generatorFn();
try {
    g.throw('foo');
}
catch (e) {
    console.log(e);
}

var it = makeIterator(['a', 'b']);
it.next() //{value: 'a',done: false}

function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ?
                { value: array[nextIndex++], done: false } :
                { value: undefined, done: true }
        }
    }
}
const obj = {
    [Symbol.iterator]: function () {
        return {
            next: function () {
                return {
                    value: 1,
                    done: true,
                }
            }
        }
    }
}

class RangeIterator {
    constructor(start, stop) {
        this.value = start;
        this.stop = stop;
    }
    [Symbol.iterator]() {
        return this;
    }
    next() {
        var value = this.value;
        if (value < this.stop) {
            this.value++;
            return { done: false, value: value }
        }
        return { done: true, value: undefined }
    }
}

// 延时函数
function* f() {
    console.log('执行');
}
var generator = f();
setTimeout(() => {
    generator.next();
}, 2000)

var myIterable = {};
myIterable[Symbol.iterator] = function*(){
    yield 1,
    yield 2,
    yield 3
}
// [...myIterable];