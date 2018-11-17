'use strict';

let cc_1 = [2, 4, 6, 8, 10];
let cc_2 = [2, 3, 4, 5, 6, 8];
let check_1 = cc_1.every(even);
let check_2 = cc_2.every(even);

function even(value) {
    return (value % 2) == 0 ? true : false;
}

console.log(`Available elements in first array: "${cc_1}"`);
console.log(`Available elements in second array: "${cc_1}"`);
console.log(`All elements in first array are even: "${check_1}"`);
console.log(`All elements in second array are even: "${check_2}"`);