var add = function (a, b) {
  let sum, carry;
  do {
    // 第一步  相加不考虑进位
    sum = a ^ b;
    // 第二步  进位
    carry = (a & b) << 1;
    // 第三步 把前两步的结果相加
    a = sum;
    b = carry;
  } while (b != 0);
  return a;
};