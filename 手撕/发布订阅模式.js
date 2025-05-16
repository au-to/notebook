// 发布订阅模式简介:

// 发布者（Publisher）：触发一个事件

// 订阅者（Subscriber）：对某个事件注册处理函数

// 事件中心（EventBus）：管理事件的订阅、发布与取消

// 它与观察者模式相似，但更解耦（发布者不关心订阅者是谁）

class EventBus {
  constructor() {
    this.events = {}
  }

  // 订阅
  on (eventName, handler) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(handler)
  }

  // 发布
  emit (eventName, ...args) {
    const handlers = this.events[eventName]
    if (handlers) {
      handlers.forEach(fn => fn(...args))
    }
  }

  // 取消订阅
  off (eventName, handler) {
    const handlers = this.events[eventName]
    if (handlers) {
      this.events[eventName].filter(fn => fn !== handler)
    }
  }

  // 一次性订阅
  once (eventName, handler) {
    const onceHandler = (...args) => {
      handler(...args) // 执行原函数
      this.off(eventName, onceHandler) // 自我销毁
    }

    this.on(eventName, onceHandler) // 作为普通函数注册
  }
}