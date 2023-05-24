"use strict";

console.log("Starting Asteroid1 Animation...");
var milliseconds = 0,
    seconds = 0,
    minutes = 0,
    hours = 0;
var _int = null;
_int = setInterval(displayTimer, 10);
var id = setInterval(frame, 5);
var done = false;

function frame() {
  var asteroid = document.getElementById("asteroid1");
  var pos = 0;

  if (done == true) {
    clearInterval(id);
  } else {// console.log("test") Test worked
  }
}

function displayTimer() {
  milliseconds += 10;

  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;

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