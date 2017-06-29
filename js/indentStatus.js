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
var flag = true;
$("div.y_footer div p").on('click',function(){
    flag = false;
    $("ul.y_content>li:nth-of-type(8)").css({"display":"block"});
    $("ul.y_content>li:nth-of-type(7)").css({"display":"block"});
    $("div.y_footer>div").css({"display":"none"});
    $("div.y_footer>img").attr("src","img/sesst_03.png");

});
$("ul.y_content>li:nth-of-type(1) span:nth-of-type(2)").on('click',function(){
    $("ul.y_content1").css({"display":"block"});
    $("ul.y_content>li").css({"display":"none"});
    $("div.y_footer>div").css({"display":"none"});
    $("ul.y_content>li:first-of-type").css({"display":"block"});
    $("ul.y_content>li:nth-of-type(1)>div").css({"left":"3.55rem"});
    $("div.y_footer").css({"display":"none"});
});
$("ul.y_content>li:nth-of-type(1) span:nth-of-type(1)").on('click',function(){
    $("ul.y_content1").css({"display":"none"});
    $("ul.y_content>li").css({"display":"block"});
    $("div.y_footer>div").css({"display":"block"});
    $("ul.y_content>li:first-of-type").css({"display":"block"});
    $("ul.y_content>li:nth-of-type(1)>div").css({"left":"1.05rem"});
    $("div.y_footer").css({"display":"none"});
    if(flag == true){
        $("div.y_footer").show();
        $("div.y_footer>div").show();
        $("div.y_footer>div").css({"display":"inline-block"});
        $("ul.y_content>li:nth-of-type(8)").hide();
        $("ul.y_content>li:nth-of-type(7)").hide();
    }else{
        $("div.y_footer").show();
        $("div.y_footer>div").hide();
        $("div.y_footer>img").attr("src","img/sesst_03.png");
    }
});
