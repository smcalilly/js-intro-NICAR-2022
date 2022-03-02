# JavaScript Intro - NICAR 2022

This is an outline for teaching an introduction to JavaScript at NICAR 2022.



## Overview

### What we'll learn
- What is JavaScript and why is it important?
- Learn JS fundamentals by running code in the browser
  - types
  - numbers
  - variables
  - diy function and use console.log
  - arrays
  - loops
  - objects
  - booleans (time permitting)
  - conditionals (time permitting)
- Interacting with the DOM
  - what is the DOM
  - write to the DOM
  - event listener for button click
  - render to the DOM based on a button click
  - loop through an array of objects and render them (time permitting)

### See what everybody knows or has been exposed to 
- HTML?
- CSS?
- JavaScript?
- Any other programming lanuages?

## What is JavaScript and why is it important?
JavaScript is one of the most popular programming languages. It's particularly popular because it allows you to run code on web pages, like in your Chrome or Firefox or Safari web browser.

For creating web pages, you have a trinity:
- HTML: *What it is*. Concerned with the structure of your webpage and what's on it. It has elements like a heading or a paragraph. 
- CSS: *What it looks like*. Concerned with appearance. Styles the HTML elements to look good.
- JavaScript: *What it does*. Concerned with the user interactions and behavior of the page. It can also change the HTML and CSS. It's often used to make maps and data visualations. 

### Show some example code
(TODO, get some examples)

Explain that javascript doesn't have to be used on the front-end, it can also be used on the back-end, but that is outside of the scope of this session.

## Learn types by running code in the browser
We can demonstrate how to run code in your browser. Through my demonstrations and coding alongside of me, you’ll learn about some of the basic types of JavaScript.

### Define type
A type is a data structure in JavaScript. There are a lot of types. You can think of the different types as having different abilities to do things within a program. Types are universal across programming languages, but they might go by different names. We'll learn several types throughout this session, and hopefully through learning the different types I'll better define what a type *is*.

## Number
### Define: number
A number is an example of a type. A number is what you think it is. You can do math operations on numbers. Numbers are universal across programming languages.

### I do: number in the console
- open console in the `types/index.html` page.
- demonstrate how you can run code in the console:
  - `5 + 5`
  - `16 - 32`
  - `3 * 2`
  - `16 / 4`

### We do: number in the console
- Together, we're going to work in the console. Every web page has this and it allows you to test and run code in the browser. **Clearly tell everybody to open their console. Show how you can do this. Make sure everybody is on the same page, with their console open, before proceeding.**
- together, we'll add:
  - add: how would you add?
  - subtract: how would you subtract?
  - multiply: how would you multiply?
  - divide: how would you divide?

### You do: number in the console
- write your own add operation.
- multiply three numbers together. it works like a calculator.

## Variable
### Define: Variable
A **variable** is a special way of storing values. For example, you can use a variable to store a number, or even the numerical result of a math operation. Variables are universal across programming languages.

### I do: Variable
- `let thisYear = 2022`
- Add two numbers together and set it to a variable: `let nextYear = thisYear + 1`
- Demonstrate how you can add numbers with variables.
- Note that you can style the variable to whatever you want and it will still work, but camelCase is a common convention in javascript.

### We do: variable
- Make sure everybody understands variable. Make sure everybody is in their console.
- instruct everybody to create a `thisYear` variable.
- subtract one from `thisYear` and store the result in a variable called `lastYear`
- multiply two numbers together and set it to a variable
- add a number to the multiplication variable

### You do: variable
- using the `thisYear` variable we defined, subtract 2 from it and store the results in a variable. call the variable whatever you want, maybe something like `pandemicStartYear`.

## Function
### Define: function
A function is a fundamental building block in javascript. It's a set of procedures that performs a task, like calculating a bunch of numbers. It can take an input, and return an output. I can write my own functions, but there are also a lot of built-in functions in javascript. Here we will do both.

And now, instead of the console, we're gonna write this code in the javascript file, save it, and reload the page. 

### I do: function
- I can write my own function called add:
```
function add(num1, num2) {
  let result = num1 + num2
  return result
}
```
- note that the spaces and new lines don't matter here. what's important is the curly brackets, which is the function body, and holds all of the instructions/code. the curly brackets are what's known as syntax.
- can "call" this function: `add(2, 2)`
- set the result to an `addTwoNumbers` variable.
- in order to see the results, since this is in the javascript file and not the console, we gotta console.log it. console.log is a function that takes arguments and prints the argument you pass into the function.


### We do: function
- to reiterate, we're writing this code in a javascript file, saving the file, and reloading the page. make sure everybody is in the same file before proceeding. do it in the types/a.js
- We can write a function together called multiply:
```
function multiply(num1, num2) {
  let result = num1 * num2
  return result
}
```
- what do you think this code will do if you pass in 2 and 5?
- set the result to a variable: `let multiplyTwoNumbers = multiply(5, 5)`?
- console.log. **this is a new concept, so make sure everybody does this before proceeding.**

### You do: function
- write a function called `subtract`. it should take in two parameters. call the subtract function and set it to a variable. console.log the results, and make sure the results are logged in your console. Functions are universal across programming langues.

## String
### Define: string
We're gonna learn a new data type called a **string**. a string is used to represent and manipulate a sequence of characters. basically anything you can type on your keyboard can be a string. Strings are universal across programming lanuges.

### I do: string
- create a variable called `name` and set that value as my name
- show how you can call the variable in the console 
- create a variable called `hometown` and log it
- combine hometown + name and set it to a variable called greeting
- console.log greeting
- note how you need to add some spaces to the strings so that you can read it and the words don't run together.

