<?php
$dbhost = $_SERVER['RDS_HOSTNAME'];
$dbport = $_SERVER['RDS_PORT'];
$dbname = $_SERVER['RDS_DB_NAME'];

$dsn = "mysql:host={$dbhost};port={$dbport};dbname={$dbname}";
$username = $_SERVER['RDS_USERNAME'];
$password = $_SERVER['RDS_PASSWORD'];
$pdo = new PDO($dsn, $username, $password);

$user_id = $_POST["email"];
$user_password = $_POST["password"];

$sql="insert into user_info (user_name, password) values ('$user_id', '$user_password')";

$res=$pdo->exec($sql);
$sql = "select id from user_info where user_name = '$user_id'";

$res = $pdo->query($sql);
foreach ($res as $row){
	$this_id = $row[id];
}
echo "Success! Thank you for choosing Beadsnet, $user_id!"
?>