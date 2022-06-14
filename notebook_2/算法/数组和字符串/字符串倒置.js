var reverseWords = function(s) {
    const ret = [];
    const length = s.length;
    let i = 0;
    while (i < length) {
        let start = i;
        while (i < length && s.charAt(i) != ' ') {
            i++;
        }
        for (let p = start; p < i; p++) {
            ret.push(s.charAt(start + i - 1 - p));
        }
        while (i < length && s.charAt(i) == ' ') {
            i++;
            ret.push(' ');
        }
    }
    return ret.join('');
};
