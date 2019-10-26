$(function() {
    // Preloading
    $(".preloading").fadeOut();
    // Lazy Image
    $('img').Lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: true,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
    });

    $(".last-posts-slider .owl-carousel").owlCarousel({
        items:1,
        lazyLoad:true,
        loop:true,
        margin:30,
        dots:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        smartSpeed:1000
    });

    $(".most-viewed-posts .owl-carousel").owlCarousel({
        items:3,
        loop:false,
        margin:15,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:2
            },
            1000:{
                items:4
            },
        }
    })
});