# Array.from()

The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

Array.from() lets you create Arrays from:

- iterable objects (objects such as Map and Set); or, if the object is not iterable,
- array-like objects (objects with a length property and indexed elements).

>Note: This behavior is more important for typed arrays, since the intermediate array would necessarily have values truncated to fit into the appropriate type. Array.from() is implemented to have the same signature as TypedArray.from().

## Syntax

```js
Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)
```

## Parameters

### arrayLike

An iterable or array-like object to convert to an array.

### mapFn Optional

A function to call on every element of the array. If provided, every value to be added to the array is first passed through this function, and mapFn's return value is added to the array instead. The function is called with the following arguments:

### element

The current element being processed in the array.

### index

The index of the current element being processed in the array.

### thisArg Optional

Value to use as this when executing mapFn.

## Return value

A new Array instance.

### Example

```js
//Arrays from a string
Array.from("AOT");
// [ "A", "O", "T" ]
```

```js
//Arrays from a set
const set = new Set(["AOT", "naruto", "boruto", "AOT"]);
Array.from(set);
// [ "AOT", "naruto", "boruto" ]
```

```js
//Arrays from a map
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

## Supported Browsers

- Google Chrome 45.0
- Microsoft Edge 12.0
- Mozilla Firefox 32.0
- Safari 9.0
- Opera 25.0
