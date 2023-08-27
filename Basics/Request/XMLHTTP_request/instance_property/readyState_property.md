# readyState property

The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:

|Value   |State           |Description|
| :----: | :----:         | :----:    |
|0       |UNSENT          |Client has been created. open() not called yet.|
|1       |OPENED          |open() has been called.|
|2       |HEADERS_RECEIVED|send() has been called, and headers and status are available.  |
|3       |LOADING         |Downloading; responseText holds partial data.|
|4       |DONE            |The operation is complete.|

## Example

```js
const xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.readyState); // readyState will be 0

xhr.open("GET", "/api", true);
console.log("OPENED", xhr.readyState); // readyState will be 1

xhr.onprogress = () => {
  console.log("LOADING", xhr.readyState); // readyState will be 3
};

xhr.onload = () => {
  console.log("DONE", xhr.readyState); // readyState will be 4
};

xhr.send(null);
```
