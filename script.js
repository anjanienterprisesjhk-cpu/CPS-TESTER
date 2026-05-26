let clicks = 0;
let timeLeft = 10;
let gameStarted = false;

const button = document.getElementById("clickButton");
const clicksText = document.getElementById("clicks");
const timeText = document.getElementById("time");
const cpsText = document.getElementById("cps");

button.addEventListener("click", () => {

    // Replay game if finished
    if (timeLeft <= 0) {
        resetGame();
        return;
    }

    // Start game on first click
    if (!gameStarted) {
        startGame();
    }

    clicks++;

    clicksText.innerText = clicks;
});

alert("NEW CODE WORKING");

function startGame() {

    gameStarted = true;

    const timer = setInterval(() => {

        timeLeft--;

        timeText.innerText = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timer);

            const cps = (clicks / 10).toFixed(2);

            cpsText.innerText = cps;

            button.innerText = "REPLAY";
        }

    }, 1000);
}

function resetGame() {

    clicks = 0;
    timeLeft = 10;
    gameStarted = false;

    clicksText.innerText = clicks;
    timeText.innerText = timeLeft;
    cpsText.innerText = 0;

    button.innerText = "CLICK FAST!";
}