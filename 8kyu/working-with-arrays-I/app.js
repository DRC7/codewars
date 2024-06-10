// In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

// Good luck!

// Hint: watch out for side effects.

//p - array of numbers
//r - the same array but without the last element
//e - [1,2,3,4] => [1,2,3]
//p - return array.slice(0, -1)

// My Solution

function withoutMax(arr) {
    return arr.slice(0,-1);
}
  