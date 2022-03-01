# JavaScript Intro - NICAR 2022

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


## What is JavaScript and why is it important?
JavaScript is one of the most popular programming languages. It's particularly popular because it allows you to run code on web pages, like in your Chrome or Firefox or Safari web browser.

For creating web pages, you have a trinity:
- HTML: *What it is*. Concerned with the structure of your webpage and what's on it. It has elements like a heading or a paragraph. 
- CSS: *What it looks like*. Concerned with appearance. Styles the HTML elements to look good.
- JavaScript: *What it does*. Concerned with the user interactions and behavior of the page. It can also change the HTML and CSS. It's often used to make maps and data visualations. 

## Learn types by running code in the browser
We can demonstrate how to run code in your browser. Through this demonstration, you'll learn about some of the basic types of JavaScript. I'll define what a "type", but first we need to get some code running.

### Types 1: Strings, variables, and functions
#### Open up index.html
Find the `lesson/index.html` in your text editor. You can open it in your browser like this:
- VS Code and Atom: Right click + copy path. Paste into your text editor.
- Sublime: Right click + show in finder. Double click the file in your finder.

#### Right click on your index.html page and click "inspect"
When creating websites on the front-end, you'll spend a lot of time in what's called your browser's "Developer Tools" console.

You should see a console like what I have.

See:
- inspector, where you can see the HTML
- console, where you can run javascript code and see errors

You can use this on any website. Go to twitter or another website and you can see what's going on under the hood.

#### Click on console
Now we can run some code in our `index.html` console. Type this code into your console and hit enter:
```javascript
console.log('Hello NICAR!')
```

#### String
The message `'Hello NICAR!'` is what's known as a **string**. A string is one of many types in JavaScript. A string can be any character you type on your keyboard. It's wrapped in single or double quotes. (I prefer single quotes because it cuts down visual noise.)

A string is known as a data type built into javascript. Types are special parts of JavaScript (and other programming languages) and used to build programs. The various types have different attributes and can do different things. We'll learn some more in this lesson, but there are a lot of different JS types.


#### Function
`console.log` is known as a function. It's built-in to the language and useful for debugging your program. The `'Hello NICAR!'` string is passed into the function as an **argument** to the function. So, `console.log` takes the argument and logs it in the console.

We'll go deeper into functions in a bit, and make our own.

#### Variable
We're gonna keep using the console to see the results of our code, but we're gonna write our code in a script that runs on the page. In the `lesson` folder, open the `types/a.js`.

You can set the string to what's called a **variable**, and then pass that variable into the `console.log`:
```javascript
let greeting = 'Hello NICAR!'
console.log(greeting)
```

In `lesson/index.html`, we're going to reference the `script1.js` file. This allows us to run the code on that webpage.
Refresh your page and you should see the greeting logged in your console.

#### Combining strings
You can combine strings together:
```javascript
greeting = 'Hello NICAR! My name is '
let name = 'Sam'
console.log(greeting + name)
```

There's a better way to combine strings. It's known as string interpolation:
```javascript
greeting = `Hello NICAR! My name is ${name}.` 
console.log(greeting)
```

The `backticks` and `${}` are a syntax thing that allow you to place variables inside a string. The `greeting` variable still contains a string even though the syntax looks different than before.

#### Recap + clarity check
To recap, we just learned about:
- our browser's console
- strings
- functions
- variables
- string interpolation

### Types 2: Numbers, booleans, conditionals
Now we'll learn some about numbers, booleans, and conditionals. We're going to use a new JavaScript file. In your lesson folder, there's a blank file called `types/b.js`. We need to rename the script reference in your html page to reference that script.

#### Numbers
Numbers are pretty self-explanatory. You can do math operations with them. You can assign the results to a variable.

Add some numbers and set the result to a variable:
```javascript
let sum = 5 + 6 + 22
console.log(sum)
```

You can set a number to a variable, and then add like this:
```javascript
let year = 2022
let nextYear = year += 1 // this adds 1 to year...the += is common shorthand for this operation
console.log(nextYear)
```

Subtract:
```javascript
let subtract = 5 - 6
console.log(subtract)
```

Compare:
```javascript
let compare = 5 > 6
console.log(compare)
```

