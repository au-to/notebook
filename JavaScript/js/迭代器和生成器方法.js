class person{
    // 在原型上定义生成器方法
    *create1Iterator() {
        yield 'jack';
        yield 'jskd';
        yield 'dog';
    }
    //在类上定义生成器方法
    static *create2Iterator(){
        yield 'en';
        yield 'bn';
        yield 'vn';
    }
}
let jobiter = person.create2Iterator();
console.log(jobiter.next().value);
console.log(jobiter.next().value);
console.log(jobiter.next().value);

let p = new person();
let niakiter = p.create1Iterator();
console.log(niakiter.next().value);
console.log(niakiter.next().value);
console.log(niakiter.next().value);

// 添加迭代器
class person {
    constructor() {
        this.nickNames = ['jack','cack','kloa'];
    }
    *[Symbol.iterator](){
        yield *this.nickNames.entries();
    }
}