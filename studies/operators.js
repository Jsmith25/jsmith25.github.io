/*
*OPERATORS
*
*
//A Operator in javascript is something we use in to create mathematical or logical 
operations with in our javascript code. There are many different types of operators 
but I will only be giving you information on a select few.
*
*
* Assignment operators 
 // An assignment operator will assign the value on the right of the operator to the value
 on the left.
 J = 10; // Assigns J the value of 10
 
 // The += assignment operator will add both the left and right operators together
 
 J += 10 will give us J = J + 10;
 
 
 // The -= operator will subtract the left and right operators together
  
  J -= 10 will give us J = J - 10;
  
 //There are other assignment operators such as multiply, divide, and module
 
 J *= 10 is equivalent to J = J * 10
 J /= 10 is equivalent to J = J / 10
 J %= 10 is equivalent to J = J % 10
 
 // Arithmetic operators.
 
 //The + arithmetic operator will add a value from two operands
 // These are just examples of some of our simple  arithmetic operators 
 J = 5 + 5 // gives us J= 10
 
 The add (-) arithmetic operator will subtract a value from two operands

 J = 10 - 5 // gives us J = 5
 
 //The * arithmetic operator will multiply the value from two operands
 
 J = 5 * 5 // gives us J = 25
 
 //The / arithmetic operator will divide the value between two operands
 
 J = 25/5 // gives us J = 5
  
 // Additionally we also have our increment and decrement arithmetic operators
 
 Increment(++) operator increases the value of an integer by one 
 
 J = 1++ // will evaluate to J = 2
 
 Decrement(--) operator decreases the value of an integer by one
 
 J = 2-- // will evaluate to J = 1
 
 Comparison Operators
 
 Comparison operators compare operands and return back a boolean value.
 
 The == (not strictly equal to) comparison operator is true if the values are equal to each other
 regardless of Datatype. For this example lets say that x = 10.
 
 x == 25 // returns false because the values are not the same
 x == "10" // returns true because of the value even though the type are not the same
 x == 10 // returns true because they are the same value and type
 
 The === (strictly equal to) comparison operator is true if the values are strictly equal 
 meaning same value and type. For example if x = 10.
 
 x === "10" // returns false
 x === 10 // returns true
 
 The != (not equal to) and !== (strictly not equal to) comparison operator return true if 
 the values are not the same. For example if x = 10.
 
 x != 10 // returns false
 x != 5 // returns true
 
 x !== "10" // returns true
 
 There are other comparison operators such as >, <(greater than and less than) comparison 
 operators. For example were gonna let x = 10 again.
 
The > (greater than) operator returns true if the value on the left is greater than
that on the right.

25 > x //returns true

The < (less than) comparison operator returns true if the value on the left is less
than the value on the right

x < 25 // returns true
 
The >= (greater than or equal to) operator retgurns true if the value on the left
is greater than or equal to the value on the right. x = 10

x >= 10 // returns true
x >= 25  // returns false


The <= (less than or equal to) operator returns true if the value on the left side 
is less than or equal to the value on the right. x = 10

x <= 10 // returns true
x <= 8 // returns false

Logical Operators
 
Logical operators can be applied to values of any type not just boolean
and their result can be of any type as well. There are 3 logical operators 
&& (AND),|| (OR), ! (Bang)

The && (AND) operator can be used to convert each oprand to a boolean. If the result turns out to be false 
it will stop and return the original value of that operand.

let J = 10
let G = 10
if (J === 5 + 5 && G === 10) {
 console.log ("This is true")
} // "This is true" prints to the console because both operands share the same value

if (J === 8 + 20 && G === 10) {
 console.log("But that's not true")
} else {
 console.log ("That's False")
}// "That's False" prints to the console because both operands don't share the same value

The || (OR) operator can be used to determine if any condition is true if not it will return false

let J = 10
let G = 10
if (J === 5 + 5 || G === 10) {
 console.log ("This is true")
} // "This is true" prints to the console because both operands share the same value

 if (J === 8 + 20 || G === 10) {
 console.log("Yes this is true")
} else {
 console.log ("That's False")
}// "Yes this is true" prints to the console because both operands don't share the same value but
one of them is true
if (J === 9 || G === 18) {
  console.log("This won't work")
} else {
  console.log("This will print")
} // "This will print" prints to the console because niether operand is true

The ! (The bang operator) operator returns the opposite value and converts the operand to a 
boolean type
 
A good example of the ! (bang) operator would be if x = 10
!(x === 20) //This would return true because the bang operator has given us the inverse value

Unary Operators 

Unary operators can be more efficient than standard Javascript function calls
and they cannot be overridden meaning their functionality is guaranteed. There are a few types 
of Unary Operators but im only focusing on 3 of them today typeOf, -, !

typeOf operators returns the type of operand for example
 
 typeOf 2 //returns number
 typeOf true // returns boolean
 type of [1, 2, 3] // returns array
 
The ! (Bang operator) as we talked about in the logical operators section
gives us a negation of a expression and returns boolean, but lets say x = 10

!(x === 23) // returns true
!(x === 10) // returns false

The - (minus operator) negates the value. If the operand is not a number
Javascript will try and convert it to a number

- "1738" // returns -1738
- true // returns -1
- false // returns -0

The Ternary Operators is shorter way to write a if-else statement. The ternary operator
takes 3 operands.

let this = (condition) ? <if true> : <if false>;
const cappedInput = input 100 >  ? 100 : input // this will cap the input at 100

 




 
 
 
 
 
 
 
 
 


  
 
 */