'use strict';

const fs = require('fs');
const file_1 = 'non-existing-file.txt';
const file_2 = 'demo.txt';

function errorCallback(error, data) {
    if (error) {
        console.error('❌ The following error occured:', error);
      return;
    }
    console.log(data);
  }
  
  fs.readFile(file_1, errorCallback);
  fs.readFile(file_2, errorCallback);