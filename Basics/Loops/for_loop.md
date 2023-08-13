# for statement

A for loop repeats until a specified condition evaluates to false.

## Syntax

```js
for (initialization; condition; afterthought)
  statement
```

## Example

```js
for (let i = 0; i <= 3; i++) {
    const element = i;
    console.log(element);
    /* output-0
              1
              2
              3 */
}

// console.log(element);
// throws a error because element is not define for its scope
```

```js
let myArray = ["naruto", "bleach", "one piece"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    /* output-naruto
              bleach
              one piece */
}
```
