<?php

// Connect to database
$server = "localhost";
$user = "root"; 
$pass = "";
$dbname = "hydroponic";

$mysqli = new mysqli($server,$user,$pass,$dbname);

// Check connection
if($mysqli === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}


// Checking, if post value is
if(isset($_POST['brightValue']))
{
// Getting the value of button
// in $btnValue variable
$brightValue = $_POST['brightValue'];
$sql = "update config set Light = '$brightValue'";
mysqli_query($mysqli,$sql);
// Sending Response
echo "Success";
}

if(isset($_POST['btnValue1']))
{
 // Getting the value of button
 // in $btnValue variable
 $btnValue1 = $_POST['btnValue1'];
 $sql = "update config set WaterLevel = '$btnValue1'";
 mysqli_query($mysqli,$sql);
  // Sending Response
 echo "Success";
}


if(isset($_POST['btnValue2']))
{
 // Getting the value of button
 // in $btnValue variable
 $btnValue2 = $_POST['btnValue2'];
 $sql = "update config set WaterLevel = '$btnValue2'";
 mysqli_query($mysqli,$sql);
  // Sending Response
 echo "Success";
}

if(isset($_POST['btnValue3']))
{
 // Getting the value of button
 // in $btnValue variable
 $btnValue3 = $_POST['btnValue3'];
 $sql = "update config set WaterLevel = '$btnValue3'";
 mysqli_query($mysqli,$sql);
  // Sending Response
 echo "Success";
}

if(isset($_POST['modeValue']))
{
 // Getting the value of button
 // in $btnValue variable
 $modeValue = $_POST['modeValue'];
 $sql = "update config set mode = '$modeValue'";
 mysqli_query($mysqli,$sql);
  // Sending Response
 echo "Success";
}

?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <title> Hidroponic_Website</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <meta charset="utf-8>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="WebServer.css">
</head>
<body>
    <div class="box">
        <header>
            <div class="left_area">
                
                <h3> HYDROPONIC SYSTEM </h3>
                <div class="border_info">
                    <div style="overflow:scroll;border-left:20px ridge whitesmoke; border-right: 20px ridge whitesmoke; width: 630px;height: 175px;background-color: #c9d2c6;">
                        <br><span id="type_vegetable">Lettuce</span><br>
                        <span id="prediction_time">Prediction Time: 42 days</span><br>
                        <a id="link" href="https://www.healthline.com/nutrition/mustard-greens-nutrition">Reference</a><br>
                        <p id="content">Mustard greens have different large and small stems, dark green or green banana leaves. The leaves and stems have a spicy, 
                        bitter taste and are most commonly used to cook soup, or to pickle (sauerkraut). Harvest time for mustard greens ranges from 40-45 days. 
                        Nutritional ingredients in mustard greens include: vitamins A, B, C, K, nicotic acid, catoten, abumin ..., 
                        should be recommended by nutritionists because of many health benefits as well as effects. disease prevention.
                        </p>
                    </div>
                </div>
            </div>
        </header>
        <div class="sidebar">
            <b href="#">
                <h1>Panther</h1>
            </b>
            <div id="dong_ho">
                <div id="thoi_gian">
                    <div>
                        <span id="gio">00</span>
                    </div>
                    <div>
                        <span id="phut">00</span>
                    </div>
                </div>
            </div>
            <div id="select">
                <a href="#"><i class="fas fa-seedling"> <span>System 1</span></i></a>
                <a href="#"><i class="fas fa-seedling"> <span>System 2</span></i></a>
                <a href="#"><i class="fas fa-seedling"> <span>System 3</span></i></a>
                <center><br>
                    <c href="#"><span>Configure</span></c>
                </center>
            </div>
            <center>
                <img src="logo.png" class="logo" alt="">
                <h4>Admin</h4>
                <c href="#"><span>Sign out</span></c>
            </center>
        </div>
        <div class="content">
            <iframe src="fk1.html" height="400px" width="500px"></iframe><iframe src="fk1.html" height="400px" width="500px"></iframe>
            <div class="Left_Area">
                <div class="Border_Tracking_Countdown">
                    <div class="up_down">
                        <button type="button" onclick="up()" class="up"><i class="fas fa-angle-up"></i></button><br>
                        <button type="button" onclick="down()" class="down"><i class="fas fa-chevron-down"></i></button> 
                    </div>
                </div>
                <div class="Center_Left_Area"> 
                    <img id="raucai" src="1.png" width="314px" height="130"><br>
                    <button  onclick="click_start()" class="click" id="click_id">Click</button>
                    <button  onclick="reset_counter()"  class="reset"  id="reset_id">Reset</button> 
                </div>
            </div>
            <div class="Right_Area">
                <div class="Center_Right_Area">
                    <div class="Border_TabControl">
                        <i id="manual_auto_status" class="fas fa-toggle-on"></i>
                        <div class="status">
                            <i class="fas fa-leaf"></i>&emsp;<button class="button_auto" type="button" onclick="changestatus()" id="btn_changestatus" value="LOW"><span id="manual_auto">Manual</span></button>&emsp;<i class="fas fa-leaf"></i>
                        </div>
                        <div class="light">
                            <div class="dropdown">
                                <button class="dropbtn">Light&emsp;&emsp;&emsp;&emsp;<i class="far fa-lightbulb"></i></button>
                                <div class="dropdown-content">
                                    <span id="rangeValue">0%</span>
                                    <Input class="range" type="range" value="0" min="0" max="100" onChange="rangeSlide(this.value)" onmousemove="rangeSlide(this.value)" id="light_r"></Input>    
                                </div>
                            </div>
                        </div><br>
                        <div class="water_level">
                            <div class="dropdown">
                                <button class="dropbtn">Water Level&emsp;<i class="fas fa-water"></i></i></button>
                                <div class="dropdown-content">
                                    <span id="mode">Mode: <span id="mode_status">Medium</span></span><br>
                                    <button type="button" class="level_1" onclick="low()" id="btn_low" value="Low">Low</button>
                                    <button type="button" class="level_2" onclick="medium()" id="btn_medium" value="Medium">Medium</button>
                                    <button type="button" class="level_3" onclick="high()" id="btn_high" value="High">High</button>
                                </div>
                            </div>
                        </div><br>
                        <div class="temperature">
                            <div class="dropdown">
                                <button class="dropbtn">Temperature&emsp;<i class="fas fa-temperature-low"></i></i></button>
                                <div class="dropdown-content">
                                    <span id="mode">Mode: <span id="mode_status">Medium</span></span><br>
                                    <button type="button" class="level_1" onclick="low()" id="btn_low">Low</button>
                                    <button type="button" class="level_2" onclick="medium()" id="btn_medium">Medium</button>
                                    <button type="button" class="level_3" onclick="high()" id="btn_high">High</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="timer">
                        <div class="border_timer">
                            <h1>Countdown Clock</h1>
                            <div id="clockdiv">
                                <div>
                                    <span class="days"></span>
                                    <div class="smalltext">Days</div>
                                </div>
                                <div>
                                    <span class="hours"></span>
                                    <div class="smalltext">Hours</div>
                                </div>
                                <div>
                                    <span class="minutes"></span>
                                    <div class="smalltext">Minutes</div>
                                </div>
                                <div>
                                    <span class="seconds"></span>
                                    <div class="smalltext">Seconds</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</body>
<script src="WebServer.js"></script> 
</html>