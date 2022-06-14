var MyQueue = function () {
    this.inStack = [];
    this.outStack = [];
};

MyQueue.prototype.push = function (x) {
    this.inStack.push(x);
};

MyQueue.prototype.pop = function () {
    if (!this.outStack.length) {
        this.in2out();
    }
    return this.outStack.pop();
};

MyQueue.prototype.peek = function () {
    if (!this.outStack.length) {
        this.in2out();
    }
    return this.outStack[this.outStack.length - 1];
};

MyQueue.prototype.empty = function () {
    return this.outStack.length === 0 && this.inStack.length === 0;
};

MyQueue.prototype.in2out = function () {
    while (this.inStack.length) {
        this.outStack.push(this.inStack.pop());
    }
};