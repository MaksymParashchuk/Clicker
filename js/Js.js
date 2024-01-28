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


addTimeButton1.addEventListener('click', function () {
    setTimeTo10Seconds();
});

function setTimeTo10Seconds() {
    if (!timerRunning) {
        timeRemaining = 11;
        updateTimer();
    }
}

addTimeButton2.addEventListener('click', function () {
    setTimeTo30Seconds();
});

function setTimeTo30Seconds() {
    if (!timerRunning) {
        timeRemaining = 31;
        updateTimer();
    }
}

addTimeButton3.addEventListener('click', function () {
    setTimeTo1Minutes();
});

function setTimeTo1Minutes() {
    if (!timerRunning) {
        timeRemaining = 61;
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

// вивід і'мя гравця та кількість кліків.
function endGame() {
    const playerName = prompt("Enter your name:");
    const resultMessage = playerName + " scored " + clicks + " clicks.";
    displayResultOnPage(resultMessage);
    saveGameToHistory(playerName, clicks);
    restartGame();
}

// вивід інформації на екран сторінки виведення результату-інформації на екран сторінки
function displayResultOnPage(message) {
    let resultElement = document.getElementById('result');
    if (!resultElement) {
        resultElement = document.createElement('div');
        resultElement.id = 'result';
        document.body.appendChild(resultElement);
    }
    resultElement.innerHTML = "<p>" + message + "</p>";
}

// Оновлення локального сховища
function saveGameToHistory(playerName, score) {
    const currentTime = new Date().toLocaleString();
    const storedHistory = localStorage.getItem('gameHistory');
    const existingHistory = storedHistory ? JSON.parse(storedHistory) : [];
    existingHistory.unshift({ playerName, score, time: currentTime });
    localStorage.setItem('gameHistory', JSON.stringify(existingHistory));
    updateHistory();
}

function updateHistory() {
    const storedHistory = localStorage.getItem('gameHistory');
    console.log("Stored History:", storedHistory);

    if (storedHistory) {
        try {
            gameHistory = JSON.parse(storedHistory);
        } catch (error) {
            console.error("Error parsing stored history:", error);
        }
    }

    // Виберіть конкретні властивості об'єкта для виведення
    const historyMessages = gameHistory.slice(0, 5).map(entry => `${entry.playerName}: scored ${entry.score}`);
    historyElement.innerHTML = "History: " + historyMessages.join(', ');
}

function restartGame() {
    clicks = 0;
    timeRemaining = 61;
    timerRunning = false;
    clearInterval(intervalId);
    updateClickCount();
    updateTimer();

    // Отримайте розміри вікна
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Отримайте розміри кнопки "click"
    const buttonWidth = clickButton.offsetWidth;
    const buttonHeight = clickButton.offsetHeight;

    // Розмістіть кнопку по центру екрану
    clickButton.style.position = 'absolute';
    clickButton.style.left = (windowWidth - buttonWidth) / 2 + 'px';
    clickButton.style.top = (windowHeight - buttonHeight) / 2 + 'px';

    // Додайте додатковий код, якщо потрібно
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

let hardModeEnabled = false;

// Додайте це в коді, щоб вказати, що "hard mode" увімкнено або вимкнено
const hardModeButton = document.getElementById('hardModeButton');
hardModeButton.addEventListener('click', toggleHardMode);

function toggleHardMode() {
    hardModeEnabled = !hardModeEnabled;
    if (hardModeEnabled) {
        // Тут можна додати відповідні стилі чи зміни для позначення увімкнення "hard mode"
        hardModeButton.style.backgroundColor = 'red';
    } else {
        // Стилі чи зміни для вимкнення "hard mode"
        hardModeButton.style.backgroundColor = 'white';
    }
}

function handleClick() {
    if (!timerRunning) {
        updateTimer();
        intervalId = setInterval(updateTimer, 1000);
        timerRunning = true;
    }

    clicks++;
    updateClickCount();
    changeButtonColor();

    if (hardModeEnabled) {
        // Додайте функціонал для зміни рандомного розташування кнопки у "hard mode"
        setRandomPosition();
    }
}

function setRandomPosition() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Розміри кнопки
    const buttonWidth = clickButton.offsetWidth;
    const buttonHeight = clickButton.offsetHeight;

    // Генерація випадкових координат
    let randomX = Math.floor(Math.random() * (windowWidth - buttonWidth));
    let randomY = Math.floor(Math.random() * (windowHeight - buttonHeight));

    // Перевірка, щоб не виходити за межі праворуч
    if (randomX + buttonWidth > windowWidth) {
        randomX = windowWidth - buttonWidth;
    }

    // Перевірка, щоб не виходити за межі знизу
    if (randomY + buttonHeight > windowHeight) {
        randomY = windowHeight - buttonHeight;
    }

    // Перевірка, щоб не виходити за межі зліва
    if (randomX < 0) {
        randomX = 0;
    }

    // Перевірка, щоб не виходити за межі зверху
    if (randomY < 0) {
        randomY = 0;
    }

    // Встановлення координат
    clickButton.style.position = 'absolute';
    clickButton.style.left = randomX + 'px';
    clickButton.style.top = randomY + 'px';
}