$('.slider-nav').slick({
centerMode: true,
slidesToShow: 3,
slidesToScroll: 1,
asNavFor: '.slider-for',
dots: true,
focusOnSelect: true
});

$('.slider-for').slick({
centerMode: true,
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
fade: true,
asNavFor: '.slider-nav'
});

$('a[data-slide]').click(function(e) {
e.preventDefault();
var slideno = $(this).data('slide');
$('.slider-nav').slick('slickGoTo', slideno - 1);
});


///////

$('.slider-banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true
  });