#### Booleans and conditionals
For the compare example, you'll see that it logs `false`. That's called a **boolean**. Booleans are true/false statements. You can use booleans to control the flow of your program by combining them with **conditionals**.

Write a conditional statement that compares numbers and then logs a string depending on the boolean value:
```javascript
if (5 > 6) {
    console.log('5 is greater than 6')
} else {
    console.log('5 is not greater than 6.')
    console.log('In other words, 5 is less than 6.')
    console.log('In other words...6 is greater than 5.')
    console.log('Progammers need editors, too.')
}
```

Conditionals are if/else logic statements. In English, that code says: if 5 is greater than 6, then log the string "5 is greater than 6." Else, log the other strings.

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

#### Recap + clarity check
To recap, we learned about:
- numbers
- booleans
- conditionals

### Types 3: Arrays, undefined, loops, and objects
We have one lastf section of types and then we'll be equipped to use JavaScript to make an interactive webpage. We'll use a new JavaScript file for this. In your lesson folder, there's a file named `types/c.js`. We need to reference that file in our html.

#### Array
An **array** is a list of items. An array can hold any data type.

```javascript
let petNames = ['Sylvia', 'Okie Dokie', 'Lil']
let petAges = [7, 3, 11]
```

You can access an item in the array by using the index. The indexing starts with the number 0. So, if we want to get the first item in the array, we'll do this:
```javascript
console.log(petNames[0])
```

What happens if you use an index that is out of range?
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

You can loop over each item in the array, and use that in a powerful way. Here's a basic example. We loop through each item and the log the item:
```javascript
petNames.forEach((name) => {
    console.log(name)
})
```

In English, this says: for each item in the `petNames` array, pass the item into the loop and console.log it. You can run all sorts of code within the `forEach` loop...you can do multiple console logs, call other functions, etc. Whatever code is within the loop will run for each item in the array.

#### Objects
What if we wanted our pet information to contain more information, other than just a name? JavaScript has a data type for that called an **object**. An object is a collection of key/value pairs:
```javascript
let pet1 = {
    'name': 'Sylvia',
    'age': 7,
    'species': 'cat'
}
```

You can access the `name` key and log it:
```javascript
// access pet1's name with the "name" key
console.log(pet1.name)
```

Or the age key:
```javascript
console.log(pet1.age)
```

You can use string interpolation to access all of the keys in a single string:
```javascript
let petGreeting = `Hello! My name is ${pet1.name}. I'm a ${pet1.age} year old ${pet1.species}.`
console.log(petGreeting)
```

What happens when you try to use a key that doesn't exist?
```javascript
console.log(pet1.furColor)
```

#### Loop through an array of objects
You can create an array of objects, and loop through them:
```javascript
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
```

#### Write your own function
We can refactor some of that code and encapsulate it in a function:
```javascript
function petSaysHello(pet) {
    let greeting = `My name is ${pet.name}. I'm a ${pet.age} year old ${pet.species}.`
    console.log(greeting)
}

