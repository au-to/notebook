// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

/* 
输入：head = [1,2]
输出：[2,1]
*/

var reverseList = function (head) {
  let prev = null;
  let current = head;
  let next = null;
  while (current !== null) {
    next = current.next; // 保存当前节点的下一个节点
    current.next = prev; // 反转当前节点的指针
    prev = current; // 将pre更新为当前节点
    current = next; // 将current更新为下一个节点
  }
  return prev; // 返回头节点
};