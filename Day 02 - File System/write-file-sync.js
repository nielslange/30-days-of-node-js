'use strict';

const fs    = require('fs');
const file  = 'demo.txt';
const data  = 'Ut enim ad minim veniam.';

fs.writeFileSync(file, data);

console.log(`✅ "${data}" had successfully been written to "${file}".`);
console.log(`ℹ️ This function runs synchronously.`);