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

- [Array.prototype.at()](D:\Learn\learn-js\Basics\Arrays\at().md)

- [Array.prototype.concat()](D:\Learn\learn-js\Basics\Arrays\concat().md)

- [Array() constuctor](D:\Learn\learn-js\Basics\Arrays\Array_constructor.md)

- [Array.prototype.copyWithin()](D:\Learn\learn-js\Basics\Arrays\copyWithin().md)

- [Array.prototype.push()](https://github.com/reachbheru/learn-js/blob/main/Basics/Arrays/Push().md)

- [Array.prototype.pop()](D:\Learn\learn-js\Basics\Arrays\pop().md)

- [Array.prototype.unshift()](D:\Learn\learn-js\Basics\Arrays\unshift().md)

- [Array.prototype.shift()](D:\Learn\learn-js\Basics\Arrays\shift().md)

- [Array.prototype.includes()](D:\Learn\learn-js\Basics\Arrays\includes().md)

- [Array.prototype.indexOf()](D:\Learn\learn-js\Basics\Arrays\indexOf().md)

- [Array.prototype.join()](D:\Learn\learn-js\Basics\Arrays\join().md)

- [Array.prototype.slice()](D:\Learn\learn-js\Basics\Arrays\slice.md)

- [Array.prototype.splice()](D:\Learn\learn-js\Basics\Arrays\splice().md)
