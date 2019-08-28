/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a variable named animal and assign it to an empty object
var animal = {};
//Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
animal.species = "Lion";
//Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
animal["name"] = "Leo";
//Using either notation, give `animal` a **property** called `noises` with a value of empty array.
animal.noises = [];
//Print your `animal` Object to the console by adding, `console.log(animal);`,
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Create a variable named `noises` and assign it to an empty array.
var noises = [];
//Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
noises[0] = "roar";
//Using an array function add another noise to the end of `noises`.
noises.push("bark", "cough", "burp");
animal["noises"] = noises;
animal.noises.push("Yawn");
//Look through the functions until you find the one that will place an element at the begining of the array.

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `animals` and assign it to an empty array.
var animals = [];
//`push` our `animal` that we created to `animals`.
animals.push(animal);
//console.log` `animals`. What does it look like?
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * You can access properties in objects using bracket notation or dot notation.
 * 2. What are the different ways of accessing elements on arrays?
 * you can access elements in arrays using the index.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `animals` and assign it to an empty array.
//Create a variable called `duck` and assign it to the data:
 // - `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']}
var duck = { species: 'duck', name: 'Jerome', noises: 
['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
//Create two more animal objects each with a species, a name, and at 
//least two sounds sounds and add each one of them to `animals.
var cat = {species: "cat", name: "tj", noises: ["meow", "purr", "snarl"]};
animals.push(cat);
var cow = {species: "cow", name: "moomoo", noises: ["moo", "got milk"]};
animals.push(cow);
console.log(animals);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Choose a data structure for this **list** of friends.

var friends = [];
// I chose an array because i feel it is the best way to keep my list organized
//Write a function called `getRandom` that takes our `animals` array and returns the 
//index` of a random element using `Math.random`

function getRandom(animals) {
 return   Math.floor(Math.random() * Math.floor(animals.length));
 
}
var randomAnimals = (getRandom(animals));
friends.push(animals[randomAnimals].name);
console.log(animals);
//Using a random index from this function that you just created, get a 
//random animal and add its `name` to `friends`.
animals[2].friends = friends;
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
