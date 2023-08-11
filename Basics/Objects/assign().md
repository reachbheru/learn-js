# Object.assign()

The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.

if a property is non-writable, a TypeError is raised, and the target object is changed if any properties are added before the error is raised.

>Note: Object.assign() does not throw error on null or undefined sources.

## Syntax

```js
Object.assign(target, ...sources)
```

## Parameters

### target

The target object — what to apply the sources' properties to, which is returned after it is modified.

### sources

The source object(s) — objects containing the properties you want to apply.

## Return value

The target object.

## Example

```js
//using Object.assign()
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};
const obj4 = { obj1, obj2 };
console.log(obj4);
//gives { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj5 = Object.assign({}, obj1, obj2, obj3);
console.log(obj5);
//gives { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
```

>Use `{}` in the target, because properties of target get overwritten by the source proporties.

```js
//using spread
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};
const obj4 = { obj1, obj2 };
console.log(obj4);
//gives { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj5 = {...obj1, ...obj2, ...obj3};
console.log(obj5);
//gives { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
```

## Supported Browsers

- Google Chrome 6.0 and above
- Internet Explorer 9.0 and above
- Mozilla 4.0 and above
- Opera 11.1 and above
- Safari 5.0 and above
