# Array.prototype.pop()

The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
This is mutating method.

## Syntax

```js
pop();
```

## Return value

The removed element from the array; undefined if the array is empty.

## Example

```js
const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr.pop());//gives 5
console.log(myArr);//gives [0,1,2,3,4]
```
