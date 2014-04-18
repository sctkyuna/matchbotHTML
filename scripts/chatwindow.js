var currentUser  = "You";


var chatwindow = {
    /*statistics: {
        frequencies: {},
        nonstoplist_freq: {},
        avg_length: 0,
        total_words: 0
    },
    
    allresponses: [],
    email: "",

    currenttype: "first",

    populate_forms: function() {
        // populate a hidden form
        $("input[name=user[email]]").val(chatwindow.email);
        $("input[name=user[avg_length]]").val(chatwindow.statistics.avg_length);
        $("input[name=user[frequencies]]").val(JSON.stringify(chatwindow.statistics.frequencies));
        $("input[name=user[nonstoplist_freq]]").val(JSON.stringify(chatwindow.statistics.nonstoplist_freq));
        $("input[name=user[total_words]]").val(chatwindow.statistics.total_words);
        
    },

    sayNoScroll: function(user, userinput) {
        $(".chatwindow").append("<span>" + user + ": </span>" + userinput + "<br>");
        $('input[name=inputtext]').val('');
    },
	*/
    say: function(user, userinput) {
        $(".prompt").before("<span id='username'>" + user + ": </span>" + userinput + "<br>");
        $(".chatwindow").animate({scrollTop: $('.chatwindow').prop("scrollHeight")}, 500);
        $('input[name=inputtext]').val('');
    },

	/*
    userSays: function(userinput) {
        this.say("You", userinput);
    },

    botSays: function(text) {
        this.say("MatchBot", text);
    },
	

    send_and_get_line: function(userinputobj) {
        //send line of conversation, get response
        response = $.get("/bot", JSON.stringify(userinputobj));
        return response;
    },

    getBot: function(userinput) {
        
        // gets bot's response
        //var botresponse = this.send_and_get_line(userinput);
        var botresponse = {msg: "temporary placeholder", cat: "msg"};
        currentype = botresponse.cat;
        this.botSays(botresponse.msg);
    },
	

    calculate: function(userinput, whatthebotsaid) {
        // update statistics
        whatthebotsaid = {};

        var words = userinput.split(" ");
        words.forEach(function(word) {
            if(! word in whatthebotsaid) {
                if (word in statistics.frequencies) {
                    statics.frequencies[word] += 1;
                }
                else {
                    statistics.frequencies[word] = 1;
                }
                if (!word in stoplist) {
                    if (word in statistics.nonstoplist_freq) {
                        statistics.nonstoplist_freq[word] += 1;
                    }
                    else {
                        statistics.nonstoplist_freq[word] = 1;
                    }
                }
             }
        })
    },
    
    final_calculations: function() {
        // called right before sending, to calculate avg line lengths
        var total = 0.0;
        chatwindow.allresponses.forEach(function (response) {
            total += response.length;
        });
        chatwindow.statistics.avg_length = total/chatwindow.allresponses.length;
        chatwindow.statistics.total_words = total;

    },
	
    send_data: function() {
        //send statistics to rails
        
        //$.ajax({
        //    type: "POST",
        //    url: "/AcceptConvo",
        //    data: JSON.stringify(chatwindow.statistics),
        //    contentType: "application/json; charset=utf-8",
        //    dataType: "json",
        //    failure: function(errMsg) {
        //        alert("Connection Error: Chat data not sent");
        //    }
        //});
        
        console.log("in send_data");
    },

    end_seq: function() {
        chatwindow.final_calculations();
        chatwindow.send_data();
        alert("Sweet. Now rerouting you to your matches!");
        window.location.replace("matches.html");
    },
	*/        
};

/*
function isEmail(input) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(input);
};
*/

var promptText = "<table class='prompt'><tr> \
			<td><input id='userinput' name='inputtext' placeholder='>>'/></td> \
			</tr></table>";

/*var promptText = "<table class='prompt'><tr> \
			<td><span id='username'>You</span></td> \
			<td><input id='userinput' name='inputtext' placeholder='Type here'/></td> \
			</tr></table>";*/

$(document).ready(function() {

	// Adds a .prompt class to the div designated as .chatwindow
	$(".chatwindow").append(promptText);
	

    // Message handlers
    // chatwindow.botSays("Tell me about yourself!");
    
    $("#userinput").keypress(function(e) {
        if (e.which == 13) {
            var uIn = $('input[name=inputtext]').val();
            //chatwindow.allresponses.push(uIn);
            //chatwindow.userSays(uIn);
            chatwindow.say(currentUser, uIn);
			/*if (chatwindow.currenttype == "email") {
                if (isEmail(uIn)) {
                    chatwindow.email = uIn;
                    chatwindow.end_seq();
                }
                else {
                    chatwindow.botSays("Oh no! Not an e-mail! Try again?");
                }
            }
            else if (chatwindow.currenttype == "last") {
                chatwindow.botSays("One last thing - we need your e-mail so that future matches can contact you. What's your e-mail?");
                chatwindow.currenttype = "email";

            }
            else {
                chatwindow.getBot({
                    msg: uIn,
                    cat: chatwindow.currenttype
                });
                chatwindow.calculate(uIn);
            }*/
        }
    });
});


