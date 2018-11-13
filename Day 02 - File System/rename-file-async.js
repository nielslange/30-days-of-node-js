'use strict';

const fs        = require('fs');
const file_old  = 'demo.txt';
const file_new  = 'sample.txt';

fs.rename(file_old, file_new, (error) => {
    if (error) {
        throw error;
    }

    console.log(`✅ File had successfully been written from "${file_old}" to "${file_new}".`);
});

console.log(`ℹ️ This function runs asynchronously.`);