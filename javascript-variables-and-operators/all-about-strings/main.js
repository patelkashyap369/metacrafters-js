// escaping literal quotes in strings
const sampleStr = "Aditya said, \"Harsh is learning JavaScript\".";
console.log(sampleStr);

// quoting strings with single quotes
const doubleQuoteStr = "This is a string";
console.log(doubleQuoteStr);
const singleQuoteStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
console.log(singleQuoteStr);

/* 
    \\ n : newline
    \\ : backslash
    \t : tab
*/

// concatenating strings with plus operator
var concatenatedStr = "I come first. " + "I come second.";
console.log(concatenatedStr);

// concatenating strings with the plus equals operator
concatenatedStr = "I come first. ";
concatenatedStr += "I come second.";
console.log(concatenatedStr);

// constructing strings with variables
firstName = "Kashyap";
middleName = "Sureshchandra";
lastName = "Patel";
fullName = firstName + " " + middleName + " " + lastName;
console.log(fullName);

// appending variables to strings
const anAdjective = "awesome!";
let newStr = "Metacrafters is ";
newStr += anAdjective;
console.log(newStr);

// find the length of a string
console.log(fullName.length);

// understand string immutability
/*
    In JavaScript, String values are immutable, which means that 
    they cannot be altered once created.
*/
let newStr2 = "Bob";
newStr2[0] = "J";
console.log(newStr2);
// The only way to change myStr would be to assign it with a new value
newStr2 = "Job";
console.log(newStr2);
