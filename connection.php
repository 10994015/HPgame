<?php 

try{
	$pdo = new PDO('mysql:host=localhost;dbname=HPgame','root','');
}catch(PDOException $e){
	exit('資料庫錯誤.');
}

 ?>