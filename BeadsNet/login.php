<?php
$dbhost = $_SERVER['RDS_HOSTNAME'];
$dbport = $_SERVER['RDS_PORT'];
$dbname = $_SERVER['RDS_DB_NAME'];

$dsn = "mysql:host={$dbhost};port={$dbport};dbname={$dbname}";
$username = $_SERVER['RDS_USERNAME'];
$password = $_SERVER['RDS_PASSWORD'];
$pdo = new PDO($dsn, $username, $password);
$sql = 'SELECT id, user_name, password From user_info';
include("login.html");
?>