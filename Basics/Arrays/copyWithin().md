# Array.prototype.copyWithin()

copyWithin() method considers an array first and then copies part of an array to the same array itself and returns it, without modifying its size but yet the modified data whatever user wishes to have in another's place i.e, copies array element of an array within the same array.

## Description

The copyWithin() method is a mutating method(this method makes changes in existing array). It does not alter the length of this, but it will change the content of this and create new properties or delete existing properties, if necessary.

## Syntax

```js
copyWithin(target, start);
copyWithin(target, start, end);
```

## Parameters

### target

 The list  starts counting from the  number 0, and you're picking an index to decide where to copy the item to. This index number helps you choose which box to copy the item into.

- Negative index counts back from the end of the array — if target < 0, target + array.length is used.
- If target < -array.length, 0 is used.
- If target >= array.length, nothing is copied.
- When using the **"copyWithin()"** function, if you're copying items to a position after where you're starting from, the copying stops at the end of the list, and you're not adding new positions to the list.

### start

 Index starting from 0. When you copy stuff, this index shows where you begin copying.

- Negative index counts back from the end of the array — if start < 0, start + array.length is used.
- If start < -array.length, 0 is used.
- If start >= array.length, nothing is copied.

### end

The index in a list starting from 0. It's where you stop copying stuff, When using **"copyWithin()"**, it copies everything up to but not including the "end" position you pick.

- Negative index counts back from the end of the array — if end < 0, end + array.length is used.
- If end < -array.length, 0 is used.
- If end >= array.length or if you don't pick an ending point, it automatically copies everything until the very end of the list.
- If end is positioned before or at start after normalization, nothing is copied.

## Return value

The modified array.

## Example

```js
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]
```
