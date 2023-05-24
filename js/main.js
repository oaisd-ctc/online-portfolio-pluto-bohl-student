console.log("Starting Asteroid1 Animation...");

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let int = null;

int = setInterval(displayTimer,10);

var id = setInterval(frame, 5);
var done = false;

function frame() {
    var asteroid = document.getElementById("asteroid1");
    var pos = 0;

    if (done == true) {
        clearInterval(id);
    } else {
        // console.log("test") Test worked
    }
}

function displayTimer() {
    milliseconds+=10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds ++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes == 0;
                hours++;
            }
        }
    }
}

console.log("Asteroid Animation Complete!");
