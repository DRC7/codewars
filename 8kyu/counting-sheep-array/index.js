// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//  true,  true,  true,  true ,
//  true,  false, true,  false,
//  true,  false, false, true ,
//  true,  true,  true,  true ,
//  false, false, true,  true]

//My Solution

function countSheep(arrayOfSheep) {
    let totalAnimals = 0;

    arrayOfSheep.map( x => {
        if(x == true)
        totalAnimals++
    })

    return totalAnimals
}

// UPVOTED ON CODEWARS

function countSheep(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length
}

