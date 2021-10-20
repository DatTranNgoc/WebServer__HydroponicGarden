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

// Doc gia tri tu database
$sql = "select * from config";
$result = mysqli_query($conn,$sql);

$data = array();
foreach ($result as $row){
    $data[] = $row;
}

mysqli_close($conn);
echo json_encode($data);
?>