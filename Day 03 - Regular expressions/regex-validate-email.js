'use strict';

const email = 'demo@example.com';
const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/;
const result = email.match(pattern);

if (result) {
    console.log(`✅ The email address "${email}" is valid.`);
} else {
    console.log(`❌ The email address "${email}" is invalid.`);
}