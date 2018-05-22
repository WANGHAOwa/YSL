<?php
	$servername = "localhost:3306";
	$username = "root";
	$password = "";
	$dbname = "wanghao";
	$conn = new mysqli($servername,$username,$password,$dbname);
	if($conn->connect_error){
		die("连接失败");
	}
	echo "连接成功";
?>