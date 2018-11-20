'use strict';

const crypto = require('crypto');
const fs = require('fs');
const algorithm = 'md5';
const password =')Gnd>WsBHVNv9ocqP/CJ8K(B8i%docdEEe#+Tz9j9cvRCGdP3bn9?ar8+{t4f3jK';
const encoding = 'hex';
const file = 'demo.txt';
const hmac = crypto.createHmac(algorithm, password);
const stream = fs.ReadStream(file);

stream.on('data', function(data) {
    hmac.update(data)
});

stream.on('end', function() {
    var gen_hmac = hmac.digest(encoding)
    console.log(`ℹ️ Hmac generated using: ${algorithm}`);
    console.log(`ℹ️ Hashed output is: ${gen_hmac}`);
    console.log(`ℹ️ File name is: ${file}`);
    fs.writeFileSync(file, gen_hmac);
});