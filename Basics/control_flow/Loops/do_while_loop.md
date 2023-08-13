# do...while statement

The do...while statement repeats until a specified condition evaluates to false.

## Syntax

```js
do {
  statement
} while (condition);
```

## Example

```js
let score = 1

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 5);
  /* output-
      Score is 1     
      Score is 2    
      Score is 3
      Score is 4
      Score is 5 */
```

```js
let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);
  /* output-
     Score is 11 */
```
