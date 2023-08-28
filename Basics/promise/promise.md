# Promise

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

When the producing code obtains the result, it should call one of the two callbacks:

|Result |       Call            |
|:---:  |       :---:           |
|Success|myResolve(result value)|
|Error  |myReject(error object) |

A JavaScript Promise object can be:

- Pending
- Fulfilled
- Rejected

The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.

>Note-You cannot access the Promise properties state and result.
You must use a Promise method to handle promises.

## Syntax

```js
let promise = new Promise(function(resolve, reject){
     //do something
});;
```

## Example

```js
let promise = new Promise(function (resolve, reject) {
    let x = 0;
    
    if (x === 0) {
        resolve();
    } else {
        reject();
    }
});
 
promise.
    then(function () {
        console.log('Promise resolved');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });
```

### promise then method

It is invoked when a promise is either resolved or rejected. It may also be defined as a carrier that takes data from promise and further executes it successfully.
>Note-Promise.then() takes two arguments, a callback for success and another for failure.
Both are optional, so you can add a callback for success or failure only.

#### Syntax of promise then

```js
.then(function(result){
        //handle success
}, function(error){
        //handle error
})
```

#### Example of promise then

```js
let promise = new Promise(function (resolve, reject) {
    resolve('resolved message');
})
 
promise
    .then(function (successMessage) {
        //success handler function is invoked
        console.log(successMessage);
    }, function (errorMessage) {
        console.log(errorMessage);
    });
```

### promise catch method

It is invoked when a promise is either rejected or some error has occurred in execution. It is used as an Error Handler whenever at any step there is a chance of getting an error.

Parameters: It takes one function as a parameter.

Function to handle errors or promise rejections.(.catch() method internally calls .then(null, errorHandler), i.e. .catch() is just a shorthand for .then(null, errorHandler) )

#### Syntax of promise catch method

```js
.catch(function(error){
        //handle error
    })
```

#### Example of promise catch method

```js

let promise = new Promise(function (resolve, reject) {
    reject('Promise Rejected')
})
 
promise
    .then(function (successMessage) {
        console.log(successMessage);
    })
    .catch(function (errorMessage) {
        //error handler function is invoked
        console.log(errorMessage);
    });
```
