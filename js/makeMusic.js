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
$("div.y_total span:nth-of-type(2)").on('click',function(){
   window.location.href='musicAll.html';
});
$("div.y_header div:nth-of-type(1) span").on('click',function(){
    window.location.href='homePage.html';
});
