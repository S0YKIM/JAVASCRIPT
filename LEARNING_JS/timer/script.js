"use strict";

document.addEventListener("DOMContentLoaded", function () {
    App();
});

function App() {

    let interval;
    let setTime = 0;
    let endTime = 0;
    let inputSeconds;

    const startButton = document.getElementById("startPauseResume");
    const resetButton = document.getElementById("reset");
    const displayHour = document.getElementsByClassName("displayHours");
    const displayMinute = document.getElementsByClassName("displayMinutes");
    const displaySecond = document.getElementsByClassName("displaySeconds");

    startButton.addEventListener('click', startTimer());
    resetButton.addEventListener('click', resetTimer());

    function timer() {
        const hours = Number(inputForm.hours.value);
        const minutes = Number(inputForm.minutes.value);
        const seconds = Number(inputForm.seconds.value);
        
        inputSeconds = hours * 3600 + minutes * 60 + seconds;
       
        setTime = Date.now();
        endTime = setTime + leftSeconds;
    }

    function startTimer() {
        interval = setInterval(timer, 1000);
    }

    function pauseTimer() {

    }

    function resumeTimer() {

    }

    function resetTimer() {

    }

    function displayTimer() {
        const leftHours = leftSeconds / 3600;
        const leftMinutes = leftSeconds - 
        const leftSeconds = 

        displayHour.textContent = String(remaining_hour).padStart(2, "0");
        displayMinute.textContent = String(remaining_min).padStart(2, "0");
        displaySecond.textContent = String(remaining_sec).padStart(2, "0");
    }
}