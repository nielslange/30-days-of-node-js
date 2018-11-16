'use strict';

// THIS WILL NOT WORK:
const fs = require('fs');
const file = 'non-existing-file.txt';

try {
  fs.readFile(file, (error, data) => {
    // mistaken assumption: throwing here...
    if (error) {
      throw error;
    }
  });
} catch (error) {
  // This will not catch the throw!
  console.error(error);
}