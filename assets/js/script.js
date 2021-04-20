// page loads
// link to high scores from local storage is loaded on the top
// start button with click event listender initiates the game
// when clicked, timer starts and first question/set of answers displays and instructions disappear
// each answer is a button with a click event listener
// when the user chooses an answer, a function evaluates if the answer is correct or not
// if the answer is correct, increase score, display 'correct', and load the next question
// if the answer is incorrect, do nothing to the score, subtract time from the clock, display 'incorrect', and load the next question
// if all questions are answered before time is up, then score is displayed with form to enter initials which are stored in local storage upon the click of a button with an event listener, and a button with an event listener listening for a click to restart the game appears
// if the timer runs out before the end of the game, then score is displayed with form to enter initials which are stored in local storage upon the click of a button with an event listener, and a button with an event listener listening for a click to restart the game appears

let body = document.body;
let quiz = document.createElement('div');
let h2El = document.createElement('h2');
let choice1 = document.createElement('button');
let choice2 = document.createElement('button');
let choice3 = document.createElement('button');
let choice4 = document.createElement('button');

const questionIndex = 0;

body.appendChild(quiz);
quiz.appendChild(h2El);
quiz.appendChild(choice1);
quiz.appendChild(choice2);
quiz.appendChild(choice3);
quiz.appendChild(choice4);

const questions = [
    {
        num: 'question 1',
        q: "what's your favorite color?",
        a: 'rebecca purple',
        b: 'lemon chiffon',
        c: 'hot pink',
        d: 'alice blue',
        correct: 'hot pink',
    },
    {
        num: 'question 2',
        q: "what's your favorite color?",
        a: 'rebecca purple',
        b: 'lemon chiffon',
        c: 'hot pink',
        d: 'alice blue',
        correct: 'hot pink',
    },
    {
        num: 'question 3',
        q: "what's your favorite color?",
        a: 'rebecca purple',
        b: 'lemon chiffon',
        c: 'hot pink',
        d: 'alice blue',
        correct: 'hot pink',
    },
    {
        num: 'question 4',
        q: "what's your favorite color?",
        a: 'rebecca purple',
        b: 'lemon chiffon',
        c: 'hot pink',
        d: 'alice blue',
        correct: 'hot pink',
    },
    {
        num: 'question 5',
        q: "what's your favorite color?",
        a: 'rebecca purple',
        b: 'lemon chiffon',
        c: 'hot pink',
        d: 'alice blue',
        correct: 'hot pink',
    },
];

function showQuestion() {
    h2El.innerHTML = questions.q;
    choice1.innerHTML = questions.a;
    choice2.innerHTML = questions.b;
    choice3.innerHTML = questions.c;
    choice4.innerHTML = questions.d;

    choice1.addEventListener('click', verifyAnswer);
    choice2.addEventListener('click', verifyAnswer);
    choice3.addEventListener('click', verifyAnswer);
    choice4.addEventListener('click', verifyAnswer);
    //loop through array of objects
    let setQuestion = questions[questionIndex];
    for (let i = 0; i < questions.length; i++);
}

function verifyAnswer() {
    const alertCorrect = alert('well done');
    const alertIncorrect = alert('you suck');
    if (questions.a || questions.b || questions.c || questions.d === questions.correct) {
        alertCorrect;
    } else {
        alertIncorrect;
    }
}

console.log(body);

// write function that loads high scores and sets tinmer to 0 when page loads

function init() {
    window;
}

// init();
