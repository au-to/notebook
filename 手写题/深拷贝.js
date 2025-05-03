// 基础版本（不支持循环引用）

function deepCloneBasic (obj) {
  if (obj === null || typeof obj !== 'object') return obj

  const result = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepCloneBasic(obj[key])
    }
  }

  return result
}


// 进阶版本（处理循环引用）

function deepClone (obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj

  if (map.has(obj)) return map.get(obj)

  const clone = Array.isArray(obj) ? [] : {}
  map.set(obj, clone)

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], map)
    }
  }

  return clone
}
