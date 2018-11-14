'use strict';

const fs = require('fs');
const file = 'demo.txt';
const string = fs.readFileSync(file).toString();
const pattern = /man/gim;
const results = string.match(pattern);

if (results && results.length == 1) {
    console.log(`✅ The pattern "${pattern}" occured once in "${file}"`);
} else if (results && results.length > 1) {
    console.log(`✅ The pattern "${pattern}" occured ${results.length} times in "${file}"`);
} else {
    console.log(`✅ The pattern "${pattern}" did not occur in "${file}"`);
}