# Array.prototype.slice()

The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

## Syntax

```js
array.slice()
array.slice(start)
array.slice(start, end)
```

## Parameters

### start Optional

Zero-based index at which to start extraction, converted to an integer.

- Negative index counts back from the end of the array, If the starting point is less than 0, we add it to the total length of the list.
- If you provide starting point less than the negative length of the array or don't provide one at all, we'll use the beginning of the array as the starting point (index 0).
- If the starting point you specify is greater than or equal to the length of the array, nothing is extracted.

## end Optional

Zero-based index at which to end extraction, converted to an integer. slice() extracts up to but not including end.

- Negative index counts back from the end of the array — if end < 0, end + array.length is used.
- If end < -array.length, 0 is used.
- If end >= array.length or end is omitted, array.length is used, causing all elements until the end to be extracted.
- If end is positioned before or at start after normalization, nothing is extracted.

## Return value

A new array containing the extracted elements.

## Example

```js
const anime = ["naruto","one piece","bleach","dragon ball","demon slayer"];
const big3 = anime.slice(0,3);
console.log(anime);//['naruto','one piece','bleach','dragon ball','demon slayer']
console.log(big3);//['naruto ,one piece','bleach']
```

## Supported Browsers

- Google Chrome 45.0
- Microsoft Edge 12.0
- Mozilla Firefox 32.0
- Safari 9.0
- Opera 25.0
