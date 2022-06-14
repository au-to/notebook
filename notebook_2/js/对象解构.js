let person = {
    name: 'marr',
    age: 29,
    job: {
        title: 'soft'
    }
}
let personCopy = {};
({
    name: personCopy.name,
    age: personCopy.age,
    job: personCopy.job,
} = person)
person.job.title = 'hack';
console.log(person);
console.log(personCopy);