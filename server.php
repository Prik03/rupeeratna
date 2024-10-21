<?php
$host = "localhost";
$username = "Prik";
$password = "Mozek@123";
$database = "admin_";
$connect = mysqli_connect($host,$username,$password,$database);

$name = mysqli_real_escape_string($connect, $_POST['fullname']);
$email = mysqli_real_escape_string($connect, $_POST['email']);
$Opt = mysqli_real_escape_string($connect, $_POST['opt']);
$phone = mysqli_real_escape_string($connect, $_POST['Phone']);

mysqli_query($connect, "INSERT INTO rupeeratna(fullname, email, opt, Phone) VALUES ('".$name."','".$email."','".$Opt."','".$phone."')")





?>