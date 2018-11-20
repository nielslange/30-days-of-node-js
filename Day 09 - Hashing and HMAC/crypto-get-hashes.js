'use strict';

const crypto = require('crypto');
const hashes = crypto.getHashes();

console.log(`ℹ️ Available hashes: ${hashes}`);