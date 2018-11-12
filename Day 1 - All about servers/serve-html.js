'use strict';

const http = require('http');
const host = '127.0.0.1';
const port = 3000;
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log('Server started');

    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('index.html', (error, data) => {
        if (error) {
            throw Error(`Error: ${error}`);
        }
        response.end(data);
    });
    
    console.log('Server responded');
});

server.listen(port, host, (error) => {  
    if (error) {
        throw Error(`Error: ${error}`);
    }
  
    console.log(`Server is listening on ${host}:${port}`);
  });	