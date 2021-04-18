let question = document.getElementById('question');
let choice1 = document.getElementById('choice-1');
let choice2 = document.getElementById('choice-2');
let choice3 = document.getElementById('choice-3');
let choice4 = document.getElementById('choice-4');

let questions = {
	question: "What's your favorite color?",
	choice1: 'rebecca purple',
	choice2: 'lemon chiffon',
	choice3: 'hot pink',
	choice4: 'alice blue',
};
console.log(questions);

// write a function to load a question and subsequent choices

choice1.addEventListener('click', function () {});
choice2.addEventListener('click', function () {});
choice3.addEventListener('click', function () {});
choice4.addEventListener('click', function () {});

// write function to get highest score
// write function to start the timer counting down
function init() {
	getHighestScore();
}

// function to check if choice is correct, displays correct or incorrect briefly, loads next question

// event listener listening for click on one of the choices

// when start button is clicked, the timer starts and the first questions loads

// event listener listening for click on start button

// page loads and high scores from local storage display in top left and timer displays in top right
startButton.addEventListener('click', startGame);

// use init to start the page
init();
