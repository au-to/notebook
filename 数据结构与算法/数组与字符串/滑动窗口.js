var minSubArrayLen = function (target, nums) {
    const n = nums.length;
    // S1 初始化窗口左右指针、窗口长度结果以及当前窗口和
    let left = 0;
    let right = 0;
    let ans = Infinity;
    let sum = 0;
    // S2 模拟像右滑动
    while (right < n) {
        // S3 寻找可行解
        sum += nums[right];
        right++;
        // S4 当已找到可行解时，缩小窗口以优化
        while (sum >= target) {
            // S4-1 更新结果值
            ans = Math.min(ans, right - left);
            // S4-2 缩小窗口
            sum -= nums[left];
            left++;
        }
    }
}