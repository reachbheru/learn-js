# Strings

The String object is used to represent and manipulate a series of characters.
String are immutable.

## Creating a string

You can create **primitive** string directly using '=' or create **String object** using **new String**.

```js
const string1 = "a primitive string";
const string2 = new String("a string object");
const newString = new String(string1);//a string wrapper object 
```

## Accessing string character

We can access string character by using **charAt()** or by using **indexing**.

## using charAt()

```js
"boy".charAt(1);//gives value "o"
"boy".charAt(0);//gives value "b"
```

## using indexing

```js
"cat"[1];//gives value "a"
"cat"[0];//gives value "c"
```
