// connecting the start button to this variable
var startButton = document.getElementById("startBtn");
// when start button is click, startGame function is called
startButton.addEventListener("click", startGame);
// connecting the start box to this variable
var startBox = document.getElementById("startingBox");
// connecting the question container to this variable
var questionBox = document.getElementById("questionBox");



// function that starts the game
function startGame() {
    startButton.classList.add("hide")


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
]