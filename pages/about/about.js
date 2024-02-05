var lastAction;

$(".question-bar").on("click", function () { 
    revealAnswer($(this).attr("id"));
    lastAction = $(this).attr("id");
})

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

