# Object.freeze()

The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.
 freeze() returns the same object that was passed in.

Freezing an object is the highest integrity level that JavaScript provides.

## Syntax

```js
Object.freeze(obj)
```

## Parameters

### obj

The object to freeze.

## Return value

The object that was passed to the function.

## Example

```js
const mySym = Symbol("key1");

const JsUser = {
    name: "naruto",
    "full name": "naruto uzumaki",
    [mySym]: "mykey1",
    age: 16,
    location: "leaf village",
    email: "naruto@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(JsUser);
/*{
  name: 'naruto',
  'full name': 'naruto uzumaki',
  age: 16,
  location: 'leaf village',
  email: 'naruto@google.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
} */
Object.freeze(JsUser);
JsUser.email = "kakashi@google.com";
console.log(JsUser);
/*{
  name: 'naruto',
  'full name': 'naruto uzumaki',
  age: 16,
  location: 'leaf village',
  email: 'naruto@google.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}*/

```

## Supported Browsers

- Google Chrome 6.0 and above
- Internet Explorer 9.0 and above
- Mozilla 4.0 and above
- Opera 11.1 and above
- Safari 5.0 and above
