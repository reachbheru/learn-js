# Request

The Request interface of the Fetch API represents a resource request.

You can create a new Request object using the Request() constructor, but you are more likely to encounter a Request object being returned as the result of another API operation, such as a service worker FetchEvent.request.

## Constructor

- [Request() constructor]

## instance property

- [body property]

- [method property]

- [referrer property]

- [signal property]

- [URL property]

## instance method

- [json() method]

- [text() method]

## Example

In the following snippet, we create a new request using the Request() constructor (for an image file in the same directory as the script), then return some property values of the request:

```JS

const request = new Request("https://www.mozilla.org/favicon.ico");

const url = request.url;
const method = request.method;
const credentials = request.credentials;
```
