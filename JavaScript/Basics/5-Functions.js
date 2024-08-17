function ourReusableFunction() {
    console.log("Heyya, World");
}
ourReusableFunction();

// Arguments

function ourFunctionWithArgs(a, b) {
    console.log(a + b);
}
ourFunctionWithArgs(10, 5);

//Global Scope and Local Scope

var myGlobal = 10; // This variable is global

function fun1() {
    var oopsGlobal = 5; // This variable is local even if we used 'var' to define this variable because it is defined inside a function
    console.log("oopsGlobal: ", oopsGlobal);
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
        if (typeof oopsGlobal != "undefined") {
            output += " oopsGlobal: " + oopsGlobal;
        }
    }

    console.log(output);
}

fun1();
fun2();

// Return Values from a Function

function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

// Example

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];
console.log("Before: ", JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Boolean Values

function welcomeToBooleans() {
    return true;
}

function isLess(a, b) {
    return a < b;
}
console.log(isLess(2, 5));

