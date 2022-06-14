var MycircularQueue = function (k) {
    this.list = Array(k);
    this.front = 0;
    this.real = 0;
    this.max = k;
};

MycircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) {
        return false;
    } else {
        this.list[this.real] = value;
        this.real = this.real + 1;
        return true;
    }
}

MycircularQueue.prototype.deQueue() = function () {
    let v = this.list[this.front];
    this.list[this.front] = undefined;
    if (v !== undefined) {
        this.front = this.front + 1;
        return true;
    } else {
        return false;
    }
}

MycircularQueue.prototype.Front = function () {
    if (this.list[this.Front.front] == undefined) {
        return -1;
    } else {
        return this.list[this.front];
    }
}

MycircularQueue.prototype.Real = function () {
    let real = this.real - 1;
    if (this.list[real < 0 ? this.max - 1 : real] == undefined) {
        return -1;
    } else {
        return this.list[this.real < 0 ? this.max - 1 : real];
    }
}

MycircularQueue.prototype.isEmpty = function () {
    return this.fron === this.real && !this.list[this.front];
}

MycircularQueue.prototype.isFull = function () {
    return (this.front === this.real) && !this.list[this.front];
}