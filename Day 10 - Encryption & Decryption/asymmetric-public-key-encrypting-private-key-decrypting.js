'use strict';

const crypto = require('crypto');
const fs = require('fs');
const publicKey = fs.readFileSync('public.key').toString();
const privateKey = {
    key: fs.readFileSync('private.key').toString(),
    passphrase: '30 days of Node.js'
}
const inputEncoding = 'utf-8';
const outputEncoding = 'hex';
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const buffer = Buffer.from(text, inputEncoding);

const encryptedText = crypto.publicEncrypt(publicKey, buffer);
console.log(encryptedText.toString(outputEncoding));

const decrptedText = crypto.privateDecrypt(privateKey, encryptedText)
console.log(decrptedText.toString(inputEncoding));