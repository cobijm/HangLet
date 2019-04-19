const http = require ('http');
const express = require ('express');
const socketio = require('socket.io');
const hangletGame = require('./hangletGame');
const app = express();

const clientPath = `${__dirname}/../client/Hanglet`;
console.log(`Serving static from ${clientPath}`);

app.use(express.static(clientPath));

const server = http.createServer(app); 
const io = socketio(server);

let waitingPlayer;
io.on('connection', onConnection);

server.on('error',(err) =>{
    console.error("Server error: ", err);
});
server.listen(3000, '192.168.2.20',()=>{
    console.log("Started on 3000");
    });
// server.listen(3000,() =>{
// console.log("Started on 8080");
// });

function onConnection(sock){
    console.log("Someone Connected");
    sock.emit('msg','Welcome to HangLet Game!');
    var game;
    // sock.on('msg',(txt)=>io.emit('msg',txt));
    //sock.on('playerWord',(txt)=> waitingPlayer.emit('playerWord2',txt));
    if(waitingPlayer){
        //Match Starts
        sock.emit('nowCanPlay','connected');//main functionality help to knwo if 2 player are connected, then they can enter their word
        waitingPlayer.emit('nowCanPlay','connected');
       game = new hangletGame(waitingPlayer,sock);
        // waitingPlayer.on('playerWord',(txt)=>sock.emit('playerWord2',txt));//txt
        // sock.on('playerWord',(txt)=> waitingPlayer.emit('playerWord2',txt));
        game._saveGuessWord(waitingPlayer,sock);
        waitingPlayer = null;
    }else{
        waitingPlayer = sock;
        sock.emit('msg','Waiting for Player');
    }
}

// function notifyMatchStarts(sockA, sockB){
//     [sockA, sockB].forEach((sock) => sock.emit('msg','Match starts'));
// }