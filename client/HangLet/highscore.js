var database;
function setup(){
	  //var person = prompt("Please enter your name", "");
      // var score = prompt("Please enter your score", "");
   var person = null;
  var score = 0;
	 if (person != null) {
    document.getElementById("printName").innerHTML ="Name: "+ person;
	document.getElementById("score").innerHTML ="Score: "+score;
  }else{
	document.getElementById("printName").innerHTML ="Name: generateRandomUser";
	document.getElementById("score").innerHTML ="Score: 0 pts";
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
//window.onload=wordSetup;

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