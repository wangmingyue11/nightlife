<?php  
	
	$mysqli = new mysqli("localhost","root","123456","nightlife");
	$mysqli->query("set names utf8");
	if($mysqli->connect_errno){
		echo "连接失败";
	}else{
		echo "连接成功";
	}
	$sql = "INSERT INTO play(class,img,title) VALUES ('美女','KTV_03.png','好漂亮')";
	$result = $mysqli->query($sql);
	if($result){
		echo "插入成功";
	}else{
		echo "插入失败";
	}

	// $row = $result->fetch_all(MYSQLI_ASSOC);
	// 转化为json
	// echo json_encode($row);

	// if($row = $result->fetch_all(){
	// 	echo $row;
	// }

	// $mysqli = new mysqli("localhost","root","123456","nightlife");
	// $mysqli->query("set names utf8");
	// $sql = "SELECT * FROM play";
	// $result = $mysqli->query($sql);
	// $row = $result->fetch_all(MYSQLI_ASSOC);
	// $data = json_encode($row);
	// echo $data;

	//$mysqli->close();
?>