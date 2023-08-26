# method property

The method read-only property of the Request interface contains the request's method (GET, POST, etc.)

## Value

A String indicating the method of the request.

## Examples

In the following snippet, we create a new request using the Request() constructor (for an image file in the same directory as the script), then save the method of the request in a variable:

```js
const myRequest = new Request("flowers.jpg");
const myMethod = myRequest.method; // GET
```
