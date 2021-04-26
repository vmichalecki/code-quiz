// global variables
let startBtn = document.getElementById('start');
let instructions = document.getElementById('instructions');
let questionContainer = document.getElementById('question-container');
let choiceBtn0 = document.getElementById('choice-btn-0');
let choiceBtn1 = document.getElementById('choice-btn-1');
let choiceBtn2 = document.getElementById('choice-btn-2');
let choiceBtn3 = document.getElementById('choice-btn-3');
let form = document.getElementById('form');
let initialInput = document.getElementById('initials');
let saveScore = document.getElementById('save-score');

let body = document.body;

let questionsIndex = 0;
let countdown = 150;

let highScoresArray = JSON.parse(localStorage.getItem('highScoresArray')) || [];

let questions = [
	{
		question: "how do you know you're not dreaming right now?",
		answers: ["i can't die in my dreams", 'i can see my hands', 'i can smell the gas leak', "i don't dream"],
		correctAnswer: 'i can smell the gas leak',
	},
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
		question: 'say when',
		answers: ['when?', 'when.', 'why?', 'no'],
		correctAnswer: 'when.',
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
	{
		question: 'what color is the sun?',
		answers: ['yellow', 'the color of fire', 'what sun?', 'the color of my eyes'],
		correctAnswer: 'the color of my eyes',
	},
	{
		question: 'who are you?',
		answers: [
			'i am me',
			'i am not my mind nor body, but an awareness of their dual existence',
			'who am i?',
			'who are you?',
		],
		correctAnswer: 'who am i?',
	},
	{
		question: 'who am i?',
		answers: ['you are me', 'who are you?', 'what is this?', "i don't know"],
		correctAnswer: "i don't know",
	},
	{
		question: 'what is life?',
		answers: ['life is an experiment', 'life is suffering', 'life is being alive', 'life is a simulation'],
		correctAnswer: 'life is suffering',
	},
];

// loads the page with only the instructions, start button, and header
function init() {
	instructions.style.display = 'block';
	questionContainer.style.display = 'none';
	form.style.display = 'none';
}

// starts the quiz, displays first question, starts the countdown, hides the instructions
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

// timer countdown function
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

// loops through each question and answer set until it's finished
function showQuestion() {
	let setQuestion = questions[questionsIndex];
	document.getElementById('questions').innerHTML = setQuestion.question;

	let answers = setQuestion.answers;
	for (let i = 0; i < answers.length; i++) {
		document.querySelector(`#choice-btn-${i}`).innerHTML = answers[i];
		document.querySelector(`#choice-btn-${i}`).setAttribute('value', answers[i]);
	}
}

// checks if the answer is correct or not
function verifyAnswer() {
	if (this.value === questions[questionsIndex].correctAnswer) {
		questionsIndex++;
		if (questionsIndex < questions.length) {
			showQuestion();
		}
	} else {
		countdown -= 10;
	}
}

// finishes the game
function endGame() {
	questionContainer.style.display = 'none';
	form.style.display = 'block';
	document.getElementById('finalScore').innerHTML = countdown;
}

// saves the high score to localStorage
function saveHighScore(event) {
	event.preventDefault();
	let initialInput = document.getElementById('initials').value;
	let highScores = {
		name: initialInput,
		score: countdown,
	};

	highScoresArray.push(highScores);
	localStorage.setItem('highScoresArray', JSON.stringify(highScoresArray));
	linkToHighScores();
}

// links to another HTML page with the high scores displayed
function linkToHighScores() {
	window.location.href = './high-scores.html';
}

// event listeners
choiceBtn0.addEventListener('click', verifyAnswer);
choiceBtn1.addEventListener('click', verifyAnswer);
choiceBtn2.addEventListener('click', verifyAnswer);
choiceBtn3.addEventListener('click', verifyAnswer);
startBtn.addEventListener('click', startQuiz);
saveScore.addEventListener('click', saveHighScore);

init();
