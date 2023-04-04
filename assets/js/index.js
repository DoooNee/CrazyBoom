function showTrailer() {
    $('#Modalbanner').modal('toggle');
}


function popupCommingSoon()
{
	show_result({ title: "Download link will be updated soon", msg: '' });return false;


}

$('.slider-nav').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true,
	prevArrow:"<img class='slick-prev slick-arrow btn-dieuhuong' src='/assets/img/mobile/btn-prev.png'>",
    nextArrow:"<img class='slick-next slick-arrow btn-dieuhuong' src='/assets/img/mobile/btn-next-off.png'>"
});

$('.slider-for').slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});

$('a[data-slide]').click(function (e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.slider-nav').slick('slickGoTo', slideno - 1);
});


///////

$('.slider-banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
	prevArrow:"<img class='slick-prev slick-arrow btn-dieuhuong' src='/assets/img/mobile/btn-prev.png'>",
    nextArrow:"<img class='slick-next slick-arrow btn-dieuhuong' src='/assets/img/mobile/btn-next-off.png'>"
  
});


// MOBILE

$('.character-mb-item').slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
    asNavFor: '.slider-for-mb',
	prevArrow:"<img class='slick-prev slick-arrow btn-dieuhuong' src='/assets/img/mobile/btn-prev.png'>",
    nextArrow:"<img class='slick-next slick-arrow btn-dieuhuong' src='/assets/img/mobile/btn-next-off.png'>"

});


$('.slider-for-mb').slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.character-mb-item'
});


//function Hien thi thong bao
function show_result(response, callback) {
    var title_choose, title_arr;
    title_arr = ['Lỗi !', 'Chúc mừng !', 'Thông báo', 'Thông báo !'];

    title_choose = (typeof response.title == "undefined" ? title_arr[response.status] : response.title);
    let className = '', text = 'Ok', btn_ok_visible = true;

    if (response.status == 1) {
        // className='vq_notice';
        // title_choose='';
    } else {
        text = 'Ok';
        btn_ok_visible = true;
    }
    setTimeout(function () {
        var div = document.createElement("div");
        div.innerHTML = response.msg + "<a href='javascript:;' onclick='close_swal()' class=' close_popup'></a>";
        swal({
            title: title_choose,
            content: div,
            className: className,
            buttons: {
                confirm: {
                    text: text,//Đăng nhập
                    value: "confirm",
                    visible: btn_ok_visible,
                    className: "btn_ok",
                    closeModal: true
                }
            }
        }).then((willDelete) => {
            if (typeof response.reload != 'undefined') {
                //Lam moi lại trang
                console.log("ok reload");
                location.reload();
            }

            if (typeof response.redirect !== 'undefined') {
                //Chuyen huong trang
                console.log("ok redirect");
                window.location.href = response.redirect;
            }
            if (typeof callback !== 'undefined') {
                //Callback function other
                console.log("ok callback");

                callback();
                return;
            }
        });
    }, 200);
}




// tracking download
function tracking_download(type) {
    $.ajax({
        url: 'backend/tracking_download.php',
        type: 'POST',
        data: {type:type},
        success: function (data) {
            console.log(data);
           
            console.log(type);
            if(type == 'pc'){
              console.log(type);
              //window.location.href = "https://drive.google.com/file/d/1iPihKEssv6g89jiz-mPDJN3j4HGWjK-i/view?usp=sharing";
              //window.open("https://ninja.vngates.com/crazyboom/CrazyBoomPC.exe");
              window.location.href = 'https://ninja.vngates.com/crazyboom/CrazyBoomPC.exe';
            }
            if(type == 'android'){
              console.log(type);
              //window.open("https://ninja.vngates.com/crazyboom/CrazyBoom_AT.apk");
              window.location.href = 'https://ninja.vngates.com/crazyboom/CrazyBoom_AT.apk';
            }
        }
    });
}