# Array.prototype.shift()

The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
This is mutating method.
If the length property is 0, **undefined** is returned.

## Syntax

```js
shift();
```

## Return value

The removed element from the array; undefined if the array is empty.

## Examples

```js
const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr.shift());//gives 0
console.log(myArr);//gives [1,2,3,4,5]
```

## Supported Browsers

- Google Chrome 1 and above
- Edge 12 and above
- Firefox 1 and above
- Internet Explorer 5.5 and above
- Opera 4 and above
- Safari 1 and above
