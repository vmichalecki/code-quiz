
var viewHighScoresButton = document.getElementById("view-high-scores");
var scoreIdCounter = 0;
var highScoresArr = JSON.parse(localStorage.getItem("highScoresArr")) || [];
var maxHighScores = 5;
var resultsContainerEl = document.getElementById("results-container");
var saveHighScoreButton = document.getElementById("save-high-score");
var highScoresContainerEl = document.getElementById("high-scores-container");
var highScoresListEl = document.getElementById("high-scores-list");
var tryAgainButton = document.getElementById("try-again");

function endQuiz() {
    questionContainerEl.classList.add("hide");
    resultsContainerEl.classList.remove("hide");

    var userScore = document.getElementById("score");
    userScore.textContent = timerValue;
};

function saveScore(event) {
    event.preventDefault();

    var userInitials = document.getElementById("user-initials");

    var score = {
        score: timerValue,
        initials: userInitials.value
    };
    highScoresArr.push(score);
    highScoresArr.sort( (a,b) => b.score - a.score);
    highScoresArr.splice(5);

    localStorage.setItem("highScoresArr", JSON.stringify(highScoresArr));

    showHighScoresList();
};

function showHighScoresList() {
    viewHighScoresButton.classList.add("hide");
    timerEl.classList.add("hide");
    introContainerEl.classList.add("hide");
    questionContainerEl.classList.add("hide");
    wrongEl.classList.add("hide");
    correctEl.classList.add("hide");
    resultsContainerEl.classList.add("hide");

    highScoresContainerEl.classList.remove("hide");

    highScoresListEl.innerHTML = highScoresArr.map(score => {
        return `<li>${score.initials}<span> , </span>${score.score}</li>`;
    })
    .join("");
};

viewHighScoresButton.addEventListener("click", showHighScoresList);

resultsContainerEl.addEventListener("submit", saveScore);
