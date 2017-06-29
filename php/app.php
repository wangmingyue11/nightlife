<?php
	$telePhone = $_GET["telePhone"];
	$password = $_GET["password"]; 
 	$mysqli = new mysqli("localhost","root","123456","nightlife");
	$mysqli->query("set names utf8");
	$sql = "SELECT * FROM user";
	$result = $mysqli->query($sql);
	$row = $result->fetch_all(MYSQLI_ASSOC);
	//$data = json_encode($row);
	//echo $data;
	$tem = "";
	if(!empty($row)){
		foreach ($row as $people) {
			if($people["telePhone"]==$telePhone&&$people["password"]==$password){
				$tem = "1";
			}
		};
	}
	echo $tem ==1?1:0;
		
	
?>