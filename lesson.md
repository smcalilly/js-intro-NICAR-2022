# JavaScript Intro - NICAR 2020

This is an outline for teaching an introduction to JavaScript at NICAR 2022.

## Overview
- What is JavaScript and why is it important?
- Learn JS types by running code in the browser
  - console.log
  - intro to a strings, variables, and functions
  - intro to a numbers, booleans, and conditionals
  - intro to arrays, loops, and objects
- Interacting with the DOM
  - what is the DOM
  - write to the DOM
  - event listener for button click
  - render to the DOM based on a button click
  - loop through an array of objects and render them
- Continuing education
  - style and syntax
  - weird stuff about javascript (time permitting)
  - resources
  - a bit about frameworks


## What is JavaScript and why is it important?
JavaScript is one of the most popular programming languages. It's particularly popular because it allows you to run code on web pages, like in your Chrome or Firefox or Safari web browser.

For creating web pages, you have a trinity:
- HTML -- *What it is*. Concerned with the structure of your webpage and what's on it. It has elements like a heading or a paragraph. 
- CSS -- *What it looks like*. Concerned with appearance. Styles the HTML elements to look good.
- JavaScript -- *What it does*. Concerned with the user interactions and behavior of the page. It can also change the HTML and CSS.

## Learn types by running code in the browser
We can demonstrate how to run code in your browser. Through this demonstration, you'll learn about some of the basic types of JavaScript. I'll define what a "type" is in a bit.

### Strings, variables, and functions
#### Open up index.html
(TODO: clarify this)
Find the index.html in the file explorer. You should be able to double click to open that file in your web browser.

#### Right click on your index.html page and click "inspect"
When creating websites on the front-end, you'll spend a lot of time in what's called your browser's "Developer Tools" console.

You should see a console like what I have.

See:
- inspector you can see the HTML
- console you can run javascript code and see errors

You can use this on any website. Go to twitter or your favorite (or not favorite) website and you can see what's going on under the hood.

#### Click on console
Now we can run some code in our `index.html` console. Type this code into your console and hit enter:
```javascript
console.log('Hello NICAR!')
```

#### String
(TODO: decide on name: data types or data structures or types?)
The message `'Hello NICAR!'` is what's known as a **string**. A string is one of many datatypes in JavaScript. A string can be any character you type on your keyboard. It's wrapped in single or double quotes. (I prefer single quotes because it cuts down visual noise.)

A string is known as a data structure built into javascript, sometimes known as a type. Data structures are special parts of JavaScript (and other programming languages) and used to build programs. The different data structures have different powers. We'll learn some more in this lesson, but there are a lot of different JS data structures.


#### Function
`console.log` is known as a function. It's built-in to the language and useful for debugging your program. The `'Hello NICAR!'` string is passed into the function as an **argument** to the function. So, `console.log` takes the argument and logs it in the console.

We'll go deeper into functions in a bit, and make our own.

#### Variable
We're gonna keep using the console to see the results of our code, but we're gonna write our code in a script that runs on the page. In your (TODO: name this folder), open the `console.js`. (TODO: finish this instruction.) 

You can set the string to what's called a **variable**, and then pass that variable into the `console.log`:
```javascript
const greeting = 'Hello NICAR!'
console.log(greeting)
```

That should do the same thing.

#### Combining strings
You can combine strings together:
```javascript
const greeting = 'Hello NICAR! My name is '
const name = 'Sam'
console.log(greeting + name)
```

There's a better way to combine strings. It's known as string interpolation:
```javascript
const name = 'Sam'
const greeting = `Hello NICAR! My name is ${name}.` 
console.log(greeting)
```

The `backticks` and `${}` are a syntax thing that allow you to place variables inside a string. The `greeting` variable still contains a string even though the syntax looks different than before.

#### Recap
To recap, we learned about:
- strings
- functions
- variables

Does anybody need any clarification?

### Numbers, booleans, conditionals
Now we'll learn some about numbers, booleans, and conditionals.

#### Numbers
Numbers are pretty self-explanatory. You can do math operations with them. You can assign the results to a variable.

Add:
```javascript
const sum = 5 + 6 + 22
console.log(sum)
```

You can set a number to a variable, and then add like this:
```javascript
const year = 2022
const nextYear = year += 1 // this adds 1 to year...the += is common shorthand for this operation
console.log(nextYear)
```

Subtract:
```javascript
const subtract = 5 - 6
console.log(subtract)
```

Compare:
```javascript
const compare = 5 > 6
console.log(compare)
```

#### Booleans and conditionals
For the compare example, you'll see that it logs `false`. That's called a **boolean**. Booleans are true/false statements. You can use booleans controlling the flow of your program when you combine them with **conditionals**.

Write a conditional statement that compares numbers and then logs a string depending on the boolean value:
```javascript
if (5 > 6) {
    console.log('5 is greater than 6')
} else {
    console.log('5 is not greater than 6.')
    console.log('In other words, 5 is less than 6.')
    console.log('In other words...6 is greater than 5.')
    console.log('progammers need editors.')
}
```

Conditionals are if/else logic statements. In english, that code says: if 5 is greater than 6, then log the string "5 is greater than 6." Else, log the other strings.

A conditional can be more complex than if/else.
```javascript
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
```

There are a few different ways that you can write booleans and conditionals in JavaScript, but we're only gonna use this way for now.

#### Recap
To recap, we learned about:
- booleans
- conditionals

Does anybody need any clarification?

### Arrays, undefined, loops, and objects
One last section of types and then we'll be equipped to use JavaScript to make an interactive webpage.

