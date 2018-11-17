'use strict';

const numbers = [1, 3, 0, 7, 1, 9, 8, 0];
const firstNumber = 1;
const secondNumber = 9;
const firstIndex = numbers.lastIndexOf(firstNumber);
const secondIndex = numbers.lastIndexOf(secondNumber);

console.log(`Available elements: "${numbers}"`);
console.log(`The index of "${firstNumber}" is ${firstIndex}`);
console.log(`The index of "${secondNumber}" is ${secondIndex}`);