function person() { }
let friend = new person()
person.prototype = {
    constructor: person,
    name: 'zhao',
    age: 29,
    job: 'en'
}
console.log(friend.age);
