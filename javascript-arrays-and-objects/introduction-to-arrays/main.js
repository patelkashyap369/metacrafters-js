// store multiple values in one variable using javaScript arrays
/*
    With JavaScript array variables, we can store several pieces of data in one place.
*/
const sandwich = ["peanut butter", "jelly", "bread"];
console.log(sandwich);

// nest one array within another array
const teams = [["Chennai Super Kings", 4], ["Mumbai Indians", 5]];
console.log(teams);

// access array data with indexes
/*
    first element in an array has an index of 0
*/
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
console.log(data);

// modify array data with indexes
/*
    Unlike strings, the entries of arrays are mutable and can be changed freely,
    even if the array was declared with const.
*/
const ourArray = [50, 40, 30];
console.log(ourArray);
ourArray[0] = 15;
console.log(ourArray);

// access multi-dimensional arrays with indexes
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];
const subarray = arr[3];
console.log(subarray);
const nestedSubarray = arr[3][0];
console.log(nestedSubarray);
const element = arr[3][0][1];
console.log(element);
