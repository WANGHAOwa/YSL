<?php
	//emile password username phone
//	$user = @$_POST["username"];
	$pwd = @$_POST["password"];
	$emile = @$_POST["emile"];
	$phone = @$_POST["phone"];
	$type = @$_POST["type"];
	if($type !== "login" && $type !== "register"){
		$res = array("error"=>"");
		die(json_encode($res));
	}
	require("./connect.php");
	
	$sql_login = "SELECT emile,password,phone FROM user_table";
	
	$sql_register = "INSERT user_table(emile,password,phone)
					VALUES
					('{$pwd}','{$emile}','{$phone}') ";
	$result_login = $conn->query($sql_login);
	$result_register = $conn->query($sql_register);
	
	$pwd = FALSE;
	$emile =FALSE;
	$phone = FALSE;
	$select_res = FALSE;
	
	while($row = $result_login->fetch_assoc()){
		if($row["emile"] == $emile){
			$emile = TRUE;
			if($type == "register"){
				break;
			}
			if($row["password"] == $pwd){
				$select_res = json_encode($row);
				$hasuser = TRUE;
				break;
			}
		}
	}
	
	if($type == "login" && $emile == TRUE){
		die($select_res);
	}else if($type == "login"){
		die("0");
	}
	if($type == "register" && $emile == TRUE){
		echo "用户名重复";
	}else if($emile == FALSE && $result_register == TRUE){
		echo "注册成功";
	}
	echo $result_register;					
					
?>