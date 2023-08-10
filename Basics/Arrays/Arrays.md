# Arrays

Arrays are generally described as "list-like objects" which are basically single objects that contain multiple values stored in a list.

## Description

arrays are not **primitives** but they are Array objects with the following core characteristics:

- JavaScript arrays are resizable and can contain a mix of different data types.
- JavaScript arrays are not not in pair of "key : value" and so, array elements can be access by regular indexing(use positive indexing).
- Index in JavaScript starts from zero.
- JavaScript array-copy operations create shallow copies. (shallow copies means object's reference point is same).

## Creating and accessing an arrays

You can create an array by using **"[ ]"** or by **"new Array"**.

```js
const myArr = [1, 2, 3, 4, 5];
const anime=["naruto","one piece","bleach"];
const myArr2 = new Array(0,1, 2, 3, 4);
```

You can access value of an arrays by just using indexing.

```js
console.log(myArr[0]);//gives value 1
console.log(myArr[1]);//gives value 2
console.log(anime[1]);//gives value one piece
console.log(anime);//gives value ["naruto","one piece","bleach"]
console.log(myArr);//gives value [1,2,3,4,5]

```

## Array methods

- [Array.prototype.at()](https://github.com/reachbheru/learn-js/blob/main/Basics/Arrays/at().md)

- [Array.prototype.concat()](https://github.com/reachbheru/learn-js/blob/main/Basics/Arrays/concat().md)

- [Array() constuctor](https://github.com/reachbheru/learn-js/blob/main/Basics/Arrays/Array_constructor.md)

- [Array.prototype.copyWithin()](https://github.com/reachbheru/learn-js/blob/main/Basics/Arrays/copyWithin().md)

- [Array.prototype.push()](https://github.com/reachbheru/learn-js/blob/main/Basics/Arrays/Push().md)

- [Array.prototype.pop()](https://github.com/reachbheru/learn-js/blob/main/Basics/Arrays/pop().md)

- [Array.prototype.unshift()](https://github.com/reachbheru/learn-js/blob/main/Basics/Arrays/unshift().md)

- [Array.prototype.shift()](https://github.com/reachbheru/learn-js/blob/main/Basics/Arrays/shift().md)

- [Array.prototype.includes()](https://github.com/reachbheru/learn-js/blob/main/Basics/Arrays/includes().md)

- [Array.prototype.indexOf()](https://github.com/reachbheru/learn-js/blob/main/Basics/Arrays/indexOf().md)

- [Array.prototype.join()](https://github.com/reachbheru/learn-js/blob/main/Basics/Arrays/join().md)

- [Array.prototype.slice()](https://github.com/reachbheru/learn-js/blob/main/Basics/Arrays/slice.md)

- [Array.prototype.splice()](https://github.com/reachbheru/learn-js/blob/main/Basics/Arrays/splice().md)
