// username of the current user
var currentUser  = "You";

var promptText = "<table class='prompt'><tr> \
			<td><input id='userinput' name='inputtext' placeholder='>>'/></td> \
			</tr></table>";

// speak is a function defined by the user
var ChatWindow = function(speak) {
   this.say = function(user, userinput) {
        $(".prompt").before("<span id='username'>" + user + ": </span>" + userinput + "<br>");
        $(".chatwindow").animate({scrollTop: $('.chatwindow').prop("scrollHeight")}, 500);
        $('input[name=inputtext]').val('');
   };

   this.hear = function(hearUser, hearInput) {
 		this.say(hearUser, hearInput);
   };

   $(document).ready(function() {

   // Adds a .prompt class to the div designated as .chatwindow
   $(".chatwindow").append(promptText);

   // User input handler
   $("#userinput").keypress(function(e) {
        if (e.which == 13) {
            var uIn = $('input[name=inputtext]').val();
            chatwindow.say(currentUser, uIn);
			speak(uIn);
        }	
   });
	
  });

}


