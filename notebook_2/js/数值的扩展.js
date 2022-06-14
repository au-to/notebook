// 其他进制转为10进制
Number(0b111) // 7
Number(0o10) // 8

// Number.isFinite() 检查一个数组是否有限
Number.isFinite(1) //true
Number.isFinite(NaN) //false
Number.isFinite('foo') //false
Number.isFinite(true) //false

// Number.isNaN() 用来检查一个值是否是NaN
Number.isNaN(NaN) // true
Number.isNaN(9 / NaN) //true
Number.isNaN('str1' / 'str2') //true
Number.isNaN('str' / 0) //true

// Number.parseInt()
// Number.parseFloat()