var MyHashSet = function () {
  this.BASE = 769;
  this.data = new Array(this.BASE).fill(0).map(() => new Array());
};

MyHashSet.prototype.add = function (key) {
  const h = this.hash(key);
  for (const element of this.data[h]) {
    if (element === key) {
      return;
    }
  }
  this.data[h].push(key);
};

MyHashSet.prototype.remove = function (key) {
  const h = this.hash(key);
  const it = this.data[h];
  for (let i = 0; i < it.length; ++i) {
    if (it[i] === key) {
      it.splice(i, 1);
      return;
    }
  }
};

MyHashSet.prototype.contains = function (key) {
  const h = this.hash(key);
  for (const element of this.data[h]) {
    if (element === key) {
      return true;
    }
  }
  return false;
};

MyHashSet.prototype.hash = function (key) {
  return key % this.BASE;
}
