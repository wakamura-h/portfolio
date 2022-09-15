
// フォント読み込みエラー対策
setTimeout(function () {
    if (document.getElementsByTagName("html")[0].classList.contains('wf-active') != true) {
        document.getElementsByTagName("html")[0].classList.add('loading-delay');
    }
}, 3000);

// ハンバーガーメニュー
$(function () {
    $('.sp_btn,.sp_nav li').click(function () {
        $('.sp_nav').fadeToggle();
        $('.sp_btn').toggleClass('open');
        $('.sp_menu').fadeToggle();
    });
});


// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {
    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fadeUpTrigger').each(function () { //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');
            $('.before').addClass('thumbnail');
            $('.before2').addClass('thumbnail2');
            // 画面内に入ったらfadeInというクラス名を追記
        }
    });
}
$(window).scroll(function () {
    fadeAnime();
});

//アコーディオンメニュー
$('.accordion_switch').on('click', function () {
    $(this).toggleClass('open');
    $(this).prev('.accordion_contents').slideToggle();
    $('.accordion_switch').not($(this)).siblings('.accordion_contents').slideUp();
});

// title文字アニメーション
function EachTextAnimeControl() {
    $('.title').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("appeartext");
        } else {
            $(this).removeClass("appeartext");
        }
    });
}
$(window).on('load', function () {


    //グローバルメニューの文字変更
    var element = $(".title");
    element.each(function () {
        var text = $(this).text();
        var textbox = "";
        text.split('').forEach(function (t, i) {
            if (t !== " ") {
                if (i < 10) {
                    textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
                } else {
                    var n = i / 10;
                    textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
                }
            } else { textbox += t; }
        });
        $(this).html(textbox);
    });
    EachTextAnimeControl();
});


//sp work一覧　slick
$('.slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerPadding: '0px',
});


// 画面をスクロールをしたら動く
function fadeAnime() {
    $('.fadeUpTrigger').each(function () {
        var elemPos = $(this).offset().top + 300;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');
        }
    });
}
$(window).scroll(function () {
    fadeAnime();
});