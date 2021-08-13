$(document).ready(function(){
    $('#c1').owlCarousel({
        loop:true,
        autoplay:true,
        dots: false,
        smartSpeed:2000,
        autoplayTimeout:10000,
        autoplayHoverPause:false,
        stagePadding: 0,
        items: 1
    })
    $('.carrossel2').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })
});