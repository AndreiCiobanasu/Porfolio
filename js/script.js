$(document).ready(function () {

    /*////////////////////// Navbar //////////////////////*/
    $('.open_menu').click(function () {
        $('.menu_phone_open').css('display', 'flex');
        $('.open_menu').css('visibility', 'hidden');
        $('body').css('position', 'fixed');
    });

    $('.menu_close').click(function () {
        $('.menu_phone_open').css('display', 'none');
        $('.open_menu').css('visibility', 'visible');
        $('body').css('position', 'static');
    });

    // Add detection on scroll action
    $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $('#navbar').addClass('navColor');
        $('#navbar a').addClass('navElemColor');
        $(".open_menu div").addClass("openMenuColor");
        $(".open_menu div").removeClass("divMenu");
    } else {
        $('#navbar').removeClass('navColor');
        $("#navbar a").removeClass("navElemColor");
        $(".open_menu div").removeClass("openMenuColor");
        $(".open_menu div").addClass("divMenu");
    }
    });










   /*/////////////////// Footer ///////////////////////*/

    /* button "Envoyez moi un mail" */
    $(".mail").mouseover(function () {
        $('.mail').css('background-color','#e8f0e7');
        $('.mail p').css('color', 'rgba(105, 111, 171, 0.838)');
    });

    $(".mail").mouseout(function () {
        $('.mail').css('background-color', 'rgba(105, 111, 171, 0.838)');
        $('.mail p').css('color', 'white');
    });

    /* button "Tel: 0475 84 79 07" */
    $(".tel").mouseover(function () {
        $('.tel').css('background-color', '#e8f0e7');
        $('.tel p').css('color', 'rgba(171, 105, 105, 0.838)');
    });

    $(".tel").mouseout(function () {
        $('.tel').css('background-color', 'rgba(171, 105, 105, 0.838)');
        $('.tel p').css('color', 'white');
    });




});