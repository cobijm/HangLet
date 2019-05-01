// const http = require ('http');
// const express = require ('express');
// const socketio = require('socket.io');
// const hangletGame = require('./hangletGame');
// const app = express();

// const clientPath = `${__dirname}/../client/Hanglet`;
// console.log(`Serving static from ${clientPath}`);

// app.use(express.static(clientPath));
// // app.listen('sftp://cs319-091.misc.iastate.edu');
// // const server = http.createServer(app); 
// // const io = socketio(server);
// // let waitingPlayer;
// // io.on('connection', onConnection);


// const server = http.createServer(app); 
// const io = socketio(server);

// let waitingPlayer;
// io.on('connection', onConnection);

// server.on('error',(err) =>{
//     console.error("Server error: ", err);
// });
// server.listen(8080, '192.168.2.14', ()=>{//port21//192.168.0.32
//     console.log("Started on 8080");
//     });
    
// // server.listen(21,'cs319-091.misc.iastate.edu',()=>{//port21
// //     console.log("Started on 8080");
// //     });
// // server.listen(8080,() =>{//cs319-091.misc.iastate.edu
// // console.log("Started on 8080");
// // });

// function onConnection(sock){
//     console.log("Someone Connected");
//     sock.emit('msg','Welcome to HangLet Game!');
//     var game;
//     var bool;
//     // sock.on('msg',(txt)=>io.emit('msg',txt));
//     //sock.on('playerWord',(txt)=> waitingPlayer.emit('playerWord2',txt));
//     if(waitingPlayer){
//         //Match Starts
//         sock.emit('nowCanPlay','connected');//main functionality help to knwo if 2 player are connected, then they can enter their word
//         waitingPlayer.emit('nowCanPlay','connected');
//        new hangletGame(waitingPlayer,sock);
//         // waitingPlayer.on('playerWord',(txt)=>sock.emit('playerWord2',txt));//txt
//         // sock.on('playerWord',(txt)=> waitingPlayer.emit('playerWord2',txt));
//         // game._saveGuessWord(waitingPlayer,sock);
//         // game._isGameOver(waitingPlayer,sock);
//         // game._saveScore(waitingPlayer,sock);
//         // game._whoWon();
    
//         waitingPlayer = null;
//     }else{
//         waitingPlayer = sock;
//         sock.emit('msg','Waiting for Player');
//     }
// }

// // function notifyMatchStarts(sockA, sockB){
// //     [sockA, sockB].forEach((sock) => sock.emit('msg','Match starts'));
// // }

///********* */Test
const http = require ('http');
const express = require ('express');
const socketio = require('socket.io');
const hangletGame = require('./hangletGame');
const app = express();
const favicon = require('serve-favicon');

//var path = require('path');
//const clientPath = `${__dirname}/../client/Hanglet`;
//console.log(`Serving static from ${clientPath}`);

app.use(express.static('client'));
//app.use(favicon('/favicon.ico'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.listen('sftp://cs319-091.misc.iastate.edu');
// const server = http.createServer(app); 
// const io = socketio(server);
// let waitingPlayer;
// io.on('connection', onConnection);


const server = http.Server(app); 
const io = socketio(server);

let waitingPlayer;
io.on('connection', onConnection);

server.on('error',(err) =>{
    console.error("Server error: ", err);
});
server.listen(process.env.PORT || 5000);//port21//192.168.0.32
    console.log("Started on 8080");
    
// server.listen(21,'cs319-091.misc.iastate.edu',()=>{//port21
//     console.log("Started on 8080");
//     });
// server.listen(8080,() =>{//cs319-091.misc.iastate.edu
// console.log("Started on 8080");
// });

function onConnection(sock){
    console.log("Someone Connected");
    sock.emit('msg','Welcome to HangLet Game!');
    var game;
    var bool;
    // sock.on('msg',(txt)=>io.emit('msg',txt));
    //sock.on('playerWord',(txt)=> waitingPlayer.emit('playerWord2',txt));
    if(waitingPlayer){
        //Match Starts
        sock.emit('nowCanPlay','connected');//main functionality help to knwo if 2 player are connected, then they can enter their word
        waitingPlayer.emit('nowCanPlay','connected');
       new hangletGame(waitingPlayer,sock);
        // waitingPlayer.on('playerWord',(txt)=>sock.emit('playerWord2',txt));//txt
        // sock.on('playerWord',(txt)=> waitingPlayer.emit('playerWord2',txt));
        // game._saveGuessWord(waitingPlayer,sock);
        // game._isGameOver(waitingPlayer,sock);
        // game._saveScore(waitingPlayer,sock);
        // game._whoWon();
    
        waitingPlayer = null;
    }else{
        waitingPlayer = sock;
        sock.emit('msg','Waiting for Player');
    }
}

// function notifyMatchStarts(sockA, sockB){
//     [sockA, sockB].forEach((sock) => sock.emit('msg','Match starts'));
// }