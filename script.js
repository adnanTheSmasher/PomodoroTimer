const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const alertSound = document.getElementById("alert-sound");

const circle = document.querySelector(".progress-ring_circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = 0;


let workDuration = 25*60;
let breakDuration = 5*60;
let timeLeft = workDuration;
let isRunning = false;
let timer;
let isBreak = false;

function updateDisplay() {
    const minutes = Math.floor(timeLeft/60).toString().padStart(2,'0');
    const seconds = (timeLeft%60).toString().padStart(2,'0');
    timeDisplay.textContent = `${minutes}:${seconds}`;
}

function updateCircle(){
    const total = isBreak ? breakDuration : workDuration;
    const offset = circumference - (timeLeft/total)*circumference;
    circle.style.strokeDashoffset = offset;   
}

const sessionCountDisplay = document.getElementById("session-count");
const bgMusic = document.getElementById("bg-music");
const toggleMusicBtn = document.getElementById("toggle-music");
let isMusicPlaying = false;

if (toggleMusicBtn) {
    toggleMusicBtn.addEventListener("click", () => {
        if (isMusicPlaying) {
            bgMusic.pause();
        } else {
            bgMusic.play();
        }
        isMusicPlaying = !isMusicPlaying;
    });
}

const toggleThemeBtn = document.getElementById("toggle-theme");
if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
    });
}

function startTimer() {
    if (isRunning)  return;
    isRunning = true;
    timer = setInterval(() => {
        timeLeft--;
        updateDisplay();
        updateCircle(); 
        if (timeLeft <= 0) {
            clearInterval(timer);
            alertSound.play();
            isRunning = false;
            if(!isBreak){
                sessionCountDisplay.textContent = parseInt(sessionCountDisplay.textContent) + 1;
            }
            isBreak = !isBreak;
            timeLeft = isBreak ? breakDuration : workDuration;
            updateDisplay();
            updateCircle();
        }
    }, 1000 );
}


function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    isBreak = false;
    timeLeft = workDuration;
    updateDisplay();
    updateCircle();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();
updateCircle();