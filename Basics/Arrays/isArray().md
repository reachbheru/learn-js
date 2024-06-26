# Array.isArray()

The Array.isArray() static method determines whether the passed value is an Array.

It returns true for any value that was created using the array literal syntax or the Array constructor.

## Syntax

```js
Array.isArray(value)
```

## Parameters

### value

The value to be checked.

## Return value

true if value is an Array; otherwise, false.

## Example

```js
// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// This is not an array, because it was not created using the
// array literal syntax or the Array constructor
Array.isArray({ __proto__: Array.prototype });
```

## Supported Browsers

- Google Chrome 5.0
- Microsoft Edge 12
- Mozilla Firefox 4.0
- Safari 5.0
- Opera 10.5
