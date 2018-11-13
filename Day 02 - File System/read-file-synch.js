'use strict';

const fs    = require('fs');
const file  = 'demo.txt';
const data  = fs.readFileSync(file);

console.log(`✅ Content: ${data}`);
console.log(`ℹ️ This function runs synchronously.`);