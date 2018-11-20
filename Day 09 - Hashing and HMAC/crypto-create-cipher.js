'use strict';

const crypto = require('crypto');
const algorithm = 'aes-128-cbc';
const password = '{s4WoGpxCbzo36Xd6s3K9sf%(cstLFm^mc%]7@6fGRYCGytghVF#Y7TKw[8e+LMk';
const message = '30 Days of Node.js';
const inputEncoding = 'utf-8';
const outputEncoding = 'hex';
const cipher = crypto.createCipher(algorithm, password);
let crypted = cipher.update(message, inputEncoding, outputEncoding);
crypted += cipher.final(outputEncoding);

console.log(crypted);