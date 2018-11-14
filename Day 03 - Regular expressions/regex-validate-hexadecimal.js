'use strict';

const string = 'FFFFFF';
const pattern = /^[a-fA-F0-9]+$/g;
const result = string.match(pattern);

if (result) {
    console.log(`✅ The string "${string}" is a hexcadecimal number.`);
} else {
    console.log(`❌ The string "${string}" is not a hexcadecimal number.`);
}