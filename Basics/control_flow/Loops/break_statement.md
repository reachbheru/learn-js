# break statement

Use the break statement to terminate a loop

## Syntax

```js
break;
break label;
```

## Example

```js
 for (let index = 1; index <= 4; index++) {
     if (index == 2) {
         console.log(`Detected 2`);
         break;
     }
    console.log(`Value of i is ${index}`);
    /* output-
       Value of i is 1
       Detected 2 */
}
```
