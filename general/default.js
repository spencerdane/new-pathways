$(window).on("load resize", function (){
    adjustNav();
})

$(".menu-icon").on("click", function() {
    $("nav").toggleClass("hidden");
})

$("main").on("click", function () {
    if (!$("nav").hasClass(".hidden")) {
        $("nav").addClass("hidden");
    }
})

function adjustNav() {
    if ($(window).width() <= 620) {
        $("nav").addClass("hidden");
    } else {
        $("nav").removeClass("hidden");
    }
}