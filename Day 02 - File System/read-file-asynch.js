'use strict';

const fs    = require('fs');
const file  = 'demo.txt';

fs.readFile(file, (error, data) => {
    if (error) {
        throw error;
    }

    console.log(`✅ Content: ${data}`);
});

console.log(`ℹ️ This function runs asynchronously.`);