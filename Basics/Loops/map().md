# map() method

The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

## Syntax

```js
map(callbackFn)
map(callbackFn, thisArg)
```

## Example

```js
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => { return num + 10});
// output-[11,12,13,14,15,16,17,18,19,20]

```

```js

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
// output- [41,51,61,71,81,91,101]
```
