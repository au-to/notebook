/*
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。
求所有子数组的和的最大值。
要求时间复杂度为O(n)。

输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6
*/


// pre表示前i个数最大和，
// nums保存前i个数最大和
var maxSubArray = function(nums) {
    let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};