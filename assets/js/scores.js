// duplicated variables from script.js
let highScores = document.getElementById('high-scores');
let highScoresArray = JSON.parse(localStorage.getItem('highScoresArray')) || [];

// displays top 10 high scores sorted from highest to lowest
function displayScores() {
	highScoresArray.sort((a, b) => b.score - a.score);
	highScoresArray.splice(10);

	highScores.innerHTML = highScoresArray
		.map((score) => {
			return `<li><p>${score.name}<span></span></p><p>${score.score}<span></span></p></li>`;
		})
		.join('');
}

displayScores();
