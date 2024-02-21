var allHidden = true;
var lastAnswer = "";

//Email Obfcation prepares the email address on load.
$(window).on("load", function (){
    var subject = $(".free-consult").attr("href") + "?subject=Free CBT Consultation";
    $(".free-consult").attr("href", subject);
});


$(".btn.question").on("click", function (){
    var answer = $(this).attr("class");
    answer = getAnswer(answer);
    revealAnswer(answer);
    lastAnswer = answer;
})

function revealAnswer(answer, last = lastAnswer) {
    if ($(".answer.block" + answer).hasClass("hidden") && allHidden){
        $(".answer.block" + answer).slideDown(500);
        $("html").animate({scrollTop: $(answer).position().top}, 1000);
        $(".answer.block" + answer).removeClass("hidden");
        allHidden = false;
    } else if (!$(".answer.block" + answer).hasClass("hidden")) {
        $(".answer.block" + answer).slideUp(500);
        $(".answer.block" + answer).addClass("hidden");
        allHidden = true;
    } else if (allHidden === false) {
        $(".answer.block" + lastAnswer).slideUp(500);
        $(".answer.block" + lastAnswer).addClass("hidden");
        $(".answer.block" + answer).slideDown(500);
        $(".answer.block" + answer).removeClass("hidden");
        setTimeout(function () {
            $("html").animate({scrollTop: $(answer).position().top}, 1000);
        }, 500);
    }
}

function getAnswer(question) {
    if (question.includes("cbt")) {
        return ".cbt";
    } else if (question.includes("help-how")) {
        return ".help-how";
    } else if (question.includes("start")) {
        return ".start";
    } else {
        console.log("Button not recognized.");
    }
}