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

/**
 * Created by lanou3g on 17/6/14.
 */
//验证手机号
var reg = /^1[35874]\d{9}$/;
function checkPhone() {
    if ($(".y_putPhone").val() == "") {
        return $(".y_outputPhone").html("您输入的内容不能为空");
    }
    if (!reg.test($(".y_putPhone").val())) {
        return $(".y_outputPhone").html("请输入正确的手机号");
    }
}
//验证密码
$initPassword = 000000;
function checkPassword() {
    if ($(".y_putPassword").val() == "" || $(".y_CheckPsd").val() == "") {
        return $(".y_outputPassword").html("您输入的内容不能为空");
    }
    if ($(".y_putPassword").val() != $(".y_CheckPsd").val()) {
        return $(".y_outputCheckPsd").html("您两次输入的密码不一致");
    }
    // if($(".y_putPassword").val()!=$initPassword){
    //     return $(".y_outputPassword").html("您输入的密码不正确");
    // }

}
//验证码
function checkCode() {
    if ($("#y_putCheckCode").val() == "") {
        return $(".y_loginOutputPsd").html("您输入的内容不能为空");
    }

}
//随机函数
function randNum(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}
//产生验证码
function createCode() {
    var codeArr = [];
    for (var i = 0; i < 2; i++) {
        codeArr.push(randNum(0, 100));
    }
    return codeArr;
}

var isClick=false;
//点击获取验证码
$sum=0;
$("#y_getCheckCode").on("click", function (){
    isClick=true;
    $codeArr = createCode();
    $("#y_getCheckCode").html($codeArr[0] + '+' + $codeArr[1] + '=?');
    $add = $codeArr[0] + $codeArr[1];
    $sum=$add;
});
//验证验证码
function checkCode(){
    if(isClick==false){
        $(".y_loginOutputPsd").html("请点击获取验证码");
    }else{
        if($("#y_putCheckCode").val()!= $sum){
            $(".y_loginOutputPsd").html("您输入的验证码不正确");
        }else if($("#y_putCheckCode").val() == '') {
            $(".y_loginOutputPsd").html("您输入的内容为空");
        }
    }

}
console.log(isClick);
//注册页面点击注册跳转的页面
$("#y_register").on("click", function () {
    checkCode();
    checkPhone();
    checkPassword();

    if($(".y_outputPhone").html()==""&&$(".y_loginOutputPsd").html()==""&&$(".y_outputPassword").html()==""&&$(".y_outputCheckPsd").html()==""){
        // window.location.href="./register.html";
    }
});
//点击忘记密码跳转的页面
$(".y_forgetPassward").on("click", function () {
    window.location.href = "./findPassword.html";
});
//点击登录跳转的页面
//点击立即注册，跳转的页面
$(".y_nowRegister").on("click", function () {
    window.location.href = "./login.html";
});
//点击返回到主注册页面
$("#y_backmain").on("click",function () {
    window.location.href = "./login.html";
});
//在选择城市页面，点击选择的时候，传递参数
$("#y_choose").on("click",function () {
    $str=$("#y_choose").text();
    $("#y_chosedCity").val($str);
});
//添加选择的城市时，点击返回到添加地址的页面
$("#y_backAddress").on("click",function () {
    window.location.href="./addAddress.html";
});