// CommonJs, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");

const data = require("./6-alternative-flavor");

require("./7-mind-grenade");

console.log(data);
console.log(data.singlePerson.name);

console.log(names);

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);

// another way to import a module
// const { john, peter } = require("./4-names");
// sayHi(john);
// sayHi(peter);
