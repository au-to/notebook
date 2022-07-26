const first = document.querySelector('#number1');
const second = document.querySelector('#number2');
const result = document.querySelector('.result');

if (window.Worker) {
    // 新建一个work线程
    const myWork = new Worker('./work.js');
    first.onchange = function () {
        myWork.postMessage([first.value, second.value]);
    }
    second.onchange = function () {
        myWork.postMessage([first.value, second.value]); // 向worker线程发送消息
    }
    myWork.onmessage = function (e) {
        result.textContent = e.data;
    }
} else {
    console.log('浏览器不支持work');
}