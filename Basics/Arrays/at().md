# Array.prototype.at()

The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers.

## Syntax

```js
at(index);
```

## Parameters

### index

Zero-based index of the array element to be returned, converted to an integer.

## Return value

The element in the array matching the given index. Always returns undefined if index is "=" or ">" the array's length.

## Example

```js
console.log(anime.at(2));//gives value bleach
console.log(myArr.at(1));//gives value 2
```
