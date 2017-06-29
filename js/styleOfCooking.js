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
//菜单切换

// $("li").on("click",function () {
//     var $content = $(".y_food div");
//     var $index = $(this).index();
//     alert($index);
//
// });
$("li").on("click",function () {
    // alert($(this).text());
    var $text = $(this).text();
    $(".y_food div p").text($text);
});


