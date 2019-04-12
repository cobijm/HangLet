var config = {
    apiKey: "AIzaSyAFhZoGHpYmXbQSfKQ0Dm2CM4y3bl_QODU",
    authDomain: "hanglet-48169.firebaseapp.com",
    databaseURL: "https://hanglet-48169.firebaseio.com",
    projectId: "hanglet-48169",
    storageBucket: "",
    messagingSenderId: "363620412655"
  };
  firebase.initializeApp(config);

 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	alert("Go to homePage");
	//alert("Name: "+user.displayName);
	window.location = './homepage.html';
  } else {
    // No user is signed in.
	alert("Not Login");
	//alert("Name: "+user.displayName);
	//window.location.replace = './loginPage.html';
  }
});

 
  function login(){
	  var userEmail = document.getElementById("email").value;
	  var userPassword = document.getElementById("password").value;
	firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  alert("Err: "+errorMessage);
});

  }
  function singUp(){
	  var userEmail = document.getElementById("email").value;
	  var userPassword = document.getElementById("password").value;
	promise = firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert("Errors: "+errorMessage);
  console.log("error log:  "+errorMessage);
  // ...
});
  }