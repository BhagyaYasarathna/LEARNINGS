// OPERATORS

// ==  : Equality operator
// === : Strict equality operator
// !=  : Not equal operator
// !==  : Strict not equal operator
// >  : Greater than operator
// >=  : Greater than or equal to operator
// <  : Less than operator
// <=  : Less than or equal to operator
// &&  : Logical and operator
// ||  : Logical or operator

function Logic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal lto 10";
    }
}

console.log(Logic(12));

// Ternary Operator

function checkEqual(a, b) {
    return a === b ? true : false;
}

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
