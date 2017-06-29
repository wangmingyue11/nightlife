$(function(){
    // 收货地址点击显示隐藏
    $("#edit").click(function(){
        if($(".show").css("display") == "none"){
            $(".show").slideDown();
        }else{
            $(".show").slideUp();
        }
    });
    // 收货地址点击显示隐藏
    $("#delete").click(function(){
        if($(".shows").css("display") == "none"){
            $(".shows").slideDown();
        }else{
            $(".shows").slideUp();
        }
    });

    // 分享点击显示隐藏
    $("#share").click(function(){
        if($(".share").css("display") == "none"){
            $(".share").fadeIn();
        }else{
            $(".share").fadeOut();
        }
    });

    // 积分商城点击进兑换记录
    $("#shop").click(function(){
        window.location.href = "record.html";
    });

    // 代金券切换
    $(".tab li").click(function(){
        $(this).addClass("tab_on").siblings().removeClass("tab_on");
        $(".tab_content li").eq($(".tab li").index(this)).addClass("on").siblings().removeClass("on");
    });

    // 订单切换
    $(".myorder_tab li").click(function(){
        $(this).addClass("myorder_tab_on").siblings().removeClass("myorder_tab_on");
        $(".myorder_content").eq($(".myorder_tab li").index(this)).addClass("myorder_content_on").siblings().removeClass("myorder_content_on");
    })
    
    // 关于我们
    $(".set li:nth-child(2)").click(function(){
    		window.location.href = "about.html";
    })
    
    // 获取姓名
    $(".editaddress").click(function(){
    		var username = document.getElementById("address_name");
    		var username_input = username.value;
    		mateusername(username_input);
    		
    		var usertel = document.getElementById("address_tel");
    		var usertel_input = usertel.value;
    		matetel(usertel_input);
    })
    // 验证姓名
    function mateusername(username){
    		if(username.length < 2 || username.length > 4){
    			alert("请输入正确的姓名");
    			return false;
    		}
    }
    
    // 验证手机号码
    function matetel(usertel){
    		var regStr = /^1[3,4,5,7,8]\d{9}$/;
    		var reg = new RegExp(regStr);
    		if(reg.test(usertel)){
    			return true;
    		}else{
    			alert("请输入正确的手机号");
    			return false;
    		}
    }
    
    // 新增收货地址
    $("#newadd").click(function(){
    		window.location.href = "newaddress.html";
    })
    
    // 积分商城兑换
    $(".list1").click(function(){
    		alert("事件");
    })
    
    // 进入兑换记录
    $("#shop").click(function(){
    		window.location.href = "record.html";
    })
    
    // 判断个人信息
    // 获取姓名/昵称／手机
    $(".perbtn").click(function(){
    		// 姓名
    		var pername = document.getElementById("per_name");
    		var pername_input = pername.value;
		permate(pername_input);
		
		// 昵称
		var nickname = document.getElementById("nickname");
		var nickname_input = nickname.value;
		nick(nickname_input);
		
		// 手机号
		var pertel = document.getElementById("per_tel");
		var pertel_input = pertel.value;
		matepertel(pertel_input);
    })
    
    // 验证姓名
    function permate(pername){
    		if(pername.length < 2 || pername.length > 4){
    			alert("请输入正确的姓名");
    			return false;
    		}
    }
    // 验证昵称
    function nick(nickname){
    		if(nickname.length < 5 || nickname.length > 16){
    			alert("用户名长度不对，应该5到16个字符");
    			return false;
    		}
    }
    // 验证手机号
    function matepertel(pertel){
    		var regStr = /^1[3,4,5,7,8]\d{9}$/;
    		var reg = new RegExp(regStr);
    		if(reg.test(pertel)){
    			return true;
    		}else{
    			alert("请输入正确的手机号");
    			return false;
    		} 
    }
    
    // 点击选择地址
    $(".chooseadd").click(function(){
    		window.location.href = "select.html";
    });

    // 创建我的订单
    $li = $("<li>");
    $li.each(function(i){
        console.log(i);
        $li.html("<h2>糖醋鲤鱼（总部基地店） ><span class='r pay'>已评价</span></h2><img src='img/coll_pic.png' alt='' class='l'><p>¥9.9</p><p>昨天 16:10</p><p>由<span>糖醋鲤鱼外卖（总部基地店）</span>提供外卖和配送服务</p>");
        $("#coll").append($li);
    });

    // 创建我的积分
    var html = "<p><span>¥</span>120</p>";
    $("#option").before(html);

    // 我的代金券
    $li = $("<li class='on'>");
    $li.html("<img src='img/myvoucher_pic.png' alt=''>");
    $(".tab_content").append($li);

    // 创建商品收藏
    $li = $("<li>");
    $li.html("<h2>糖醋鲤鱼（总部基地店） ><span class='r pay'>已评价</span></h2><img src='img/coll_pic.png' alt='' class='l'><p>¥9.9</p><p>昨天 16:10</p><p>由<span>糖醋鲤鱼外卖（总部基地店）</span>提供外卖和配送服务</p>");
    $("#coll2").append($li);

    // 夜生活tab切换
    $(".night ul li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        console.log($(this));
        $(".night_content").eq($(".night ul li").index(this)).addClass("display").siblings().removeClass("display");
    })
});