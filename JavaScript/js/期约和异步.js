// 异步返回值
function double(value, callback) {
    setTimeout(() => {
        callback(value * 2)
    }, 1000);
}
double(3, (x) => { console.log(`${x}`) });

// 失败处理
function double(value, success, failure) {
    setTimeout(() => {
        try {
            if (typeof value !== Number) {
                throw new Error('抛出错误');
            }
        } catch (error) {
            failure(error);
        }
    }, 1000);
}
// 期约
let p1 = new Promise((resolve, reject) => {
    resolve();
})
let p2 = new Promise((resolve, reject) => {
    reject();
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject();
    }, 1000);
})
//  实例化一个解决的期约
let p4 = Promise.resolve();
let p5 = new Promise(() => { })
setTimeout(() => {
    p5 === Promise.resolve(p5);//true
}, 1000);

// Promise.reject()
let p6 = new Promise((reject) => {
    reject();
})
let p7 = Promise.reject();

try {
    throw new Error('foo');
} catch (error) {
    console.log(error);
}
try {
    Promise.reject(new Error('foo'));
} catch (error) {
    console.log(error);
}
let q1 = Promise.resolve('foo');
let q2 = q1.then();
setTimeout(() => {
    console.log(q2); //foo
}, 1000);
let q3 = q1.then(() => { undefined });
let q4 = q1.then(() => { Promise.resolve });

