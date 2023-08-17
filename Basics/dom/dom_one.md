# DOM (Document Object Model)

The DOM (Document Object Model) is an API that represents and interacts with any HTML or XML-based markup language document. The DOM is a document model loaded in the browser and representing the document as a node tree, or DOM tree, where each node represents part of the document (e.g. an element, text string, or comment).

The DOM is one of the most-used APIs on the Web because it allows code running in a browser to access and interact with every node in the document. Nodes can be created, moved, and changed. Event listeners can be added to nodes and triggered on the occurrence of a given event.

## Try

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <title>DOM learning</title>
    <style>
        .bg-black{
            background-color: #212121;
            color: #fff;
        }
    </style>
</head>
<body class="bg-black">
    <div >
        <h1  id="title" class="heading">DOM manipulation learning <span style="display: none;">test text</span></h1>
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <input type="password" name="" id="">

        <ul>
            <li class="list-item">one</li>
            <li class="list-item">two</li>
            <li class="list-item">three</li>
            <li class="list-item">four</li>
        </ul>
    </div>
</body>
</html>
```

## Commands for practise in browser inspect

```js
// element id in getElementById()
// attribute name in getAttribute()
// name of attribute, value in setAttribute()

 document.getElementById()
 document.getElementByClassName()
 
 // it gives HTML_Collection

 const anyVarible = document
 const convertedArray = Array.from(anyVarible)
 
 // it will convert HTML_Collection into an array

 getElementById()
 
 //using anyVarible

 anyVarible.style.backgroundColor = 'color name'
 anyVarible.style.padding = 'padding in px'
 anyVarible.style.borderRadius = 'radius in px'
 anyVarible.textContent
 anyVarible.innerHTML
 anyVarible.innerText

 document.getElementById().id
 document.getElementById().className
 document.getElementById().getAttribute()
 document.getElementById().setAttribute()
 document.querySelector()
 //use selector in it.
 //use '#' for id, '.' for class
 
 document.querySelectorAll()
 
 //it gives NodeList
```
