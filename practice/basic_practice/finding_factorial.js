const variable = 5 ;
var factorial = 1;

for(i = 2; i <= variable; i++ ){
   factorial = factorial * i;
};

if (variable === 0 || variable === 1) {
    console.log(`factorial of ${variable} is 1`);
}else{
    console.log(`factorial of ${variable} is ${factorial}`);
}