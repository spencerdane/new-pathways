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

//Email Obfuscation
$(window).on("load", function () {
    var attr1 = "ma"
    var attr2 = "ilto:"
    var user = "newpathwayscbt";
    var site1 = "gma";
    var site2 = "il.com";
    $(".emobs").attr("href", attr1 + attr2 + user + "@" + site1 + site2);
    $(".my-email").html(user + "<wbr>git @" + site1 + site2);
})