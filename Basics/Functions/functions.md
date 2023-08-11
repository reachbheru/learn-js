# Functions

A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

## Defining functions

### Function declarations

A function declarations consists of the function keyword.

```js
function addTwoNumbers(number1, number2){
  return number1 + number2
}
// (number1, number2 are parameters)

const result = addTwoNumbers(5,6);

// function calling
// (5,6) in calling are called arguments

console.log(`Result: ${result}`);// gives 11
```

## Arrow Function

It is one of the most used and efficient methods to create a function in JavaScript because of its comparatively easy implementation. It is a simplified as well as a more compact version of a regular or normal function expression or syntax.

```js
const addTwoNumbers = (number1, number2) => {
  return number1 + number2
}
// (number1, number2 are parameters)

const result = addTwoNumbers(5,6);

// function calling
// (5,6) in calling are called arguments

console.log(`Result: ${result}`);// gives 11
```

```js
// ways to use array functions

const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4));
//gives 7
```

## this keyword in functions

```js
const user = {
    username: "naruto",
    location: "leaf village",

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this); // gives whole user 
    }

}

user.welcomeMessage();
// gives naruto, welcome to webisite
user.username = "kakashi";
user.welcomeMessage();
// gives kakashi, welcome to webisite
console.log(this);
// gives {}
```

>Note: The this keyword refers to the current object in a method or constructor.

## Immediately Invoked Function Expressions (IIFE)

```js
(function anime(){
   // named IIFE
   
    console.log(`DB CONNECTED`);
})();
// use ';' while using IIFE one after another

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('naruto')
```

>Note: We use IIFE, because we don't want global scope variables to interfere with particular function.
