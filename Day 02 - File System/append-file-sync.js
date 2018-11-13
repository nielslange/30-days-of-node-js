'use strict';

const fs    = require('fs');
const file  = 'demo.txt';
const data  = 'Duis aute irure dolor in reprehenderit.';

fs.appendFileSync(file, data);

console.log(`✅ "${data}" had successfully been appended to "${file}".`);
console.log(`ℹ️ This function runs synchronously.`);