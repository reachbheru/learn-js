# Object

The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities.

## Creating Objects

Objects can be created using two different way Literal Form and Constructed Form.

### Literal Form

 The literal form is a collection of key-value pairs enclosed within a pair of curly braces. The syntaxial form is shown below.

```js
let obj = {
    key1: value1,
    key2: value2,
    ...
};
```

### Constructed Form

 The Constructed form uses either an object constructor function or the new keyword to create an empty object. The syntaxial forms are shown below.

#### Object Constructor Function

 In this way the user creates an explicit function to take required values as parameters and assign them as the properties of the desired object.

 ```js
 function obj(value1, value2, ...) {
    this.key1 = value1;
    this.key2 = value2;
    ...
}
 ```

#### Using New Keyword

This way uses the new keyword in front of any constructor method or any built-in constructor method ( such as Object, Date, String, etc) and creates a new instance of the following object by mounting it on memory.

```js
let obj = new Object();
obj.key1 = value1;
obj.key2 = value2;
...
```

>Note: It is highly uncommon to use the Constructed Form over the Object Literals for creating objects, hence for any further illustrations we will be using the object literals on most occasions.

## Example

```js
const mySym = Symbol("key1")

const JsUser = {
    name: "naruto",
    "full name": "naruto uzumaki",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "naruto@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);//naruto@google.com
console.log(JsUser["full name"]);//naruto uzumaki
console.log(JsUser["email"]);//naruto@google.com
console.log(JsUser[mySym]);//mykey1
```

## Object methods

- [Object.freeze()]