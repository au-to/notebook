// 选择排序
function sort(nums) {
    let indexMin;
    for (let i = 0; i < nums.length - 1; i++) {
        indexMin = i;
        for (let j = i; j < nums.length; j++) {
            if (nums[j < nums[indexMin]]) {
                indexMin = j;
            }
        }
        if (i !== indexMin) {
            [nums[i], nums[indexMin]] = [nums[indexMin], nums[i]]
        }
    }
    return nums;
}

// 归并排序
// 将多个大数组分成多个小数组
function mergeSort(nums) {
    let length = nums.length;
    if (length > 1) {
        const middle = Math.floor(length / 2);
        const left = mergeSort(nums.slice(0, middle));
        const right = mergeSort(nums.slice(middle, length));
        nums = merge(left, right)
    }
}
// 合并和排序小数组来产生大数组
function merge(left, right) {
    let i = 0, j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
        result.push()
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

const mergeSort = arr => {
    //采用自上而下的递归方法
    const len = arr.length;
    if (len < 2) {
        return arr;
    }
    // length >> 1 和 Math.floor(len / 2) 等价
    let middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle); // 拆分为两个子数组
    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    const result = [];

    while (left.length && right.length) {
        // 注意: 判断的条件是小于或等于，如果只是小于，那么排序将不稳定.
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) result.push(left.shift());

    while (right.length) result.push(right.shift());

    return result;
};