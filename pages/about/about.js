//lastAction assists with the revealAnswer function.
var lastAction;
var lastPhase;

//Event Listener on the 24 Week Breakdown offered by New Pathways.
$("#pathway > div").on("click", function () {
    var phase = "#" + $(this).attr("id");
    revealPhase(phase);
})

//Event listener on the Frequently Asked Questions sections.
$(".question-bar").on("click", function () { 
    revealAnswer($(this).attr("id"));
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

//Functions for the FAQs section.
function revealAnswer(currentAction) {
    if (lastAction !== currentAction && lastAction) {
        closeLastAnswer();
    }

    changeIcon(currentAction);
    $("#" + currentAction + " + .answer").slideToggle(500);
    closeLastPhase();
    lastAction = currentAction;
}


function changeIcon(currentAction, forceClose=false) {
    if (!forceClose) {
        $("#" + currentAction + " img.visible").fadeToggle(2);
        $("#" + currentAction + " img.invisible").delay(2).fadeToggle(2);
        $("#" + currentAction + " img").delay(1).toggleClass("visible invisible");
    } else {
        $("#" + currentAction + " img.plus-sign").delay(2).fadeIn(2);
        $("#" + currentAction + " img.minus-sign").fadeOut(2);
        $("#" + currentAction + " img.plus-sign").delay(2).addClass("visible");
        $("#" + currentAction + " img.plus-sign").delay(2).removeClass("invisible");
        $("#" + currentAction + " img.minus-sign").addClass("invisible");
        $("#" + currentAction + " img.minus-sign").removeClass("visible");
    }
}

