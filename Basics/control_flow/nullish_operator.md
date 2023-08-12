# Nullish coalescing operator (??)

The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

## Example

```js
let val1;
let val2;
let val3;
let val4;

val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20

console.log(val1);// gives 5
console.log(val2);// gives 10
console.log(val3);// gives 15
console.log(val4);// gives 10
```
