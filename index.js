const startStopBtn = document.getElementById('startstopbtn');
const reset = document.getElementById('reset');

let second = 0;
let minutes = 0;
let hours = 0;

let leadingSecond = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = "stopped";

function stopWatch() {

    second++;

    if (second / 60 == 1) {
        second = 0;
        minutes++;
    }
    if (minutes / 60 == 1) {
        minutes = 0;
        hours++;
    }
    if (second < 10) {
        leadingSecond = '0' + second;
    }
    else {
        leadingSecond = second;
    }
    if (minutes < 10) {
        leadingMinutes = '0' + minutes;
    }
    else {
        leadingMinutes = minutes;
    }
    if (hours < 10) {
        leadingHours = '0' + hours;
    }
    else {
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ':' + leadingMinutes + ':' + leadingSecond;
}

startStopBtn.addEventListener('click', function () {

    if (timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startstopbtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    }
    else {

        window.clearInterval(timerInterval);
        document.getElementById('startstopbtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = 'stopped';
    }
});

reset.addEventListener('click',function(){

    window.clearInterval(timerInterval);
    
    second = 0;
    minutes = 0;
    hours = 0;
    
    document.getElementById('timer').innerHTML = '00:00:00';
    document.getElementById('startstopbtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = 'stopped';
    
});
