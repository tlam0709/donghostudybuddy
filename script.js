let seconds = 0;
let minutes = 0;
let hours = 0;
let countdownSeconds = 0;
let countdownMinutes = 0;
let countdownHours = 0;
let running = false;
let timer;
let countdownTimer;

// Chế độ Bấm Giờ (Stopwatch)
function toggleClock() {
    if (running) {
        clearInterval(timer);
        document.getElementById("startStopButton").innerText = "Bắt đầu";
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById("startStopButton").innerText = "Dừng";
    }
    running = !running;
}

function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    document.getElementById("clock").innerText = formatTime(hours, minutes, seconds);
}

function formatTime(hours, minutes, seconds) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num < 10 ? "0" + num : num;
}

function resetClock() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("clock").innerText = "00:00:00";
    document.getElementById("startStopButton").innerText = "Bắt đầu";
    running = false;
}

// Chế độ Đếm Ngược (Countdown)
function setCountdown() {
    countdownHours = parseInt(document.getElementById("inputHours").value) || 0;
    countdownMinutes = parseInt(document.getElementById("inputMinutes").value) || 0;
    countdownSeconds = parseInt(document.getElementById("inputSeconds").value) || 0;
    document.getElementById("clock").innerText = formatTime(countdownHours, countdownMinutes, countdownSeconds);
}

function startCountdown() {
    clearInterval(countdownTimer);
    countdownTimer = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    if (countdownSeconds == 0 && countdownMinutes == 0 && countdownHours == 0) {
        clearInterval(countdownTimer);
        alert("Thời gian đã hết!");
        return;
    }

    countdownSeconds--;
    if (countdownSeconds < 0) {
        countdownSeconds = 59;
        countdownMinutes--;
    }

    if (countdownMinutes < 0) {
        countdownMinutes = 59;
        countdownHours--;
    }

    document.getElementById("clock").innerText = formatTime(countdownHours, countdownMinutes, countdownSeconds);
}
