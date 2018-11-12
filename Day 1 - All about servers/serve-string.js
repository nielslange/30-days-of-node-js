'use strict';

const http = require('http');
const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    console.log('Server started');

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World!');
    response.end();
    
    console.log('Server responded');
});

server.listen(port, host, (error) => {
    if (error) {
        throw Error(`Error: ${error}`);
    }

    console.log(`Server is listening on ${host}:${port}`);
});