// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// My Solution

//
//sort will sort the array in order
//[0] the first element in the array
//split will split the string into chars
//joins the chars back together with *** in between this time
function twoSort(s) {
    return s.sort()[0].split('').join('***')
}
