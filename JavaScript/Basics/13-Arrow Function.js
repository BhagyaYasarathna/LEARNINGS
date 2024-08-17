var myConcat = (arr1, arr2) => arr1.concat(arr2);

// Nested Arrow FUnctions
realNumberArray = [4, 5.6, -9];
const squaredIntegers = realNumberArray
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
console.log(squaredIntegers);

// Higher Order Arrow Functions
const increment = function (number, value = 1) {
    return number + value;
};
console.log(increment(5, 2)); // return 5+2
console.log(increment(5)); // return 5+1
