// define variables //////////////////////////////////
let startBtn = document.getElementById('start');
let saveScore = document.getElementById('save-score');
let choiceBtn0 = document.getElementById('choice-btn-0');
let choiceBtn1 = document.getElementById('choice-btn-1');
let choiceBtn2 = document.getElementById('choice-btn-2');
let choiceBtn3 = document.getElementById('choice-btn-3');
let questionsIndex = 0;
let answersIndex = 0;
let body = document.body;
// const buttonEl = document.container.getElementsByTagName('button');

let questions = [
	{
		question: 'what is your favorite color?',
		answers: ['blue', 'hot pink', 'red', 'green'],
		correctAnswer: 'hot pink',
	},
	{
		question: 'how much is too much?',
		answers: ['never too much', 'much too much', 'what?', 'two'],
		correctAnswer: 'never too much',
	},
	{
		question: 'why?',
		answers: ['cuz', 'because', 'why not?', 'ok'],
		correctAnswer: 'ok',
	},
	{
		question: 'where are we?',
		answers: ['everywhere', 'nowhere', 'lost?', "who is'we'?"],
		correctAnswer: 'nowhere',
	},
];

// functions //////////////////////////////////
// start quiz - init
function startQuiz() {
	// start timer
	// find dom element to show the question
	showQuestion();
}

// get the next question
function showQuestion() {
	let setQuestion = questions[questionsIndex];

	document.getElementById('questions').innerHTML = setQuestion.question;

	let answers = setQuestion.answers;
	for (let i = 0; i < answers.length; i++) {
		document.querySelector(`#choice-btn-${i}`).innerHTML = answers[i];
		document.querySelector(`#choice-btn-${i}`).setAttribute('value', answers[i]);
	}

	verifyAnswer();
}

// check user selection
function verifyAnswer() {
	if (this.value === questions[questionsIndex].correctAnswer) {
		alert('correct');
		questionsIndex++;
		if (questionsIndex < questions.length) {
			showQuestion();
		} else {
			endGame();
		}
	} else {
	}

	// check the user selection against correct answer
	// incorrect remove seconds
	// set score
	// get next question
	// showQuestion();
	// if questions.length
}

// end game
function endGame() {
	alert('gameov er ');
	// set their score
	// show end screen
	// clear out timer
}

// save high score
function saveHighScore() {
	// prompt for initials
	// save score to localstorage
}

// event listeners //////////////////////////////////
// choiceBtn.addEventListener('click', verifyAnswer);
choiceBtn0.addEventListener('click', verifyAnswer);
choiceBtn1.addEventListener('click', verifyAnswer);
choiceBtn2.addEventListener('click', verifyAnswer);
choiceBtn3.addEventListener('click', verifyAnswer);

// start button click
startBtn.addEventListener('click', startQuiz);

// save high score
saveScore.addEventListener('click', saveHighScore);
