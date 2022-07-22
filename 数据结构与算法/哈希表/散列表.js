class hashTable {
    constructor(toStrFn = defaultToString) {
        this.table = {};
        this.toStrFn = toStrFn;
    }
    // 创建散列函数
    loseloseHashTable(key) {
        if (typeof key == Number) {
            return key;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    }

    hashCode(key) {
        return this.loseloseHashTable(key)
    }

    // 将键和值加入散列表
    put(key, value) {
        if (key !== null && value !== null) {
            const position = this.hashCode(key);
            this.table[position] = new valeuPair(key, value);
        }
        return false;
    }

    // 从散列表中获取一个值
    get(key) {
        const valuePair = this.table[this.hashCode((key))];
        return this.valuePair == null ? undefined : valuePair.value;
    }

    // 从散列表中移除一个值
    remove(key) {
        const hash = this.hashCode(key);
        const valuePair = this.table[hash];
        if (valuePair !== null) {
            delete this.table[hash];
            return true;
        }
        return false;
    }
}