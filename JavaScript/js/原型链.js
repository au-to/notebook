function SuperType() {
    this.property = true;
};
SuperType.prototype.getSuperValue = function() {
    return this.property;
}
function Subtype() {
    this.subProperty = false;
}
// 继承supertype
Subtype.prototype = new SuperType();
Subtype.prototype.getSubValue = function(){
    return this.subProperty;
}
let instance = new Subtype();
let res = instance.getSuperValue(); //true



function SuperType() {
    this.property = true
}
SuperType.prototype.getSupValue = function() {
    return this.property;
}
function Subtype() {
    this.subProperty = false;
}
Subtype.prototype = new SuperType();
Subtype.prototype.getSubValue = function() {
    return this.subProperty;
}
Subtype.prototype.getSupValue = function() {
    return false;
}


function SuperType() {
    this.colors = ['red','blue','green'];
}
function Subtype() {
    SuperType.call(this);
}
let instance1 = new Subtype();
instance1.colors.push('black');
console.log(instance1.colors);//['red','blue','green','black']
let instance2 = new Subtype();
console.log(instance2.colors);//['red','blue','green']