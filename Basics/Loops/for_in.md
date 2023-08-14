# for...in

The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

## Syntax

```js
for (variable in object)
  statement
```

## Example

```js
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    /* output- js shortcut is for javascript
       cpp shortcut is for C++
       rb shortcut is for ruby
       swift shortcut is for swift by apple */
}

```

## Try map

```js
 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('Fr', "France")
 map.set('IN', "India")

 for (const key in map) {
     console.log(key);
     //this does not give an output
     
 }
```
