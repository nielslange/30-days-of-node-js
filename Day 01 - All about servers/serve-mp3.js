'use strict';

const http  = require('http');
const host  = '127.0.0.1';
const port  = 3000;
const fs    = require('fs');
const file  = 'demo.mp3';

const server = http.createServer((request, response) => {
    console.log('Server started');

    fs.exists(file, (data) => {
		if (data) {
			response.writeHead(200, {'Content-Type': 'audio/mp3'});
            const stream = fs.createReadStream(file);
			stream.pipe(response);
		} else {
			response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write('Error 404: Audio file not found!');
            response.end();
		}
	});
});

server.listen(port, host, (error) => {
    if (error) {
        throw error;
    }

    console.log(`Server is listening on ${host}:${port}`);
});