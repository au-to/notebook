// 数据属性
let person = new Object();
Object.defineProperty(person, 'age', {
        value: 'hhh', writable: true, configurable: true,
})
person.age = 18
delete person.age;
Object.defineProperty(person, 'name', { enumerable: true, value: "zhao" })
console.log(person.age);
for (let i in person) {
        console.log(i);
}

// 访问器属性
let book = {
        year_: 2017,
        edition: 1
}
Object.defineProperty(book, 'year', {
        get() {
                return this.year_;
        },
        set(newValue) {
                if (newValue > 2017) {
                        this.year_ = newValue;
                        this.edition += newValue - 2017;
                }
        }
})
book.year = 2018;
console.log(book.edition);

// 定义多个属性
let book = {};
Object.defineProperties(book,{
        year_: {
                value: 2017
        },
        edition: {
                value: 1
        },
        year: {
                get() {
                        return this.year_;
                },
                set(newValue) {
                        if(newValue>2017) {
                                this.year_ = newValue;
                                this.edition += newValue - 2017;
                        }
                }
        }
})

// 读取属性的特性
let res = Object.getOwnPropertyDescriptors(book)
console.log(res);