// 请编写一个函数，用于 删除单链表中某个特定节点 。
// 在设计函数时需要注意，你无法访问链表的头节点 head ，只能直接访问 要被删除的节点 。
// 题目数据保证需要删除的节点 不是末尾节点 。

// 输入：head = [4,5,1,9], node = 5
// 输出：[4,1,9]

var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};