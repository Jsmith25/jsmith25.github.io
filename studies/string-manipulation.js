/*
String Manipulation

Manipulating strings is a common practice coding practice. We can use string manipulation for 
many different things, but for now we will only go over a few of the more commonly used ones.

String Manipulation With Operators

Concatenation (+) operator can be used in a string. It will combine two or more strings. This method 
does not change the existing strings it combines them into 1. You can also use the (+=) operator to combine strings
for example

let string1 = ("Hey ")
let string2 = ("you")
let string3 = (" there!")
result = (string1 + string2 + string3)
//If printed to the console the result would be "Hey you there!" because
I combined string1, string2, and string3 together using the concatenation (+) operator method.

If we use the += assignment operator

result += " Any luck."
//If printed to the console the result would be "Hey you there! Any luck." using the 
(+=) assignment operator we have added a string to our existing one.

String Manipulation With Methods

String methods help us to manipulate our strings. There are many different types of 
methods and we will go over a few right now.

With the Concat() string method we can combine multiple strings together. This method
does not change existing strings.
exp. 
let string1 = ("Hey ")
let string2 = ("you")
let string3 = (" there!") 
result = string1.concat (string2, string3)
// If we print this we would get "Hey you there!"

Using the slice() string method we can extract a string and return a new string 
using the extracted portion

string.slice(start, end) 
The starting position is where we will begin extracting 
our ending position is where we will stop the extraction. 

let str = "How are you?";
let res = str.slice(3, 9);
In this example we have extracted our starting position 3 and our ending position 9
and that leaves us with " are y".

The startsWith() method will check whether a string begins with a character.
It returns true if the string does begin with that character and false if not.

let str = "What's up everybody"
let G = str.startsWith("What's"); // Returns true
let J = str.startsWith("Hey"); // Returns false

The endsWith() method is the opposite of the startsWith() method. Instead of 
worrying about the beginning of the string we arelooking at the end of the string
it will return true if the string does end with the specified character false if not

let str = "What's up everybody"
let G = str.endsWith("everybody"); // Returns true
let J = str.endsWith("Hi"); // Returns false

Using the toLowerCase() method we can convert a string to all lowercase letters
let str = "Golden State Warriors";
let res = str.toLowerCase(); // returns "golden state warriors"

The toUpperCase() will do guess what... you got it it will convert our string to all uppercase
var str = "Golden State Warriors";
var res = str.toUpperCase();// returns "GOLDEN STATE WARRIORS" 



































*/