### We do: string
- do it in types/b.js. change the script tag in your html. make sure everybody is on the same page before proceeding.
- do the I do with everybody. i'm gonna delete all of my code and we'll do it together.

### You do: string
- building upon the greeting string. add you own string to it. you can do something like age or favorite book. (TODO: come up with better exercise!)

## Object
### Define: Object
So if we have these variables name and hometown, it would make sense to keep them together a single entity. You can do that with what's called an **object**. An object is a collection of key/value pairs. Objects are universal in programming languages but go by different names.

### I do: Object
- create an object named bio with the keys name and hometown.
- console.log these keys
- create a greeting with the key

### We do: Object
- do the above example with everybody

### You do: Object
- add a new key to your bio object. something like age or favoriteBook
- create a greeting with all of the keys from your object.
- console.log the greeting

## Array
### Define: Array
An array is a list of items. The items can be strings, numbers, objects, etc. You can access a single item in the array based on the index where it exists in the array. There are a lot of built-in operations you can do with an array. Arrays are universal in programming languages.

We're gonna work in a new file for this. **Make sure to change the refence in the HTML.**

### I do: array
- create an array called pets
- access the array by index.
  - note that the index starts at 0 instead of 1. it's called zero-based indexing.
- console.log the item in the array

### We do: array
- We're gonna work in a new file for this. **Make sure to change the refence in the HTML. Make sure everybody is in the same file before proceeding**.
- create an array called southernCities
- access the array by index
- console.log the item in the array

### You do: array
- create an array called friends.
- add like 2-3 of your friends. don't go overboard because of time constraints!
- access an item in the array by index.
- console.log the item

## Loop
### Define: a loop
A loop is a quick and easy way to do something repeatedly. They're often used with arrays. Loops are universal in programming.

We're gonna work in the same file as the array example.

### I do: a loop
- using the array called pets that I already defined, loop through each one
- i'm using the forEach function. built-in to JS to loop over arrays
  - be sure to explain the syntax
- console.log each pet

### We do: loop
- using forEach, we're gonna loop over each southernCity and console.log it
- make sure everybody has it working before proceeding. 
- the syntax can be tricky.

### You do: loop
- using forEach, loop over your friends array and console.log each friend

## Boolean (if we have time)
### Define: booleans 
A boolean is a true/false value. 

We're gonna write the code in our console for this.

### I do: boolean
- 5 > 6: returns false
- 5 === 5: returns true
- 6 > 5: returns true

### We do: boolean
- We're gonna write the code in our console for this. Make sure everybody is doing this.

### You do: boolean
- continue to write in the console.

## Conditional (if we have time)
### Define: conditionals 
A conditional is an if/else statement in the most basic sense. It's a way to control the flow of your program, and only do things if certain conditions are met. Conditionals are built on booleans. If this is true, do this; else, do that. they can be as simple as just an if statement, or if/else, or if, else if, else, etc

Continue using the array file.

### I do: conditionals
- create a boolean based on math
- show how booleans don't have to be math. 
  - grab an item in the array and use that for the conditional.
  - use an index that doesn't exist in the array and show how that's "false"

### We do: conditionals
- create a boolean based on math
- show how booleans don't have to be math. 
  - grab an item in the array and use that for the conditional.
  - use an index that doesn't exist in the array and show how that's "false"

### You do: conditionals
- create your own boolean with a math statement. console log it

### Whew! those are some fundamental types and building blocks of javascript

## DOM!
Now the fun stuff. We're gonna use javascript to change what shows up on our web page, and use javascript to make a button click control what shows up.

### Define: DOM
The DOM is short for the Document Object Model. It represents the HTML on your webpage. Using JavaScript, you can do things with the DOM, like add your own HTML, or listen to button clicks, or change the CSS, etc.

### I do: manipulate the DOM, pt 1
- working in a new script called `dom/hey.js`, with a new index.html called `dom/index.html`.
- In our `dom/index.html` file, we have a `<div>` element with an id of `text`. The id lets us grab the div element and write some HTML instead of the div.
- take the id and write the code that adds it to the DOM:
```javascript
let textDiv = document.getElementById('text')
textDiv.innerHTML = "i put some text here, within the div"
```

### We do: manipulate the DOM, pt 1
- working in a new script called `dom/hey.js`, with a new index.html called `dom/index.html`. **Make sure everybody sees the same web page (with the button) and is in the same hey.js file before proceeding!!**
- change the id from `text` to `hi`
  - this lets us target that html element in our JS based on the id
- in our js file, write the code to add a message to our page
  - **make sure to do camelCase for getElementById!!!** else it won't work.
```javascript
let name = 'sam'
let textDiv = document.getElementById('hi')
textDiv.innerHTML = 'hi NICAR! my name is ' + name
```

### You do: manipulate the DOM, pt 1
- in your html create a new div, with a new id
- target that id the document.getElementById function and set it to a variable
- use that variable to set the `innerHTML` with a string. add whatever you want to the string

### I do: manipulate the DOM, pt 2
- i'm gonna add a button where i can click and make that show up
- first, i gotta move that code into a function called sayHi
- demonstrate how, with that code change, i'm not changing what's on the page
- call the function within the script
- then, reference the function with the click. depending on time, do this directly on the button, or go ahead and use the document.getElementById('btn').addEventListener('click' sayHi)

### We do: manipulate the DOM, pt 2
- do this previous step all together

### You do:
- encapsulate the other code you wrote alone into a function
- instead of calling sayHi, call that function in your event listener.


## If there is time
- do conditionals and booleans
- refactor the DOM code to append child...
- get the georgiaWriter's data and render that on the screen
