// username of the current user
var currentUser  = "You";


var chatwindow = {
   say: function(user, userinput) {
        $(".prompt").before("<span id='username'>" + user + ": </span>" + userinput + "<br>");
        $(".chatwindow").animate({scrollTop: $('.chatwindow').prop("scrollHeight")}, 500);
        $('input[name=inputtext]').val('');
    },

};

var promptText = "<table class='prompt'><tr> \
			<td><input id='userinput' name='inputtext' placeholder='>>'/></td> \
			</tr></table>";

$(document).ready(function() {

	// Adds a .prompt class to the div designated as .chatwindow
	$(".chatwindow").append(promptText);
	

    // User input handler
    $("#userinput").keypress(function(e) {
        if (e.which == 13) {
            var uIn = $('input[name=inputtext]').val();
            chatwindow.say(currentUser, uIn);
		}
    });
});


