$(window).on("load resize", function (){
    adjustNav();
    $(".mobile-underlay").removeClass("underlay");
})

$(".menu-icon").on("click", function() {
    $("nav").toggleClass("hidden");
    $(".mobile-underlay").toggleClass("underlay");
})

$(".mobile-underlay").on("click", function () {
    if (!$("nav").hasClass(".hidden")) {
        $("nav").addClass("hidden");
        $(".mobile-underlay").removeClass("underlay");
    }
})

function adjustNav() {
    if ($(window).width() <= 620) {
        $("nav").addClass("hidden");
    } else {
        $("nav").removeClass("hidden");
    }
}