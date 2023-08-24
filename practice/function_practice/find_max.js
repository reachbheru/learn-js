//finding maximum number in array

const myarr = [1,2,3,4,5];
let max = [0];

function findMax (arr) {
    for (let i=0 ; i<arr.length ; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }
}

findMax(myarr);
console.log(max);