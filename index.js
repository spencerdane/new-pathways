/*var mobile;

$(window).on("load resize", function() {
    updateMobile();
})

function updateMobile() {
    mobile = $(window).width() <= 620;
    if (mobile) {
        $(".answer.block").removeClass("hidden");
    } else {
        $(".answer.block").addClass("hidden");
    }
} */

var allHidden = true;
var lastAnswer = "";

$(".btn.question").on("click", function (){
    var answer = $(this).attr("class");
    answer = getAnswer(answer);
    revealAnswer(answer);
    lastAnswer = answer;
})

function revealAnswer(answer, last = lastAnswer) {
    if ($(".answer.block" + answer).hasClass("hidden") && allHidden){
        $(".answer.block" + answer).slideDown(500);
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