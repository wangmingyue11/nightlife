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
//点菜菜单切换
$(".y_order-dishes ul li").on("click",function () {
    // alert($(this).text());
    var $text = $(this).text();
    $(".y_foods").text($text);
});

//好评中评差评切换
$(".y_fours-appraise li").on("click",function () {
    // alert($(this).text());
    var $text = $(this).text();
    $(".y_case-by-case").text($text);
});
// 主菜单切换
var content = document.getElementsByClassName("y_order-dishes");
var menu = document.getElementsByClassName("y_boss-menu");
for(i = 0; i < menu.length; i++){
    // console.log(i);
    menu[i].index = i;
    menu[i].onclick = function(){
        // console.log(this);
        for(k = 0; k < content.length; k++){
            content[k].style.display = "none";
        }
        content[this.index].style.display = "block";
    }
}

// 菜单一购物车点击
$(".y_footer img").on("click",function () {

    $(".y_footer").css({
        height : "2rem",
        transition : "0.7s"
    });
    $(".y_backfround").css({
        height : "100%",
        background : "black",
        opacity : "0.5"
    });
    $(".y_footer-val").css({
        display : "none"
    });
    $(".y_remove").css({
        display : "block"
    });
    $(".y_hide").css({
        display : "block"
    });

});
//点击界面返回
$(".y_backfround").on("click",function () {

    $(".y_footer").css({
        height : "0.6rem",
        transition :"1s"
    });
    $(".y_backfround").css({
        height : "0",
        background : "translation"
    });
    $(".y_footer-val").css({
        display : "block"
    });
    $(".y_remove").css({
        display : "none"
    });
    $(".y_hide").css({
        display : "none"
    });
    $(".y_money").css({
        display : "none"
    })
});

//点菜 添加价格
var sum = 0;
var l = 0;
$(".y_onlyShow button").each(function(i,item) {
    item.onclick = function () {
        var j = 0;
        j++;
        l++;
        console.log(j);
        $val = parseInt($(this).parent().find($(".y_money")).find($("p")).html());
        sum+=j*$val;
        $(".y_footer-val").text("¥"+sum);
        $(".y_quantity").text(l).css({
            display : "block"
        });
        var number = $(".y_money").find("p").text();
        $(".y_hide").find("h3").text($val+"¥");

        //付款按钮改变
        var price = parseInt($(".y_price>p:first-of-type").text().slice(3));
        if(sum - price >= 0){
            $(".y_settle").text("付款:¥"+sum);
        }else {
            $(".y_settle").text("还差¥"+(price-sum));
        }
    };
});
//跳转资质
$(".y_content-three").on("click",function () {
   window.location.href = "Aptitudes.html";
});


//获取url参数的函数方法
function GetQueryString(name){
    /*定义正则，用于获取相应参数*/
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     /*字符串截取，获取匹配参数值*/
     var r = window.location.search.substr(1).match(reg);
     /*但会参数值*/
     if(r!=null)return  decodeURI(r[2]); return null;
}


$.ajax({
    type:"GET",
    url:"../php/merchantListDetail.php",
    data:{classId:GetQueryString("classid")},
    dataType: "json",
    success:function(data){
        console.log(data);
        $.each(data,function(i){  
            var $box = $("<div class='y_smallheader'>");
            $box.html("<a href='homepage.html'><img src='../img/merchant7.png'></a><img src='../img/" + data[i].picture + "'><h2>" + data[i].name + "</h2><div class='y_price'><p>" + data[i].sendout + "</p><p>同城" + data[i].thesamecity + "</p><p>" + data[i].time + "分钟送达</p></div><div class='y_discount'><img src='../img/merchant6.png'><p>" + data[i].discount + "</p></div>");
            $(".y_header").append($box);      
        });         
    }
});






