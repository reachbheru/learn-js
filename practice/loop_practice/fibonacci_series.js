//printing fabonacci series

let fabonacciSeries = [0,1];

for (let i=2 ; i<10 ; i++){
    const series = (fabonacciSeries[i-1])+(fabonacciSeries[i-2]) 
    fabonacciSeries[i] = series;
};

console.log(fabonacciSeries);