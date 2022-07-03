class Set {
    constructor() {
        this.items = {};
    }

    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element];
            return true;
        }
        return false;
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    values() {
        return Object.values(this.items);
    }

    // 并集
    union(otherSet) {
        const unionSet = new Set();
        this.values.forEach(value => {
            unionSet.add(value);
        });
        otherSet.values().forEach((value) => {
            unionSet.add(value);
        })
        return unionSet;
    }

    // 交集
    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values;
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersection.add(values[i]);
            }
        }
        return intersectionSet;
    }

    // 差集
    difference(otherSet) {
        const differenceSet = new Set();
        this.values.forEach((value) => {
            if (!otherSet.has(value)) {
                differenceSet.add(value);
            }
        })
        return differenceSet;
    }

    // 子集
    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        let isSubset = true;
        this.values().every((value) => {
            if (!otherSet.has(value)) {
                isSubset = false;
                return false;
            }
            return true;
        })
        return isSubset;
    }
}

// es6的set类
// 并集
const union = (setA, setB) => {
    const unionAb = new Set();
    setA.forEach((value) => {
        unionAb.add(value);
    })
    setB.forEach((value) => {
        {
            unionAb.add(value);
        }
    })
    return unionAb;
}
// 交集
const intersection = (setA, setA) => {
    const intersectionSet = new Set();
    setA.forEach((value) => {
        if (setB.has(value)) {
            intersectionSet.add(value);
        }
    })
    return intersectionSet;
}
// 差集
const difference = (setA, setB) => {
    const differenceSet = new Set();
    setA.forEach((value) => {
        if (!setB.has(value)) {
            difference.add(value);
        }
    })
    return differenceSet;
}

// 使用扩展运算符   
// 并集
const union1 = new Set([...setA, ...setB]);
// 交集
const intersection1 = new Set([...setA].filter(x => {
    setB.has(x)
}))
// 差集
const difference1 = new Set([...setA].filter(x => { !setB.has(x) }));