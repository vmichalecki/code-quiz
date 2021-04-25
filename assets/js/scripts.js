let startBtn = document.getElementById('start');
let choiceBtn0 = document.getElementById('choice-btn-0');
let choiceBtn1 = document.getElementById('choice-btn-1');
let choiceBtn2 = document.getElementById('choice-btn-2');
let choiceBtn3 = document.getElementById('choice-btn-3');
let instructions = document.getElementById('instructions');
let questionContainer = document.getElementById('question-container');
let form = document.getElementById('form');
let initialInput = document.getElementById('initials');
let saveScore = document.getElementById('save-score');
let body = document.body;
let questionsIndex = 0;
let countdown = 100;

let highScoresArray = JSON.parse(localStorage.getItem('highScoresArray')) || [];

let questions = [
	{
		question: 'what is your favorite color?',
		answers: ['lemon chiffon', 'hot pink', 'rebecca purple', 'goldenrod'],
		correctAnswer: 'hot pink',
	},
	{
		question: 'how much is too much?',
		answers: ['there is no such thing', 'much too much', 'what?', 'two'],
		correctAnswer: 'there is no such thing',
	},
	{
		question: 'why?',
		answers: ['cuz', 'because', 'why not?', 'ok'],
		correctAnswer: 'ok',
	},
	{
		question: 'where are we?',
		answers: ['everywhere', 'nowhere', 'lost?', "who is 'we'?"],
		correctAnswer: "who is 'we'?",
	},
];

function init() {
	instructions.style.display = 'block';
	questionContainer.style.display = 'none';
	form.style.display = 'none';
}

function startQuiz() {
	instructions.style.display = 'none';
	questionContainer.style.display = 'block';
	showQuestion();
	startTimer();
	if (startBtn.style.display === 'none') {
		startBtn.style.display = 'block';
	} else {
		startBtn.style.display = 'none';
	}
}

function startTimer() {
	var interval = setInterval(function () {
		countdown--;
		document.getElementById('timer').textContent = countdown;
		if (countdown <= 0 || questionsIndex >= questions.length) {
			clearInterval(interval);
			endGame();
		}
	}, 1000);
}

function showQuestion() {
	let setQuestion = questions[questionsIndex];
	document.getElementById('questions').innerHTML = setQuestion.question;

	let answers = setQuestion.answers;
	for (let i = 0; i < answers.length; i++) {
		document.querySelector(`#choice-btn-${i}`).innerHTML = answers[i];
		document.querySelector(`#choice-btn-${i}`).setAttribute('value', answers[i]);
	}
}

function verifyAnswer() {
	if (this.value === questions[questionsIndex].correctAnswer) {
		questionsIndex++;
		if (questionsIndex < questions.length) {
			showQuestion();
		}
	} else {
		console.log('wrong');
		countdown -= 10;
	}
}

function endGame() {
	alert('game over');
	questionContainer.style.display = 'none';
	form.style.display = 'block';
}

function saveHighScore(event) {
	event.preventDefault();
	let initialInput = document.getElementById('initials').value;

	let highScores = {
		name: initialInput,
		score: countdown,
	};

	highScoresArray.push(highScores);
	highScoresArray.sort((a, b) => b.highScores - a.highScores);

	localStorage.setItem('highScoresArray', JSON.stringify(highScoresArray));

	linkToHighScores();
}

function linkToHighScores() {
	window.location.href = './high-scores.html';
}

// event listeners //////////////////////////////////
choiceBtn0.addEventListener('click', verifyAnswer);
choiceBtn1.addEventListener('click', verifyAnswer);
choiceBtn2.addEventListener('click', verifyAnswer);
choiceBtn3.addEventListener('click', verifyAnswer);
startBtn.addEventListener('click', startQuiz);
saveScore.addEventListener('click', saveHighScore);

init();

// TO DO
// when game ends, notify user of their final score and instruct user to enter initals to save score
// when you follow the high scores link, it displays scores from localStorage
// notify user if answer is incorrect
// add comments
// add screenshot to readme
// add css to high scores innerHTML
