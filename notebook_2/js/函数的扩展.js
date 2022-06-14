// 函数参数默认值
function log(x, y) {
    y = y || 'world';
    console.log(x, y);
}
log('hello') //hello world
log('hello', 'china') //hello china
log('hello', '') //hello world
// 改进
if (typeof y == undefined) {
    y = 'world';
}
// es6形式
function log(x, y = 'world') {
    console.log(x, y);
}
log('hello') //hello world
log('hello', 'china') //hello china
// 与解构赋值默认值结合使用
function foo({ x, y = 5 }) {
    console.log(x, y);
}
foo({}) //undefined 5
foo({ x: 1 }) //1,5
foo({ x: 1, y: 2 }) //1,2
foo() //报错

function m1({ x = 0, y = 0 } = {}) {
    return [x, y];
}
function m2({ x, y } = { x: 0, y: 0 }) {
    return [x, y];
}
// 函数的length属性
(function (a) { }).length // 1
    (function (a, b) { }).length //2
    (function (a, b = 1) { }).length //1
    (function (a = 1, b) { }).length //0
    (function (a, b = 1, c) { }).length //1
// 参数作用域
var x = 1;
function foo(x, y = function () { x = 2 }) {
    var x = 3;
    y();
    console.log(x);
}
foo() //3
x //1

// rest参数
function add(...values) {
    let sum = 0;
    for (var val of values) {
        sum += val;
    }
    return sum;
}
add(2, 3, 5) //10

function sortNumbers() {
    return Array.prototype.slice.call(arguments).sort();
}
const sortNumbers = (...numbers) => numbers.sort();
// rest参数变量代表一个数组,可以使用数组方法
function push(array, ...items) {
    items.forEach((item) => {
        array.push(item);
        console.log(item);
    })
}
// name属性
var f = function () { }
f.name //''es5
f.name //f es6
var f1 = function f2() { }
f1.name //f2 es5 es6

// 箭头函数
function foo() {
    setTimeout(() => {
        console.log({ id: this.id });
    }, 100);
}
var id = 21;
foo.call(this, { id: 42 }) //42

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => { this.s1++; }, 100);
    // 普通函数
    setInterval(function () { this.s2++ }, 100);
}
var timer = new Timer();
setTimeout(() => {
    console.log(timer.s1);
}, 3000);
//s1:3
setTimeout(() => {
    console.log(timer.s2);
}, 3000);
//s2:0

var handle = {
    id: 123,
    init: function () {
        document.addEventListener('click');
        e >= this.dosomething(e.type, false)
    },
    dosomething() {
        console.log('hhh');
    }
}

// 绑定this
function bar() { };
let foo = {};
// foo::bar;
bar.bind(foo)
// foo::bar(...arguments)
bar.apply(foo, arguments);

// 尾调用优化
function f() {
    let m = 1;
    let n = 2;
    return g(m + n);
}
function f() {
    return g(3);
}
// g(3);

// 尾递归
function fib(n) {
    if (n <= 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
function fib(n,s1=1,s2=1){
    if(n<=1){
        return s1;
    }
    return fib(n-1,s2,s1+s2);
}