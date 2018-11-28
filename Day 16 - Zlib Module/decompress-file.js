'use strict';

const zlib = require('zlib');
const fs = require('fs');
const unzip = zlib.createGzip();
const read = fs.createReadStream('demo.txt.gz');
const write = fs.createWriteStream('demo-test.txt');

read.pipe(unzip).pipe(write);

console.log('✅  File sucessfully decompressed!');