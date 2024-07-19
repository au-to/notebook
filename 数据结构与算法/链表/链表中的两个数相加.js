// 给定两个 非空链表 l1和 l2 来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

// 可以假设除了数字 0 之外，这两个数字都不会以零开头。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/lMSNwu
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 反转链表
var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let cur = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return cur;
};
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  l1 = reverseList(l1);
  l2 = reverseList(l2);
  const addReversed = (l1, l2) => {
    let dummy = new ListNode(0);
    let sumNode = dummy;
    let carry = 0;
    while (l1 != null || l2 != null) {
      let sum = (l1 == null ? 0 : l1.val) + (l2 == null ? 0 : l2.val) + carry;
      if (sum >= 10) {
        carry = 1;
        sum -= 10;
      } else {
        carry = 0;
      }
      let newNode = new ListNode(sum);
      sumNode.next = newNode;
      sumNode = sumNode.next;
      l1 = l1 == null ? null : l1.next;
      l2 = l2 == null ? null : l2.next;
    }
    if (carry > 0) {
      sumNode.next = new ListNode(carry);
    }
    return dummy.next;
  };
  let reverseHead = addReversed(l1, l2);
  return reverseList(reverseHead);
};

// 栈方法
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let stack1 = [],
    stack2 = [];
  // 分别遍历两个链表 加入对应栈中  出栈的时候正好反序了
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let p = null;
  let carry = 0;
  while (stack1.length || stack2.length || carry) {
    let sum = (stack1.pop() || 0) + (stack2.pop() || 0) + carry;
    let newNode = new ListNode(sum % 10);
    // 新节点的next指向前一个节点
    newNode.next = p;
    // 往后走一步
    p = newNode;
    carry = ~~(sum / 10);
  }
  return p;
};