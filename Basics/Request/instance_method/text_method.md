# text() method

The text() method of the Request interface reads the request body and returns it as a promise that resolves with a String. The response is always decoded using UTF-8.

## Syntax

```JS
text()
```

### Parameters

None.

### Return value

A Promise that resolves with a String.

## Examples

```JS
const text = "Hello world";

const request = new Request("/myEndpoint", {
  method: "POST",
  body: text,
});

request.text().then((text) => {
  // do something with the text sent in the request
});
```
