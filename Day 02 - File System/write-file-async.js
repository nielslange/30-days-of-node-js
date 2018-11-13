'use strict';

const fs    = require('fs');
const file  = 'demo.txt';
const data  = 'Ut enim ad minim veniam.';

fs.writeFile(file, data, (error) => {
    if (error) {
        throw error;
    }

    console.log(`✅ "${data}" had successfully been written to "${file}".`);
});

console.log(`ℹ️ This function runs asynchronously.`);