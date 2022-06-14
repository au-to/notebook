class person {
    constructor(s){
        this.foo = 'foo';
        if(s) {
            return {
                bar: 'bar'
            }
        }
    }
}
let p1 = new person();
let p2 = new person(true);
console.log(p2 instanceof person);//false

// 实例成员
class person {
    constructor(){
        this.name = new String('jack');
        this.sayName = function() {
            console.log(this.name);
        };
        this.jacknames = ['jack','j-dog'];
    }
}
let p11 = new person();
let p22 = new person();

// 原型方法和访问器
class person{
    constructor(){
        this.locate = ()=>{
            console.log('instannce');
        }
    }
    locate() {
        console.log('prototype');
    }
}
let p = new person();
p.locate();//instance
p.prototype.locate()//prototype

