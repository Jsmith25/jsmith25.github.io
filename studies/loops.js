/*

Loops

Loops are designed to repeatedley run a block of code until certain conditions are met.
There are different options for repeatedley running a block of code including while loops,
for loops, and for-in loops

For Loops 
for ([initialization]; [condition]; [final-expression])
   statement
for (let i = 0; i < 5; i++) {
    console.log("Go up");
} // // The for loop statement gives us a starting condition, stopping condition, 
incrementor, and the code block containing the code to be ran.

While Loops
var i = 99;
while (i > 0)
{
    console.log(i + " bottles of beer on the wall");
    i -= 1;
}// The while loop statement is a simpler version of the for loop. It runs as long 
as a expression is true and continues until the expression is false.

For-in Loops

The for-in satements loop through the enumerable properties of an object and executes the loops body
It is a easy way to check the properties of an object
once for each property of the object.
for (var key in object) {
  code block to be executed
}
let student = { name:"James", age: 29, Occupation: Developer};
for (let item in student) {
   console.log(student[item]);     // => "James", then 29, then "Developer"
}


//This is an example of looping forward 5 times
for (i = 0; i < 5; i = i + 1) {
  console.log(i);
}
//This is an example of looping backwards to 0
for (i = 5; i >= 0; i = i - 1) {
  console.log(i);
}

// This is an example of looping through an array forward
let ourArray = [5,4,3,2,1];
for (let i = 0; i < ourArray.length; i++) {
   console.log(ourArray[i]);
}

//This is an example of looping through an array backwards
let ourArray = [5,4,3,2,1];
for (let i = ourArray.length -1; i >= 0; i--) {
   console.log(ourArray[i]);
}


// This Is an example of looping over a object
let obj = {
  name: "James",
  age: "29",
  weight: "195lbs"
}
for (let key in obj) {
  let value = obj[key];
  console.log(key, value);
}// This would print to the console - name James
                                      age 29
                                      weight 195lbs






















*/