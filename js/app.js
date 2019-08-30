//JS SCRIPTS
(function () {
    var domElements = {
        mobileMenuBtnID: 'button-mobile-menu'
    }
    //Mobile Menu
    var mobileMenuBtn = document.getElementById(domElements.mobileMenuBtnID);
    mobileMenuBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        document.body.classList.toggle('show-menu');
    })

})();

//JQUERY
(function($) {
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
        var scrollY = $(window).scrollTop();
        if (scrollY>mobileMenuHeight){
            $('body').addClass('fixed-menu');
        }else{
            if(y <= 0){
                $('body').removeClass('fixed-menu');
            }
        }
    })
})(jQuery);
