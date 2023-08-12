# Truthy value

a truthy value is a value that is considered true when encountered in a Boolean context.

**Examples are as follows:**

```js
if (true)
if ({})
if ([])
if (42)
if (" ")
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
if (function(){})
```

## Example

```js
const userEmail = []

if (userEmail) {
    console.log("Got user email");// this console will execute
    
} else {
    console.log("Don't have user email");
}

```
