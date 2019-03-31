function continueToMultiplayer() {


	storePlayersWords();
	goToMultiplayerP1();
	
}





function goToMultiplayerP1() {

	
	window.location = './multiplayerP1.html'
	
}


function storePlayersWords() {

	p1Words = document.forms["playersWords"]["p1Words"].value;
	p2Words = document.forms["playersWords"]["p2Words"].value;
	localStorage.setItem("p1WordsKey", p1Words);
	localStorage.setItem("p2WordsKey", p2Words);

	
}