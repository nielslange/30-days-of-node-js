'use strict';

const http  = require('http');
const host  = '127.0.0.1';
const port  = 3000;
const fs    = require('fs');

const server = http.createServer((request, response) => {
    console.log('Server started');

    response.writeHead(200, {'Content-Type': 'application/pdf'});
    fs.readFile('demo.pdf', (error, data) => {
        if (error) {
            throw error;
        }

        response.write(data);
        response.end();

        console.log('Server responded');
    })
});

server.listen(port, host, (error) => {
    if (error) {
        throw error;
    }

    console.log(`Server is listening on ${host}:${port}`);
});