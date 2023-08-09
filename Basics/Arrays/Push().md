# Array.prototype.push()

The push() method adds the specified elements to the end of an array and returns the new length of the array.
It is an mutating method(means make changes in existing array).

## Syntax

```js
push();
push(element0);
push(element0, element1);
push(element0, element1, /* …, */ elementN);
```

## Parameters

### elementN

The element(s) to add to the end of the array.

### Return value

The new length property of the object upon which the method was called.

## Examples

```js
const myArr = [0, 1, 2, 3, 4, 5];
myArr.push(6);//push adds 6 in myArr
console.log(myArr);//gives [0,1,2,3,4,5,6]
```
