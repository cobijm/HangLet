const http = require ('http');
const express = require ('express');
const socketio = require('socket.io');

const app = express();

const clientPath = `${__dirname}/../client/Hanglet`;
console.log(`Serving static from ${clientPath}`);

app.use(express.static(clientPath));

const server = http.createServer(app);

const io = socketio(server);

io.on('connection',(socket) =>{
    console.log('Someone connected');
socket.emit('message','Hi, you are connected');
    socket.on('message', (text) =>{
        io.emit('message',text);
    });
});

server.on('error',(err) =>{
    console.error("Server error: ", err);
});

server.listen(8080,() =>{
console.log("Started on 8080");
});