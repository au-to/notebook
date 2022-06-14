class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.heap = [];
    }
    getLeftIndex(index) {
        return 2 * index + 1;
    }
    getRightIndex(index) {
        return 2 * index + 2;
    }
    getParentIndex(index) {
        if (index == 0) {
            return undefined;
        } else {
            return Math.floor((index - 1) / 2);
        }
    }

    // 向堆中插入值
    insert(value) {
        if (value != null) {
            this.heap.push(value);
            this.shiftUp(this.heap.length - 1);
            return true;
        }
        return false;
    }
    // 上移
    shiftUp(index) {
        let parent = this.getParentIndex(index);
        while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) > this.compare.BIGGER_THAN) {
            swap(this.heap, parent, index);
            index = parent;
            parent = this.getParentIndex(index);
        }
    }
    swap(array, a, b) {
        const temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }

    // 从堆中找到最小值或最大值
    findMinNum() {
        return this.heap[0] == undefined ? undefined : this.heap[0];
    }

    // 移除堆中的最小值或者最大值
    extract() {
        if (this.isEmpty()) {
            return undefined;
        }
        if (this.size() == 1) {
            return this.heap.shift();
        }
        const removeValue = this.heap.shift();
        this.heap[0] = this.heap.pop();
        this.shifDown(0);
        return removeValue;
    }
    // 下移操作
    shifDown(index) {
        let element = index;
        const left = this.getLeftIndex(index);
        const right = this.getRightIndex(index);
        const size = this.size();
        if (left < size && (this.heap[left] > this.element)) {
            element = left;
        }
        if (right < size && this.heap[right] > this.element) {
            element = right;
        }
        if (index != element) {
            this.swap(this.heap, index, element);
            this.shifDown(element);
        }
    }
}

class MaxHeap extends MinHeap {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = reverseCompare(compareFn);
    }
}

// 堆排序
function heapSort(array, compareFn = defaultCompare) {
    let heapSize = array.length;
    buildMaxHeap(array, compareFn);
    while (heapSize > 1) {
        swap(array, 0, heapSize--);
        heapify(array, 0, heapSize, compareFn);
    }
    return array;
}

function buildMaxHeap(array, compareFn) {
    for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
        heapify(array, i, array.length, compareFn);
    }
    return array;
}