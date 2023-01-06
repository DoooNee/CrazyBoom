//------- responsive mobile
var jsVer = 15;
var phoneWidth = parseInt(window.screen.width);
console.log(phoneWidth);
var phoneScale = phoneWidth / 640;

if (phoneWidth < 768) {
    var ua = navigator.userAgent;
    if (/Android (\d+\.\d+)/.test(ua)) {
        var version = parseFloat(RegExp.$1);
        // andriod 2.3
        if (version > 2.3) {
            document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
        } else {
            document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
        }

    } else {
        console.log(phoneWidth);
        document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
    }

} else {
    document.write('<meta name="viewport" content="width=768, minimum-scale =1, maximum-scale = 1, target-densitydpi=device-dpi">');
}







// $(document).ready(function(){

//     $('.slider').slick({
//         infinite: true, 
//         nextArrow: "<img class='next-img' src='/asset/img/caret-right-solid.svg' >",
//         prevArrow: "<img class='next-img' src='/asset/img/caret-left-solid.svg' >",
//       });   
// });



//  $('.slider-for').slick({
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    arrows: true,
//    fade: true,
//    dots: true,
//  });



$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplaySpeed :3000,
        autoplay:true,
    });


    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        autoplaySpeed :3000,
        autoplay:true,
        nextArrow: "<img class='next-img' src='/asset/img/btn-next-off.png' >",
        prevArrow: "<img class='next-img' src='/asset/img/btn-prev.png' >",
    });

    $('.demo-description-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: "<img class='next-img' src='/asset/img/caret-right-solid.svg' >",
        prevArrow: "<img class='next-img' src='/asset/img/caret-left-solid.svg' >",
    });


})



















