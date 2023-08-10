# Array() constructor

The Array() constructor creates Array objects.

## Syntax

```js
new Array()
new Array(element0)
new Array(element0, element1)
new Array(element0, element1, /* …, */ elementN)
new Array(arrayLength)

Array()
Array(element0)
Array(element0, element1)
Array(element0, element1, /* …, */ elementN)
Array(arrayLength)
```

>Note:Arrays() can be called with or without new.

## Parameters

### elementN

A JavaScript array is initialized with the given elements, except in the case where a single argument is passed to the Array constructor and that argument is a number. Note that this special case only applies to JavaScript arrays created with the Array constructor, not array literals created with the bracket syntax.

### arrayLength

If the only argument passed to the Array constructor is an integer, this returns a new JavaScript array with its length property set to that number **(Note: this implies an array of arrayLength empty slots, not slots with actual undefined values — see sparse arrays).**

## Exceptions

### RangeError

Thrown if there's only one argument (arrayLength) that is a number, but its value is not an integer or not between 0 and 232 - 1 (inclusive).

## Example

```js
const anime = ["naruto", "bleach"];

console.log(anime.length); // 2
console.log(anime[0]); // "naruto"
```

## Supported Browsers

- Google Chrome
- Edge
- Firefox
- Opera
- Safari
