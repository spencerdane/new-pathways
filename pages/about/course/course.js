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
    
    if (lastPhase && lastPhase !== phase) {
        closeLastPhase();
    }
    
    if ($(phase).hasClass("active")) {
        $("html").animate({scrollTop: $("#phase1-info").position().top - 50
        }, 1000);
    }
    closeLastAnswer();
    lastPhase = phase;
}

function closeLastPhase() {
    if (lastPhase) {
        $(lastPhase).removeClass("active");
        $(lastPhase + "-info .answer").slideUp("hidden");
        lastPhase = "";
    }  
}

function closeLastAnswer() {
    if (lastAction) {
        changeIcon(lastAction, true);
        $("#" + lastAction + " + .answer").slideUp(500);
        lastAction = "";
    }
}