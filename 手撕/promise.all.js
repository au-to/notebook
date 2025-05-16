// 实现 myPromiseAll(promises)，满足：

// 所有 Promise 全部成功时，返回一个新的 Promise，值为每个结果组成的数组；

// 有任意一个失败时，立即 reject；

// 输入可以是 Promise 或普通值（自动转换为已成功的 Promise）；

// 保证返回数组的顺序与输入顺序一致。


function myPromiseAll (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('参数必须为数组'))
    }

    const res = []
    let count = 0
    const total = promises.length

    if (total === 0) return resolve([])

    promises.forEach((p, index) => {
      Promise.resolve(p).then((value) => {
        res[index] = value
        count++
        if (count === total) {
          resolve(res) // 所有都成功
        }
      }).catch((error) => {
        return reject(error) // 任意失败立即抛出
      })
    })
  })
}