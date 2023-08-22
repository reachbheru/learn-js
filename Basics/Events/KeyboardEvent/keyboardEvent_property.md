# KeyboardEvent: code property

The KeyboardEvent.code property represents a physical key on the keyboard. In other words, this property returns a value that isn't altered by keyboard layout or the state of the modifier keys.

If the input device isn't a physical keyboard, but is instead a virtual keyboard or accessibility device, the returned value will be set by the browser to match as closely as possible to what would happen with a physical keyboard, to maximize compatibility between physical and virtual input devices.

The code values for Windows, Linux, and macOS are listed on the KeyboardEvent: code values page.

## Examples

Exercising KeyboardEvent

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MouseEvent</title>
</head>
<body>

   <p>
  Press keys on the keyboard to see what the KeyboardEvent's key and code values
  are for each one.
</p>
<div id="output" tabindex="0"></div>

</body>

<script>
    
   window.addEventListener(
  "keydown",
  (event) => {
    const p = document.createElement("p");
    p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
    document.getElementById("output").appendChild(p);
    window.scrollTo(0, document.body.scrollHeight);
  },
  true,
);

</script>
</html>
```
