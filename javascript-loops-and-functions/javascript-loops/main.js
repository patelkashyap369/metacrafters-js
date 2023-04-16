// iterate with javascript while loops
/*
    it runs while a specified condition is true and stops once that condition
    is no longer true
*/
const ourArray = [];
let i = 0;
while (i < 5) {
  ourArray.push(i);
  i++;
}
console.log(ourArray);

// iterate with javascript for loops
/*
    it runs for a specific number of times

    for (a; b; c), where a is the initialization statement, b is the condition statement,
    and c is the final expression
*/
const ourArray2 = [];
for (let i = 0; i < 6; i++) {
  ourArray2.push(i);
}
console.log(ourArray2);

// iterate even numbers with a for loop
const ourArray3 = [];
for (let i = 0; i < 10; i += 2) {
  ourArray3.push(i);
}
console.log(ourArray3);

// count backwards with a for loop
const ourArray4 = [];
for (let i = 10; i > 0; i -= 2) {
  ourArray4.push(i);
}
console.log(ourArray4);

// iterate through an array with a for loop
const arr = [10, 9, 8, 7, 6];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// nesting for loops
const arr2 = [
    [1, 2], [3, 4], [5, 6]
];
for (let i = 0; i < arr2.length; i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    console.log(arr2[i][j]);
  }
}

// iterate with javascript do...while loops
/*
    it will first do one pass of the code inside the loop no matter what, and
    then continue to run the loop while the specified condition evaluates to true.
*/
const array = []; 
let i2 = 5;
do {
  array.push(i2);
  i2++;
} while (i2 < 5);
console.log(array);
const array2 = []; 
let i3 = 0;
do {
  array2.push(i3);
  i3++;
} while (i3 < 5);
console.log(array2);

// the parseInt Function
/*
    The parseInt() function parses a string and returns an integer.
*/
const a = parseInt("007");
console.log(a);
console.log(typeof a);
