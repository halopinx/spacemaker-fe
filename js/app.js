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
    $('.slider-image-carousel').slick({
        fade: true,
        dots: true,
        infinite: true
    });

    //Same Height
    $('.sh').matchHeight();

    //Isotope
    $('.isotope-holder').isotope({
        itemSelector: '.post-box',
        layoutMode: 'fitRows',
        fitRows: {
            gutter: 30
        }
    })

})