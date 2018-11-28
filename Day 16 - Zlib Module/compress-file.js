'use strict';

const zlib = require('zlib');
const fs = require('fs');
const zip = zlib.createGzip();
const read = fs.createReadStream('demo.txt');
const write = fs.createWriteStream('demo.txt.gz');

read.pipe(zip).pipe(write);

console.log('✅  File sucessfully compressed!');