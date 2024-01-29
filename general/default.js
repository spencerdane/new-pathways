$(window).on("resize", function (){
    $(".mobile-nav").addClass("hidden");
    $(".mobile-underlay").addClass("hidden");
})

$(".menu-icon").on("click", function() {
    $(".mobile-nav").toggleClass("hidden");
    $(".mobile-underlay").toggleClass("hidden");
})

$(".mobile-underlay").on("click", function() {
    if (!$("mobile-nav").hasClass("hidden")) {
        $(".mobile-nav").addClass("hidden");
        $(".mobile-underlay").addClass("hidden");
    }
})