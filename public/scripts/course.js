//lastAction assists with the revealAnswer function.
var lastPhase;
var lastAction;

//Event Listener on the 24 Week Breakdown offered by New Pathways.
$("#pathway > div").on("click", function () {
    var phase = "#" + $(this).attr("id");
    revealPhase(phase);
})

//Function for the 24 Week Breakdown
function revealPhase(phase) {
    $(phase).toggleClass("active");
    $(phase + "-info .answer").slideToggle("hidden");
    
    //Closes previously opened answer if a different button is clicked.
    if (lastPhase && lastPhase !== phase) {
        closeLastPhase();
    }
    
    //If "active" has been toggled on, the page scrolls down to the anwer.
    if ($(phase).hasClass("active")) {
        $("html").animate({scrollTop: $("#phase1-info").position().top - 50
        }, 1000);
    }

    lastPhase = phase;
}

//Removes "active" color, slides answer up, and sets last phase to nothing.
function closeLastPhase() {
    if (lastPhase) {
        $(lastPhase).removeClass("active");
        $(lastPhase + "-info .answer").slideUp("hidden");
        lastPhase = "";
    }  
}