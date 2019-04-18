class hangletGame {
    constructor(p1,p2){
        this._players=[p1,p2];
        this._sendToPlayers('HangLet Game Starts!');
       
    }
_sendToPlayers(msg){
this._players.forEach((player) => player.emit('msg',msg));
}

 _saveGuessWord(p1,p2){
    p2.on('playerWord',(txt)=>p1.emit('playerWord2',txt));//txt
    p1.on('playerWord',(txt)=>p2.emit('playerWord2',txt));
  //  p2.emit('player1','p1word');
    //waitingPlayer.emit('nowCanPlay','connected');
 }

}
module.exports = hangletGame;