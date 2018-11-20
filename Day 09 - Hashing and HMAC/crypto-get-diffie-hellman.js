'use strict';

const crypto = require('crypto');
const group = 'modp14';
const encoding = 'hex';
const alice = crypto.getDiffieHellman(group);
const bob = crypto.getDiffieHellman(group);

alice.generateKeys();
bob.generateKeys();

const aliceSecret = alice.computeSecret(bob.getPublicKey(), null, encoding);
const bobSecret = bob.computeSecret(alice.getPublicKey(), null, encoding);

console.log(`ℹ️ Alice's secret key: ${aliceSecret}`);
console.log(`ℹ️ Bob's secret: ${bobSecret}`);

if (aliceSecret === bobSecret) {
    console.log("✅ Alice's and Bob's secrets match.");
} else {
    console.log("❌ Alice's and Bob's secrets do not match.");
}