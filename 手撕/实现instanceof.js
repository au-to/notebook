// instanceof: 判断某个对象是否是某个构造函数的实例

function myInstanceof (left, right) {
  // 基本类型直接返回false
  if (left === null || typeof left !== 'object') return false
  
  // right必须是函数类型
  if (typeof right !== 'function') {
    throw new Error('right 必须是函数')
  }

  // 获取对象的原型
  let proto = Object.getPrototypeOf(left)

  // 获取构造函数的 prototype 对象
  const prototype = right.prototype

  // 沿着原型链向上查找
  while (proto !== null) {
    // 如果找到了构造函数的prototype对象，则返回true
    if (proto === prototype) {
      return true
    }

    // 继续向上查找
    proto = Object.getPrototypeOf(proto)
  }

  // 到达原型链顶端仍然没有找到
  return false
}