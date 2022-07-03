// 父类
class vehicle {
    constructor() {
        this.hasEngine = true;
    }
    static fn() {
        console.log('父类静态方法');
    }
}
// 子类继承父类
class bus extends vehicle {
    constructor() {
        // 调用父类构造函数
        super();
        console.log(this instanceof vehicle);//true
        console.log(this);//bus
    }
    // 调用父类静态方法
    static fn() {
        super.fn();
    }
}
new bus();

// 抽象基类
class vehicle {
    constructor() {
        console.log(new.target);
        if (new.target == vehicle) {
            throw new Error('错误');
        }
    }
}
// 派生类
class bus extends vehicle { };
new bus();
new vehicle();

// 类混入
class vehicle { };
function getParentClass() {
    return vehicle;
}
class bus extends getParentClass() {
    // 可求值表达式
}


// 类混入
class vehicle { }
let FooMixin = (superclass) => class extends superclass {
    foo() {
        console.log('foo');
    }
};
let BarMixin = (superclass) => class extends superclass {
    bar() {
        console.log('foo');
    }
}
let BazMixin = (superclass) => class extends superclass {
    baz() {
        console.log('baz');
    }
}
class bus extends FooMixin(BarMixin(BazMixin(vehicle))) { };
let b = new bus();