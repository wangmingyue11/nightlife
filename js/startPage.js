$(document).ready(function () {
//移动端适应
    var bodyWith = document.documentElement.clientWidth;
    var fonsize = parseInt(bodyWith / 640 * 100) + "px";
    $("html,body").css({
        "fontSize": fonsize
    });
    console.log($("body").css("fontSize"));
//当窗口大小发生改变的时候改变字体大小
    $(window).resize(function (e) {
        var bodyWith = document.documentElement.clientWidth;
        var fonsize = parseInt(bodyWith / 640 * 100) + "px";
        $("html,body").css({
            "fontSize": fonsize
        })
    })
});

//轮播图
var mySwiper = new Swiper('.swiper-container',{
        pagination : '.swiper-pagination'
//pagination : '#swiper-pagination1',
    });

//图二添加动画效果
$("body").on("touchend", function(e) {
    e.preventDefault();
    $(".y_light1").addClass("animated fadeInDown");
    $(".y_light2").addClass("animated fadeInDown");
    $(".y_light3").addClass("animated fadeInLeft");
    $(".y_light4").addClass("animated fadeInRight");
    $(".y_hotel").addClass("animated zoomIn");
    $(".y_car").addClass("animated zoomIn");
    $(".y_strong").addClass("animated zoomIn");
    $(".y_watch").addClass("animated zoomIn");
    $(".y_hand").addClass("animated fadeInRight");
    $(".y_title").addClass("animated jello");
});

$("#dear p").on("click",function () {
   console.log("sda");
});



