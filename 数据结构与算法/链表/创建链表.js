function defaultEquals(a, b) {
    return a === b; //相等性比较
}

// 定义链表节点
class Node {
    constructor(element) {
        this.element = element; //加入链表元素的值
        this.next = undefined; //指向下一个元素的指针
    }
}

// 初始化链表
class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0; //存储链表的元素数量
        this.head = undefined; //指向头结点的指针
        this.equalsFn = equalsFn; //比较元素是否相等
    }

    // 向链表尾部添加元素
    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
            this.head = node; //头指针指向第一个结点
        } else {
            current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    // 从链表中移除元素
    // 从特定位置移除一个元素
    removeAt(index) {
        // 检查越界值
        if (index >= 0 && index < this.count) {
            let current = this.head;
            // 移除第一项
            if (index === 0) {
                this.head = current.next;
            } else {
                let pre;
                for (let i = 0; i < index; i++) {
                    pre = current;
                    current = current.next;
                }
                // 将pre和current的下一项连接起来，跳过current
                pre.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    // 循环迭代链表直到目标位置
    getElementAt(index) {
        if (index >= 0 && index < this.count && current != null) {
            let current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            return current;
        }
        return undefined;
    }

    // 重构remove方法
    remove(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            // 移除第一个元素
            if (index === 0) {
                this.head = current.next;
            } else {
                let pre = this.getElementAt(index - 1);
                current = pre.next;
                pre.next = current.next;
            }
            this.count--;
        }
        return undefined;
    }

    // 在任意位置插入元素
    insert(index, element) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            // 在第一个位置添加元素
            if (index === 0) {
                let current = this.head;
                node.next = current;
                this.head = node;
            }
            else {
                let pre = this.getElementAt(index - 1);
                let current = pre.next;
                node.next = current;
                pre.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    // 返回一个元素的位置
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (element === current.element) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    // 从链表中移除元素
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    getHead() {
        return this.head;
    }

    // tostring方法
    toString() {
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.count && current != null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
}

// 双向链表
class DoublyNode extends Node {
    constructor(element, next, pre) {
        super(element, next);
        this.pre = pre;
    }
}
class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined;
    }

    // 在任位置插入新元素
    insert(index, element) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;
            // 头部插入
            if (index === 0) {
                // 头部为空
                if (this.head == null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    // 头部不为空
                    node.next = this.head;
                    current.pre = node;
                    this.head = node;
                }
            }
            // 末尾添加
            else if (index == this.count) {
                current = this.tail;
                current.next = node;
                node.pre = current;
                this.tail = node;
            }
            // 中间位置添加
            else {
                const pre = this.getElementAt(index - 1);
                current = pre.next;
                node.next = current;
                pre.next = node;
                current.pre = node;
                node.pre = pre;
            }
            this.count++;
            return true;
        }
        return false;
    }

    // 从任意位置移除元素
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            // 移除开头第一个元素
            if (index === 0) {
                this.head = current.next;
                // 如果只有一项
                if (this.count == 1) {
                    this.tail = undefined;
                } else {
                    this.head.pre = undefined;
                }
            }
            // 最后一项
            else if (index == this.count - 1) {
                current = this.tail;
                this.tail = current.pre;
                this.tail.next = undefined;
            }
            // 中间位置
            else {
                current = this.getElementAt(index);
                const pre = current.pre;
                pre.next = current.next;
                current.next.pre = pre;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}

// 循环链表
class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
    }

    // 在任意位置插入新元素
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    node.next = this.head;
                } else {
                    node.next = current;
                    current = this.getElementAt(this.size());
                    // 更新最后一个元素
                    this.head = node;
                    current.next = this.head;
                }
            }
            else {
                const pre = this.getElementAt(index - 1);
                node.next = pre.next;
                pre.next = node;
            }
            this.count--;
            return true;
        }
        return false;
    }

    // 从任意位置移除元素
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index == 0) {
                if (this.size() == 1) {
                    this.head = undefined;
                } else {
                    const removed = this.head;
                    current = this.getElementAt(this.size());
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            } else {
                const pre = this.getElementAt(index - 1);
                current = pre.next;
                pre.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
}

// 有序链表
function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? -1 : 1
}
class SortedLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn;
    }

    // 有序插入元素
    insert(element, index) {
        if (this.isEmpty()) {
            return super.insert(element, 0);
        }
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos);
    }

    getIndexNextSortedElement(element) {
        let current = this.head;
        for (let i = 0; i < this.size() && current; i++) {
            const comp = this.compareFn(element, current.element);
            if (comp == -1) {
                return i;
            }
            current = current.index;
        }
        return i;
    }
}

// 用链表实现栈
class StackLinkedList {
    constructor() {
        this.items = new DoublyLinkedList();
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.removeAt(this.size() - 1);
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.getElementAt(this.size() - 1).element;
    }
    isEmpty() {
        return this.items.isEmpty();
    }
    size() {
        return this.items.size;
    }
    clear() {
        this.items.clear();
    }
    toString() {
        return this.items.toString();
    }
}