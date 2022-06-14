// 斐波那契数列
const fib = [];
fib[1] = 1;
fib[2] = 2;
for (let i = 3; i < 20; i++) {
    fib[i] = fib[1 - 1] + fib[i - 2];
}
for (let i = 1; i < fib.length; i++) {
    console.log(fib[i]);
}

// 向数组开头添加元素;this指向调用该函数的数组
Array.prototype.addBegin = function (value) {
    for (let i = this.length; i > 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
}
//或者调用unshift()方法
const array = [1, 2, 3]
array.unshift(0)  // [0,1,2,3]
// 从数组末尾添加元素
array[array.length] = value; //value为要添加的元素值
//调用push方法
array.push(1, 2, 3) //可同时添加多个元素

// 从数组中删除元素
//删除末尾元素，调用pop()方法；
// 从开头删除一个元素，调用shift()