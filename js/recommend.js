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

$.ajax({
    type:"GET",
    url:"http://localhost/nightlife/php/recommend.php",
    dataType:"json",
    success:function(data){
        console.log(data);
        $.each(data,function(i){
            // console.log(data[i].id);
            var $box = $("<div class='y_goodsShow'>");
            $box.html("<div class='y_onlyShow' classid=" + data[i].classid + "> <img src='../img/" + data[i].picture + "'><h3>" + data[i].name + "</h3><div class='y_particulars'><p>" + data[i].effect + "</p></div><div class='y_price'><div class='y_money'><span>" + data[i].price + "</span><h4>元</h4></div><p>" + data[i].grade + "(" + data[i].people + ")</p></div></div>");
            $(".y_big_Show").append($box);
             $(".y_onlyShow").on("click",function(){
                console.log($(this).attr("classid"));
                window.location.href=("merchantList.html?classid=" + $(this).attr("classid"));  

            });
        });
    }
});



