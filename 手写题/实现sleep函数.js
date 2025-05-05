// 目的: 创建一个函数，调用后能暂停执行指定时间。

function sleep (time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}