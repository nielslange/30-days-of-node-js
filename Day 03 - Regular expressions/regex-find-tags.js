'use strict';

const fs = require('fs');
const file = 'demo.html';
const string = fs.readFileSync(file).toString();
const pattern = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;
const results = string.match(pattern);

if (results && results.length == 1) {
    console.log(`✅ The pattern "${pattern}" occured once in "${file}"`);
} else if (results && results.length > 1) {
    console.log(`✅ The pattern "${pattern}" occured ${results.length} times in "${file}"`);
} else {
    console.log(`✅ The pattern "${pattern}" did not occur in "${file}"`);
}