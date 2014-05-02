//example use case by library user

// set current username
currentUser = "USER1"; 

var speak = function(uIn) {
	// what we want to call when currentUser
	console.log("in speak"); 
};

// create instance of chat window
var chatwindow = new ChatWindow(speak);

// print received messages to the chat window
chatWindow.hear("USER2", "words from other user");

