# Array.prototype.indexOf()

The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or returns -1 if it is not present.
If `NaN` value is used in `indexOf()`, it always returns -1.

## Syntax

```js
indexOf(searchElement);
indexOf(searchElement, fromIndex);
```

## Parameters

### searchElement

Element to locate in the array.

### fromIndex Optional

Zero-based index at which to start searching, converted to an integer.

- Negative index counts back from the end of the array, If the starting point is less than 0, we add it to the total length of the list. Note, the array is still searched from front to back in this case.
- If you provide starting point less than the negative length of the array or don't provide one at all, we'll use the beginning of the array as the starting point (index 0), causing the entire array to be searched.
- If the starting point you specify is greater than or equal to the length of the array,the array is not searched and -1 is returned.

## Return value

The first index of the element in the array; -1 if not found.

## Example

```js
const array = [2, 9, 9,NaN];
array.indexOf(2); // 0,because search starts from index number 0
array.indexOf(7); // -1,because 7 is not in array
array.indexOf(9, 2); // 2,because search starts from index number 2 
array.indexOf(2, -1); // -1,because search starts from index number -1 or 2 in this case
array.indexOf(2, -3); // 0,because search starts from index number -3 or 0 in this case
array.indexOf(NaN); // -1
```
