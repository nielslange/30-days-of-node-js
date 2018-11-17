'use strict';

let fibonacci = [1, 2, 3, 5, 8];
console.log(fibonacci);

function multiply(value, total) {
    total *= value;
    return total;
}

let result = fibonacci.reduce(multiply);
console.log(`The product of "${fibonacci}" is "${result}"`);