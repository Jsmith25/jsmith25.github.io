/*

Control-Flow

Control flow refers to the sequence in which our code is executed. 

If else statements

if else statements are designed to execute a block of code if certain conditions are true. If the conditions 
are false another block of code can be executed.

Exp.
if (condition) {
  // block of code to be executed if the condition is true
} else { // If our condition is false the else statement specifies a block of code to be executed.
  // block of code to be executed if the condition is false
}

if ( 10 === 10) {
  return "This is true"// block of code to be executed if the condition is true
} else { 
 return "This is false" // block of code to be executed if the condition is false
}

Else-if statement

If our original condition returns false our else-if statement will give the computer another condition
to test. you can have as many else if statements as neccessary.

if ( 8 === 10) {
 return "This won't work." // block of code to be executed if the condition is true
} else if (25 === 10 + 15) { 
 return "This is going to work." // block of code to be executed if the condition is false
} else {
 return "They are all false " // block of code to be executed if all conditions are false
}
// In this situation the else-if statement is true and the code in the block will be executed.


if ( 8 === 10) {
 return "This won't work." // block of code to be executed if the condition is true
} else if (25 === 10 + 11) { 
 return "This is going to work." // block of code to be executed if the condition is false
} else {
 return "They are all false " // block of code to be executed if all conditions are false
}
// In this case the else statement is executed because all of our conditions are false.

Switch Statements

Similar to if-else-if statements the switch statements execute a block of code depending on 
certain cases. Switch statements will evaluate an expression if the expression is a matched with any
case in the structure that block of code will be executed. The break keyword will stop the execution 
of code or case testing inside the code block. If the break keyword is excluded the next
code block in the switch statement is executed. The default keyword is similar to the else statement 
in the if-else-if statement. If there is no case match the code specied will run

switch(expression) {
  case n:
    code block
    break;
  case n:
    code block
    break;
  default:
    default code block
}

let day;
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break; 
  case 0:
    text = "Today is Sunday";
    break; 
  default: 
    text = "Looking forward to the Weekend";
} // In this sitution the default code block would run but if day were a match to one 
of our case statements that code would run.

let day = 0;
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break; 
  case 0:
    text = "Today is Sunday";
    break; 
  default: 
    text = "Looking forward to the Weekend";
} // In this situation "Today is Sunday" runs because our case has a match




























*/