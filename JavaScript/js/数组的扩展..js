// 1.扩展运算符
console.log(...[1, 2, 3]);
console.log(1, ...[2, 3, 4], 5);
function push(array, ...items) {
    array.push(...items);
}
function add(x, y) {
    return x + y;
}
var numbers = [1, 2];
let num = add(...[numbers]);
console.log(num);

// 替代数组的apply方法1
Math.max.apply(null, [14, 3, 77]);
Math.max(...[14, 3, 77]);
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
Array.prototype.push.apply(arr1, arr2); //es5
arr1.push(...arr2) //es6

// 扩展运算符的应用
// 合并数组
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
arr1.concat(arr2) //es5
let res = [...arr1, ...arr2] //arr2
// 与解构赋值结合,只能放在最后
const [first, ...rest] = [1, 2, 3, 4, 5]

// 函数返回值
function add(...values){
    let s = 0;
    for(var val of values){
        s += val;
    }
}
add(1,2,3);
// 字符串转为数组
let str = 'abc';
[...str] //['a','b','c']
var hhh = str.split('').reverse().join('')
var hhh = [...str].reverse().join('');
// map
let map = new Map([
    [1,'one'],
    [2,'tow'],
    [3,'three']
])
let arr = [...map.keys()]; //[1,2,3]
// generator
var go = function*(){
    yield 1,
    yield 2,
    yield 3
}
let res1 = [...go()] //[1,2,3]

// 2.Array.from()
let arraylike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
}
let arr2 = Array.from(arraylike); //['a','b','c']
// NodeList对象
let ps = document.querySelectorAll('p');
Array.from(ps).forEach(function (p){
    console.log(p);
})
// arguments对象
function foo() {
    var args = Array.from(arguments);
    console.log(args);
}
Array.from('hello'); //['h','e','l','l','o']
 
// 3.Array.of()
Array.of(1,2,3) //[1,2,3]
Array.of()//[]
Array.of(undefined) //[undefiend]
Array.of(1) //[1]
Array.of(1,2) //[1,2]
let re = [].slice().call(this,arguments)

// 4.copywithin()
let res3 = [1,2,3,4,5].copyWithin(0,3);
console.log(res3); //[4,5,3,4,5]
[1,2,3,4,5].copyWithin(0,3) //[4,2,3,4,5]

// 5.find和findindex
[1,2,-2,10].find((n)=>{n<0}); //[-2]
[1,2,3,4,5].findIndex((n)=>{n>3});//[4]
[NaN].findIndex((y)=>{Object.is(NaN,y)});//判断两元素是否相等

// 6.fill()
[a,b,c].fill(7) //[7,7,7]
new Array.apply(3).fill(7) //[7,7,7]
['a','b','c'].fill(7,1,2) //['a','7','c']

// 7.entries,keys,values
for(let index of ['a','b'].keys()){
    console.log(index);
};
//0
//1
for(let elem of ['a','b'].values()){
    console.log(elem);
}
//'a'
//'b'
for(let [index,elem] of ['a','b'].keys()){
    console.log(index,elem);
}
//0 'a'
//1 'b'
let letters = ['a','b','c']
let entries = letters.entries()
console.log(entries.next().value); //[0,"a"]
console.log(entries.next().value); //[1,'b']

// 8.includes()
[1,2,3].includes(1) //true
[1,2,3].includes(1,2)//true

// 9.空位