// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

/* 
输入：head = [1,2]
输出：[2,1]
*/

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};