'use strict';

const ws = require('fs');
const { Console } = require('console');
const file_stdout = './stdout.log';
const file_stderr = './stderr.log';
const stream_stdout = ws.createWriteStream(file_stdout);
const stream_stderr = ws.createWriteStream(file_stderr);

const print = new Console(stream_stdout, stream_stderr);

print.log(`This string will be stored in a file "${file_stdout}"`);
print.error(`This string will be stored in a file "${file_stderr}"`);

console.log(`The outputs of this programm can be found in the files "${file_stdout}" and "${file_stderr}"`);