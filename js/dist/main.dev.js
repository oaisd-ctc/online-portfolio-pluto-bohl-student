"use strict";

var milliseconds = 0,
    seconds = 0,
    minutes = 0,
    hours = 0;
var _int = null;
var totalTime = null;
var id = null;

function timer() {
  milliseconds += 10;

  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  }

  var s = seconds < 10 ? "0" + seconds : seconds;
  var ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
  var totalTime = s + "." + ms;
  return totalTime;
}

var myAnimation = anime({
  targets: '.asteroid1',
  translateX: '-13rem',
  easing: 'easeOutQuad',
  autoplay: true,
  duration: 2000,
  loop: true
});