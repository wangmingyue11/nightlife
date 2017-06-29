<?php
    $ID = $_GET['ID'];
    function insertInfo($sql){
        $mysqli=new mysqli("localhost","root","123456","nightlife");
        $mysqli->query("set names utf8");
        if($mysqli->connect_error){
            die("连接失败：".$mysqli->connect_error);
        }
        $result = $mysqli->query($sql);
        $row = $result->fetch_all(MYSQLI_ASSOC);
        $data = json_encode($row);
        echo $data;
        //$mysqli->close();
    }
    //$sql="INSERT INTO ploid(images,img,names,grade,prices,carolTime,location)VALUES('KTV_03.png','KTV_07.png','量贩式KTV','4.5分','¥63','欢唱3小时','世界公园 1.6km')";
    //insertInfo($sql);
    $sql = "SELECT * FROM ploid WHERE id=".$ID;
    insertInfo($sql);

 ?>