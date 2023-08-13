# continue statement

The continue statement can be used to restart a loop.

When you use continue without a label, it terminates the current loop of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration.

Continue does not terminate the execution of the loop entirely. In a while loop, it jumps back to the condition. In a for loop, it jumps to the increment-expression.
When you use continue with a label, it applies to the looping statement identified with that label.

## Syntax

```js
continue;
continue label;
```

## Example

```js
for (let index = 1; index <= 5; index++) {
    if (index == 2) {
        console.log(`Detected 2`);
        continue;
    }
   console.log(`Value of i is ${index}`);
   /* output-
     Value of i is 1
     Detected 2
     Value of i is 3
     Value of i is 4
     Value of i is 5 */
}
```
