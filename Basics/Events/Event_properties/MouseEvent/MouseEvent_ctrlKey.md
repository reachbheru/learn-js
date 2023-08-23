# MouseEvent: ctrlKey property

The MouseEvent.ctrlKey read-only property is a boolean value that indicates whether the ctrl key was pressed or not when a given mouse event occurs.

On Macintosh keyboards, this key is labeled the control key. Also, note that on a Mac, a click combined with the control key is intercepted by the operating system and used to open a context menu, so ctrlKey is not detectable on click events.

## Examples

This example logs the ctrlKey property when you trigger a mousemove event.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MouseEvent</title>
</head>
<body>

    <p id="log">The ctrl key was pressed while the cursor was moving: false</p>

</body>

<script>
    
    const log = document.querySelector("#log");
window.addEventListener("mousemove", logKey);

function logKey(e) {
  log.textContent = `The ctrl key was pressed while the cursor was moving: ${e.ctrlKey}`;
}

</script>
</html>
```
