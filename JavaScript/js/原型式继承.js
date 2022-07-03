let person = {
    name: 'zhao',
    friends: ['x','c','v']
}

let anotherPerson = Object.create(person,{name:{value:'ooo'}});
anotherPerson.name = 'hhh';
anotherPerson.friends.push('k');

let yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = 'bbb';
yetAnotherPerson.friends.push('lll');
