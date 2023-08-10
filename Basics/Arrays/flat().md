# Array.prototype.flat()

The **flat()** method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**flat()** method do not alter the existing array, but returns a shallow copy that contains the same elements as the ones from the original array.

## Syntax

```js
flat()
flat(depth)
```

## Parameters

### depth Optional

The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

## Return value

A new array with the sub-array elements concatenated into it.

## Example

```js
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## Supported Browsers

- Google Chrome 69 and above
- Edge 79 and above
- Firefox 62 and above
- Opera 56 and above
- Safari 12 and above