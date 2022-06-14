let obj = {
    a: {
        a1: 'aa'
    },
    b: 'bb'
}
with (obj) {
    let a1 = a.a1;
    let b = b;
}