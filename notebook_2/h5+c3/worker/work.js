// 响应消息的事件处理函数
// 消息作为事件的data属性
onmessage = function (e) {
    const result = e.data[0] * e.data[1];
    if (isNaN(result)) {
        postMessage('请输入值')
    }else{
        const workerResult = result;
        postMessage(workerResult);
    }
}