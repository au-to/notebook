// 1.属性与函数简写
var birth = '1013';
var person = {
    birth,
    name: "zhao",
    hello() {
        return this.name;
    }
}
function get(x, y) {
    var x = 1;
    var y = 2;
    return { x, y }
}
//{x:1,y:2}
var cart = {
    car: 4,
    get car1() {
        return this.car;
    },
    set car1(value) {
        this.car = 'hhh'
    }
}
// 如果某个方法的值是一个生成器函数,则其前面需要加上*
var obj = {
    *m() {
        yield 'hello world'
    }
}
// 2.属性名表达式

// 3.方法的name属性
const obj = {
    get foo() { },
    set foo(x) { },
}
const descriptor = Object.getOwnPropertyDescriptors(obj, 'foo');
descriptor.get.name //get foo
descriptor.set.name //set foo

const key1 = Symbol('description');
const key2 = Symbol('');
let obj = {
    [key1]() { },
    [key2]() { },
}
obj[key1].name //'description'
obj[key2].name // ''

// 4.Object.is()
Object.is('foo', 'foo'); //true
Object.is({}, {});//false
Object.is(+0, -0) //false
Object.is(NaN, NaN) //true

// 5.Object.assign()
// 注意:Object.assign()实行浅复制
var obj1 = { a: { b: 1 } };
var obj2 = Object.assign({}, obj1);
obj1.a.b = 2;
// obj2.a.b = 2
var target = { a: { b: 'c', d: 'e' } };
var source = { a: { b: 'hello' } };
Object.assign(target, source);
//{a:{b:'hello'}}

// 6.Object.assign()的常见用途
// 为对象添加属性
class point {
    constructor(x, y) {
        Object.assign(this, { x, y });
    }
}
// 为对象添加方法
Object.assign(someClass.prototype, {
    someMethod(arg1, arg2) {
        return 'hhh';
    },
    anotherMethod() {
        return 'nnn';
    }
})
// 克隆对象
function clone(origin) {
    return Object.assign({}, origin);
}
// 合并多个对象
// 为属性指定默认值

// 6.属性的可枚举性
let obj = { foo: 123 };
Object.getOwnPropertyDescriptor(obj, 'foo');

// 7.属性的遍历

// 8._proto_属性
Object.defineProperty(Object.prototype, '_proto_', {
    get() {
        let _thisObj = Object(this);
        return Object.getPrototypeOf(_thisObj);
    },
    set(proto) {
        if (this === undefined || this === null) {
            throw new Error('错误');
        }
        if (!isObject(this)) {
            return undefined;
        }
        if (!isObject(proto)) {
            return undefined;
        }
        let status = Reflect.setPrototypeOf(this, proto);
        if (!status) {
            throw new Error('错误');
        }
    },
})
function isObject(value) {
    return Object(value) === value;
}
// setPrototypeOf()
Object.setPrototypeOf(Object, prototype);
var o = Object.setPrototypeOf({}, null);
function a(obj, proto) {
    obj._proto_ = proto;
    return obj;
}
let proto = {};
let obj = { x: 10 };
Object.setPrototypeOf(obj, proto);
proto.y = 20;
proto.z = 40;
obj.x //10
obj.y //20
obj.z //40
// Object.getPrototypeOf()
Object.getPrototypeOf(obj);
function rec() { }
var rec1 = new rec()
Object.getPrototypeOf(rec1) == rec.prototype; //true
// 10.Object.keys()
// Object.values()
// Object.entries()

// 10.对象的扩展运算符
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }
//x 1
// y: 2
// z {a:3,b:4}
let o1 = { a: 1 };
let o2 = { b: 2 };
o2._proto_ = o1;
let { ...o3 } = { o2 };
o3.b //2
o3.a //undifined

var obj = { x: 1, y: 2 }
var obk = Object.create(obj);
obk.z = 3;

const clone2 = Object.assign(
    Object.create(Object.getPrototypeOf(obj)),
    obj
)

// 11.Object.getOwnPropertyDescriptors()

// 12.null传导运算符