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

    //hide form on send
    $('.get_order_btn').on('click', function (e) {
        e.preventDefault();
        $('.form').hide();
        $('body').addClass('sending')
        $('.send_message').show();
    });


    var $btn = $('.order-link-block');
    var $anchor = $('.scroll-anchor');

    if ($btn.length && $anchor.length) {
        var scroll = function() {
            var y = $(window).scrollTop();
            var height = $(window).height();
            var offset = $anchor.offset().top;
            if (y+height >= offset) {
                $btn.addClass('hide-button');
            } else {
                $btn.removeClass('hide-button');
            }
        };

        scroll();

        $(window).on('scroll', function() {
            scroll();
        });
    }


//mask
    $('.tel').inputmask({"mask": "+7(999)-999-9999"});


});
