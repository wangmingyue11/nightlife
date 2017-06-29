<?php
	$telePhone1 = $_GET["telePhone1"];
	$password1 = $_GET["password1"];
	$repassword1 = $_GET["repassword1"];
	function insertInfo($sql){
		$mysqli=new mysqli("localhost","root","123456","nightlife");
		if($mysqli->connect_error){
			die("连接失败：".$mysqli->connect_error);
		}
		$mysqli->query("utf8");
		$result=$mysqli->query($sql);
		if ($result){
			echo "注册成功";
		}else{
			echo "插入失败";
		}
		$mysqli->close();
	}
	//insertInfo($sql);
	$mysqli=new mysqli("localhost","root","123456","nightlife");
	$mysqli->query("set names utf8");
	$sql = "SELECT * FROM user";
	$result = $mysqli->query($sql);
	$row = $result->fetch_all(MYSQLI_ASSOC);
	$tem = "";
	if(!empty($row)){
		foreach ($row as $people) {
			if($people["telePhone"] == $telePhone1){
				$tem=1;
			}
		};
	}
	echo $tem ==1?1:0;
	if($tem!=1){
		$sql="INSERT INTO user(telePhone,password,repassword)VALUES('$telePhone1','$password1','$repassword1')";
		insertInfo($sql);
	}

 ?>