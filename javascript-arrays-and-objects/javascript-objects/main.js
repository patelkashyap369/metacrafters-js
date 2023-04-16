// build javascript objects
/*
    Objects are similar to arrays, except that instead of using indexes to access
    and modify their data, you access the data in objects through what are called
    properties.

    Objects are useful for storing data in a structured way, and can represent
    real world objects
*/
const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};
console.log(cat);  
/*
    if your object has any non-string properties, JavaScript will automatically 
    typecast them as strings.
*/
const anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
};
console.log(anotherObject);

// accessing object properties with dot notation
/*
    There are two ways to access the properties of an object: dot notation (.)
    and bracket notation ([]), similar to an array.
*/
const myObj = {
    prop1: "val1",
    prop2: "val2"
};
const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
console.log(prop1val);
console.log(prop2val);

// accessing object properties with bracket notation
/*
    If the property of the object you are trying to access has a space in its
    name, you will need to use bracket notation.
*/
const myObj2 = {
    "Name": "Vikrant",
    "Namesake": "Vikrant (1961)",
    "Operator": "Indian Navy",
    "Commissioned": 2022
};
console.log(myObj2["Name"]);
console.log(myObj2['Namesake']);
console.log(myObj2["Operator"]);

// updating object properties
/*
    dot or bracket notation to update
*/
myObj2["Name"] = "INS Vikrant";
console.log(myObj2);
myObj2.Commissioned = "2-09-2022";
console.log(myObj2);

// add new properties to a javascript object
/*
    You can add new properties to existing JavaScript objects the same way
    you would modify them.
*/
myObj2.motto = "I defeat those who fight against me";
console.log(myObj2);
myObj2["Nickname"] = "IAC-1";
console.log(myObj2);

// delete properties from a javascript object
const dog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};
console.log(dog);  
delete dog.bark;
console.log(dog);  
