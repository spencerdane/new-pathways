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
            return "faq5";
        case "#phase3":
            return "faq2";
        case "#phase4":
            return "faq1";
        case "#phase5":
            return "faq6";
        default:
            return null;
    }
}

function findPhase(faq) {
    switch (faq) {
        case "faq1":
            return "#phase4";
        case "faq2":
            return "#phase3";
        case "faq3":
            return "#phase1";
        case "faq5":
            return "#phase2";
        case "faq6":
            return "#phase5";
        default:
            return null;
    }
}

//Function for the 24 Week Breakdown
function revealPhase(phase, selfInit=true) {
    $(phase).toggleClass("active");
    if (lastPhase && lastPhase !== phase) {
        $(lastPhase).removeClass("active");
    }
    
    lastPhase = phase;
    var faq = findFAQ(phase);
    if (selfInit) {
        revealAnswer(faq, false);
        if ($(phase).hasClass("active")) {
            $("html").animate({
                scrollTop: $("#" + findFAQ(phase)).offset().top
            }, 1000);
        }
    }
}

//Functions for the FAQs section.
function revealAnswer(currentAction, selfInit=true) {
    if (lastAction !== currentAction && lastAction) {
        changeIcon(lastAction, true);
        $("#" + lastAction + " + .answer").slideUp(500);
    }

    changeIcon(currentAction);
    $("#" + currentAction + " + .answer").slideToggle(500);
    if (selfInit) {
        revealPhase(findPhase(currentAction), false);
    }
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

