//<<<<<<< HEAD
//=======

    var arrayOfAlpha= [];
var generatedWords ;


//>>>>>>> 9157e565ee3fce991dc41bae8df49143b308c3d6
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

var database;
function setup(){
	 var person = prompt("Please enter your name", "");
	  var score = prompt("Please enter your score", "");
	 if (person != null) {
    document.getElementById("printName").innerHTML ="Name: "+ person;
	document.getElementById("score").innerHTML ="Score: "+score;
  }else{
	document.getElementById("printName").innerHTML ="Name: generateRandomUser";
	document.getElementById("score").innerHTML ="Score: displayScore";
  }
  	
  	// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAFhZoGHpYmXbQSfKQ0Dm2CM4y3bl_QODU",
    authDomain: "hanglet-48169.firebaseapp.com",
    databaseURL: "https://hanglet-48169.firebaseio.com",
    projectId: "hanglet-48169",
    storageBucket: "",
    messagingSenderId: "363620412655"
  };
  firebase.initializeApp(config);
  //push data to database
  database = firebase.database();
  var ref = database.ref('playerName');
  var data;
   if (person != null) {
   data = {
	  name: person,
	  score: score
  }
 }
  ref.push(data);
  //get score from database
  var ref2 = database.ref('score');
  ref.on('value',gotData,errData);
  
  
}
window.onload=setup;

function gotData(data) {
	console.log(data.val());
	var scores = data.val();
	var keys = Object.keys(scores);
	
	var stepsRef = database.ref('playerName/');
stepsRef.orderByChild('score').on('value', function (snapshot) {
    snapshot.forEach(function(stepSnapshot) {
        console.log(stepSnapshot.key, stepSnapshot.val().name);
		var li = document.createElement("LI");
		var textnode = document.createTextNode(stepSnapshot.val().name+": "+stepSnapshot.val().score);
	    li.appendChild(textnode);
	    document.getElementById("scoreList").appendChild(li);
		
    });
});
	console.log("score "+scores);
 //put higher score on top
	/*
	for(var i =0; i<keys.length; i++){
		var k =keys[i];
		var playerName= scores[k].name;
		var score = scores[k].score;
		//console.log(playerName,score);
		var li = document.createElement("LI");
		var textnode = document.createTextNode(playerName+": "+score);
	    li.appendChild(textnode);
	    document.getElementById("scoreList").appendChild(li);
	}
	*/
	
}
function errData(err) {
	console.log("Error: ");
	console.log(err);
}

function newWords() {
	var wordsLength = 0;
		arrayOfAlpha = [];
  var randomNumber = Math.floor(Math.random() * (words.length));
//<<<<<<< HEAD
	document.getElementById('wordsGenerated').innerHTML = words[randomNumber];
	wordsLength = words[randomNumber].length;
//=======
  	generatedWords = words[randomNumber];
//>>>>>>> 9157e565ee3fce991dc41bae8df49143b308c3d6
	
	document.getElementById('wordsGenerated').innerHTML = generatedWords;
	wordsLength = words[randomNumber].length;
	while(wordsLength !=0)
	{
	 arrayOfAlpha.push("_ ");
	wordsLength--;
		
	}

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	clearLetterBank();
}


function ToHomepage()
{
		window.location = './homepage.html'

	
}





/**************
Keyboard below
**************/

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
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "a")
		{
			arrayOfAlpha.splice(i, 1, "a ");

		}	
		
		
	}
	document.getElementById("buttonA").disabled = true;

	
	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function b()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "b")
		{
			arrayOfAlpha.splice(i, 1, "b ");

		}	
		
		
	}

			document.getElementById("buttonB").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function c()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "c")
		{
			arrayOfAlpha.splice(i, 1, "c ");

		}	
		
		
	}

			document.getElementById("buttonC").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function d()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "d")
		{
			arrayOfAlpha.splice(i, 1, "d ");

		}	
		
		
	}

				document.getElementById("buttonD").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function e()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "e")
		{
			arrayOfAlpha.splice(i, 1, "e ");

		}	
		
		
	}

				document.getElementById("buttonE").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function f()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "f")
		{
			arrayOfAlpha.splice(i, 1, "f ");

		}	
		
		
	}

				document.getElementById("buttonF").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}

function g()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "g")
		{
			arrayOfAlpha.splice(i, 1, "g ");

		}	
		
		
	}

				document.getElementById("buttonG").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function h()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "h")
		{
			arrayOfAlpha.splice(i, 1, "h ");

		}	
		
		
	}

				document.getElementById("buttonH").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function i()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "i")
		{
			arrayOfAlpha.splice(i, 1, "i ");

		}	
		
		
	}

				document.getElementById("buttonI").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function j()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "j")
		{
			arrayOfAlpha.splice(i, 1, "j ");

		}	
		
		
	}

				document.getElementById("buttonJ").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function k()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "k")
		{
			arrayOfAlpha.splice(i, 1, "k ");

		}	
		
		
	}

				document.getElementById("buttonK").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function l()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "l")
		{
			arrayOfAlpha.splice(i, 1, "l ");

		}	
		
		
	}

				document.getElementById("buttonL").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function m()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "m")
		{
			arrayOfAlpha.splice(i, 1, "m ");

		}	
		
		
	}

				document.getElementById("buttonM").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function n()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "n")
		{
			arrayOfAlpha.splice(i, 1, "n ");

		}	
		
		
	}

				document.getElementById("buttonN").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function o()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "o")
		{
			arrayOfAlpha.splice(i, 1, "o ");

		}	
		
		
	}

				document.getElementById("buttonO").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function p()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "p")
		{
			arrayOfAlpha.splice(i, 1, "p ");

		}	
		
		
	}

				document.getElementById("buttonP").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function q()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "q")
		{
			arrayOfAlpha.splice(i, 1, "q ");

		}	
		
		
	}

				document.getElementById("buttonQ").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function r()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "r")
		{
			arrayOfAlpha.splice(i, 1, "r ");

		}	
		
		
	}

				document.getElementById("buttonR").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function s()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "s")
		{
			arrayOfAlpha.splice(i, 1, "s ");

		}	
		
		
	}

		document.getElementById("buttonSS").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function t()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "t")
		{
			arrayOfAlpha.splice(i, 1, "t ");

		}	
		
		
	}

				document.getElementById("buttonT").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function u()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "u")
		{
			arrayOfAlpha.splice(i, 1, "u ");

		}	
		
		
	}

				document.getElementById("buttonU").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}


function v()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "v")
		{
			arrayOfAlpha.splice(i, 1, "v ");

		}	
		
		
	}

				document.getElementById("buttonV").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function w()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "w")
		{
			arrayOfAlpha.splice(i, 1, "w ");

		}	
		
		
	}

				document.getElementById("buttonW").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function x()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "x")
		{
			arrayOfAlpha.splice(i, 1, "x ");

		}	
		
		
	}

				document.getElementById("buttonX").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function y()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "y")
		{
			arrayOfAlpha.splice(i, 1, "y ");

		}	
		
		
	}

				document.getElementById("buttonY").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}
function z()
{
	var i;
	for(i =0; i<generatedWords.length; i++ )
	{
		
		if(generatedWords[i] == "z")
		{
			arrayOfAlpha.splice(i, 1, "z ");

		}	
		
		
	}

				document.getElementById("buttonZ").disabled = true;

	 document.getElementById("output").innerHTML =arrayOfAlpha.join("");

	
}





















