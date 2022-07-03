const nameKey = 'name';
const ageKey = 'age';
const jobKey = 'job';
const token = 0;

function getToken(key) {
    return `${key}_${token++}`;
}

let person = {
    [getToken(nameKey)]: 'matt',
    [getToken(ageKey)]: '20',
    [getToken(jobKey)]: 'engineer'
}

let person1 = {
name: 'mattr',
age: 29
}
// 对象解构
let {name,age,job="en"} = person1;