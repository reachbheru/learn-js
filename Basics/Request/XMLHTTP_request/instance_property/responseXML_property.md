# responseXML property

The XMLHttpRequest.responseXML read-only property returns a Document containing the HTML or XML retrieved by the request; or null if the request was unsuccessful, has not yet been sent, or if the data can't be parsed as XML or HTML.

>Note: The name responseXML is an artifact of this property's history; it works for both HTML and XML.

Usually, the response is parsed as "text/xml". If the responseType is set to "document" and the request was made asynchronously, instead the response is parsed as "text/html". responseXML is null for any other types of data, as well as for data: URLs.

If the server doesn't specify the Content-Type as "text/xml" or "application/xml", you can use XMLHttpRequest.overrideMimeType() to parse it as XML anyway.

This property isn't available to workers.

## Exceptions

### InvalidStateError DOMException

Thrown if the responseType isn't either document or an empty string.

## Example

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server");

// If specified, responseType must be empty string or "document"
xhr.responseType = "document";

// Force the response to be parsed as XML
xhr.overrideMimeType("text/xml");

xhr.onload = () => {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    console.log(xhr.response, xhr.responseXML);
  }
};

xhr.send();

```
