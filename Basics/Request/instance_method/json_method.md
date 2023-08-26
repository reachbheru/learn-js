# json() method

The json() method of the Request interface reads the request body and returns it as a promise that resolves with the result of parsing the body text as JSON.

>Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

## Syntax

```JS
json()
```

### Parameters

None.

### Return value

A Promise that resolves to a JavaScript object. This object could be anything that can be represented by JSON — an object, an array, a string, a number.

## Examples

```JS
const obj = { hello: "world" };

const request = new Request("/myEndpoint", {
  method: "POST",
  body: JSON.stringify(obj),
});

request.json().then((data) => {
  // do something with the data sent in the request
});
```
