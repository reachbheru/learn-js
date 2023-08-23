# MouseEvent

The MouseEvent interface represents events that occur due to the user interacting with a pointing device (such as a mouse). Common events using this interface include click, dblclick, mouseup, mousedown.

MouseEvent derives from UIEvent, which in turn derives from Event. Though the MouseEvent.initMouseEvent() method is kept for backward compatibility, creating of a MouseEvent object should be done using the MouseEvent() constructor.

## Instance property

- [MouseEvent: clientX property](https://github.com/reachbheru/learn-js/blob/main/Basics/Events/Event_properties/MouseEvent/MouseEvent_clientX.md)

- [MouseEvent: clientY property](https://github.com/reachbheru/learn-js/blob/main/Basics/Events/Event_properties/MouseEvent/MouseEvent_clientY.md)

- [MouseEvent: screenX property](https://github.com/reachbheru/learn-js/blob/main/Basics/Events/Event_properties/MouseEvent/MouseEvent_screenX.md)

- [MouseEvent: screenY property](https://github.com/reachbheru/learn-js/blob/main/Basics/Events/Event_properties/MouseEvent/MouseEvent_screenY.md)

- [MouseEvent: altKey property](https://github.com/reachbheru/learn-js/blob/main/Basics/Events/Event_properties/MouseEvent/MouseEvent_altkey.md)

- [MouseEvent: ctrlKey property](https://github.com/reachbheru/learn-js/blob/main/Basics/Events/Event_properties/MouseEvent/MouseEvent_ctrlKey.md)

- [MouseEvent: shiftKey property](https://github.com/reachbheru/learn-js/blob/main/Basics/Events/Event_properties/MouseEvent/MouseEvent_shiftkey.md)

## Constructor

The MouseEvent() constructor creates a new MouseEvent object.

### Syntax

```js
new MouseEvent(type)

new MouseEvent(type, options)

```

### Parameters

#### type

 A string with the name of the event. It is case-sensitive and browsers set it to dblclick, mousedown, mouseenter, mouseleave, mousemove, mouseout, mouseover, or mouseup.

#### options Optional

An object that, in addition of the properties defined in UIEvent(), can have the following properties:

- screenX

- screenY

- clientX

- clientY

- ctrlKey

- shiftKey

- altKey

- metaKey

- button

- buttons

- relatedTarget

## Example

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
  <label><input type="checkbox" id="checkbox" /> Checked</label>
</p>
<p>
  <button id="button">Click me to send a MouseEvent to the checkbox</button>
</p>

</body>

<script>
    
    function simulateClick() {
  // Get the element to send a click event
  const cb = document.getElementById("checkbox");

  // Create a synthetic click MouseEvent
  let evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  // Send the event to the checkbox element
  cb.dispatchEvent(evt);
}
document.getElementById("button").addEventListener("click", simulateClick);

</script>
</html>
```
