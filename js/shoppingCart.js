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
function addPend(){
    $("div.y_header div.y_compile span:nth-of-type(2)").html("完成");
    $(".y_long").css({"display":"none"});
    $("div.y_content ul li:nth-of-type(4)").css({"display":"none"});
    $("div.y_content ul li:nth-of-type(7)").css({"display":"block"});
    $("ul.y_closing li:nth-of-type(3)").css({"display":"none"});
    $("ul.y_closing li:nth-of-type(4)").css({"display":"none"});
    $("ul.y_closing li:nth-of-type(5)").css({"display":"block"});
    $("ul.y_closing li:nth-of-type(6)").css({"display":"block"});
    $("img.box").attr("src","img/duihao_01.png");
    $(".oInput").attr('checked', 'checked');
}
//下面代码实现编辑购物车
$("div.y_header div.y_compile span:nth-of-type(2)").on("click",function(){
    addPend();
});
$("ul.y_closing li:nth-of-type(1) input.oInput").on('click',function(){
    addPend();
    console.log($(".oInput").attr('type'));
    if($(".oInput").is(":checked")){
        $("img.box").attr("src","img/duihao_01.png");
    }else{
        $("img.box").attr("src","img/duihao_02.png");
        $(".y_long").css({"display":"block"});
        $("div.y_content ul li:nth-of-type(4)").css({"display":"blcok"});
        $("div.y_content ul li:nth-of-type(7)").css({"display":"none"});
        $("ul.y_closing li:nth-of-type(3)").css({"display":"block"});
        $("ul.y_closing li:nth-of-type(4)").css({"display":"block"});
        $("ul.y_closing li:nth-of-type(5)").css({"display":"none"});
        $("ul.y_closing li:nth-of-type(6)").css({"display":"none"});
    }
});
// $("ul.y_closing li:nth-of-type(1)").on('click',function(){
//     if($("img.box").attr("src","img/duihao_02.png")){
//         $("img.box").attr("src","img/duihao_01.png");
//     }else if($("img.box").attr("src","img/duihao_01.png")){
//         $("img.box").attr("src","img/duihao_02.png");
//     }
//     if($("img.checkAll").attr("src","img/duihao_02.png")){
//         $("img.checkAll").attr("src","img/duihao_01.png");
//     }else if($("img.checkAll").attr("src","img/duihao_01.png")){
//         $("img.checkAll").attr("src","img/duihao_02.png");
//     }
// });
$("div.y_content ul li:nth-of-type(7) div:nth-of-type(1)").on('click',function(){
    $i = $("div.y_content ul li:nth-of-type(7) div:nth-of-type(2)").html();
    if(parseInt($i)>0){
        $tep =$i-=1;
        $("div.y_content ul li:nth-of-type(7) div:nth-of-type(2)").html(parseInt($tep));
    }
});
$("div.y_content ul li:nth-of-type(7) div:nth-of-type(3)").on('click',function(){
    $i = $("div.y_content ul li:nth-of-type(7) div:nth-of-type(2)").html();
    $i1=parseInt($i);
    $tep =$i1+=1;
    $("div.y_content ul li:nth-of-type(7) div:nth-of-type(2)").html(parseInt($tep));
});
$("ul.y_closing li:nth-of-type(5)").on("click",function(){
    if($("img.box").attr("src","img/duihao_01.png")){
        $("div.y_content").remove();
    }
});
$("ul.y_closing li:nth-of-type(6)").on('click',function(){
    if($("img.checkAll").attr("src","img/duihao_01.png")&&$("img.box").attr("src","img/duihao_01.png")){
        $("div.y_content").remove();
    }
});
