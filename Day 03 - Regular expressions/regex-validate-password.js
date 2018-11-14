'use strict';

const string = 'p!3@9^#aDB67q4V';
const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.[!@#\$%\^&])(?=.{8,})/;
const result = string.match(pattern);

if (result) {
    console.log(`✅ The string "${string}" qualifies as a strong password.`);
} else {
    console.log(`❌ The string "${string}" does not qualify as a strong password`);
}