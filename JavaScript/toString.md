`toString`方法是JavaScript中所有对象从Object原型链继承的一个方法，用于返回对象的字符串表示。不同的对象类型可以覆盖这个方法以提供更具体的字符串表示。

**基本用法：**

``` 
const obj = { key: 'value' };
console.log(obj.toString()); // "[object Object]"
```

**覆盖`toString`方法：**

``` 
const person = {
  name: 'John',
  age: 30,
  toString: function() {
    return `${this.name}, ${this.age} years old`;
  }
};

console.log(person.toString()); // "John, 30 years old"
```

**数组的`toString`方法：**

``` 
const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
```

#### **Function对象**

```
function greet() {
  return 'Hello';
}
console.log(greet.toString()); 
// "function greet() {
//     return 'Hello';
// }"
```

### 强制类型转换

在进行字符串拼接或使用某些方法时，JavaScript会自动调用`toString`方法：

``` 
const num = 123;
console.log('The number is ' + num); // "The number is 123"；num被隐式转换为字符串
```