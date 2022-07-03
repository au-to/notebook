const _items = Symbol('stackItems');
class Stack {
    constructor() {
        this[_items] = [];
    }
}

// 用es6的weakMap实现类
const items = new WeakMap();
class Stack{
    constructor(){
        items.set(this,[]);
    }
}