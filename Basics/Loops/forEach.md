# forEach

The forEach() method of Array or Map or Set instances executes a provided function once for each array element or key/value pair in this map, in insertion order or value in this set, in insertion order.

## Syntax

```js
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

## Example

```js
const coding = ["js", "ruby", "java", "python", "cpp"]

 coding.forEach( function (val){
     console.log(val);
 } )
  /* output-js
     ruby
     java
     python
     cpp */

 coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )
 /* output-js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
           ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
           java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
           python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
           cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ] */
```

```js
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
 /* output-javascript
           java
           python */
```
