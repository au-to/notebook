var firstUniqChar = function (s) {
    let h = new Map, i = s.length
    while (i--) h.set(s[i], h.has(s[i]) ? h.get(s[i]) + 1 : 1)
    i = -1
    while (++i < s.length)
        if (h.get(s[i]) === 1)
            return i
    return -1
};
