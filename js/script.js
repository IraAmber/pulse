$(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 1200,
        // adaptiveHeight: true,s
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right_solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});
