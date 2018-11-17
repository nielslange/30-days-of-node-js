'use strict';

let cc_1 = [2, 4, 6, 8, 10];
let cc_2 = [2, 3, 4, 5, 6, 7];
let check_1 = cc_1.filter(even);
let check_2 = cc_2.filter(even);

function even(value) {
    return (value % 2) == 0 ? true : false;
}

console.log(`Available elements in first array: "${cc_1}"`);
console.log(`Available elements in second array: "${cc_2}"`);
console.log(`Even elements within the first array: "${check_1}"`);
console.log(`Even elements within the second array: "${check_2}"`);