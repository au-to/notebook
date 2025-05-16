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


// 进阶版本（处理特殊的数据类型和循环引用的问题）
function deepClone (obj, map = new WeakMap) {
  if (obj === null || typeof obj !== 'object') return obj

  // 处理Date对象
  if (obj instanceof Date) return new Date(obj)
  
  // 处理RegExp对象
  if (obj instanceof RegExp) return new RegExp(obj)
  
  // 处理循环引用，如果已经拷贝过这个对象，直接返回缓存的拷贝
  if (map.has(obj)) return map.get(obj)
  
  // 根据类型创建新的对象或数组
  const res = Array.isArray(obj) ? [] : {}

  // Reflect.ownKeys()可以拷贝Symbol类型的key
  Reflect.ownKeys(obj).forEach(key => {
    // 递归拷贝子属性
    obj[key] = deepClone(obj[key], map)
  })

  return res
}