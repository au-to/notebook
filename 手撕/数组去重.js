// set()去重
function uniqueSet (arr) {
  return [...new Set(arr)]
}


// filter + indexOf
function uniqueFilter (arr) {
  const unitque = arr.filter((item, index) => {
    // 只保留该元素第一次出现的位置
    return arr.indexOf(item) === index
  })

  return unitque
}


// reduce + includes
function uniqueReduce (arr) {
  return arr.reduce((acc, cur) => {
    if (!acc.includes(cur)) acc.push(cur)
    return acc
  }, [])
}


// Map缓存
function uniqueMap (arr) {
  const map = new Map()

  return arr.filter((item) => {
    if (map.has(item)) return false
    map.set(item, true)
    return true
  })
}