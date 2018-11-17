'use strict';

let cc_1 = [2, 4, 6, 8, 10];
let cc_2 = [2, 3, 4, 5, 6, 7];
let check_1 = cc_1.find(odd);
let check_2 = cc_2.find(odd);

function odd(value) {
    return (value % 2) == 1 ? true : false;
}

console.log(`Available elements in first array: "${cc_1}"`);
console.log(`Available elements in second array: "${cc_2}"`);
console.log(`First odd element within the first array: "${check_1}"`);
console.log(`First odd element within the second array: "${check_2}"`);