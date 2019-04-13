//import { emit } from "cluster";

function continueToMultiplayer() {


	storePlayersWords();
	goToMultiplayerP1();

	
}
function ToHomepage()
{
		window.location = './homepage.html'

	
}





function goToMultiplayerP1() {

	
//	window.location = './multiplayerP1.html'
	
}

const submit= (e) =>{
	e.preventDefault();
};
function storePlayersWords() {
	const sock = io();
	output = document.getElementById('events');

	p1Words = document.forms["playersWords"]["p1Words"].value;
	p2Words = document.forms["playersWords"]["p2Words"].value;
	//localStorage.setItem("p1WordsKey", p1Words);
	//localStorage.setItem("p2WordsKey", p2Words);
	sock.emit('message', document.getElementById("p1Words").value);
	var li = document.createElement("LI");
	 var textnode = document.createTextNode("Text: "+document.getElementById("p1Words").value);
  li.appendChild(textnode);
  document.getElementById("events").appendChild(li);
	
}

// const writeEvent = (text) =>{
// 	const parent = document.getElementById('events');
// 	const el = document.createElement('li');
// 	var textnode = document.createTextNode("Text: "+text);
// 	el.appendChild(textnode);
// 	//el.innerHTML=text;
// 	parent.appendChild(el);
// };
// writeEvent("Wecome to hanglet");
// const sock = io();
// sock.on('message', writeEvent("Hi"));
