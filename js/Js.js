const clickButton = document.querySelector('button');
const clickCountElement = document.getElementById('clickCount');
const timerElement = document.getElementById('timeRemaining');
const restartButton = document.getElementById('restartButton');
const historyElement = document.getElementById('history');
const addTimeButtons = document.getElementById('addTimeButtons');

let clicks = 0;
let timeRemaining = 60;
let timerRunning = false;
let intervalId;
let gameHistory = [];

function handleClick() {
    if (!timerRunning) {
        updateTimer();
        intervalId = setInterval(updateTimer, 1000);
        timerRunning = true;
    }

    clicks++;
    updateClickCount();
    changeButtonColor();
}

addTimeButton1.addEventListener('click', function () {
    setTimeTo10Seconds();
});


function setTimeTo10Seconds() {  // test butons 10 sec
    if (!timerRunning) {
        timeRemaining = 11;
        updateTimer();
    }
}

function changeButtonColor() {
    clickButton.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function updateClickCount() {
    clickCountElement.innerText = clicks;
}

function updateTimer() {
    timeRemaining--;
    timerElement.innerText = timeRemaining;

    if (timeRemaining <= 0) {
        endGame();
    }
}

function endGame() {
    alert("Game over! You scored " + clicks + " clicks.");
    saveGameToHistory(clicks);
    restartGame();
}

function saveGameToHistory(score) {
    gameHistory.push(score);
    if (gameHistory.length > 3) {
        gameHistory.shift();
    }
    updateHistory();
}

function updateHistory() {
    historyElement.innerHTML = "History: " + gameHistory.join(', ');
}

function restartGame() {
    clicks = 0;
    timeRemaining = 61;
    timerRunning = false;
    clearInterval(intervalId);
    updateClickCount();
    updateTimer();
}

1

// const clickButton = document.querySelector('button');
// const clickCountElement = document.getElementById('clickCount');
// const timerElement = document.getElementById('timeRemaining');
// const restartButton = document.getElementById('restartButton');
// const historyElement = document.getElementById('history');

// let clicks = 0;
// let timeRemaining = 60;
// let timerRunning = false;
// let intervalId;
// let gameHistory = [];

// function handleClick() {
//     if (!timerRunning) {
//         updateTimer();
//         intervalId = setInterval(updateTimer, 1000);
//         timerRunning = true;
//     }

//     clicks++;
//     updateClickCount();
//     changeButtonColor();
// }

// function changeButtonColor() {
//     clickButton.style.backgroundColor = getRandomColor();
// }

// function getRandomColor() {
//     return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// function updateClickCount() {
//     clickCountElement.innerText = clicks;
// }

// function updateTimer() {
//     timeRemaining--;
//     timerElement.innerText = timeRemaining;

//     if (timeRemaining <= 0) {
//         endGame();
//     }
// }

// function endGame() {
//     alert("Game over! You scored " + clicks + " clicks.");
//     saveGameToHistory(clicks);
//     restartGame();
// }

// function saveGameToHistory(score) {
//     gameHistory.push(score);
//     if (gameHistory.length > 3) {
//         gameHistory.shift();
//     }
//     updateHistory();
// }

// function updateHistory() {
//     historyElement.innerHTML = "History: " + gameHistory.join(', ');
// }

// function restartGame() {
//     clicks = 0;
//     timeRemaining = 61;
//     timerRunning = false;
//     clearInterval(intervalId);
//     updateClickCount();
//     updateTimer();
// }
