let num = 0;
let intervalId = null;
let incrementNumber = function () {
    num++;
    if (num == max) {
        clearInterval(intervalId);
    }
    alert('done');
}
intervalId = setInterval(incrementNumber, 500);
let num1 = 0;
let max = 10;
let incrementNumber1 = function () {
    if (num < max) {
        setTimeout(() => {
            num++;
        }, 500);
    }
    else {
        alert('done');
    }
}
setTimeout(() => {
    incrementNumber1();
}, 1000);

let qs = "?q=javascript&num=10";
let searchParams = new URLSearchParams(qs);
searchParams.toString();
searchParams.has('num');
searchParams.get('num');
searchParams.set('page', 3);
searchParams.delete('q')
// 操作地址
location.assign(URL);
location.href = URL;
window.location = URL;
location.replace(URL);
location.reload();
location.reload(true);//从服务器加载
