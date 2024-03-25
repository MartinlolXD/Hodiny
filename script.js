
let timerInterval;
let stopwatchInterval;
let timerDuration;
let stopwatchStartTime;
let stopwatchElapsedTime = 0;
let historyData = [];

function startTimer() {
    const timerInput = document.getElementById('timerInput');
    const minutes = parseInt(timerInput.value, 10);
    if (isNaN(minutes) || minutes <= 0) {
        alert('Zadejte platný počet minut.');
        return;
    }
    timerDuration = minutes * 60 * 1000;
    timerInterval = setInterval(() => {
        clearInterval(timerInterval);
        alert('Časovač dosáhl svého limitu.');
    }, timerDuration);
}

function startStopwatch() {
    stopwatchStartTime = Date.now() - stopwatchElapsedTime;
    stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchElapsedTime = Date.now() - stopwatchStartTime;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchElapsedTime = 0;
    updateStopwatchDisplay();
}

function updateStopwatch() {
    stopwatchElapsedTime = Date.now() - stopwatchStartTime;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    const elapsedTime = stopwatchElapsedTime / 1000;
    const hours = Math.floor(elapsedTime / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((elapsedTime % 3600) / 60).toString().padStart(2, '0');
    const seconds = Math.floor(elapsedTime % 60).toString().padStart(2, '0');
    document.getElementById('stopwatch').textContent = `Stopky: ${hours}:${minutes}:${seconds}`;
}

function saveToHistory(time) {
    const historyList = document.getElementById('historyList');
    const item = document.createElement('li');
    item.textContent = time;
    historyList.appendChild(item);
}

// Example of setting a daily usage limit (in seconds)
const dailyLimitInSeconds = 1800; // 30 minutes

// Example of checking if daily limit is reached
function checkDailyLimit() {
    const elapsedTimeInSeconds = stopwatchElapsedTime / 1000;
    if (elapsedTimeInSeconds >= dailyLimitInSeconds) {
        alert('Dosáhli jste svého denního limitu na sociální sítě.');
        clearInterval(stopwatchInterval);
        saveToHistory('Denní limit dosažen');
    }
}

// Example of using the checkDailyLimit function every second
setInterval(checkDailyLimit, 1000);





function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();