# Array.prototype.join()

The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

If an element is undefined, null, it is converted to an empty string.

## Syntax

```js
array.join()
array.join(separator)
```

## Parameters

### separator Optional

A string to separate each pair of adjacent elements of the array. If omitted, the array elements are separated with a comma (",").

## Return value

A string with all array elements joined. If arr.length is 0, the empty string is returned.

## Example

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9
```

```js
const anime = ["naruto", "bleach", "dragonBall"];
a.join(); // 'naruto,bleach,dragonBall'
a.join(", "); // 'naruto, bleach, dragonBall'
a.join(" + "); // 'naruto+bleach+dragonBall'
a.join(""); // 'narutobleachdragonBall'
```

## Supported Browsers

- Google Chrome 1.0 and above
- Microsoft Edge 12 and above
- Mozilla Firefox 1.0
- Safari 1 and above
- Opera 4 and above

## Spread syntax

This syntex is a syntax, it is works like `join()`.

```js
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);//['thor','Ironman','spiderman','superman','flash','batman']
```
