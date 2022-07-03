// 数组的结构赋值 基本用法
let [a, b, c] = [1, 2, 3];
let [, , third] = ['a', 'b', 'c'] //third 'baz'
function* fibs() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

// 对象的解构赋值
let { foo, baz } = { foo: 'aaa', baz: 'bbb' };
// foo 'aaa'
// baz bbb
var { foo: hhh } = { foo: 'aaa', bar: 'bbb' } //hhh aaa

let { length: len } = 'hello';
console.log(len); //5

// 遍历map
let map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
    console.log(key + ':' + value);
}
//first: hello;
//second: world
for (let [key] of map) {

}
for (let [, value] of map) {

}