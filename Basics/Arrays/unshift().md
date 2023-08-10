# Array.prototype.unshift()

The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.
This is mutating method.

## Syntax

```js
unshift()
unshift(element0)
unshift(element0, element1)
unshift(element0, element1, /* …, */ elementN)
```

## Parameters

### elementN

The elements to add to the front of the array.

## Return value

The new length property of the object upon which the method was called.

## Example

```js
const myArr = [0, 1, 2, 3, 4, 5];
myArr.unshift(9);
console.log(myArr);//gives [9,0,1,2,3,4,5]
```

## Supported Browsers

- Google Chrome 1 and above
- Edge 12 and above
- Firefox 1 and above
- Internet Explorer 5.5 and above
- Opera 4 and above
- Safari 1 and above
