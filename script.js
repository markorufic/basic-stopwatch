var time = document.getElementById('display');
var startStopBtn = document.getElementById('startStopBtn');
var resetBtn = document.getElementById('resetBtn');

var elapsedTime = 0;
var timerInterval;
var running = false;

function updateTime() {
    elapsedTime += 10;
    var milliseconds = parseInt((elapsedTime % 1000) / 10);
    var seconds = parseInt((elapsedTime / 1000) % 60);
    var minutes = parseInt((elapsedTime / (1000 * 60)) % 60);
    time.textContent =
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + ":" +
        (milliseconds < 10 ? "0" + milliseconds : milliseconds);
}

startStopBtn.addEventListener('click', function() {
    if (!running) {
        timerInterval = setInterval(updateTime, 10);
        startStopBtn.textContent = 'Stop';
        running = true;
    } else {
        clearInterval(timerInterval);
        startStopBtn.textContent = 'Start';
        running = false;
    }
});

resetBtn.addEventListener('click', function() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    time.textContent = "00:00:00";
    startStopBtn.textContent = 'Start';
    running = false;
});