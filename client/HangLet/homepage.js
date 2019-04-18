
auth.onAuthStateChanged(function(user) {
	if (user) {
		alert("Hi");
	  console.log("current user: "+user);
	} else {
	  // No user is signed in.
	  window.location = './loginPage.html';
	  console.log("no user: "+user);
	}
}); 
//logout
function logout(){ 
	auth.signOut().then(() =>{
	  window.location = './loginPage.html';
  console.log("log out");
	});
  }

function homepageToSinglePlayer() {

	
			window.location = './singleplayer.html'

	
}
function homepageToGetPlayersWords() {

	
			window.location = './getPlayersWords.html'

	
}