// 默认传入的值都是字符串形式
class Dictionary {
    constructor() {
        this.table = {};
    }

    hasKey(key) {
        return this.table[key] !== null;
    }

    set(key, value) {
        this.table[key] = { key: value };
    }

    removeKey(key) {
        if (this.hasKey(key)) {
            delete this.table[key];
            return true;
        }
        return false;
    }

    get(key) {
        const valuePair = this.table[key];
        return valuePair == null ? undefined : valuePair.value;
    }

    keyValues() {
        return Object.values(this.table);
    }

    keys() {
        return this.keyValues().map(valuePair => {
            valuePair.key;
        })
    }

    values() {
        return this.keyValues().map(valuePair => {
            valuePair.value;
        })
    }

    size() {
        return Object.keys(this.table).length;
    }

    clear() {
        this.table = {};
    }
}