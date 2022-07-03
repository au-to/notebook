// async 本质上是generator函数的语法糖
// async 对generator的改进
// 内置执行器
// 语义化
// yield后可以是thunk函数或promise对象
// 而async后可以是primise或其他原始类型值
// 返回promise

async function getStockPriceByName(name) {
    var symbol = await getStockSymbol(name);
    var stockPrice = await getStockPrice(symbol);
    return stockPrice;
}
getStockPriceByName('good').then(function (result) {
    console.log(result);
})

function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}
async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}
async function timeout(ms) {
    await new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}
async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
}
async function f() {
    return 'hello';
}
f().then((v) => {
    console.log(v); //hello
})
async function f() {
    throw new Error('出错了');
}
f().then(e => console.log(e)); //出错了 
async function getTitle(url) {
    let response = await fetch(url);
    let html = await response.text();
    return html.match()
}
getTitle('http...');
async function f() {
    await Promise.reject('出错了');
}
f().then().catch(e => console.log(e)); //出错了
async function f() {
    try {
        await Promise.reject('出错了');
    } catch (e) {
        console.log(e);
    }
    return await Promise.resolve('hello');
}
f().then(v => {
    console.log(v); //出错了 hello
})
async function f() {
    try {
        await new Promise(function (resolve, reject) {
            throw new Error('出错了')
        })
    } catch (e) {
        console.log(e);
    }
    return 'hello';
}
// let foo = await getFoo();
// let bar = await getBar();
// let [foo, bar] = await Promise.all([getFoo(), getBar()]);
async function dbFuc(db) {
    let docs = [{}, {}, {}];
    let Promises = docs.map((doc) => { db.post(doc) })
    let result = await Promise.all(Promises);
    console.log(result);
}

function chainAnimationsPromise(elem, animations) {
    var ret = null;
    var p = Promise.resolve();
    for (var anim of animations) {
        p = p.then(function (val) {
            ret = val;
            return anim(elem);
        });
    }
    return p.catch(function (e) {
        console.log('');
    }).then(function () {
        return ret;
    })
}

// 依次读取一组远程url，按读取顺序输出结果
function logInorder(urls) {
    // 远程读取所有url
    const textPromises = urls.map(url => {
        return fetch(url).then(response => response.text());
    });
    // 按次序输出
    textPromises.reduce((chain, textPromise) => {
        return chain.then(() => textPromise).then(text => console.log(text));
    })
    return Promise.resolve();
}
async function logInorder(urls) {
    const textPromises = urls.map(async url => {
        const response = await fetch(url);
        return response.text();
    });
    for (const textPromise of textPromises) {
        console.log(await textPromise);
    }
}

// 异步遍历器
const asyncIterable = createAsyncIterable(['a', 'b']);
const asyncIterator = asyncIterable[symbol.asyncIterator]();
asyncIterator.next()
    .then(iterResult1 => {
        console.log(iterResult1);
        return asyncIterator.next();
    })
    .then(iterResult2 => {
        console.log(iterResult2);
        return asyncIterator.next();
    })
    .then(iterResult3 => {
        console.log(iterResult3);
    })