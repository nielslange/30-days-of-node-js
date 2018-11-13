'use strict';

const fs    = require('fs');
const file  = 'demo.txt';

fs.unlink(file, (error) => {
    if (error) {
        throw error;
    }

    console.log(`✅ File "${file}" had successfully been deleted.`);
});

console.log(`ℹ️ This function runs asynchronously.`);