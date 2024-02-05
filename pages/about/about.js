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

//Internal function that connects a "Phase" selection to a specific FAQ.
function findFAQ(phase) {
    switch (phase) {
        case "#phase1":
            return "faq3";
        case "#phase2":
            return "faq4";
        case "#phase3":
            return "faq2";
        case "#phase4":
            return "faq1";
        case "#phase5":
            return "faq5";
        default:
            console.log("No question found.");
    }
}

//Function for the 24 Week Breakdown
function revealPhase(phase) {
    $(phase).toggleClass("active");
    if (lastPhase && lastPhase !== phase) {
        $(lastPhase).removeClass("active");
    }
    lastPhase = phase;
    revealAnswer(findFAQ(phase));
}

//Functions for the FAQs section.
function revealAnswer(currentAction) {
    if (lastAction !== currentAction && lastAction) {
        changeIcon(lastAction, true);
        $("#" + lastAction + " + .answer").slideUp(500);
    }

    changeIcon(currentAction);
    $("#" + currentAction + " + .answer").slideToggle(500);
    lastAction = currentAction;
}

function changeIcon(currentAction, forceClose=false) {
    if (!forceClose) {
        $("#" + currentAction + " img.plus-sign").fadeToggle(300);
        $("#" + currentAction + " img.minus-sign").fadeToggle(200);
    } else {
        $("#" + currentAction + " img.plus-sign").fadeIn(300);
        $("#" + currentAction + " img.minus-sign").fadeOut(200);
    }
 
    

}
