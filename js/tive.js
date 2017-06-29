$(function(){
    //移动端适应
    var bodyWith = document.documentElement.clientWidth;
    var fonsize = parseInt(bodyWith / 640 * 100) + "px";
    $("html,body").css({
        "fontSize":fonsize
    });
//  console.log($("body").css("fontSize"));
    //当窗口大小发生改变的时候改变字体大小
    $(window).resize(function(e){
        var bodyWith = document.documentElement.clientWidth;
        var fonsize = parseInt(bodyWith / 640 * 100) + "px";
        $("html,body").css({
            "fontSize":fonsize
        })
    });
});