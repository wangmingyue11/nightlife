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

//菜单轮播
var mySwiper = new Swiper('.swiper-container',{
    pagination : '.swiper-pagination'

});

//点击去哪吃
$(".y_where-to-go").on("click",function () {
    window.location.href="WhereToEat.html";
});
//点击菜系
$(".y_style-of-cooking").on("click",function () {
   window.location.href="styleOfCooking.html";
});
//点击推荐
$(".y_recommend").on("click",function () {
    window.location.href="recommend.html";
});

//点击店铺跳转店铺详情

// $(".y_case-by-case").on("click",function () {
//     window.location.href = "merchantList.html";
// });

$.ajax({
        type:"GET",
        url:"http://localhost/nightlife/php/nightLife.php",
        dataType: "json",
        success:function(data){
            console.log(data);
            $.each(data,function(i){
                console.log(data[i]);
                var $box = $("<div class='y_case-by-case'>");
                $box.html("<div class='y_small-case-by-case' classid=" + data[i].classid + "><img src='../img/" + data[i].picture + "'/><h2>" + data[i].name + "</h2><div class='y_star'><img src='../img/star.png'><h3>月售" + data[i].sell + "单</h3></div><div class='y_cost'><p>" + data[i].sendout + "</p><p>同城" + data[i].thesamecity + "</p><p>" + data[i].time + "分钟送达</p></div><div class='y_SALE'><img src='../img/subtract.png'><p>" +  data[i].discount  + "</p></div><div class='y_SALE'><img src='../img/numberone.png'><p>" + data[i].firstpurchase + "</p></div></div>");
                $(".y_contentbox").append($box);
                $(".y_small-case-by-case").on("click",function(){
                    console.log($(this).attr("classid"));
                    window.location.href=("merchantList.html?classid=" + $(this).attr("classid"));  

                });
                
            });
           
        }
});




