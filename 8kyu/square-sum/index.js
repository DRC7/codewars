// Complete the square sum function so that it squares each number passed into it and then sums the results together.


// My Solution

function squareSum(numbers){
    let squared = numbers.map(num => (Math.pow(num, 2)))
    return console.log(squared.reduce((acc, curr) => acc + curr))
}

// Best Practice Solution

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
}
