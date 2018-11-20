'use strict';

const crypto = require('crypto');
const fs = require('fs');
const algorithm = 'sha256';
const encoding = 'hex';
const file = 'demo.txt';
const hash = crypto.createHash(algorithm);
const stream = fs.ReadStream(file);

stream.on('data', function(data) {
    hash.update(data)
});

stream.on('end', function() {
    var gen_hash = hash.digest(encoding);
    console.log(`ℹ️ Hash generated using: ${algorithm}`);
    console.log(`ℹ️ Hashed output is: ${gen_hash}`);
    console.log(`ℹ️ File name is: ${file}`);
    fs.writeFileSync(file, gen_hash);
});