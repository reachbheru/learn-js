# Array.prototype.splice()

The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

This is a mutating method(means changes happens in existing array).

## Syntax

```js
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item0)
splice(start, deleteCount, item0, item1)
splice(start, deleteCount, item0, item1, /* …, */ itemN)
```

## Parameters

### start

Zero-based index at which to start changing the array, converted to an integer.

- Negative index counts back from the end of the array — if start < 0, start + array.length is used.
- If start < -array.length, 0 is used.
- If start >= array.length, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.
- If start is omitted (and splice() is called with no arguments), nothing is deleted. This is different from passing undefined, which is converted to 0.

### deleteCount Optional

An integer indicating the number of elements in the array to remove from start.

If you don't provide deleteCount or if it's equal to/more than the number of elements after start, all elements from start to the end of the array are deleted. If you want to use itemN parameters, use Infinity for deleteCount to delete all elements after start, since explicit undefined becomes 0.

If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).

### item0, …, itemN Optional

The elements to add to the array, beginning from start.

If you do not specify any elements, splice() will only remove elements from the array.

## Return value

An array containing the deleted elements.

If only one element is removed, an array of one element is returned.

If no elements are removed, an empty array is returned.

## Example

```js
const anime = ["naruto","one piece","bleach","dragon ball","demon slayer"];

const big3 = anime.splice(0,3);

console.log(anime);//['dragon ball', 'demon slayer']
console.log(big3);//['naruto','one piece','bleach']
```

## Supported Browsers

- Google Chrome 45.0
- Microsoft Edge 12.0
- Mozilla Firefox 32.0
- Safari 9.0
- Opera 25.0
