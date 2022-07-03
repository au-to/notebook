function addTen(num) {
    num += 10;
    return num;
}
let count = 20;
let res = addTen(count);
console.log(res);//30
console.log(count);//20

function setName(obj) {
    obj.name = 'zhao';
}
let person = new Object();
setName(person);
console.log(person.name);//zhao

function setName(obj) {
    obj.name = 'zhao';
    obj = new Object();
    obj.name = 'hhh'
}
let person1 = new Object();
setName(person1);
console.log(person1.name);//hhh