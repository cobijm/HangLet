var p1Words;
var p2Words;
    var arrayOfAlpha = [];




function p1GuessWords() {
	var p2Words = localStorage.getItem("p2WordsKey");
	var wordsLength = p2Words.length;
	document.getElementById("p2WordsGenerated").innerHTML =	p2Words ;
	
    arrayOfAlpha = [];
	while(wordsLength !=0)
	{
	 arrayOfAlpha.push("_ ");
	wordsLength--;
		
	}
	
	     document.getElementById("p1GuessOutput").innerHTML = arrayOfAlpha.join("");

		clearLetterBank();


	
}



function p2GuessWords() {
		var p1Words = localStorage.getItem("p1WordsKey");
	var wordsLength = p1Words.length;

	 document.getElementById("p1WordsGenerated").innerHTML = p1Words;

	 
    arrayOfAlpha = [];
	while(wordsLength !=0)
	{
	 arrayOfAlpha.push("_ ");
	wordsLength--;
		
	}
	
    document.getElementById("p2GuessOutput").innerHTML = arrayOfAlpha.join("");
	clearLetterBank();

	
}



function clearLetterBank()
{
		document.getElementById("buttonA").disabled = false;
		document.getElementById("buttonB").disabled = false;
		document.getElementById("buttonC").disabled = false;
		document.getElementById("buttonD").disabled = false;
		document.getElementById("buttonE").disabled = false;
		document.getElementById("buttonF").disabled = false;
		document.getElementById("buttonG").disabled = false;
		document.getElementById("buttonH").disabled = false;
		document.getElementById("buttonI").disabled = false;
		document.getElementById("buttonJ").disabled = false;
		document.getElementById("buttonK").disabled = false;
		document.getElementById("buttonL").disabled = false;
		document.getElementById("buttonM").disabled = false;
		document.getElementById("buttonN").disabled = false;
		document.getElementById("buttonO").disabled = false;
		document.getElementById("buttonP").disabled = false;
		document.getElementById("buttonQ").disabled = false;
		document.getElementById("buttonR").disabled = false;
		document.getElementById("buttonSS").disabled = false;
		document.getElementById("buttonT").disabled = false;
		document.getElementById("buttonU").disabled = false;
		document.getElementById("buttonV").disabled = false;
		document.getElementById("buttonW").disabled = false;
		document.getElementById("buttonX").disabled = false;
		document.getElementById("buttonY").disabled = false;
		document.getElementById("buttonZ").disabled = false;


}


function a()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "a")
		{
			arrayOfAlpha.splice(i, 1, "a ");

		}	
		
		
	}
	document.getElementById("buttonA").disabled = true;

	
	 document.getElementById("p1Guessp1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function b()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "b")
		{
			arrayOfAlpha.splice(i, 1, "b ");

		}	
		
		
	}

			document.getElementById("buttonB").disabled = true;

	 document.getElementById("p1Guessp1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function c()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "c")
		{
			arrayOfAlpha.splice(i, 1, "c ");

		}	
		
		
	}

			document.getElementById("buttonC").disabled = true;

	 document.getElementById("p1Guessp1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function d()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "d")
		{
			arrayOfAlpha.splice(i, 1, "d ");

		}	
		
		
	}

				document.getElementById("buttonD").disabled = true;

	 document.getElementById("p1Guessp1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function e()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "e")
		{
			arrayOfAlpha.splice(i, 1, "e ");

		}	
		
		
	}

				document.getElementById("buttonE").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function f()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "f")
		{
			arrayOfAlpha.splice(i, 1, "f ");

		}	
		
		
	}

				document.getElementById("buttonF").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}

function g()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "g")
		{
			arrayOfAlpha.splice(i, 1, "g ");

		}	
		
		
	}

				document.getElementById("buttonG").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function h()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "h")
		{
			arrayOfAlpha.splice(i, 1, "h ");

		}	
		
		
	}

				document.getElementById("buttonH").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function i()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "i")
		{
			arrayOfAlpha.splice(i, 1, "i ");

		}	
		
		
	}

				document.getElementById("buttonI").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function j()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "j")
		{
			arrayOfAlpha.splice(i, 1, "j ");

		}	
		
		
	}

				document.getElementById("buttonJ").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function k()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "k")
		{
			arrayOfAlpha.splice(i, 1, "k ");

		}	
		
		
	}

				document.getElementById("buttonK").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function l()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "l")
		{
			arrayOfAlpha.splice(i, 1, "l ");

		}	
		
		
	}

				document.getElementById("buttonL").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function m()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "m")
		{
			arrayOfAlpha.splice(i, 1, "m ");

		}	
		
		
	}

				document.getElementById("buttonM").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function n()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "n")
		{
			arrayOfAlpha.splice(i, 1, "n ");

		}	
		
		
	}

				document.getElementById("buttonN").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function o()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "o")
		{
			arrayOfAlpha.splice(i, 1, "o ");

		}	
		
		
	}

				document.getElementById("buttonO").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function p()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "p")
		{
			arrayOfAlpha.splice(i, 1, "p ");

		}	
		
		
	}

				document.getElementById("buttonP").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function q()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "q")
		{
			arrayOfAlpha.splice(i, 1, "q ");

		}	
		
		
	}

				document.getElementById("buttonQ").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function r()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "r")
		{
			arrayOfAlpha.splice(i, 1, "r ");

		}	
		
		
	}

				document.getElementById("buttonR").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function s()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "s")
		{
			arrayOfAlpha.splice(i, 1, "s ");

		}	
		
		
	}

		document.getElementById("buttonSS").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function t()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "t")
		{
			arrayOfAlpha.splice(i, 1, "t ");

		}	
		
		
	}

				document.getElementById("buttonT").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function u()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "u")
		{
			arrayOfAlpha.splice(i, 1, "u ");

		}	
		
		
	}

				document.getElementById("buttonU").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}


function v()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "v")
		{
			arrayOfAlpha.splice(i, 1, "v ");

		}	
		
		
	}

				document.getElementById("buttonV").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function w()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "w")
		{
			arrayOfAlpha.splice(i, 1, "w ");

		}	
		
		
	}

				document.getElementById("buttonW").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function x()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "x")
		{
			arrayOfAlpha.splice(i, 1, "x ");

		}	
		
		
	}

				document.getElementById("buttonX").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function y()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "y")
		{
			arrayOfAlpha.splice(i, 1, "y ");

		}	
		
		
	}

				document.getElementById("buttonY").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}
function z()
{
	var i;
	for(i =0; i<wordToGuess.length; i++ )
	{
		
		if(wordToGuess[i] == "z")
		{
			arrayOfAlpha.splice(i, 1, "z ");

		}	
		
		
	}

				document.getElementById("buttonZ").disabled = true;

	 document.getElementById("p1GuessOutput").innerHTML =arrayOfAlpha.join("");

	
}