#### Array
An **array** is a list of items. An array can hold any data type.

```javascript
const petNames = ['Sylvia', 'Okie Dokie', 'Lil']
const petAges = [7, 3, 11]
```

You can access an item in the array by using the index. The indexing starts with the number 0. So, if we want to get the first item in the array, we'll do this:
```javascript
console.log(petNames[0])
```

What happens if you use an index that is out of range:
```javascript
console.log(petNames[4])
```

It prints `undefined`. Undefined is another JS data type. It's often used in situations where you'd want to check the true/false values:
```javascript
if (petNames[4]) {
    console.log('The array has an item at index 4.')
} else {
    console.log('The array does not have an item at index 4.')
}
```

You can loop over each item in the array, and use that in a powerful way.

Here's a basic example. We loop through each item and the log the item:
```javascript
const petNames = ['Sylvia', 'Okie Dokie', 'Lil']

petNames.forEach((name) => {
    console.log(name)
})
```

(TODO: reword? necessary to explain the anonymous function? might be a bit confusing at this point in time)
In english, this says: for each item in the `petName` or `petAge` array, pass the item into an anonymous function (that's the part with the => {}) and console.log it. 

#### Objects
If you notice in the above example, we have `petNames` and `petAges` as separate variables. It would be easier to work with, and make more sense from a code perspective, if we had these values contained with a single entity. We can, using the **object** type. 

An object is a collection of key/value pairs:
```javascript
const pet1 = {
    'name': 'Sylvia',
    'species': 'cat',
    'age': 7
}
```

You can access the `name` key and log it:
```javascript
// access pet1's name with the "name" key
console.log(pet1.name)
```

You can use string interpolation to use all the keys in a single string:
```javascript
console.log(`Hello! My name is ${pet1.name}. I'm a ${pet1.age} year old ${pet1.species}.`)
```

What happens when you try to use a key that doesn't exist?
```javascript
console.log(pet1.furColor)
```

#### Loop through an array of objects
```javascript
const pets = [
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
    const greeting = `${pet.greeting}! My name is ${pet.name}. I'm a ${pet.age} year old ${pet.species}.`
    console.log(greeting)
})
```

#### Write your own function
We can refactor some of that code and encapsulate it in a function:
```javascript
function petSaysHello(pet) {
    const greeting = `${pet.greeting}! My name is ${pet.name}. I'm a ${pet.age} year old ${pet.species}.`
    console.log(greeting)
}

pets.forEach((pet) => {
    // this passes the pet object as an argument into our function
    petSaysHello(pet)
})
```

## Writing to the DOM
(TODO: improve this intro to the DOM, fact check its definition)
The DOM is short for the Document Object Model. It represents the HTML on your webpage. Using javascript, you can do things with the DOM, like add your own HTML, or restyle, or listen to button clicks, etc.

In our `index.html` file, we have a `<div>` element with an id of `text`. You use this id to grab the div element and write some HTML instead of the div:
```javascript
const textDiv = document.getElementById('text')
textDiv.innerHTML = "hey y'all"
```

(TODO: add all these steps)
- add button to html
- encapsulate the "heyyall" in a function
- reference heyYall function in the button onClick
- demonstrate count, introduce the idea of scope and how the script.js runs when the page loads.
- attach click event callback that calls that function

these are called webapis: (TODO: fact check the real name)
- document.getElementById
- document.addEventListener

```javascript
let count = 0

console.log('i loaded', count)

function heyYall() {
    count += 1
    const paragraph = document.createElement('p')
    paragraph.innerHTML = `hey y'all!!! count: ${count}`

    document.getElementById('text').appendChild(paragraph)
}
```

two more webapis that we'll learn now:
- document.appendChild
- document.createElement

refactor `heyYall` function to append child so it doesn't overwrite the html:
```javascript
function heyYall() {
    count += 1
    const paragraph = document.createElement('p')
    paragraph.innerHTML = `hey y'all!!! count: ${count}`

    document.getElementById('text').appendChild(paragraph)
}
```

render an array of objects. create a function called `listWriters`:
```javascript
function listWriters() {
    georgiaWriters.forEach(writer => {
        const paragraph = document.createElement('p')
        paragraph.innerHTML = `<strong>${writer.name}</strong> wrote ${writer.publishedBooks} books. <i>${writer.bestBook}</i> is one of ${writer.name}'s most popular books.`
        document.getElementById('text').appendChild(paragraph)
    })
}
```

reference in the event listener:
```javascript
document.getElementById('hi').addEventListener('click', listWriters)
```

it renders. you can keep clicking it and see there's a bug, because it keeps adding the list of writers.

there's another bug, too. or what i would consider a bug, because it's a bad coding practice and antagonistic to screen readers. checkout the inspector tab in the dev tools. you should see the html we created. this is not semantic html, which is bad, because semantic html helps screen readers parse the DOM so that the content is consumable by screen reader users.

so, we'll refactor the code inside `listWriters` to render a list instead of rendering each line as a new paragraph. since this is an array of writers, it makes sense to use the html list elements:
```javascript
function listWriters() {
    const list = document.createElement('ul')

    georgiaWriters.forEach(writer => {
        const listItem = document.createElement('li')
        listItem.innerHTML = `<strong>${writer.name}</strong> wrote ${writer.publishedBooks} books. <i>${writer.bestBook}</i> is one of ${writer.name}'s most popular books.`
        list.appendChild(listItem)
    })

    document.getElementById('text').appendChild(list)
}

```

inspect the html in the dev tools.

## Summary
(TODO)
