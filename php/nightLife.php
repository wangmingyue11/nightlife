<?php 
		// $mysqli = new mysqli("localhost","root","123456","nightlife");
		// // 判断数据库是否连接成功
		// if ($mysqli->connect_errno) {
		// 	# 非0即为数据库连接失败
		// 	die($mysqli->connect_errno);
		// }else{
		// 	echo "恭喜你以上道!<hr>";
		// }
		// $sql = "INSERT INTO eat(classid,name,picture,price,sell,sendout,thesamecity,time,discount,firstpurchase,location,store,classify)VALUES('3','糖醋鲤鱼(邱梦琦店)','picture.png','20','500','起送价20元','5元','45','满25减500;满30减10 (在线支付专享)','不要钱 (在线支付专享)','西二旗','总店','川菜')";
		// $mysqli->query("set names utf8");
		// $result = $mysqli->query($sql);
		// if ($result) {
		// 	echo "插入成功";
		// }else{
		// 	echo "插入失败";
		// }
		// $mysqli->close();


	
	function selectInfo($sql){
        $mysqli = new mysqli("localhost","root","123456","nightlife");
        $mysqli->query("set names utf8");
        $result = $mysqli->query($sql);
        #var_dump($result);
        //判断当前拿到的值不是0的情况下执行的
        if($result->num_rows){
         
            #第三种方法
            $row = $result->fetch_all(MYSQLI_ASSOC);
            //转化数组为json格式
            echo json_encode($row);
            #讲json转化为数组.
            // echo json_decode()
        }
    }
        $sql = "SELECT *FROM eat";
        selectInfo($sql);

        // $real_classId = $_GET['classid'];
        // $sql1 = "SELECT * FROM eat WHERE classid = $real_classId";
        // selectInfo(sql1);


 ?>