// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    if(input == null || input.length == 0)
        return []

    let positive = 0
    let negative = 0

    for(let i = 0; l = input.length; i<l, ++i) {
        if (input[i] > 0)
            ++ positive
         else 
            negative += input[i]
    }

    return [positive, negative]
}

