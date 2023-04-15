// selecting from many options with switch statements
/*
    A switch statement tests a value and can have many case statements which define
    various possible values. Statements are executed from the first matched case value
    until a break is encountered.

    The break tells JavaScript to stop executing statements. If the break is omitted,
    the next statement will be executed.
*/
function funSwitch(lowercaseLetter) {
    switch (lowercaseLetter) {
        case "a":
          console.log("A");
          break;
        case "b":
          console.log("B");
          break;
    }
}
funSwitch('a');
funSwitch('b');

// adding a default option in switch statements
/*
    switch (num) {
        case value1:
            statement1;
            break;
        case value2:
            statement2;
            break;
        ...
        default:
            defaultStatement;
            break;
    }

*/
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
    }
    return answer;
}
console.log(switchOfStuff(1));

// multiple identical options in switch statements
/*
    If the break statement is omitted from a switch statement's case, the following
    case statement(s) are executed until a break is encountered.
*/
function switchOfValue(val) {
    let result = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            result = "1, 2, or 3";
            break;
        case 4:
            result = "4 alone";
    }
    return result;
}
console.log(switchOfValue(2));
console.log(switchOfValue(4));
