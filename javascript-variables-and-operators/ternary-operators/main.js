// use the conditional (ternary) operator
/*
    The conditional operator, also called the ternary operator, can be used as a one
    line if-else expression.

    The syntax is a ? b : c, where a is the condition, b is the code to run when the
    condition returns true, and c is the code to run when the condition returns false.
*/
function findGreater(a, b) {
    if(a > b) {
      return "a is greater";
    }
    else {
      return "b is greater or equal";
    }
}
console.log(findGreater(4, 3)); 
function newGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
}
console.log(newGreater(3, 4));

// use multiple conditional (ternary) operators
function findGreaterOrEqual(a, b) {
    if (a === b) {
      return "a and b are equal";
    }
    else if (a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
}
console.log(findGreaterOrEqual(3, 6));
function newGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
  }
/* GOOD PRACTICE
    It is considered best practice to format multiple conditional operators such that
    each condition is on a separate line, as shown above. 
*/
console.log(newGreaterOrEqual(9, 6));
