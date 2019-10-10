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

    $(".last-posts .owl-carousel").owlCarousel({
        items:1,
        lazyLoad:true,
        loop:true,
        margin:30,
        dots:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        smartSpeed:1300
    })
});