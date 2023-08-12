# Falsy value

a falsy value is a value that is considered false when encountered in a Boolean context.

**Examples are are as follows:**

```js
if (false) {
  // Not reachable
}

if (null) {
  // Not reachable
}

if (undefined) {
  // Not reachable
}

if (0) {
  // Not reachable
}

if (-0) {
  // Not reachable
}

if (0n) { // 0n is a bigInt dataType
  // Not reachable
}

if (NaN) {
  // Not reachable
}

if ("") {
  // Not reachable
}

```

## Example

```js
const userEmail = null

if (userEmail) {
    console.log("Got user email");// this console will not execute
} else {
    console.log("Don't have user email");
}

```
