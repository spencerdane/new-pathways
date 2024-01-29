$(window).on("load resize", function (){
    adjustNav($(this).width());
})

$(".mobile-underlay").on("click", function () {
    if (!$("nav").hasClass(".hidden")) {
         adjustNav();
     }
 }) 

$(".menu-icon").on("click", function() {
    $("nav").toggleClass("hidden");
    $(".mobile-underlay").toggleClass("underlay");
})

function adjustNav(width) {
    if (width <= 620) {
        $("nav").addClass("hidden");
    } else {
        $("nav").removeClass("hidden");
    }
    $(".mobile-underlay").removeClass("underlay");
}