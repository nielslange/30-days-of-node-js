'use strict';

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const firstLetter = 'c';
const secondLetter = 'a';
const thirdLetter = 'n';
const firstIndex = letters.indexOf(firstLetter);
const secondIndex = letters.indexOf(secondLetter);
const thirdIndex = letters.indexOf(thirdLetter);

console.log(`Available elements: "${letters}"`);
console.log(`The index of "${firstLetter}" is ${firstIndex}`);
console.log(`The index of "${secondLetter}" is ${secondIndex}`);
console.log(`The index of "${thirdLetter}" is ${thirdIndex}`);