<?php
header('Content-Type: application/json');
// Connect to database
$server = "localhost";
$username = "root"; 
$pass = "";
$dbname = "hydroponic";

$conn = new mysqli($server,$username,$pass,$dbname);

// Check connection
if($conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}


$d3 = rand(25, 35);
$sql = "insert into luminous(temp) values ($d3)";
mysqli_query($conn,$sql);

$sql = "select * from luminous where stt>(select max(stt) from luminous)-20";
$result = mysqli_query($conn,$sql);

$data = array();
foreach ($result as $row){
    $data[] = $row;
}

mysqli_close($conn);
echo json_encode($data);
?>