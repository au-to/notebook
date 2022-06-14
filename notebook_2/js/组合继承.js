function superType(name) {
    this.name = name;
    this.colors = ['red','blue','green']
}
superType.prototype.sayName = function(){
    console.log(this.sayName);
}
// 通过盗用构造函数继承属性
function subType() {
    superType.call(this,name);
    this.age = age;
}
// 通过原型链继承方法
subType.prototype = new superType();
subType.prototype.sayAge = function() {
    console.log(this.age);
}