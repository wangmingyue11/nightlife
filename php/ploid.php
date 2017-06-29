<?php
    $mysqli=new mysqli("localhost","root","123456","nightlife");
        $mysqli->query("set names utf8");
    function insertInfo($sql){
        if($mysqli->connect_error){
            die("连接失败：".$mysqli->connect_error);
        }
        $mysqli->query("utf8");
        $result=$mysqli->query($sql);
        if ($result){
            echo "插入成功";
        }else{
            echo "插入失败";
        }
        $mysqli->close();
    }
    //$sql="INSERT INTO ploid(images,img,names,grade,prices,carolTime,location)VALUES('KTV_03.png','KTV_07.png','量贩式KTV','4.5分','¥63','欢唱3小时','世界公园 1.6km')";
    //insertInfo($sql);
    $mysqli->query("set names utf8");
    $sql = "SELECT * FROM ploid";
    $result = $mysqli->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    $data = json_encode($row);
    echo $data;

 ?>
