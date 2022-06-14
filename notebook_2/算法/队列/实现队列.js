// 使用对象实现队列
class Queue {
    constructor() {
        this.count = 0; //控制队列大小
        this.lowestCount = 0; //标识队头
        this.items = {}; //存储队列元素
    }
    // 向队尾添加元素
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    // 从队头移除元素
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount]; //暂存队头元素
        delete this.items[this.lowestCount]; //删除队头元素
        this.lowestCount++; //队头加1
        return result; //返回删除队头
    }

    // 查看队头元素
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    // 检查队列是否为空
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }

    // 获取队列长度
    size() {
        return this.count - this.lowestCount;
    }

    //清空队列
    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    // 创建toString方法
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

// 双端队列
// 允许我们同时从前端和后端添加和移除元素
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    // 向双端队列前端添加元素
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        }
        else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
        }
        this.count++;
        this.lowestCount = 0;
        this.items[0] = element;
    }
}

// 循环队列，击鼓传花游戏
function hotPotato(elementsList, num) {
    const queue = new Queue();
    const eliminatedList = [];
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]);
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminatedList.push(queue.dequeue());
    }
    return {
        eliminated: eliminatedList,
        winner: queue.dequeue()
    }
}

// 回文检查,双端队列
function check(string) {
    if (string == undefined || string == null || (string !== null && string.length == 0)) {
        return false;
    }
    const deque = new Deque();
    const lowerString = string.toLocaleLowerCase().split(' ').join('');
    let isEqual = true;
    let firstChar, lastChar;
    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i))
    }
    while (deque.size() < 1 && isEqual) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        if (firstChar !== lastChar) {
            isEqual = false;
        }
    }
    return isEqual;
}