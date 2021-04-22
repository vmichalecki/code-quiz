// define variables //////////////////////////////////

let startBtn = document.getElementById('start');
let saveScore = document.getElementById('save-score');
const questionsIndex = 0;
const answersIndex = 0;
let body = document.body;

let questions = [
	{
		question: 'what is your favorite color?',
		answers: ['blue', 'hotpink', 'red', 'green'],
		correctAnswer: 'hotpink',
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

	let choice1 = document.createElement('button');
	let choice2 = document.createElement('button');
	let choice3 = document.createElement('button');
	let choice4 = document.createElement('button');
	document.getElementById('choices').appendChild(choice1);
	document.getElementById('choices').appendChild(choice2);
	document.getElementById('choices').appendChild(choice3);
	document.getElementById('choices').appendChild(choice4);


    question.choices.forEach(choices => {
        const button = document.createElment('button')
        button.innertext = answer.text
    })
    let setChoices = questions.answers[answersIndex];
    choice1.textContent = questions.answers;
	// loop show the choices (buttons)
	// add event listener for the each button created
	// verifyAnswer();
}

// check user selection
function verifyAnswer() {
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
// start button click
startBtn.addEventListener('click', startQuiz);

// save high score
saveScore.addEventListener('click', saveHighScore);
