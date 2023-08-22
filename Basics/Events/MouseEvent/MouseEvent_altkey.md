# MouseEvent: altKey property

The MouseEvent.altKey read-only property is a boolean value that indicates whether the alt key was pressed or not when a given mouse event occurs.

Be aware that the browser can't always detect the alt key on some operating systems. On some Linux variants, for example, a left mouse click combined with the alt key is used to move or resize windows.

>Note: On Macintosh keyboards, this key is also known as the option key.

## Examples

This example logs the altKey property when you trigger a click event.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MouseEvent</title>
</head>
<body>

    <p>Click anywhere to test the <code>altKey</code> property.</p>
<p id="log"></p>
</body>

<script>
    
    let log = document.querySelector("#log");
document.addEventListener("click", logKey);

function logKey(e) {
  log.textContent = `The alt key is pressed: ${e.altKey}`;
}

</script>
</html>
```
