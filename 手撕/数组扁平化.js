// 递归遍历
function flatten1 (arr) {
  const res = []

  for (let item of arr) {
    if (Array.isArray(item)) {
      res.push(...flatten1(item))
    } else {
      res.push(item)
    }
  }

  return res
}



// 使用Array.prototype.flat()方法
function flatten2 (arr) {
  return arr.flat()
}



// 使用reduce加递归
function flatten3 (arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc.concat(flatten3(val))
    } else {
      return acc.concat(val)
    }
  }, [])
}


// 使用栈迭代
function flatten4 (arr) {
  const stack = [...arr]
  const res = []

  while (stack.length) {
    const item = stack.pop()

    if (Array.isArray(item)) {
      stack.push(...item)
    } else {
      res.unshift(item)
    }
  }

  return res
}