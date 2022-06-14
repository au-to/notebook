// 回调函数
function readFile() {
    // 执行异步操作
}
readFile('url', function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
})

// Promise
var readFile1 = require('url');
readFile1(fileA).then((data) => {
    console.log(data.toString());
}).then(() => {
    return readFile1(fileB);
}).then((data) => {
    console.log(data.toString());
}).catch((err) => {
    return err;
})

// generator()
function* gen(x) {
    var y = yield x + 2;
    return y;
}
var g = gen(1);
g.next(); //{value:3,done:false}
g.next() //{value:undefined,done:false}
// generator的数据交换和错误处理
function* gen(x) {
    var y = yield x + 2;
    return y;
}
var g = gen(1);
g.next() //{value:3,done:false}
g.next(2) //{value:2,done:true}
// 部署错误处理代码，捕获函数体外抛出的错误
function* gen(x) {
    try {
        var y = yield x + 2;
    } catch (e) {
        console.log(e);
    }
    return y;
}
var g = gen(1);
g.next()
g.throw('出错');
// 异步任务的封装
var fetch = require('node-fetch');
function* gen() {
    var url = 'http';
    var result = yield fetch(url);
    console.log(result.bio);
}
var g = gen();
var result = g.next();
result.value.then((data) => {
    return data.Json();
}).then((data) => {
    g.next(data);
})
// thunk函数转换器
var Thunk = function (fn) {
    return function () {
        var args = Array.prototype.slice.call(arguments);
        return function (callback) {
            args.push(callback);
            return fn.apply(this, args);
        }
    }
}
const Thunk = function (fn) {
    return function (...args) {
        return function (callback) {
            return fn.call(this, ...args, callback)
        }
    }
}
var g = gen();
var r1 = g.next();
r1.value((err, data) => {
    if (err) {
        throw err;
    }
    var r2 = g.next(data);
    r2.value((err, data) => {
        if (err) {
            throw err;
        }
        g.next(data);
    })
})

function run(fn) {
    var gen = fn();
    function next(err, data) {
        var result = gen.next(data);
        if (result.data) {
            return
        }
        next();
    }
    function* g() { }
}
run(g);