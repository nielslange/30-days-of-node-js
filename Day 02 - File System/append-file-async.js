'use strict';

const fs    = require('fs');
const file  = 'demo.txt';
const data  = 'Duis aute irure dolor in reprehenderit.';

fs.appendFile(file, data, (error) => {
    if (error) {
        throw error;
    }

    console.log(`✅ "${data}" had successfully been appended to "${file}".`);   
});

console.log(`ℹ️ This function runs asynchronously.`);