//Email Obfuscation
$(window).on("load", function () {
    var attr1 = "ma"
    var attr2 = "ilto:"
    var user = "newpathwayscbt";
    var site1 = "gma";
    var site2 = "il.com";
    $(".emob").attr("href", attr1 + attr2 + user + "@" + site1 + site2);
    $(".my-email").html(user + "<wbr>@" + site1 + site2);
    $(".emob.free-consult").attr("href", attr1 + attr2 + user + "@" + site1 + site2 + "?subject=Free CBT Consultation");
})

//Closes the mobile navigation menue automatically when the window is resized.
$(window).on("resize", function (){
    $(".mobile-nav").addClass("hidden");
    $(".mobile-underlay").addClass("hidden");
})

//Toggles the mobile navigation menu on and off.
$(".menu-icon").on("click", function() {
    $(".mobile-nav").toggleClass("hidden");
    $(".mobile-underlay").toggleClass("hidden");
})

//Deactivates mobile nav when you click outside of the navigation menu
$(".mobile-underlay").on("click", function() {
    if (!$("mobile-nav").hasClass("hidden")) {
        $(".mobile-nav").addClass("hidden");
        $(".mobile-underlay").addClass("hidden");
    }
})

