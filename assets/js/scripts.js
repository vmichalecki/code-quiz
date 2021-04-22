// define variables //////////////////////////////////

let startBtn = document.getElementById('start');
let saveScore = document.getElementById('save-score');
let choiceBtn = document.getElementById('choiceBtn');
const questionsIndex = 0;
const answersIndex = 0;
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
		correctAnswer: 'ok',
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
	let setQuestion = questions[questionsIndex].question;
	for (let i = 0; i < questions.length; i++);
	document.getElementById('questions').innerHTML = ('setQuestion', JSON.stringify(setQuestion));

	for (let i = 0; i < questions.length; i++) {
		let answers = questions[i].answers;
		document.getElementById('choiceBtn').innerHTML = answers;

		// verifyAnswer();
		// loop show the choices (buttons)
		// add event listener for the each button created
		// verifyAnswer();
	}
}

// check user selection
function verifyAnswer() {
	if (onclick)
		// check the user selection against correct answer
		// incorrect remove seconds
		// set score
		// get next question
		showQuestion();
	// if questions.length
	endGame();
}

// end game
function endGame() {
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
choiceBtn.addEventListener('click', verifyAnswer);

// start button click
startBtn.addEventListener('click', startQuiz);

// save high score
saveScore.addEventListener('click', saveHighScore);
