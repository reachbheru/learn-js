# Array.prototype.concat()

The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

## Syntax

```js
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, /* …, */ valueN)
```

## Parameters

### valueN

Arrays and/or values to concatenate into a new array. If all valueN parameters are omitted, concat returns a shallow copy of the existing array on which it is called.

## Return value

A new **Array** instance.

## Example

```js
const array1 = ["a","b","c"];
const array2 = ["d","e","f"];
const array3 = array1.concat(array2);
console.log(array3);//gives ["a","b","c","d","e","f"]
```
