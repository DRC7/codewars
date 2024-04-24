// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	            Output
// "Jabroni"	        "Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	        "Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	        "Your tax dollars"
// "Rapper"	            "Cristal"
// anything else	    "Beer"

//My Solution 

function getDrinkByProfession(param) {
    if (param.toLowerCase() === 'jabroni') {
        return 'Patron Tequila'
      } else if (param.toLowerCase() === 'school counselor') {
        return 'Anything with Alcohol'
      } else if (param.toLowerCase() === 'programmer') {
        return 'Hipster Craft Beer'
      } else if (param.toLowerCase() === 'bike gang member') {
        return 'Moonshine'
      } else if (param.toLowerCase() === 'politician') {
        return 'Your tax dollars'
      } else if (param.toLowerCase() === 'rapper') {
        return 'Cristal'
      } else {
        return 'Beer'
    }
}
