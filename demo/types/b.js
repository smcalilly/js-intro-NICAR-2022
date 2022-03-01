/*
    NUMBERS, BOOLEANS, AND CONDITIONALS
*/

// Add numbers and set the result to a variable
let sum = 5 + 6 + 22
console.log(sum)


// Set a number to a variable and add to it
let year = 2022
let nextYear = year += 1 // this adds 1 to year...the += is common shorthand for this operation
console.log(nextYear)


// Subtract two numbers
let subtract = 5 - 6
console.log(subtract)


// Compare two numbers
let compare = 5 > 6
console.log(compare)


// Booleans to control the flow of the program
if (5 > 6) {
    console.log('5 is greater than 6')
} else {
    console.log('5 is not greater than 6.')
    console.log('In other words, 5 is less than 6.')
    console.log('In other words...6 is greater than 5.')
    console.log('Progammers need editors, too.')
}


// More complex conditionals: if / else if / else
// evaluates as false so the code within the statement curly brackets doesn't run
if (5 > 6) {
    console.log('5 is greater than 6.')
} else if (23 > 15) {
    // this "else if" statement evaluates to true, so this code runs
    console.log('23 is greater than 15.')
} else {
    // this code will only run if neither of the first two statements are true.
    console.log('neither statement is true')
}
