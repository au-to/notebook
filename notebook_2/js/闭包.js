window.identity == 'the window';
let object = {
    identity: 'my object',
    getIdentity() {
        let that = this;  
        return function () {
            return that.identity;
        }
    }
} 