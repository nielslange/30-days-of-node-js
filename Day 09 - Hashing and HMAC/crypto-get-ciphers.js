'use strict';

const crypto = require('crypto');
const ciphers = crypto.getCiphers();

console.log(`ℹ️ Available ciphers: ${ciphers}`);