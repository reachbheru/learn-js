//reversing a string

let originalString ="ship"
let reverseString = " ";
const len = originalString.length;
for (let index = len-1; index >= 0; index--) {
    reverseString += originalString[index];
    
}

console.log(`reverse string is ${reverseString}`);