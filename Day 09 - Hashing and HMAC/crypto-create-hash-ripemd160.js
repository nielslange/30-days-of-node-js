'use strict';

const crypto = require('crypto');
const algorithm = 'ripemd160';
const message = '30 Days of Node.js';
const encoding = 'hex';
const hash = crypto.createHash(algorithm);
const data = hash.update(message);
const gen_hash = data.digest(encoding);

console.log(`ℹ️ HASH: ${gen_hash}`);