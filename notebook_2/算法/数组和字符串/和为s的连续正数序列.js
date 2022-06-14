/*
先把数分解9=1+8=2+7=3+6=4+5,按这种，找到可能组成正确结果的数组，
根据分解的结果，易知结果可能存在[1,2,3,4,5]中，不难发现数组最后一个数,
如果target是偶数就是target/2,如果是奇数就是target/2取整加一，
即Math.floor(target/2)+1;
再对找到的数组采用滑动窗口模型，找出答案。
*/

var findContinuousSequence = function (target) {
    let index = target % 2 === 0 ? target / 2 : (target / 2 | 0) + 1
    let res = []
    let temp = []
    let sum = 0
    for (let i = 1; i <= index; i++) {
      temp.push(i)
      sum = sum + i
      while (sum > target) {
        sum -= temp[0]
        temp.shift()
      }
      if (sum === target) {
        temp.length >= 2 && res.push([...temp])
      }
    }
    return res;
  };
  