/**
 * 防抖函数
 * @param {Function} func 需要防抖的函数
 * @param {number} wait 延迟执行的毫秒数
 * @param {boolean} immediate 是否立即执行一次 (第一次触发时执行，之后等待 wait 毫秒)
 * @returns {Function} 返回一个包装后的防抖函数
 */
function debounce(func, wait, immediate = false) {
  let timeout; // 定时器变量
  let result;  // 存储函数执行结果 (用于 immediate 为 true 的情况)

  return function(...args) {
    const context = this; // 保存 this 指向

    // 如果存在定时器，则清除之前的定时器
    if (timeout) {
      clearTimeout(timeout);
    }

    if (immediate) {
      // 如果需要立即执行
      const callNow = !timeout; // 检查是否是第一次触发 (timeout 为 null)
      // 设置定时器，wait 时间后将 timeout 清空，允许下一次立即执行
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      // 如果是第一次触发，则立即执行函数
      if (callNow) {
        result = func.apply(context, args);
      }
    } else {
      // 如果不需要立即执行 (常规防抖)
      // 设置新的定时器，延迟 wait 毫秒后执行函数
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
    // 如果是立即执行模式，返回上一次执行的结果
    return result;
  };
}

// --- 使用示例 ---
// function handleInput(e) {
//   console.log('Searching for:', e.target.value, 'this:', this);
// }
// const debouncedHandleInput = debounce(handleInput, 500, false);
// document.getElementById('myInput').addEventListener('input', debouncedHandleInput);