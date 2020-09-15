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
var randomQuestions;

// set of questions
var questions = [
    {
        title: "which actor is the only one who's appeared in every single Star Wars movie to date?",
        choices: ["Carrie Fisher", "Mark Hamill", "Anthony Daniels", "Warwick Davis"],
        answer: "Anthony Daniels"
    },

    {
        title: "Which stormtrooper wasn't able to complete his mission in Star Wars: The Force Awakens?",
        choices: ["FN-2705", "FN-2187", "FN-1205", "FN-1312"],
        answer: "FN-2187"
    },

    {
        title: "According to Master Yoda, how many Sith are always out there",
        choices: ["Four", "One", "Three", "Two"],
        answer: "Two"
    },

    {
        title: "What happened to Anakin Skywalker during the battle with Count Dooku",
        choices: ["He lost his left leg", "He lost his right arm", "He lost his right leg", "He won"],
        answer: "He lost his right arm"
    },

    {
        title: "What happened to Anakin Skywalker during the battle with Count Dooku",
        choices: ["He lost his left leg", "He lost his right arm", "He lost his right leg", "He won"],
        answer: "He lost his right arm"
    },

    {
        title: "Who killed Jabba?",
        choices: ["Han Solo", "C-3PO", "Luke Skywalker", "Princess Leia"],
        answer: "Princess Leia"
    },

    {
        title: "According to the Emperor, what was Luke Skywalker's weakness?",
        choices: ["His faith in the Light Side of the Force", "His faith in his friends", "His lack of vision", "His resistance to the Dark Side of the Force"],
        answer: "His faith in his friends"
    },

    {
        title: "Where did the Clone Wars begin?",
        choices: ["Tatooine", "Geonosis", "Naboo", "Coruscant"],
        answer: "Geonosis"
    },
];



// function that starts the game
function startGame() {
    // hide starting page
    startBox.classList.add("hide");
    // show question box
    questionBox.classList.remove("hide");
    // randomize questions everytime the game starts
    randomQuestions = 
    // set the questions
    startQuestions();

}

function createNextQuestion() {
    

}
