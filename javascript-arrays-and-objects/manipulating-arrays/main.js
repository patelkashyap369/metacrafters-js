// manipulate arrays with push method
/*
    An easy way to append data to the end of an array is via the push() function.
*/
const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);
const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr2);

// manipulate arrays with pop method
/*
    .pop() is used to pop a value off of the end of an array. 
*/
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

// manipulate arrays with shift method
/*
    removes the first element
*/
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
console.log(removedFromOurArray);

// manipulate arrays with unshift method
/*
    adds the element at the beginning of the array
*/
const ourArray2 = ["Stimpson", "J", "cat"];
ourArray2.shift();
console.log(ourArray2);
ourArray2.unshift("Happy");
console.log(ourArray2);
