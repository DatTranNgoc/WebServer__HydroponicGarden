/*========================================================================HYDROPONIC GARDEN============================================================================*/

function Dong_ho() {
    var gio = document.getElementById("gio");
    var phut = document.getElementById("phut");
    var Gio_hien_tai = new Date().getHours();
    var Phut_hien_tai = new Date().getMinutes();
    Gio_hien_tai.toFixed(2)
    Phut_hien_tai.toFixed(2)
    gio.innerHTML = Gio_hien_tai + ":";
    phut.innerHTML = Phut_hien_tai;
}
var Dem_gio = setInterval(Dong_ho, 1000);
function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value + "%";
}
$(".menu-icon").click(function () {
    $(this).toggleClass("active");
    $(".navigation-menu").toggleClass("active");
    $(".menu-icon i").toggleClass("fas fa-times");
});

/*========================================================================STATUS MANUAL/ AUTO==========================================================================*/

var count = 0;
function changestatus() {
    count = count + 1;
    if (count % 2 == 0) {
        document.getElementById("btn_changestatus").value = "Manual"
        document.getElementById("manual_auto_status").className = "fas fa-toggle-on";
        document.getElementById("manual_auto").innerHTML = "Manual"
    }
    else {
        document.getElementById("btn_changestatus").value = "Auto"
        document.getElementById("manual_auto_status").className = "fas fa-toggle-off";
        document.getElementById("manual_auto").innerHTML = "Auto"

    }
}

/*===========================================================================LEVEL WATER===============================================================================*/

function high() {
    document.getElementById("mode_status").innerHTML = "High";
}
function medium() {
    document.getElementById("mode_status").innerHTML = "Medium";
}
function low() {
    document.getElementById("mode_status").innerHTML = "Low";
}

/*===========================================================================CLICK & RESET===============================================================================*/

let max_type = 4;
let min_type = 1;
class myClass {
    static counting = 1;
}

