//example use case by library user

//set current username
currentUser = "USER1"; 

var speak = function() {
	// what we want to call when currentUser
	console.log("in speak"); 
};

var chatwindow = new ChatWindow(speak);

chatWindow.hear("USER2", "words from other user");

/*user code
var say = function() {
	// where we want userinput to go
};
var chatWindow = new ChatWindow({ say: say });
// user calls hear whenever they get input	
chatWindow.hear(username, "words from other user");
*/
