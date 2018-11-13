'use strict';

const fs    = require('fs');
const file  = 'demo.txt';

fs.unlink(file);

console.log(`✅ File "${file}" had successfully been deleted.`);
console.log(`ℹ️ This function runs synchronously.`);