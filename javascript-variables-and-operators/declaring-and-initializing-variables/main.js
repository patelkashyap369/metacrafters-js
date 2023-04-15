// This is an in-line comment.

/* This is a
multi-line comment */

console.log("Hello Metacrafters");

myVariable = 5;
console.log(myVariable);

var myVar; // declaration
myVar = 5;

var myNum;
myNum = myVar;
console.log(myNum);

var myVar = 0; // declaration with initialization

var myName = "Kashyap Sureshchandra Patel"; // "Kashyap Sureshchandra Patel" - string literal
// string literal: series of zero or more characters enclosed in single or double quotes
console.log(myName);

/* 
    When JavaScript variables are declared, they have an initial value of undefined. If you do
    a mathematical operation on an undefined variable, your result will be NaN, which means 
    "Not a Number." If you concatenate a string with an undefined variable, you will get a
    string of undefined.
*/

/* GOOD PRACTICE
    Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names 
    have the first word in lowercase and the first letter of each subsequent word is capitalized.

    var someVariable;
    var anotherVariableName;
    var thisVariableNameIsSoLong;
*/

// var vs let

/*
    One of the biggest problems with declaring variables with the var keyword is that you can 
    easily overwrite variable declarations
*/

var camper = "James";
var camper = "David";
console.log(camper);

// let was introduced in ES6

// let camper = "James";
// let camper = "David"; // error: Identifier 'camper' has already been declared

// unlike var, when you use let, a variable with the same name can only be declared once.

// constant
// const are read-only.

const FAV_PET = "Birds";
// FAV_PET = "Dogs"; // error: Assignment to constant variable.

/* GOOD PRACTICE 
    It is common for developers to use uppercase variable identifiers for immutable
    values and lowercase or camelCase for mutable values (objects and arrays).
*/
