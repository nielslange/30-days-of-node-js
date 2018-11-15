'use strict';

console.count('default');
console.count('foo');
console.count('foo');
console.count('bar');
console.countReset('foo');
console.count('foo');
console.countReset('foo');
console.count('foo');
console.count('bar');
console.count();