function test() {
    // 局部变量
    var message = 'hi';
}
test();
console.log(message); //出错

function test() {
    message = 'hi';
}
test();
console.log(message); //正确