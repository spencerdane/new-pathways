$(window).on("load resize", function (){
    adjustNav();
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

function adjustNav() {
    if ($(window).width() <= 620) {
        $("nav").addClass("hidden");
    } else {
        $("nav").removeClass("hidden");
    }
    $(".mobile-underlay").removeClass("underlay");
}