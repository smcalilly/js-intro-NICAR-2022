/*
    ARRAYS, OBJECTS, AND DIY FUNCTION
*/

// Set an array to a variable
let petNames = ['Sylvia', 'Okie Dokie', 'Lil']

// Access an item in the array by index
console.log(petNames[0])

// Access an item for an index that doesn't exist
console.log(petNames[4])


// Use undefined in a conditional
if (petNames[4]) {
    console.log('The array has an item at index 4.')
} else {
    console.log('The array does not have an item at index 4.')
}


// Loop through each item and log it
petNames.forEach((name) => {
    console.log(name)
})


// Define an object
let pet1 = {
    'name': 'Sylvia',
    'species': 'cat',
    'age': 7
}


// Access pet1's name with the "name" key
console.log(pet1.name)

// Access pet1's age key
console.log(pet1.age)


// Access all the keys in pet1 and create a string
let petGreeting = `Hello! My name is ${pet1.name}. I'm a ${pet1.age} year old ${pet1.species}.`
console.log(petGreeting)


// What happens when you access a key that doesn't exist?
console.log(pet1.furColor)


// Create an array of objects, and loop through them
let pets = [
    {
        'name': 'Sylvia',
        'species': 'cat',
        'age': 7,
        'greeting': 'Meow'
    },
    {
        'name': 'Okie Dokie',
        'species': 'dog',
        'age': 3,
        'greeting': 'Woof'
    },
    {
        'name': 'Lil',
        'species': 'cat',
        'age': 11,
        'greeting': 'Meow'
    }
]

pets.forEach((pet) => {
    // any variable you declare here will essentially reset for each new item, so you can reuse the variable.
    let greeting = `${pet.greeting}! My name is ${pet.name}. I'm a ${pet.age} year old ${pet.species}.`
    console.log(greeting)
})


// You can write your own function and call it within the forEach loop
function petSaysHello(pet) {
    let greeting = `My name is ${pet.name}. I'm a ${pet.age} year old ${pet.species}.`
    console.log(greeting)
}

pets.forEach((pet) => {
    // this passes the pet object as an argument into our function
    petSaysHello(pet)
})
