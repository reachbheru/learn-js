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

- Negative index counts back from the end of the array, If the number you're looking for is negative, you can add it to the total length of the list to find its position.
- If target < -array.length, 0 is used.
- If target >= array.length, nothing is copied.
- When using the **"copyWithin()"** function, if you're copying items to a position after where you're starting from, the copying stops at the end of the list, and you're not adding new positions to the list.

### start

 Index starting from 0. When you copy stuff, this index shows where you begin copying.

- Negative index counts back from the end of the array, If the starting point you want is a negative number, you can add it to the total length of the list.
- If the desired starting point is smaller than the negative total length of the list, then the starting point is set to 0.
- If the starting point is greater than or equal to the total length of the list, then no copying is done.

### end

The index in a list starting from 0. It's where you stop copying stuff, When using **"copyWithin()"**, it copies everything up to but not including the "end" position you pick.

- Negative index counts back from the end of the array, If the ending point you want is a negative number, you can add it to the total length of the list.
- If the desired ending point is smaller than the negative total length of the list, then the ending point is set to 0.
- If end >= array.length or if you don't pick an ending point, it automatically copies everything until the very end of the list.
- if the ending point is earlier than or the same as the starting point after adjusting them properly, then no items are copied from the list.

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

## Supported Browsers

- Google Chrome 45.0
- Microsoft Edge 12.0
- Mozilla Firefox 32.0
- Opera 32.0
- Safari 9
