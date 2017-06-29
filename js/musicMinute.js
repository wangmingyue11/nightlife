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
//解析传的参数
GetQueryString = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
};
$.ajax({
    type:"GET",
    url:"php/details.php",
    data:{ID:GetQueryString("oId")},
    dataType:"json",
    success:function(data){
        for(var i= 0;i<data.length;i++){
            console.log("正在建设中!....");
        }

    },
    error:function(error){
        console.log(error);
    }
})
$(".y_backtrack").on('click',function(){
    window.location.href = "musicAll.html";
});
$(".y_datum").on('click',function(){
    window.location.href = "musicPurchase.html";
});
$(".y_appraiseAll").on('click',function(){
    window.location.href = "musicWhole.html";
});
