// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// My Solution

function shortcut(string) {
    let result = ''
    for(let i = 0; i < string.length; i++) {
        if(string[i] != 'a' && string[i] != 'e' && string[i] != 'i' && string[i] != 'o' && string[i] != 'u' &&) {
            result += string[i]
        }
    }
    return result
}

// Best Practice

function shortcut(string) {
    return string
        .split('')
        .filter(str => ! 'aeiou'.includes(str))
        .join('')
}