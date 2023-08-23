# MouseEvent: screenX property

The screenX read-only property of the MouseEvent interface provides the horizontal coordinate (offset) of the mouse pointer in global (screen) coordinates.

Value is double floating point.

>Note: In a multiscreen environment, screens aligned horizontally will be treated as a single device, and so the range of the screenX value will increase to the combined width of the screens.

## Examples

This example displays your mouse's coordinates whenever you trigger the mousemove event.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MouseEvent</title>
</head>
<body>

    <p>Move your mouse to see its position.</p>
<p id="screen-log"></p>

</body>

<script>
    
    let screenLog = document.querySelector("#screen-log");
document.addEventListener("mousemove", logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}

</script>
</html>
```
