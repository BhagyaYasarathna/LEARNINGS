function example() {
    if (true) {
        var x = 10;
        let y = 20;
    }
    console.log(x); // 10 (accessible because x is function-scoped)
    console.log(y); // Error: y is not defined (y is block-scoped)
}
example();

/////////////////////////////////////////////////////////////

var x = 1;
var x = 2; // No error, x is re-declared

let y = 1;
let y = 2; // Error: Identifier 'y' has already been declared
