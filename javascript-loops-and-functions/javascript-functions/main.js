// write reusable javascript with functions
function functionName() {
    console.log("Hello World");
}
functionName();

// passing values to functions with arguments
/*
    Parameters are variables that act as placeholders for the values that are
    to be input to a function when it is called. When a function is defined, it
    is typically defined along with one or more parameters. The actual values
    that are input (or "passed") into a function when it is called are known as arguments.
*/
function testFun(param1, param2) {
    console.log(param1, param2);
}
testFun("Kashyap", "Patel");

// return a value from a function with return
/*
    return statement to send a value back out of a function
*/
function plusThree(num) {
    return num + 3;
}  
const answer = plusThree(5);
console.log(answer);

// global scope and functions
/*
    scope refers to the visibility of variables

    Variables that are defined outside of a function block have Global scope.

    Variables that are declared without the let or const keywords are automatically
    created in the global scope. 
*/

// local scope and functions
// global vs. local scope in functions
/*
    Variables that are declared within a function, as well as the function parameters,
    have local scope. That means they are only visible within that function.

    It is possible to have both local and global variables with the same name.
*/
const loc = "bar";
function myTest() {
    const loc = "foo";
    console.log(loc);
}
myTest();
console.log(loc);

// assignment with a returned value
function sum(a, b) {
    return a + b;
}
var addition = sum('kashyap', 'Patel');
console.log(addition);

// returning boolean values from functions
function isEqual(a, b) {
    if (a === b) {
      return true;
    } else {
      return false;
    }
}
var equal = isEqual(2, 2);
console.log(equal);
function isEqual2(a, b) {
    return a === b;
}
equal = isEqual2(3, 2);
console.log(equal);

// return early pattern for functions
/*
    When a return statement is reached, the execution of the current function stops,
    and control returns to the calling location.
*/
function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
}
myFun();
/*
    The above will display the string Hello in the console, and return the string
    World. The string byebye will never display in the console because the function
    exits at the return statement.
*/
