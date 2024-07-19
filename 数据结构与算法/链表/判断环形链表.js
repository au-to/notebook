// 给你一个链表的头节点 head ，判断链表中是否有环。
// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。

const hasCycle = function (head) {
  const res = [];
  while (head) {
    if (res.includes(head)) {
      return true;
    }
    res.push(head);
    head = head.next;
  }
  return false;
};
