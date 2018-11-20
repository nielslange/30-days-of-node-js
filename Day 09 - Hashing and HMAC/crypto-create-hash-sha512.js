'use strict';

const crypto = require('crypto');
const algorithm = 'sha512';
const message = '30 Days of Node.js';
const inputEncoding = 'utf-8';
const outputEncoding = 'hex';
const hash = crypto.createHash(algorithm);
const data = hash.update(message, inputEncoding);
const gen_hash = data.digest(outputEncoding);

console.log(`ℹ️ HASH: ${gen_hash}`);