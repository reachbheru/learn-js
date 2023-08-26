# Request: url property

The url read-only property of the Request interface contains the URL of the request.

## Value

A string indicating the URL of the request.

## Examples

In the following snippet, we create a new request using the Request() constructor (for an image file in the same directory as the script), then save the URL of the request in a variable:

```JS
const myRequest = new Request("flowers.jpg");
const myURL = myRequest.url; // "https://github.com/mdn/dom-examples/tree/main/fetch/fetch-request/flowers.jpg"
```
