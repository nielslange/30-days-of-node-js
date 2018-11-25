'use strict';

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000);
console.log('ℹ️  Server listening on port 3000');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/admin' , (req,res) => {
    res.sendFile(__dirname + '/admin.html'); 
})

io.on('connection', (socket) => {
    socket.emit('welcome', { data: 'welcome' });
    socket.on('submit', (data) => {   
        console.log(`✅  Quote "${data.quote}" addedd successfully!`);
        io.sockets.emit('quote', { data : data });
    });
});