// 请实现一个函数：返回异步操作的结果，若异步操作失败，可以延迟一段时间后重新执行，但最多只能执行maxTryNum次，如果都失败则抛出错误

/**
 * @param {*} fn 异步操作函数，返回一个promise
 * @param {*} maxTryNum 最多可重试的次数
 * @param {*} delay 延迟执行时间
 */
function delayFn (fn, maxTryNum, delay) {
  return new Promise((resolve, reject) => {
    let count = 0

    const tryFn = () => {
      count++

      fn().then(() => resolve()).catch((err) => {
        if (count < maxTryNum) {
          setTimeout(() => {
            fn()
          }, delay)
        } else {
          reject(err)
        }
      })
    }

    tryFn()
  })
}