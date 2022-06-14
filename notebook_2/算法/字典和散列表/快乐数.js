// 输入：n = 19
// 输出：true
// 解释：
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
let getNext = function (n) {
    return n.toString().split('').map(i => i ** 2).reduce((a, b) => a + b);
}
let isHappy = function (n) {
    let slow = n;
    let fast = getNext(n);
    while(fast !== 1 && fast !== slow){
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast === 1;
};