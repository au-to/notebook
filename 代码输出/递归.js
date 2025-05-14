// 输出为：['123ac', '123ad', '123ae', '123af', '123bc', '123bd', '123be', '123bf']

const arr = ['1', '2', '3', ['a', 'b'], ['c', 'd', 'e', 'f']]
function fn (arr) {
  // 存储最终结果
  const result = []
  
  // 辅助函数来递归构建组合
  function combine(index, current) {
    // 如果已经处理完所有元素，将当前组合加入结果
    if (index === arr.length) {
      result.push(current)
      return
    }
    
    // 获取当前需要处理的元素
    const item = arr[index]
    
    // 如果当前元素是数组，则遍历这个数组
    if (Array.isArray(item)) {
      for (let i = 0; i < item.length; i++) {
        combine(index + 1, current + item[i])
      }
    } else {
      // 如果当前元素不是数组，直接添加到当前组合
      combine(index + 1, current + item)
    }
  }
  
  // 从第一个元素开始，初始组合为空字符串
  combine(0, '')
  return result
}

// 测试函数
console.log(fn(arr))