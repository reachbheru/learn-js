//reversing a number

//using loop and string
const originalNumber = 105;
const number = new String(originalNumber);
const len = number.length;
let reverseNumber = "";

for(let i=(len-1) ; i>=0 ; i--){
    reverseNumber += number[i];
};

console.log(Number(reverseNumber));

//using loop and math operators
let no = 203;
let reversed = 0;

  while (no > 0) {
    const digit = no % 10;
    reversed = reversed * 10 + digit;
    no = Math.floor(no / 10);
  }

console.log(reversed);