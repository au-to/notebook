/*
给定两个字符串 s 和 p，找到 s 中所有 p 的变位词的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
变位词 指字母相同，但排列不同的字符串。
/*

输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的变位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的变位词。

输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的变位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的变位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的变位词。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/VabMRr
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// 滑动窗口
// 根据题目要求，我们需要在字符串 s 寻找字符串 p 的变位词。
// 因为字符串 p 的变位词的长度一定与字符串 p 的长度相同，
// 所以我们可以在字符串 s 中构造一个长度为与字符串 p 的长度相同的滑动窗口，
// 并在滑动中维护窗口中每种字母的数量；当窗口中每种字母的数量与字符串 p 中每种字母的数量相同时，
// 则说明当前窗口为字符串 p 的变位词。

var findAnagrams = function (s, p) {
  const sLen = s.length, pLen = p.length;

  if (sLen < pLen) {
    return [];
  }

  const ans = [];
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);
  for (let i = 0; i < pLen; ++i) {
    ++sCount[s[i].charCodeAt() - 'a'.charCodeAt()];
    ++pCount[p[i].charCodeAt() - 'a'.charCodeAt()];
  }

  if (sCount.toString() === pCount.toString()) {
    ans.push(0);
  }

  for (let i = 0; i < sLen - pLen; ++i) {
    --sCount[s[i].charCodeAt() - 'a'.charCodeAt()];
    ++sCount[s[i + pLen].charCodeAt() - 'a'.charCodeAt()];

    if (sCount.toString() === pCount.toString()) {
      ans.push(i + 1);
    }
  }

  return ans;
};
