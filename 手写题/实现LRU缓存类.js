// 实现一个 LRU 缓存类 LRUCache，支持以下操作：

// get(key)：如果 key 存在，返回对应值，并将其变为最近使用；

// put(key, value)：插入或更新 key，并设为最近使用；

// 超出容量时，删除最久未使用的 key。


class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()
  }

  get (key) {
    if (!this.cache.has(key)) return -1

    // 更新为最近使用的，先删除再重新设置
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)

    return value
  }

  put (key, value) {
    if (this.cache.has(key)) {
      // 删除旧的
      this.cache.delete(key)
    }

    this.cache.set(key, value)

    // 如果超出容量，移除最久未使用的（map中的第一个）
    if (this.cache.size > this.capacity) {
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }
  }
}