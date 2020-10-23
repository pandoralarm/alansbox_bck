$(document).ready(function () {
    var navheight = $(".navbar").outerHeight();
    var ctnheight = $("#content").height();
    $('.content').css({
        'padding-top' : navheight,
        'min-height' : ctnheight - navheight,
    });

});