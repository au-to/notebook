var AnimalShelf = function () {
    this.queueDog = [];
    this.queueCat = [];
};
AnimalShelf.prototype.enqueue = function (animal) {
    if (animal[1]) this.queueDog.push(animal);
    else this.queueCat.push(animal);
};
AnimalShelf.prototype.dequeueAny = function () {
    if (this.queueDog[0]?.[0] < this.queueCat[0]?.[0]) return this.queueDog.shift();
    if (this.queueDog[0]?.[0] > this.queueCat[0]?.[0]) return this.queueCat.shift();
    if (this.queueDog.length) return this.queueDog.shift();
    if (this.queueCat.length) return this.queueCat.shift();
    return [-1, -1];
};
AnimalShelf.prototype.dequeueDog = function () {
    if (this.queueDog.length) return this.queueDog.shift();
    return [-1, -1]
};
AnimalShelf.prototype.dequeueCat = function () {
    if (this.queueCat.length) return this.queueCat.shift();
    return [-1, -1]

};