pets.forEach((pet) => {
    // this passes the pet object as an argument into our function
    petSaysHello(pet)
})
```

## Writing to the DOM
The DOM is short for the Document Object Model. It represents the HTML on your webpage. Using JavaScript, you can do things with the DOM, like add your own HTML, or listen to button clicks, or change the CSS, etc.

In our `dom/index.html` file, we have a `<div>` element with an id of `text`. The id lets us grab the div element and write some HTML instead of the div:
```javascript
let textDiv = document.getElementById('text')
textDiv.innerHTML = "hey y'all"
```

We're gonna write some code to add this text only when a button is clicked.

First, we're gonna encapsulate that code in a function.
```javascript
function heyYall() {
    let textDiv = document.getElementById('text')
    textDiv.innerHTML = "hey y'all"
}
```

We can add a button to our html and reference the function to be called when the button is clicked.
```html
<button onClick='heyYall()'>Click!</button>
```
Cool! But we can refactor this code and do it in a more idiomatic JS way by using an **event listener**. Similar to how we accessed the div to write the text, we're gonna use the same sort of idea to add a event listener to a button. We gotta add an id to reference the buttom element:
```html
<button id='hey'>Click!</button>
```

In our JavaScript file, we want listen to the click event and call our function:
```javascript
document.getElementById('hey').addEventListener('click', heyYall)
```

#### Recap + clarity check
These are called Web APIs and they're useful for interacting with the DOM.

To recap, we learned:
- what the DOM is
- use document.getElementById to target an HTML element in HTML code
- document.addEventListener to add an event listener when a button is clicked

### More advanced DOM functions
Two more Web APIs that we'll learn now are some more advanced ways of rendering HTML on the page:
- document.createElement
- document.appendChild


Refactor `heyYall` function to create a `p` element, put the text inside that element, and appendChild so it doesn't overwrite the html:
```javascript
function heyYall() {
    const paragraph = document.createElement('p')
    paragraph.innerHTML = "hey y'all!!!"
    document.getElementById('text').appendChild(paragraph)
}
```

Notice how it continues to add the text. You can inspect the html in the dev tools and see what happens. If we have time at the end, I can show you some ways to clean that up. I've also [included an exercise with that task](#Exercises) in case we don't have time and you want to try on your own.

### Rendering an array of objects
Building on the array and object types we learned earlier, we're gonna use this new DOM power to take an array of objects and render each object. 

In `dom/data.js`, I created an array of Georgia fiction writers with some information about them. We can access that array in another file by referencing it in our html. In our html, above the `dom/hey.js` script tag, I've included a reference to this `data.js` script.


In the `dom` folder, create a new file called `writers.js`. Now we can reference this file in our `dom/index.html` file:
```html
<script src="writers.js"></script>
```

Once we add that, we're ready to write some code in that script. In `dom/writers.js`, we'll create a new function called `listWriters`:
```javascript
function listWriters() {
    georgiaWriters.forEach(writer => {
        let paragraph = document.createElement('p')
        paragraph.innerHTML = `<strong>${writer.name}</strong> wrote ${writer.publishedBooks} books. <i>${writer.bestBook}</i> is one of ${writer.name}'s most popular books.`
        document.getElementById('text').appendChild(paragraph)
    })
}
```

Note how `georgiaWriters` is referenced. This is the same array of objects in data.js. Because we've added that script to our HTML, we're able to access that variable. That's known as a global variable, because it's accessible through the global context of all the running scripts contained in our page's HTML.

We can reference that function in the event listener:
```javascript
document.getElementById('text').addEventListener('click', listWriters)
```

It renders. Like before, you can keep clicking it and see there's a bug, because it keeps adding the list of writers.

There's another bug, too. Or what I would consider a bug, because it's a bad coding practice and antagonistic to screen readers. Checkout the inspector tab in the dev tools. You should see the HTML our script created. This is not semantic HTML, which is bad, because semantic HTML helps screen readers parse the DOM so that the content is consumable by screen reader users.

So, we'll refactor the code inside `listWriters` to render a list instead of rendering each line as a new paragraph. since this is an array of writers, it makes sense to use the html list elements:
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

#### Recap + clarity check
We just learned:
- the document.appendChild and document.createElement web APIs
- how to use an array of objects to write to the DOM

## Summary
Whew! Okay, that was a lot. We learned about JavaScript strings, booleans, conditionals, arrays, objects, and functions. We used those types to manipulate the HTML page, aka the DOM, by using some of the built-in functions that let us create interactive web page.


## Exercises
### Types
- Create an array of numbers, then write a loop that does a math operation on each item in the array. `console.log` the result of the math operation.
- Create an object where one of the values contains an array, then print out each item in the array. Your object might look like:
```javascript
const bio = {
    name: 'Sam',
    favoriteSouthernCities: ['New Orleans', 'Atlanta', 'Oxford, MS', 'Asheville']
}
```

### DOM
- Add a key/value pair to each writer in the georgiaWriters object. Add that value to your string so it shows up on the webpage.
- Add a new button that removes the text inside the `<div id='text'>`, after the text has been rendered. The button will need an id which you'll use to add an event listener.
- Instead of a list, render the elements in a table. this one might be a little harder just because of the structure of a table. Here's [a good doc about how to structure a table's html](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table), but your table's html might look like this:
```html
<table>
    <th>
        <!-- hint: you can go ahead and add this to your html -->
        <tr>
            <td>Name</td>
            <td>Popular book</td>
            <td>No. books published</td>
        </tr>
    </th>
    <!-- hint: add an id to tbody so you can use that to create a tr element for each item in the array. -->
    <tbody>
    </tbody>
</table>
```
