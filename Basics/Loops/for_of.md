# for...of

The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

## Syntax

```js
for (variable of iterable)
  statement
```

## Example

```js
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
    /* output-1
              2
              3         
              4
              5 */          
}
```

```js
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
    /* output-
    Each char is H
    Each char is e
    Each char is l
    Each char is l
    Each char is o
    Each char is  
    Each char is w
    Each char is o
    Each char is r
    Each char is l
    Each char is d */
}
```

## Map

The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs.

value inserted by set() method.

A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs.

### Constructing map

```js
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


 console.log(map);
 /* output-Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
} */

```

### Accessing map

```js
for (const [key, value] of map) {
     console.log(key, ':-', value);
    /* output-IN :- India
       USA :- United States of America
       Fr :- France */
}
```

## Try object

```js
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

 for (const [key, value] of myObject) {
     console.log(key, ':-', value);
     // Throws an error 
     // TypeError object is not iterable
}
```
