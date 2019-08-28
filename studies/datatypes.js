/*
Datatypes 

Datatypes are very important, without datatypes a computer can not properly evaluate
our code. The variables in javascript can hold many different datatypes.
There are 6 simple/primitive datatypes and 3 complex datatypes. Simple datatypes do not
collect other values and they do not alter the original value. Complex DataType values 
aggregate other values.

Simple/ primitive Datatypes

Numbers - Numeric Data- 23 // numbers can be wrtitten out as decimals as well as whole numbers
Strings - Character Data - "String Thing" // strings are always written with quotes
Boolean - true or false // only return two values either true or false
NaN - Not a number //typically used when math functions fail
undefined - no value or uninitialized a variable that does not contain a value is considered undefined
Null - No value or nullified by the developer // Null is nothing it represents that absence of value

Complex Datatypes

Objects - name: value pairs, separated by commas- {} // Are written with curly braces
Arrays - [1, 2, 3] // Are written with square brackets. Array items are sperated by commas. Arrays are zero indexed.
Function  - Is a block of code designed to perform a particular task // A function is only executed if it is called
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

Infinity - is greater than any other number. The value of infinity is Number.Positive_Infinity.
-Infinity - represents the negative infinity property

Simple/Primitive datatypes are copied by value

let J = 2
let G = J // here we copied the value of J to G

G = 3
console.log(J) //Prints 2 to the cosole 

Complex datatypes are copied by reference

let J = {key1: "drink"}
let G = J // J and G print the same object

G.key1 = "gone"
console.log(J) // Now prints "gone" because J and G are assigned to the same object























*/