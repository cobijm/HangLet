function singleplayer()
{
	
}

var words = [

"glossy",
"birth",
"elite",
"racket",
"challenge",
"swim",
"wont",
"click",
"victory",
"fancy"


]

function newWords() {
	var wordsLength =0;
	
  var randomNumber = Math.floor(Math.random() * (words.length));
	document.getElementById('wordsGenerated').innerHTML = words[randomNumber];

	wordsLength = words[randomNumber].length;
	
    var arrayOfAlpha = [];
	while(wordsLength !=0)
	{
	 arrayOfAlpha.push("_ ");
	wordsLength--;
		
	}
	
	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");
	
}
