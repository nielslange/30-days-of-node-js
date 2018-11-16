'use strict';

const fs = require('fs');
const file = 'non-existing-file.txt';

fs.readFile(file, (error, data) => {
    if (error) {
        // Display only error title
        console.error(`❌ The following error occured: ${error}`);
        // Display all error fields
        console.error('❌ The following error occured:', error);
        return;
    }
})