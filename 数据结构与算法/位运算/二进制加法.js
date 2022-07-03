// 给定两个 01 字符串 a 和 b ，请计算它们的和，并以二进制字符串的形式输出。
var addStrings = function (num1, num2) {
  let res = ''
  let i1 = num1.length - 1
  let i2 = num2.length - 1
  let carry = 0
  while (i1 >= 0 || i2 >= 0) {
      const x = i1 >= 0 ? num1[i1] - '0' : 0
      const y = i2 >= 0 ? num2[i2] - '0' : 0

      const sum = x + y + carry
      res += (sum % 2)
      carry = Math.floor(sum / 2)

      i1--
      i2--
  }
  if (carry) res += carry
  return res.split("").reverse().join("")
};
