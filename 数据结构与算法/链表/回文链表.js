// 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。
// 如果是，返回 true ；否则，返回 false 

// 输入：head = [1,2,2,1]
// 输出：true

var isPalindrome = function (head) {
  const vals = [];
  while (head !== null) {
    vals.push(head.val);
    head = head.next;
  }
  for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
    if (vals[i] !== vals[j]) {
      return false;
    }
  }
  return true;
};
