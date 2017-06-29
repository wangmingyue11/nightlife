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
$("div.y_header div:nth-of-type(1)").on('click',function(){
    window.location.href = "musicMinute.html";
});
$("ul.y_content li:nth-of-type(1) span:nth-of-type(3)").on('click',function(){
    window.location.href = "musicIndent.html";
});