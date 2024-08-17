var ourArray = ["John", 23];

// Nested Array
var ourArray = [
    ["the universe", 42],
    ["everything", 101010],
];

// Access Array Data

var ourArray = [50, 60, 70];
console.log(ourArray[0]);

var ourArray = [
    ["the universe", 42],
    ["everything", 101010],
];
console.log(ourArray[0][0]);

// Modify Array Data
var ourArray = [50, 60, 70];
ourArray[1] = 55;
console.log(ourArray);

// PUSH : Adding elements to the end of an array
var myArray = [
    ["John", 23],
    ["cat", 2],
];
myArray.push(["Bhagya", 25]);
console.log(myArray);

// POP : Remove the last element of an array
var ourArray = [1, 2, 3];
var removedFromArray = ourArray.pop();
console.log(removedFromArray);
console.log(ourArray);

// SHIFT : Remove the first element of an array
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromArray = ourArray.shift();
console.log(removedFromArray);
console.log(ourArray);

// UNSHIFT : Adding elements to the beginning of an array
var ourArray = ["Stimpson", "J", ["cat"]];
ourArray.unshift("Happy");
console.log(ourArray);
