'use strict';

const fs = require('fs');
const data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const writeStream = fs.createWriteStream('demo.txt');

writeStream.write(data);
writeStream.end();

writeStream.on('error', function(err){
   console.log(err);
});

writeStream.on('finish', function() {
    console.log('✅  Data successfully written.');
    console.log('ℹ️  Now trying to read the same file using read streams.');

    const readStream = fs.createReadStream('demo.txt');
    let content = '';

    readStream.on('data', function(chunk) {
        content += chunk;
    });

    readStream.on('error', function(err){
        console.log('❌ ', err);
    });

    readStream.on('end',function(){
        console.log('ℹ️  Written data:', content);
    });

    console.log('ℹ️  Performed write and read using streams');
});	