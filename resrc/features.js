$(document).ready(function(){
    if (window.innerWidth <= 479){
        $('.vacancy-slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            centerMode: true,
            centerPadding: '0px',
            variableWidth: true
        });
    }
    else if (window.innerWidth >= 500){
        $('.vacancy-slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            centerMode: true,
            centerPadding: '120px',
            variableWidth: true
        });
    }
});


$(document).ready(function(){
    if (window.innerWidth <= 992){
        $('.reviews-slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '0px',
            variableWidth: true
        });
    }
    else if (window.innerWidth >= 992){
        $('.reviews-slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            centerMode: true,
            centerPadding: '245px',
            variableWidth: true
        });
    }
});

$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

