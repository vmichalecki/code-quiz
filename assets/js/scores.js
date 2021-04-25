let highScores = document.getElementById('high-scores');
let highScoresArray = JSON.parse(localStorage.getItem('highScoresArray')) || [];

function displayScores() {
	highScores.innerHTML = highScoresArray
		.map((score) => {
			return `<li>${score.name}<span></span>${score.score}</li>`;
		})
		.join('');
}

displayScores();
