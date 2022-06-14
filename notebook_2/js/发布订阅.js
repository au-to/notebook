let event = {
    list: {},
    on(key, fn) {
        if (!this.list[key]) {
            this.list[key] = [];
        }
        this.list[key].push(fn);
    },
    emit() {
        let key = [].shift.call(arguments);
        fns = this.list[key];
        if (!fns || fns.length == 0) {
            return false;
        }
        fns.forEach(fn => {
            fn.apply(this, arguments);
        });
    },
    remove(key, fn) {
        let fns = this.list[key];
        if (!fns) return false;
        if (!fn) {
            fns && fns.length == 0;
        } else {
            fns.forEach((cb, i) => {
                if (cb == fn) {
                    fns.splice(i, 1)
                }
            })
        }
    }
}