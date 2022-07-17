// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，
// 使得 a + b + c = 0 ？请找出所有和为 0 且 不重复 的三元组。

 var threeSum = function(nums) {
  if (nums.length < 3) return []

  nums.sort((a, b) => a - b)
  res = []
  for (let i = 0; i < nums.length - 2; i++) {
      // 去重
      if (i > 0 && nums[i] == nums[i - 1]) continue

      const target = -nums[i]
      let left = i + 1, right = nums.length - 1
      while (left < right) {
          const sum = nums[left] + nums[right]
          if (sum == target) {
              res.push([nums[i], nums[left], nums[right]])
              /*
              下面的代码相当于：
              while (left < right) {
                  // 不管前后相不相等，left 都要往前走
                  left++;
                  if (nums[left - 1] != nums[left]) break;
              }
              while (left < right) {
                  // 不管前后相不相等，right 都要往后走
                  right--;
                  if (nums[right + 1] != nums[right]) break;
              }
              */
              // 去重
              while (left < right && nums[left] == nums[++left]);
              while (left < right && nums[right] == nums[--right]);
          } else if (sum < target) {
              left++
          } else {
              right--
          }
      }
  }
  return res
};