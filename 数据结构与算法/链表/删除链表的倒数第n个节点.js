//  通过快慢指针技巧拿到倒数第n个节点
// 当前解题思路只有3步
// 增加虚拟节点，并把虚拟节点指向head(之所以要增加虚拟头节点是为了要简化代码当中的非空判定，这是链表题目的通用套路)
// 让快指针向前先走n步
// 快慢指针同步齐步向前走直至快指针走到了链表末尾
// 这时慢指针的next刚好指向刚好指向倒数第n个结点，将它的next的指向next.next即达到了删除的效果
// 返回虚拟节点的next也就是head

var removeNthFromEnd = function (head, n) {
  // 增加虚拟节点为了简化非空代码判定
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let fast = dummyNode,
    slow = dummyNode;
  // 快指针先向前走n步
  while (n > 0 && fast && fast.next) {
    fast = fast.next;
    n--;
  }
  // 快慢指针同步向前齐步走
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  // 这时候慢指针的next刚好指向倒数第n个结点，将它的next的指向next.next即达到了删除的效果
  slow.next = slow.next.next;
  return dummyNode.next;
};