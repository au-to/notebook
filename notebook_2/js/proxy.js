// Proxy
// 在目标对象前架设一个拦截层，外界对该对象的访问都必须要通过这层拦截
// 提供了一种机制，可以对外界的访问进行过滤和改写

var proxy = new proxy(target, handler)
//target:目标对象 handler:拦截的行为

var obj = new Proxy({}, {
    get: function (target, key, reciver) {
        return Reflect.get(target, key, reciver);
    },
    set: function (target, key, value, reciver) {
        return Reflect.set(target, key, value, reciver)
    }
})

var proxy = new Proxy({}, {
    get: function (target, property) {
        return 35;
    }
})
proxy.name  //35

// 同一个拦截器可以拦截多个操作
var handler = {
    get: function (target, name) {
        if (name == 'prototype') {
            return Object.prototype;
        }
        return 'hello' + 'name';
    },
    apply: function (target, thisBinding, args) {
        return args[0];
    },
    constructor: function (target, args) {
        return { value: args[1] };
    }
}
var fproxy = new Proxy(function (x, y) {
    return x + y;
}, handler)

const target = { id: 'target' }; //目标对象
const handler = {}; //代理对象
const proxy = new Proxy(target, handler);
console.log(target.id); //target
console.log(handler.id); //target
target.id = 'foo';
console.log(target.id); //foo
console.log(proxy.id); //foo

// proxy实例的方法
const target = { foo: 'bar', baz: 'qux' };
const handler = {
    get(trapTarget, property, receiver) {
        let decoration = ''
        if (property == 'foo') {
            decoration = '!!!';
        }
        return Reflect.get(...arguments) + decoration;
    }
}
const proxy = new Proxy(target, handler);
console.log(proxy.foo); //bar!!!
console.log(target.foo); //bar
console.log(proxy.baz); //qux
console.log(target.baz); //qux

// 可撤销代理
const target = { foo: 'bar' };
const handler = {
    get() {
        return 'intercepted';
    }
}
const { proxy, revoke } = proxy.revokable(target, handler);
console.log(proxy.foo); //intercepted
console.log(target.foo); //bar
revoke();
console.log(proxy.foo); //TypeError

// 代理另一个代理
const target = {
    foo: 'bar'
}
const firstProxy = new Proxy(target, {
    get() {
        console.log('first Proxy');
        return Reflect.get(...arguments);
    }
})
const secondProxy = new Proxy(firstProxy, {
    get() {
        console.log('second proxy');
        return Reflect.get(...arguments);
    }
})
console.log(secondProxy.foo);
// secondProxy
// firstProxy
// bar

// 代理捕获器和反射方法
// get()
const myTarget = {};
const proxy = new Proxy(myTarget, {
    get(target, property, receiver) {
        console.log('get()');
        return Reflect.get(...arguments);
    }
});
proxy.foo //get()
// set()
const myTarget1 = {};
const proxy = new Proxy(myTarget, {
    set(target, property, value, receiver) {
        console.log("set()");
        return Reflect.set(...arguments);
    }
})
proxy.foo = bar //set()
// has()
const target2 = {};
const proxy = new Proxy(target2, {
    has(target, property) {
        console.log('has()');
        return Reflect.has(...arguments);
    }
})
foo in 'Proxy' //has()
// defineProperty()
const target3 = {};
const proxy = new Proxy(target3, {
    defineProperty(target, property, descriptor) {
        console.log('defineProperty');
        return Reflect.defineProperty(...arguments);
    }
})
Object.defineProperty(proxy, 'foo', { value: 'aaa' })
//defineProperty

// getOwnPropertyDescriptor()
const target4 = {}
const proxy = new Proxy(target4, {
    getOwnPropertyDescriptor(target, property) {
        console.log('getOwnPropertyDescriptor()');
        return Reflect.getOwnPropertyDescriptor(...arguments)
    }
})

// 跟踪属性访问
const user = { name: 'jake' };
const proxy = new Proxy(user, {
    get(target, property, receiver) {
        console.log(`${property}`);
        return Reflect.get(...arguments);
    },
    set(target, property, value, reciver) {
        console.log(`${property} = ${value}`);
        return Reflect.set(...arguments);
    }
})
// 隐藏属性
const hiddenPropertites = ['foo', 'bar'];
const targetObject = {
    foo: 1,
    bar: 2,
    baz: 3
}
const proxy = new Proxy(targetObject, {
    get(target, property) {
        if (hiddenPropertites.includes(property)) {
            return undefined;
        } else {
            Reflect.get(...arguments);
        }
    },
    has(target, property) {
        if (hiddenPropertites.includes(property)) {
            return false;
        } else {
            return Reflect.has(...arguments);
        }
    }
})
// 属性验证
const target = { Number: 0 };
const proxy = new Proxy(target, {
    set(target, property, value) {
        if (typeof value !== Number) {
            return false;
        } else {
            return Reflect.set(...arguments);
        }
    }
})

// 数据绑定和观察者模式con
const userList = [];
class user1 {
    constructor(name) {
        this._name = name;
    }
}
const proxy = new Proxy(user1, {
    construct() {
        const newUser = Reflect.construct(...arguments);
        userList.push(newUser);
    }
});
// 观察者模式
const userList1 = [];
function emit(newValue) {
    console.log(newValue);
}
const proxy = new Proxy(userList1, {
    set(target, property, value, receiver) {
        const result = Reflect.set(...arguments);
        if (result) {
            emit(Reflect.get(target, property, receiver))
        }
        return result;
    }
})