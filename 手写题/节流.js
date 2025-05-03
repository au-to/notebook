// 规定一段时间内，只允许函数执行一次；即固定频率触发

function throttle (fn, delay) {
  let lastTime = 0

  return function (...args) {
    const now = Data.now()

    if (now - lastTime >= delay) {
      lastTime = now
      fn.apply(this, args)
    }
  }
}