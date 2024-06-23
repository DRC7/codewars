// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//My Solution

let countSheep = function(num) {
    // declaring a new variable to push string to
    let str = "";
    // a for loop that will loop 3 times to get the string to increment and storing each loop into the string
    for(let i = 1; i <= num; i++) {
        str += `${i} sheep...`
    }
    return str;
}