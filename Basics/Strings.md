# Strings

The String object is used to represent and manipulate a series of characters.
String are immutable.
String literals are denoted by double or single quotes.

## Creating a string

You can create  string directly using **'='** or by using **new String**.

```js
const string1 = "a primitive string";
const string2 = new String("a string object");

```

**whenever you try to access a property of a string str, JavaScript turns the string into an object, by using new String(str). This object is called a "wrapper object". For example:**

```js
const newString = new String(string1);//a string wrapper object 
```

## Accessing string character

We can access string character by using **charAt()** or by using **indexing**.

### using charAt()

```js
"boy".charAt(1);//gives value "o"
"boy".charAt(0);//gives value "b"
```

### using indexing

```js
"cat"[1];//gives value "a"
"cat"[0];//gives value "c"
```

## String primitive and String objects

JavaScript shows differnce between String objects and primitive string values and handle them accordingly.

Strings that are created using the '=' sign are "primitive strings," and the ones that are created using the 'new String' are "String objects."

**Note- while using eval string primitives treated as source code but string objects are treated as objects by returning objects. For example:**

```js
const s1 = "2+2";//primitive string
const s2 = new String("2+2");//string object
console.log(eval(s1));//returns 4
console.log(eval(s2));//returns "2+2"
```

**use "valueOf()" to convert string object to primitive string. For example:**

```js
console.log(eval(s2.valueOf()));//returns 4
```

## String coercion

Many built-in operations that expect strings first they change their arguments to strings. The operation can be summarized as follows:

- Strings are returned as-is.

- undefined turns into "undefined".

- null turns into "null".

- true turns into "true".

- false turns into "false".
- Numbers are converted to string with toString(10).

- BigInts are converted to string with  toString(10).

- Symbols throw a TypeError.

- Objects are first converted to a primitive by using      [@@toPrimitive()], toString(), and valueOf() methods. The resulting primitive is then converted to a string.

### There are several ways to achieve nearly the same effect in JavaScript.

- **Template literal**:`` `${x}` `` does exactly the string coercion steps explained above for the embedded expression.

- **The String() function:** String(x) use to convert x, except that Symbols don't throw a TypeError.

- **Using the + operator:** "" + x turns its operand to a primitive instead of a string, and, for some objects, has entirely different behaviors from normal string coercion.

**Note-** use `` `${x}` `` (to mimic built-in behavior) or String(x) (to handle symbol values without throwing an error), **but you should not use "" + x.**

**Note-** remaining are string methods.
