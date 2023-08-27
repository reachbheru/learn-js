# XMLHttpRequest() constructor

The XMLHttpRequest() constructor creates a new XMLHttpRequest.

## Syntax

```js
new XMLHttpRequest()
```

### Parameters

None.

### Return value

A new XMLHttpRequest object. The object must be prepared by at least calling open() to initialize it before calling send() to send the request to the server.

## Non-standard Firefox syntax

Firefox 16 added a non-standard parameter to the constructor that can enable anonymous mode (see Webkit bug 692677). Setting the mozAnon flag to true effectively resembles the AnonXMLHttpRequest() constructor described in older versions of the XMLHttpRequest specification.

```js
const request = new XMLHttpRequest(paramsDictionary);

```

### Parameters (non standard)

#### objParameters

One flag you can set:

#### mozAnon

Boolean: Setting this flag to true will cause the browser not to expose the origin and user credentials when fetching resources. Most important, this means that cookies will not be sent unless explicitly added using setRequestHeader.
