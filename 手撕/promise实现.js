class MyPromise {
  constructor(executor) {
    this.state = 'pending'
    this.value = undefined
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.onFulfilledCallbacks.forEach(fn => fn())
      }
    }

    const reject = (reson) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.value = reson
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then (onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handler = (fn) => {
        queueMicrotask(() => {
          try {
            const x = fn(this.value)
            resolve(x)
          } catch (error) {
            reject(error)
          }
        })
      }

      if (this.state === 'fulfilled') {
        handler(onFulfilled)
      } else if (this.state === 'rejected') {
        handler(onRejected)
      } else {
        this.onFulfilledCallbacks.push(() => handler(onFulfilled))
        this.onRejectedCallbacks.push(() => handler(onRejected))
      }
    })
  }
}