/**
 * Created by lanou3g on 17/6/16.
 */
//点击完成的时候出现第二页面
$(".y_define").on("click",function () {
    $(".y_content2").show();
    $(".y_content1").css({
        "overflow":"hidden"
    })
    $(".y_choseWay,.y_sendTime,.y_payStyle,.y_payPsd").hide();
    $(".y_payDetails").show();
});
//点击确认中的返回的时候跳转页面
$("#y_default").on("click",function () {
    $(".y_payDetails,.y_payStyle,.y_sendTime,.y_choseWay").hide();
    window.location.href="Orderdetail.html";
});
//
$("#y_default4").on("click",function () {
    //console.log(1);
    $("#y_default4").hide();
    $(".y_content2").show();
    $(".y_content1").css({
        "overflow":"hidden"
    });
    $(".y_payStyle,.y_sendTime,.y_payPsd").hide();
    $(".y_payDetails").show();
});
//点击确认付款的时候出现输入密码
$(".y_payFirm").on("click",function () {
    $(".y_payDetails,.y_payStyle,.y_sendTime").hide();
    $(".y_payPsd").show();
});
//点击跳转的订单详情的页面的时候，跳转到第一页面
$("#y_beBack").on("click",function () {
    window.location.href="firmOrder2.html"
})
$(".y_default1").on("click",function () {
    $(".y_content2,.y_choseWay").hide();
});
/************************************/
//选择支付方式
$(".y_payOnline>button").on("click",function () {
    $(".y_content2").show();
    $(".y_content1").css({
        "overflow":"hidden"
    });
    $(".y_sendTime").hide();
    $(".y_payStyle").show();
});
var isClicked=false;
$(".y_chosedAli>button.complete").on("click",function clickTop() {
    isClicked=true;
    $(".y_chosedAli>button.complete svg").css("fill","#09765b");
    $(".y_chosedAli>button.complete svg .fill").css("fill","white");
    return isClicked;
})
$(".y_chosedWechat>button.complete").on("click",function click() {
    isClicked=true;
    $(".y_chosedWechat>button.complete svg").css("fill","#09765b");
    $(".y_chosedWechat>button.complete svg .fill").css("fill","white");
    return isClicked
});
$(".y_hasChosed").on("click",function () {
    if(isClicked==true){
        $(".y_content2,.y_payOff").hide();
        $str=$(".y_aliInfo>span").html()
        $(".y_name").html($str);
        $(".y_name").css("float","right");
    }
});
/*************************************/
//选择支付方式
$("#y_cho1").on("click",function () {
    if($(".y_aliBtn").attr("fill","#09765b")){
        window.location.href="firmOrder2.html";
    }
});

/********************************************************/
//选择送达时间
$(".y_serviceTimeLeft").on("click",function () {
    $(".y_content2").show();
    $(".y_content1").hide();
    $(".y_payStyle,.y_payPsd,.y_payDetails").hide();
    $(".y_sendTime").show();
    //$(".y_sendTime").css("display","inline-block");
});
var nowDate=new Date();
var hour=nowDate.getHours();
var minutes=nowDate.getMinutes();
//var t=minutes.toLocaleString();
//console.log(t);
if(minutes<10){
    minutes="0"+minutes
};
var rs=hour+":"+minutes;
$("#y_Time>span").html(rs);
console.log(minutes+20);
var num=5;

for(var i=0;i<num;i++){
    $(".y_optionTime").append("<li><span></span><button class='y_btn'>&#10003</button></li>");
}
$(".y_optionTime>li>span").each(function(){
    console.log(1)
    if(minutes+20>=60){
        hour=hour+1;
        minutes=minutes+20-60;
        var newTime=hour+":"+minutes;
    }else{
        var newTime=hour+":"+(minutes+20);
    }
    minutes=minutes+20;
    $(this).html(newTime);
    return $(this).html(newTime);
});
//console.log($(".y_optionTime>li:nth-of-type(1)>span").html());
//console.log($(".y_btn"));
    $(".y_btn").on("click",function () {
        var i = $(".y_btn").index(this);
        //console.log(i);
        $(".y_btn").css({"color":"black"});
        $(".y_btn").eq(i).css("color","green");

        $chosed=$(this).prev().html();
        $(".y_serviceTimeLeft>div>span").html($chosed);
        $("#y_Time>span").html($chosed);
    });

$(".y_serviceTimeLeft>div>span").html(rs);


//返回第一页面
$(".y_default").on("click",function () {
    $(".y_content2").css({
        "display":"none"
    });
});
/*************************************************************/
//选择付款方式
$(".y_choseOne").on("click",function () {
    $(".y_choseWay").css("display","block");
    $(".y_payDetails").css("display","none");
});
//点击左箭头的时候返回支付页面

/***************************************************************/
//选择到店付款
$("#y_payChose").on("click",function () {
    $(".y_serviceTime").css("display","none");
    $(".y_remark").css({"height":"0.5rem","padding-top":"0rem"});
    $(".y_remarkContent").css("padding-top","0rem");
    $(".y_remarkTxt").css("line-height","0.5rem");
    $(".y_remarkRow").css({
        "margin-top":"0.15rem"
    });
    $(".y_deliveryFee,.y_special").css("display","none");
});
/*******************************************************/
// //添加银行卡
// $("#y_newCard").on("click",function () {
//     window.location.href="addCard.html"
// })
// //记录多少秒后重发
// $i=60;
// $timer=setInterval(function () {
//     $i--;
//     if($i>=0){
//         $(".y_sendCode").html("<span>"+$i+"</span>秒后重发");
//     }
//     if($i<0){
//         $(".y_sendCode").html("重发验证码").css('color',"green");
//     }
// },600);
// clearInterval($timer);
