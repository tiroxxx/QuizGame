// connecting the start button to this variable
var startButton = document.getElementById("startBtn");
// when start button is click, startGame function is called
startButton.addEventListener("click", startGame);
// connecting the start box to this variable
var startBox = document.getElementById("startingBox");
// connecting the question container to this variable
var questionBox = document.getElementById("questionBox");
// connecting answer buttons to this variable
var answerButton = document.querySelector(".answerBtn");
// connecting question box to this variable
var answerBox = document.getElementById("questionBox");

var questionIndex = 0;


var questions = [
    {
        title: "question1",
        choices: ["Choice 1", "Choice 2", "Choice3", "Choice 4"],
        answer: "Choice 1"
    },

    {
        title: "question2",
        choices: ["Choice 1", "Choice 2", "Choice3", "Choice 4"],
        answer: "Choice 1"
    },

    {
        title: "question3",
        choices: ["Choice 1", "Choice 2", "Choice3", "Choice 4"],
        answer: "Choice 2"
    },

    {
        title: "question4",
        choices: ["Choice 1", "Choice 2", "Choice3", "Choice 4"],
        answer: "Choice 3"
    },
];



// function that starts the game
function startGame() {
    console.log("started");
    // hide starting page
    startBox.classList.add("hide");
    // show question box
    questionBox.classList.remove("hide");
    // set the questions
    startQuestions();

}



var questions = [
    {
        title: "question1",
        choices: ["Choice 1", "Choice 2", "Choice3", "Choice 4"],
        answer: "answer from choices"
    },

    {
        title: "question2",
        choices: ["Choice 1", "Choice 2", "Choice3", "Choice 4"],
        answer: "answer from choices"
    },

    {
        title: "question3",
        choices: ["Choice 1", "Choice 2", "Choice3", "Choice 4"],
        answer: "answer from choices"
    },

    {
        title: "question4",
        choices: ["Choice 1", "Choice 2", "Choice3", "Choice 4"],
        answer: "answer from choices"
    },
];