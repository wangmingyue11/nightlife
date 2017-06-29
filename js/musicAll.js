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
    url:"http://localhost/nightlife/php/ploid.php",
    dataType:"json",
    success:function(data){
        for(var i=0;i<data.length;i++){
            $ul = $("<ul class='y_content' Id='"+data[i].id+"'></ul>");
            $ul.html('<li><img src="img/'+data[i].images+'"></li><li><p>'+data[i].names+'</p><div><img src="img/'+data[i].img+'"><img src="img/'+data[i].img+'"><img src="img/'+data[i].img+'"><img src="img/'+data[i].img+'"><img src="img/'+data[i].img+'"><span>'+data[i].grade+'</span></div><div><span>'+data[i].prices+'</span><span>起</span><span>'+data[i].carolTime+'</span></div></li><li><span>领取优惠券</span><img src="img/KTV_04.png"><p>'+data[i].location+'</p></li>');
            $(".container").append($ul);
            $(".y_content").on('click',function(){
                window.location.href="musicMinute.html?oId="+$(this).attr("Id");
            });
        }
    }
});
$("div.y_header div:nth-of-type(1)").on('click',function(){
    window.location.href="makeMusic.html";
});
$(".y_content").on('click',function(){
    window.location.href="musicMinute.html";
});