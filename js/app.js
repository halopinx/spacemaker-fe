$(function () {
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


    //Switching background images
    $(window).on('resize', function () {
        var bannerElement = $('.banner-switch')
        var breakpoints = {
            lg: 1023,
            md: 768,
            sm: 480
        };
        var wind = $(window).innerWidth();
        var bannerLarge = $(bannerElement).data('banner-large');
        var bannerSmall = $(bannerElement).data('banner-small');
        if (wind > breakpoints.lg){
            $(bannerElement).css('backgroundImage', 'url('+bannerLarge+')');
            console.log('large');
        }else{
            $(bannerElement).css('backgroundImage', 'url('+bannerSmall+')');
            console.log('small')
        }
    })
})