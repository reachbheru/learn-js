# Event: timeStamp property

The timeStamp read-only property of the Event interface returns the time (in milliseconds) at which the event was created or document was loaded.

## Syntax

```js
event.timeStamp
```

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <p>Focus this iframe and press any key to get the current timestamp for the
        keypress event.
      </p>
      <p>timeStamp: <span id="time">-</span></p>

</body>
<script>

    function getTime(event) {
  const time = document.getElementById("time");
  time.firstChild.nodeValue = event.timeStamp;
}
document.body.addEventListener("keypress", getTime);

</script>
</html>
```
