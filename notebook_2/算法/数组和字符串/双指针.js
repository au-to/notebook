// 反转字符串
var reverseString = function (s) {
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
};
reverseString(['a', 'b', 'c', 'd']);

// 两数之和
// 暴力解法
var twoSum = function (numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
        }
    }
}
// 双指针
var twoSum = function (numbers, target) {
    let l = 0,
        r = numbers.length - 1;
    while (l < r) {
        if (numbers[l] + numbers[r] < target) l++;
        else if (numbers[l] + numbers[r] > target) r--;
        else if (numbers[l] + numbers[r] == target) return [l + 1, r + 1];
    }
}

// 移除元素
var removeElement = function(nums, val) {
    let left = 0, right = nums.length;
    while (left < right) {
        if (nums[left] === val) {
            nums[left] = nums[right - 1];
            right--;
        } else {
            left++;
        }
    }
    return left;
};