/*
    STRINGS, VARIABLES, FUNCTIONS
*/
// string + variable 
// let greeting = 'Hello NICAR!'
// console.log(greeting)

// combining strings
// const greeting = 'Hello NICAR! My name is '
// const name = 'Sam'
// console.log(greeting + name)


// string interpolation
// const name = 'Sam'
// const greeting = `Hello NICAR! My name is ${name}.` 
// console.log(greeting)


/*
    NUMBERS, BOOLEANS, AND CONDITIONALS
*/
// const sum = 5 + 6 + 22
// console.log(sum)

// let year = 2022
// const nextYear = year += 1 // this adds 1 to year...the += is common shorthand for this operation
// console.log(nextYear)

// const subtract = 5 - 6
// console.log(subtract)

// const compare = 5 > 6
// console.log(compare)

// if (5 > 6) {
//     console.log('5 is greater than 6')
// } else {
//     console.log('5 is not greater than 6.')
//     console.log('In other words, 5 is less than 6.')
//     console.log('In other words...6 is greater than 5.')
//     console.log('progammers need editors.')
// }

// if (5 > 6) {
//     console.log('5 is greater than 6.')
// } else if (23 > 15) {
//     // this "else if" statement evaluates to true, so this code runs
//     console.log('23 is greater than 15.')
// } else {
//     // this code will only run if neither of the first two statements are true.
//     console.log('neither statement is true')
// }


// const petAges = [7, 3, 11]

// console.log(petNames[4])

// if (petNames[4]) {
//     console.log('A pet name exists at index 4.')
// } else {
//     console.log('There is no index 4 in petNames')
// }


// const petNames = ['Sylvia', 'Okie Dokie', 'Lil']
// const petAges = [7, 3, 11]
// petNames.forEach((pet) => {
//     if (pet) {
//         console.log(pet)
//         console.log('pet is true')
//     }
// })

const pet1 = {
    'name': 'Sylvia',
    'age': 7,
    'species': 'cat'
}

console.log(pet1.name)

const sylvia = `Hi my name is ${pet1.name}. I'm a ${pet1.age} year old ${pet1.species}.`
console.log(sylvia)

console.log(pet1.furColor)

const pets = [
    {
        'name': 'Sylvia',
        'age': 7,
        'species': 'cat'
    },
    {
        'name': 'Okie Dokie',
        'age': 3,
        'species': 'dog'
    }
]

function petSaysHello(pet) {
    console.log(pet)
    const greeting = `Hi my name is ${pet.name}. I'm a ${pet.age} year old ${pet.species}.`
    console.log(greeting)
}

pets.forEach((pet) => {
    petSaysHello(pet)
})


console.log(console.log)
console.log(petSaysHello)
