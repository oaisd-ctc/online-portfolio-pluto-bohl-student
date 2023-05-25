const anime = require('animejs');

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let int = null;

let totalTime = null;

var id = null;

function timer() {
    milliseconds+=10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds ++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    let totalTime = s + "." + ms;

    return totalTime;
}

var animation = anime({
    targets: 'div',
    translateX: 100,
    borderRadius: 50,
    duration: 2000,
    easing: 'linear',
    direction: 'alternate'
})

document.querySelector('.play-pause-demo .play').onclick = animation.play;