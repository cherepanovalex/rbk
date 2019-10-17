$(function () {

    // **слайдер



    //scroll to element


    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.stop().animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

    //lang
    var selectorLang = '.lang a';

    $(selectorLang).on('click', function(){
        $(selectorLang).removeClass('active');
        $(this).addClass('active');
    });




//mask
    $('.tel').inputmask({"mask": "+7(999) 999-99-99"});


});
