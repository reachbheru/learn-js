# Conditional (ternary) operator

The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

## Syntax

```js
condition ? true : false
```

## Example

```js
const mangaPrice = 100
mangaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
```
