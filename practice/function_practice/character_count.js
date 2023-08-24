//counting characters of string

const string = "anime";
let count = 0;

function countCharacter (string){
    for (let i=0 ; i<string.length ; i++) {
        count += 1;
    };
};

countCharacter(string);
console.log(count);