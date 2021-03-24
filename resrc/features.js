$(document).ready(function(){
    $('.vacancy-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        centerMode: true,
        centerPadding: '120px',
        variableWidth: true
    });
});


$(document).ready(function(){
    $('.reviews-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '245px',
        variableWidth: true
    });
});