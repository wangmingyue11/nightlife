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
var i=1;
function addData() {
    $data = $("ul.y_content li:nth-of-type(1) div span:nth-of-type(2)").html();
    $data = parseInt($data);
    $tep = "¥"+i*$data;
    $("ul.y_content li:nth-of-type(3) span:nth-of-type(2)").html($tep);
}
$("ul.y_content li:nth-of-type(2) div div span:nth-of-type(3)").on('click',function(){
    i+=1;
    $("ul.y_content li:nth-of-type(2) div div span:nth-of-type(2)").html(i);
    addData();
});
$("ul.y_content li:nth-of-type(2) div div span:nth-of-type(1)").on('click',function(){
    if(i>0){
        i-=1;
        $("ul.y_content li:nth-of-type(2) div div span:nth-of-type(2)").html(i);
        addData();
    }
});
$("div.y_header div:nth-of-type(1) span").on('click',function(){
    window.location.href = "musicPurchase.html";
});
