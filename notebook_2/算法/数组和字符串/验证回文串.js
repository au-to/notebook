var isPalindrome = function (s) {
    s = s.replace(/[\W|_]/g, "").toLowerCase();
    if (s.length < 2) {
        return true;
    }
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {//对撞指针判断左右两边是否是相同的字符
            return false;
        }
        left++;
        right--;
    }
    return true;
};