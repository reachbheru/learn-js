# while loop statement

A while statement executes its statements as long as a specified condition evaluates to true.

The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops, and control is passed to the statement following while.

## Syntax

```js
while (condition)
  statement
```

## Example

```js
let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
    /* output-
       Value of index is 0
       Value of index is 2
       Value of index is 4
       Value of index is 6
       Value of index is 8
       Value of index is 10 */
}
```

```js
let myArray = ['naruto', "bleach", "one piece"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
    /* output-
       Value is naruto
       Value is bleach
       Value is one piece */
}
```
