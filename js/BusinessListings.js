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


// 点击七个菜单切换
var content = document.getElementsByClassName("y_seven-menu");
var menu = document.getElementsByClassName("y_hide-menu-li");
change(content,menu);

// //点击四个大菜单
var content1 = document.getElementsByClassName("y_hide-menu");
var menu1 = document.getElementsByClassName("y_four-Menu");
change(content1,menu1);


//菜单切换
function change(one,two) {
    for(i = 0; i < two.length; i++){
        // console.log(i);
        two[i].index = i;
        two[i].onclick = function(){
            // console.log(this);
            for(k = 0; k < one.length; k++){
                one[k].style.display = "none";
            }
            one[this.index].style.display = "block";
        }
    }
}

//点击屏幕菜单消失
$(".y_foodsMenu").on("click",function () {
   var i = $(".y_foodsMenu").index(this);
    console.log(i);
    $(".y_foodsMenu").eq(i).find("div").find(".y_arrows ").css({
        "display" : "none"
    });
    $(".y_foodsMenu").eq(i).find("div").find(".y_green-arrows").css({
        "display" : "block"
    });
    $(".y_foodsMenu").eq(i).siblings().find("div").find(".y_arrows").css({
        display : "block"
    });
    $(".y_foodsMenu").eq(i).siblings().find("div").find(".y_green-arrows").css({
        display : "none"
    });
    $(".y_background").css({
        height : "100%"
    })
});
$(".y_background").on("click",function () {
    $(".y_background").css({
        height : "0"
    });
    $(".y_hide-menu").css({
        display : "none"
    });
    $(".y_four-Menu").find(".y_arrows").css({
        display : "block"
    });
    $(".y_four-Menu").find(".y_green-arrows").css({
        display : "none"
    });
});
