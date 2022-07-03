function parent() {
    this.name = "parent",
        this.list = ['a'],
        this.sayHi = function () {
            console.log('hi');
        }
}
function Child() { }
Child.prototype = new parent();        