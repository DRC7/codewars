
//Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

function wordSearch(query, seq) {
    // seq is being filtered using filter 
    // x is the element inside the array
    return seq.filter(x => {
        // if x includes the query return it
        if(x.includes(query)) {
            return x
            //else return the string Empty
        } else {
            return "Empty"
        }
    })
}