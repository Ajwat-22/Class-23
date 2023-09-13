$(function (){
    $(`.slider`).slick({
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow:2,
        speed:1000,
        prevArrow: '<i class="fa-solid fa-chevron-left banner_arrow"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right banner_arrow"></i>',
        dots: true,
        dotsClass: 'banner_dots',
        slidesToShow: 2,
    });
}); 