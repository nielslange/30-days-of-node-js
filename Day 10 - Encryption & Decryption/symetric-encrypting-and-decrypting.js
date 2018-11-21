'use strict';

const crypto = require('crypto');
const algorithm = 'aes-128-cbc';
const password = 'azV=eZTyngLEGnqc%d&NkH+sp46Eij3ZLv9nrXrvPXui?L^btC+h]2=69863XGG^';
const inputEncoding = 'utf-8';
const outputEncoding = 'hex';
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

function encrypt(data) {
    const cipher = crypto.createCipher(algorithm, password);
    let encrypted = cipher.update(data, inputEncoding, outputEncoding);
    encrypted += cipher.final(outputEncoding);

    return encrypted;
}

function decrypt(data){
    const decipher = crypto.createDecipher(algorithm, password);
    let decrypted = decipher.update(data, outputEncoding, inputEncoding);
    decrypted += decipher.final(inputEncoding);
    
    return decrypted;
 }

const textEncrypted = encrypt(text);
console.log(`ℹ️  Encrypted text: ${textEncrypted}`);

const textDecrypted = decrypt(textEncrypted);
console.log(`️ℹ️  Decrypted text: ${textDecrypted}`);