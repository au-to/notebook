let sym = Symbol();
let mySym = Object(sym);
console.log(mySym);
console.log(sym);
let myboolean = new Boolean();
console.log(myboolean);
// 创建新符号
let symFoo = Symbol.for('foo');
// 重用已有符号
let myFoo = Symbol.for('foo')
console.log(myFoo == symFoo);
let s = Symbol.keyFor(myFoo);
console.log(s);
// 使用符号作为属性
let s1 = Symbol('foo');
let s2 = Symbol('bar');
let s3 = Symbol('baz');
let s4 = Symbol('qux');
let obj = {
    [s1]: 'fooValue',
    [s2]: 'barValue',
}
Object.defineProperty(obj, s3, { value: 'bazValue' })
Object.defineProperty(obj, s4, { value: 'quxValue' })
console.log(obj);
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
let o = {
    [Symbol('foo')]: 'fooValue',
    [Symbol('bar')]: 'barValue'
}