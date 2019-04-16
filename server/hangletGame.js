class hangletGame {
    constructor(p1,p2){
        this._players=[p1,p2];
        this._sendToPlayers('HangLet Game Starts!');
       
    }
_sendToPlayers(msg){
this._players.forEach((player) => player.emit('msg',msg));
}

// _turn(playerIn){

// }

}
module.exports = hangletGame;