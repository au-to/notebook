/*

节点类

*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*

单链表类

*/
class LinkedList {
  constructor() {
    this.head = null; // 链表的头节点，初始化为null
  }

  // 向链表末尾添加节点
  append (value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
    }
    current.next = newNode;
  }

  // 从链表中删除指定的节点
  delete (value) {
    if (this.head === null) return
    // 如果删除的节点就是头节点
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next !== null && current.next.value !== value) {
      current = current.next;
    }
    if (current.next !== null) {
      current.next = current.next.next;
    }
  }

  // 打印链表
  print () {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.value + ' -> ';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}