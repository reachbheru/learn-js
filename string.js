//creating strings
const string1 = "a primitive string";
const string2 = new String("a string object");
const newString1 = new String(string1);//a string wrapper object 

//accessing character by charAt
"boy".charAt(1);//gives value "o"
"boy".charAt(0);//gives value "b"

//accesing character by indexing
"cat"[1];//gives value "a"

//*strings are immutable

//while using eval string primitives treated as source code but string objects are treated as objects by returning objects.For example
const s1 = "2+2";
const s2 = new String("2+2");
console.log(eval(s1));//returns 4
console.log(eval(s2));//returns "2+2"

//use valueOf() to convert string object to primitive string
console.log(eval(s2.valueOf()));//returns 4

//remaining are pre defined function and keywords