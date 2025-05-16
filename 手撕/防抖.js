// 只有停止触发一段时间之后才会执行一次，如果在这段时间内再次触发，会重新计时

function debounce (fn, delay) {
  let timer = null

  return function (...args) {
    if (timer !== null) {
      clearTimeout(timer)
    }

    setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}