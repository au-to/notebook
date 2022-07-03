// 分离链接：为散列表的每一个位置创建一个链表并将值存储在里面
class HashTable {
    constructor() {
        this.tostrFn = tostrFn;
        this.table = {};
    }

    put(key, value) {
        if (key !== null && value !== null) {
            const position = this.hashCode(key);
            if (this.table[position] == null) {
                this.table[position] = new LinkedList();
            }
            this.table[position].push(new valuePair(key, value));
            return true;
        }
    }

    get(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if (linkedList !== null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current !== null) {
                if (current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
        }
        return undefined;
    }
}

// 线性探查
// 更好的散列函数
function hashCode(key) {
    const tableKey = this.tostrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
        hash = hash * 33 + tableKey.charCodeAt(i);
    }
    return hash % 1013;
}