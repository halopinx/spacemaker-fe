(function($) {
    //Mobile Menu
    $('#button-mobile-menu').on('click', function () {
        $('body').toggleClass('show-menu');
        $(this).toggleClass('active');
    })


    //Sliders
    $('.slider-banner').slick({
        fade: true,
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: false
    });
    $('.slider-carousel').slick({
        fade: true,
        dots: true,
        infinite: true
    });
    $('.slider-image-carousel').slick({
        fade: true,
        dots: true,
        infinite: true
    });

    //Same Height
    if ($('.sh').length){
        $('.sh').matchHeight();
    }


    //Window Scroll
    var mobileMenuHeight = $('#site-header').outerHeight();

    $(window).on('scroll', function () {
        var y = $(window).scrollTop();
        if (y>mobileMenuHeight){
            $('body').addClass('fixed-menu');
        }else{
            if(y <= 0){
                $('body').removeClass('fixed-menu');
            }
        }
    })
})(jQuery);