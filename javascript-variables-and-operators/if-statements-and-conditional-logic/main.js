// understanding boolean values
// two values: true or false
// The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.

// use conditional logic with if statements
/*
    if statements are used to make decisions in code

    The keyword if tells JavaScript to execute the code in the curly braces
    under certain conditions, defined in the parentheses

    These conditions are known as Boolean conditions and they may only be true or false

    When the condition evaluates to true, the program executes the statement inside
    the curly braces. When the Boolean condition evaluates to false, the statement
    inside the curly braces will not execute
*/
function test (myCondition) {
    if (myCondition) {
      return "It was true";
    }
    return "It was false";
}  
console.log(test(true));
console.log(test(false));

// comparison with the equality operator
/*
    The equality operator compares two values and returns true if they're equivalent
    or false if they are not
*/
function equalityTest(myVal) {
    if (myVal == 10) {
      return "Equal";
    }
    return "Not Equal";
}
console.log(equalityTest(10));
console.log(equalityTest(0));
console.log(equalityTest("10"));

// comparison with the strict equality operator
/*
    unlike the equality operator, which attempts to convert both values being
    compared to a common type, the strict equality operator does not perform
    a type conversion
*/
console.log(3 === 3);
console.log(3 === '3');

// comparison with the inequality operator
/*
    It means not equal and returns false where equality would return true and vice versa
*/
console.log(1 != 2 );
console.log(1 != "1");
console.log(1 != '1');
console.log(1 != true);
console.log(0 != false);

// comparison with the strict inequality operator
/*
    It means "Strictly Not Equal" and returns false where strict equality would return
    true and vice versa. The strict inequality operator will not convert data types.
*/
console.log(3 !== 3);
console.log(3 !== '3');
console.log(4 !== 3);

// comparison with the greater than operator
/*
    The greater than operator (>) compares the values of two numbers. If the number to
    the left is greater than the number to the right, it returns true. Otherwise, it
    returns false.
*/
console.log(5 > 3);
console.log(7 > '3');
console.log(2 > 3);
console.log('1' > 9);

// comparison with the greater than or equal to operator
/*
    If the number to the left is greater than or equal to the number to the right,
    it returns true. Otherwise, it returns false.
*/
console.log(6 >= 6);
console.log(7 >= '3');
console.log(2 >= 3);
console.log('7' >= 9 );

// comparison with the less than operator
/*
    If the number to the left is less than the number to the right, it returns true.
    Otherwise, it returns false.
*/
console.log(2 < 5);
console.log('3' < 7);
console.log(5 < 5);
console.log(3 < 2);
console.log('8' < 4);

// comparison with the less than or equal to operator
/*
    If the number to the left is less than or equal to the number to the right,
    it returns true. If the number on the left is greater than the number on the right,
    it returns false.
*/
console.log(4 <= 5);
console.log('7' <= 7);
console.log(5 <= 5);
console.log(3 <= 2);
console.log('8' <= 4);

// comparisons with the logical and operator
/*
    The logical and operator (&&) returns true if and only if the operands to the
    left and right of it are true.
*/
function bigOne(num) {
    if (num > 5) {
        if (num < 10) {
          return "Yes";
        }
      }
    return "No";
}
function shortOne(num) {
    if (num > 5 && num < 10) {
        return "Yes";
    }
    return "No";
}
console.log(bigOne(6)); 
console.log(bigOne(3)); 
console.log(shortOne(6)); 
console.log(shortOne(3));

// comparisons with the logical or operator
/*
    The logical or operator (||) returns true if either of the operands is true.
    Otherwise, it returns false.
*/
function big(num) {
    if (num > 10) {
        return "No";
    }
    if (num < 5) {
        return "No";
    }
    return "Yes";   
}
function short(num) {
    if (num > 10 || num < 5) {
        return "No";
    }
    return "Yes";     
}
console.log(big(6)); 
console.log(big(3)); 
console.log(short(6)); 
console.log(short(3));

// introducing else statements
/*
    When a condition for an if statement is true, the block of code following it is executed.
    With an else statement, an alternate block of code can be executed.
*/
function newOne(num) {
    if (num > 10) {
        return "Bigger than 10";
    } else {
        return "10 or Less";
    }  
}
console.log(newOne(6)); 
console.log(newOne(11));

// introducing else if statements
/*
    If you have multiple conditions that need to be addressed, you can chain if statements
    together with else if statements.
*/
function elseIf(num) {
    if (num > 15) {
        return "Bigger than 15";
    } else if (num < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 15";
    }
}
console.log(elseIf(6)); 
console.log(elseIf(3));
console.log(elseIf(16));

// logical order in if else statements
/*
    Order is important in if, else if statements.
*/
function foo(x) {
    if (x < 1) {
      return "Less than one";
    } else if (x < 2) {
      return "Less than two";
    } else {
      return "Greater than or equal to two";
    }
}
function bar(x) {
    if (x < 2) {
      return "Less than two";
    } else if (x < 1) {
      return "Less than one";
    } else {
      return "Greater than or equal to two";
    }
}
console.log(foo(0));
console.log(bar(0));

// chaining if else statements
/*
    if (condition1) {
        statement1
    } else if (condition2) {
        statement2
    } else if (condition3) {
        statement3
    . . .
    } else {
        statementN
    }

*/
function testSize(num) {
    if (num < 5) return "Tiny";
  
    else if (num < 10) return "Small";
  
    else if (num < 15) return "Medium";
  
    else if (num < 20) return "Large";
  
    else return "Huge";
}
console.log(testSize(3));
console.log(testSize(9));
console.log(testSize(12));
console.log(testSize(18));
console.log(testSize(24));
