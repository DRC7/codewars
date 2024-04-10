// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.


//My Solution

function mergeArrays(a, b) {
    // your code here
    let newArr = a.concat(b)
    newArr.sort((a,b) => a - b)
    return newArr.filter((value, index) => newArr.indexOf(value) === index)
}

// Best Practice Solution

function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a,b)=>a-b);
}
  