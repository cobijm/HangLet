var p1Words;
var p2Words;
function continueToMultiplayer() {


	get2PlayersWords();
	goToMultiplayer();
	
}





function goToMultiplayer() {

	
	window.location = './multiplayer.html'
	
}


function get2PlayersWords() {

	p1Words = document.forms["playersWords"]["p1Words"].value;
	p2Words = document.forms["playersWords"]["p2Words"].value;
	localStorage.setItem("p1WordsKey", p1Words);
	localStorage.setItem("p2WordsKey", p2Words);

	
}



function p1GuessWords() {
	var p2Words = localStorage.getItem("p2WordsKey");
	var wordsLength = p2Words.length;
	document.getElementById("p2WordsGenerated").innerHTML =	p2Words ;

	
    var arrayOfAlpha = [];
	while(wordsLength !=0)
	{
	 arrayOfAlpha.push("_ ");
	wordsLength--;
		
	}
	
	     document.getElementById("p1GuessOutput").innerHTML = arrayOfAlpha.join("");

	

	
}



function p2GuessWords() {
		var p1Words = localStorage.getItem("p1WordsKey");
	var wordsLength = p1Words.length;

	 document.getElementById("p1WordsGenerated").innerHTML = p1Words;
    var arrayOfAlpha = [];
	while(wordsLength !=0)
	{
	 arrayOfAlpha.push("_ ");
	wordsLength--;
		
	}
	
    document.getElementById("p2GuessOutput").innerHTML = arrayOfAlpha.join("");


	
}

