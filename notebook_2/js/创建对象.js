// 工厂模式
function createPerson(name,age,job) {
    let o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    }
    return o;
}
// 构造函数模式
function Person(name,age,job) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.sayName = function() {
        console.log(this.name);
    }
}
let person = new Person('zhao',22,'softengineer');