//Complete the solution so that it reverses all of the words within the string passed in.

// My solution
function reverseWord(str) {
    return str.split('').reverse().join('')
}

let string = "the day will become light with Jesus"

console.log(reverseWord(string))

// NOTES 

// split('') and join('') will return the string with actual reverse ex: apple / elppa
// split(' ') and join(' ') will return the string backwards ex: the apple / apple the