function up() {
    myClass.counting++;
    if (myClass.counting > max_type) { myClass.counting = 4 }
    document.getElementById('raucai').src = myClass.counting + ".png";
    if (myClass.counting == 1) {
        document.getElementById("type_vegetable").innerHTML = "Lettuce "
        document.getElementById("link").setAttribute("href", "https://www.healthline.com/nutrition/mustard-greens-nutrition")
        document.getElementById("prediction_time").innerHTML = "Prediction Time: 42 days"
        document.getElementById("content").innerHTML = " Mustard greens have different large and small stems, dark green or green banana leaves. The leaves and stems have a spicy, bitter taste and are most commonly used to cook soup, or to pickle (sauerkraut). Harvest time for mustard greens ranges from 40-45 days. Nutritional ingredients in mustard greens include: vitamins A, B, C, K, nicotic acid, catoten, abumin ..., should be recommended by nutritionists because of many health benefits as well as effects. disease prevention."
    }
    if (myClass.counting == 2) {
        document.getElementById("type_vegetable").innerHTML = "Perilla Leaf "
        document.getElementById("link").setAttribute("href", "https://specialtyproduce.com/produce/Perilla_Leaves_8555.php")
        document.getElementById("prediction_time").innerHTML = "Prediction Time: 30 days"
        document.getElementById("content").innerHTML = " Perilla leaves are medium to large in size and broad and round to spade-shaped, averaging 7-12 centimeters in length and 5-8 centimeters in width. The leaves have a slightly fuzzy or hairy texture and are vibrant green on the top and green to purple on the underside. Perilla leaves have serrated edges that taper to a point on the non-stem end, and the plant’s stems are square, green, and hairy. The leaves are highly aromatic and are grassy and herbaceous in flavor with nuances of mint, basil, and anise. "
    }
    if (myClass.counting == 3) {
        document.getElementById("type_vegetable").innerHTML = "Red Amaranth"
        document.getElementById("link").setAttribute("href", "https://en.wikipedia.org/wiki/Amaranthus_cruentus")
        document.getElementById("prediction_time").innerHTML = "Prediction Time: 25 days"
        document.getElementById("content").innerHTML = "  Amaranth plants can reach heights of over 2 meters tall with fleshy oval shaped leaves that are sometimes pointed at the tips. Some varieties have a deep maroon center of the leaf with streaks of red, purple and green. The Red variety produces feathery purple, magenta or red flowers from the central stalk which is packed with edible seeds. Though the flower buds are edible, once they mature and become bushy they are not palatable and should be avoided. The young leaves are slightly astringent when raw, but are nutty and mild, like spinach. Larger, more mature leaves are best for stewing or braising, similarly to a chard or beet green. "
    }
    if (myClass.counting == 4) {
        document.getElementById("type_vegetable").innerHTML = "Basil"
        document.getElementById("link").setAttribute("href", "https://specialtyproduce.com/produce/Perilla_Leaves_8555.php")
        document.getElementById("prediction_time").innerHTML = "Prediction Time: 35 days"
        document.getElementById("content").innerHTML = "Basil leaves are glossy and oval-shaped, with smooth or slightly toothed edges that typically cup slightly; the leaves are arranged oppositely along the square stems. The small flowers are borne in terminal clusters and range in colour from white to magenta. The plant is extremely frost-sensitive and grows best in warm climates. Basil is susceptible to Fusarium wilt, blight, and downy mildew, especially when grown in humid conditions."
    }
    return myClass.counting;
}
function down() {
    myClass.counting--;
    if (myClass.counting < min_type) { myClass.counting = 1 }
    document.getElementById('raucai').src = myClass.counting + ".png";
    if (myClass.counting == 1) {
        document.getElementById("type_vegetable").innerHTML = "Lettuce "
        document.getElementById("link").setAttribute("href", "https://www.healthline.com/nutrition/mustard-greens-nutrition")
        document.getElementById("prediction_time").innerHTML = "Prediction Time: 42 days"
        document.getElementById("content").innerHTML = " Mustard greens have different large and small stems, dark green or green banana leaves. The leaves and stems have a spicy, bitter taste and are most commonly used to cook soup, or to pickle (sauerkraut). Harvest time for mustard greens ranges from 40-45 days. Nutritional ingredients in mustard greens include: vitamins A, B, C, K, nicotic acid, catoten, abumin ..., should be recommended by nutritionists because of many health benefits as well as effects. disease prevention."
    }
    if (myClass.counting == 2) {
        document.getElementById("type_vegetable").innerHTML = "Perilla Leaf "
        document.getElementById("link").setAttribute("href", "https://specialtyproduce.com/produce/Perilla_Leaves_8555.php")
        document.getElementById("prediction_time").innerHTML = "Prediction Time: 30 days"
        document.getElementById("content").innerHTML = " Perilla leaves are medium to large in size and broad and round to spade-shaped, averaging 7-12 centimeters in length and 5-8 centimeters in width. The leaves have a slightly fuzzy or hairy texture and are vibrant green on the top and green to purple on the underside. Perilla leaves have serrated edges that taper to a point on the non-stem end, and the plant’s stems are square, green, and hairy. The leaves are highly aromatic and are grassy and herbaceous in flavor with nuances of mint, basil, and anise. "
    }
    if (myClass.counting == 3) {
        document.getElementById("type_vegetable").innerHTML = "Red Amaranth"
        document.getElementById("link").setAttribute("href", "https://en.wikipedia.org/wiki/Amaranthus_cruentus")
        document.getElementById("prediction_time").innerHTML = "Prediction Time: 25 days"
        document.getElementById("content").innerHTML = "  Amaranth plants can reach heights of over 2 meters tall with fleshy oval shaped leaves that are sometimes pointed at the tips. Some varieties have a deep maroon center of the leaf with streaks of red, purple and green. The Red variety produces feathery purple, magenta or red flowers from the central stalk which is packed with edible seeds. Though the flower buds are edible, once they mature and become bushy they are not palatable and should be avoided. The young leaves are slightly astringent when raw, but are nutty and mild, like spinach. Larger, more mature leaves are best for stewing or braising, similarly to a chard or beet green. "
    }
    if (myClass.counting == 4) {
        document.getElementById("type_vegetable").innerHTML = "Basil"
        document.getElementById("link").setAttribute("href", "https://specialtyproduce.com/produce/Perilla_Leaves_8555.php")
        document.getElementById("prediction_time").innerHTML = "Prediction Time: 35 days"
        document.getElementById("content").innerHTML = "Basil leaves are glossy and oval-shaped, with smooth or slightly toothed edges that typically cup slightly; the leaves are arranged oppositely along the square stems. The small flowers are borne in terminal clusters and range in colour from white to magenta. The plant is extremely frost-sensitive and grows best in warm climates. Basil is susceptible to Fusarium wilt, blight, and downy mildew, especially when grown in humid conditions."
    }
    return myClass.counting;
}

