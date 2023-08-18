# Event: type property

The type read-only property of the Event interface returns a string containing the event's type. It is set when the event is constructed and is the name commonly used to refer to the specific event, such as click, load, or error.

## Syntax

```html
event.type
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
    
    <p>Press any key or click the mouse to get the event type.</p>
<p id="log"></p>

</body>
<script>

    function getEventType(event) {
  const log = document.getElementById("log");
  log.innerText = `${event.type}\n${log.innerText}`;
}

// Keyboard events
document.addEventListener("keypress", getEventType, false); 

// Mouse events
document.addEventListener("click", getEventType, false); 

</script>
</html>
```
