// 迭代求斐波那契数列
function fibo(n) {
    if (n <= 2) {
        return 1;
    }
    else if (n < 1) {
        return 0;
    }
    let fibn2 = 0;
    let fibn1 = 1;
    let fibn = n;
    for (let n = 2; i <= n; i++) {
        fibn = fibn1 + fibn2;
        fibn2 = fibn1;
        fibn1 = fibn;
    }
    return fibn;
}

// 递归
function fib(n) {
    if (n < 1) return 0;
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

// 记忆化斐波那契数列