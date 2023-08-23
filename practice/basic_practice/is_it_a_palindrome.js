let string = "ship";
let reverseString = "";
const len = string.length;

for(let i = len-1; i>=0 ; i--){
    reverseString += string[i];
};

if(string === reverseString){
    console.log(`string is a palindrome`);
}else{
    console.log(`string is not a palindrome`);
}