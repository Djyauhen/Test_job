$(document).ready(function() {

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('.slides').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        centerPadding: '30px',
        prevArrow: $('#button-prev'),
        nextArrow: $('#button-next')
    });

    const closeMenu = $('#closeMenu');
    const smallMenu = $('#smallMenu');
    const burger = $('#burger');

    closeMenu.click(function () {
        smallMenu.css({
            display: 'none'
        })
    })

    burger.click(function () {
        smallMenu.css({
            display: 'flex'
        })
    })


})