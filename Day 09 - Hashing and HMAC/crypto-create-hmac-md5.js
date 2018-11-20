'use strict';

const crypto = require('crypto');
const algorithm = 'md5';
const password = 'QhjPtYE#fogWa=3jnEmjM8og4kWymiTN[=Yk[66CT8M;6);XQC,nX3Fjj8Dh}7QX';
const message = '30 Days of Node.js';
const hmac = crypto.createHmac(algorithm, password);
const data = hmac.update(message);
const gen_hmac = data.digest('hex');

console.log(`ℹ️ HMAC: ${gen_hmac}`);