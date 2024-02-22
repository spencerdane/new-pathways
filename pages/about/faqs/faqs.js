//lastAction assists with the revealAnswer function.
var lastAction;

//Event listener on the Frequently Asked Questions sections.
$(".question-bar").on("click", function () { 
    revealAnswer($(this).attr("id"));
})

//Functions for the FAQs section.
function revealAnswer(currentAction) {
    if (lastAction && lastAction !== currentAction) {
        closeLastAnswer();
    }

    changeIcon(currentAction);
    $("#" + currentAction + " + .answer").slideToggle(500);
    lastAction = currentAction;
}

function closeLastAnswer() {
    if (lastAction) {
        changeIcon(lastAction, true);
        $("#" + lastAction + " + .answer").slideUp(500);
        lastAction = "";
    }
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

