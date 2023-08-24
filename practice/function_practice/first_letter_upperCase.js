//capitalizing first letter


let string = "naruto";
let newString = ""

function capitalizing (string){
    newString = string.charAt(0).toUpperCase()+string.slice(1);
}

capitalizing(string);
console.log(newString);