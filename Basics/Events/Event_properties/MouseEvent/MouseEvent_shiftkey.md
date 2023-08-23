# MouseEvent: shiftKey property

The MouseEvent.shiftKey read-only property is a boolean value that indicates whether the shift key was pressed or not when a given mouse event occurs.

## Example

This example logs the shiftKey property when you trigger a click event.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MouseEvent</title>
</head>
<body>

    <p>Click anywhere to test the <code>shiftKey</code> property.</p>
<p id="log"></p>

</body>

<script>
    
    let log = document.querySelector("#log");
document.addEventListener("click", logKey);

function logKey(e) {
  log.textContent = `The shift key is pressed: ${e.shiftKey}`;
}

</script>
</html>
```
