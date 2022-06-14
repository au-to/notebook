var arr = [1, 2, 3];
Array.prototype.a = 123;
for (let index in arr) {
    let res = arr[index];
    console.log(res);
};
for (let index in arr) {
    if (arr.hasOwnProperty(index)) {
        let res = arr[index];
        console.log(res);
    }
}
for (let j of arr) {
    console.log(j);
}
var myObj = {
    a: 'h',
    b: 'hj',
    c: 'bd'
}
let res = Object.keys(myObj);
console.log(res);
for (let r of res) {
    console.log(r);
}
