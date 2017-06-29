<?php 

	// $mysqli = new mysqli("localhost","root","","nightLife");
	// 	if ($mysqli->connect_errno) {
	// 	 	die($mysqli->connect_errno);
	// 		echo "失败";
	// 	}else{
	// 		echo "成功<hr>";
	// 	}
	// 	$sql = "INSERT INTO foods(name,classid,picture,effect,price,grade,people)VALUES('西红柿鸡蛋汤汤','6','recommend1.png','好喝','29','5分','588')";
	// 	$mysqli -> query("set names utf8");
	// 	$result = $mysqli->query($sql);
	// 	if ($result) {
	// 		echo "上传成功";
	// 	}else{
	// 		echo "上传失败";
	// 	}
	// 	$mysqli->close();



function selectInfo($sql){
	$mysqli = new mysqli("localhost","root","123456","nightlife");
	$mysqli->query("set names utf8");
	$result = $mysqli->query($sql);
	if($result->num_rows){
		$row = $result->fetch_all(MYSQLI_ASSOC);
		echo json_encode($row);
	}
}
	$sql = "SELECT * FROM foods";
	selectInfo($sql);


 ?>