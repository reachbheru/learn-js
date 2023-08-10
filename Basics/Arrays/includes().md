# Array.prototype.includes()

The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
This method is case sensitive.

## Syntax

```js
includes(searchElement);
includes(searchElement, fromIndex);
```

## Parameters

### searchElement

The value to search for.

### fromIndex Optional

Finding the position of value in a array, starting from 0 indexing.

- Negative index counts back from the end of the array, If the starting point is less than 0, we add it to the total length of the list. However, the array is still searched from front to back in this case.
- If the provide starting point you less than the negative length of the array or don't provide one at all, we'll use the beginning of the array as the starting point (index 0), causing the entire array to be searched.
- If the starting point you specify is greater than or equal to the length of the array,the array is not searched and false is returned.

## Return value

A boolean value which is true if the value searchElement is found within the array (or the part of the array indicated by the index fromIndex, if specified).

## Example

```js
const myArr = [ ,0, 1, 2, 3, 4, 5,NaN];
console.log(myArr.includes(4));//gives true
console.log(myArr.includes(NaN));//gives true
console.log(myArr.includes(undefined));//gives true
```

## Supported Browser

- Chrome 41 and above
- Edge 12 and above
- Firefox 40 and above
- Opera 28 and above
- Safari 9 and above
