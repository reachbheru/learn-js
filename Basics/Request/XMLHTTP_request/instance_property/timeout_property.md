# timeout property

The XMLHttpRequest.timeout property is an unsigned long representing the number of milliseconds a request can take before automatically being terminated. The default value is 0, which means there is no timeout. Timeout shouldn't be used for synchronous XMLHttpRequests requests used in a document environment or it will throw an InvalidAccessError exception. When a timeout happens, a timeout event is fired.

>Note: You may not use a timeout for synchronous requests with an owning window.

## Example

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

xhr.timeout = 2000; // time in milliseconds

xhr.onload = () => {
  // Request finished. Do processing here.
};

xhr.ontimeout = (e) => {
  // XMLHttpRequest timed out. Do something here.
};

xhr.send(null);

```