function click_start() {
    if (myClass.counting == 1) {
        const deadline = new Date(Date.parse(new Date()) + 42 * 24 * 60 * 60 * 1000);
        initializeClock('clockdiv', deadline);
    }
    else if (myClass.counting == 2) {
        const deadline = new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000);
        initializeClock('clockdiv', deadline);
    }
    else if (myClass.counting == 3) {
        const deadline = new Date(Date.parse(new Date()) + 25 * 24 * 60 * 60 * 1000);
        initializeClock('clockdiv', deadline);
    }
    else if (myClass.counting == 4) {
        const deadline = new Date(Date.parse(new Date()) + 35 * 24 * 60 * 60 * 1000);
        initializeClock('clockdiv', deadline);
    }

    document.getElementById("click_id").disabled = true;

}
function reset_counter() {
    location.reload();
}
function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
        total, days, hours, minutes, seconds
    };
}
function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
    function updateClock() {
        const t = getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

/*===========================================================================   DATA    ===============================================================================*/

$(document).ready(function () {

    updateTable();
});
function updateTable() {
    $.post("ReadDataSys.php",
        function (data) {
            var stt = data[0].mode;
            var bri = data[0].Light;
            var walv = data[0].WaterLevel;
            var temp = data[0].Temp;
            document.getElementById("light_r").value = bri;
            document.getElementById("manual_auto").innerHTML = stt;
            document.getElementById("rangeValue").innerHTML = bri + "%";
            document.getElementById("mode_status").innerHTML = walv;
        });
}

rangeInput = document.getElementById('light_r');
rangeInput.addEventListener("change", function () {

    let brightValue = rangeInput.value;
    // jQuery Ajax Post Request
    $.post('WebServer.php', {
        brightValue: brightValue
    }, (response) => {
        // response from PHP back-end
        console.log(response);
    });

});

let mode = document.getElementById("btn_changestatus")
 // Adding event listener to button
 mode.addEventListener("click", () => {
    // Fetching Button value
    let modeValue = mode.value;
    // jQuery Ajax Post Request
    $.post('WebServer.php', {
        modeValue: modeValue
    }, (response) => {
        // response from PHP back-end
        console.log(response);
    });
});

let btn1 = document.getElementById("btn_high");
let btn2 = document.getElementById("btn_medium");
let btn3 = document.getElementById("btn_low");

 // Adding event listener to button
 btn1.addEventListener("click", () => {
    // Fetching Button value
    let btnValue1 = btn1.value;
    // jQuery Ajax Post Request
    $.post('WebServer.php', {
        btnValue1: btnValue1
    }, (response) => {
        // response from PHP back-end
        console.log(response);
    });
});

btn2.addEventListener("click", () => {
    // Fetching Button value
    let btnValue2 = btn2.value;
    // jQuery Ajax Post Request
    $.post('WebServer.php', {
        btnValue2: btnValue2
    }, (response) => {
        // response from PHP back-end
        console.log(response);
    });
});

btn3.addEventListener("click", () => {
    // Fetching Button value
    let btnValue3 = btn3.value;
    // jQuery Ajax Post Request
    $.post('WebServer.php', {
        btnValue3: btnValue3
    }, (response) => {
        // response from PHP back-end
        console.log(response);
    });
});