// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// EXAMPLES
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

//My Solution

const invert = array => array.map(num => -num)

function inverted(arr) {
    return arr.map(x => -x)
}