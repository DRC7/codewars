// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

//My Solution

function areYouPlayingBanjo(name) {
    if(name[0].toLowerCase() == 'r') {
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
}

// Best Practice Solution

function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? 'plays' : 'does not play' + "banjo")
}