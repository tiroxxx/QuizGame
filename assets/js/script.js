var displayBoxEl = document.querySelector(".questionBox");

var timerEL = document.querySelector(".timer");

var resultMessageEl = document.querySelector(".resultMessage");

//  creating instruction message/questions 
var questionText = document.createElement("p");
// creating start button
var startButton = document.createElement("button");
// timer variable
var timer = 75;
// index for question array
var index = 0;
// starts quick when start button is clicked
startButton.addEventListener("click", startQuiz);
// sets up the starting page
openingPage();

function startQuiz() {
    // displays times after quiz starts
    displayTimer();
    // goes to the first question
    nextQuestion();
}

function openingPage() {
    // adding the instructions to the starting page
    questionText.textContent = "Dare to test your Star Wars knowledge?! Try to get all of them right and claim the title of Jedi Master or Sith Lord.";
    // adding label to start button
    startButton.textContent = "Start Quiz!";
    // append both elements to the starting page
    displayBoxEl.append(questionText, startButton);
}

function lastPage() {
    // stores the final timer
    var finalScore = timer;
    // if timer is negative, set it to 0
    if (finalScore < 0) {
        finalScore = 0;
    }
    // erases the questions to start fresh
    displayBoxEl.textContent = "";
    // gets rid of timer
    timerEL.textContent = "";

    questionText.textContent = "Your final score is " + finalScore;
    displayBoxEl.append(questionText);

}

function displayTimer() {
    // display timer
    timerEL.textContent = timer;

    var quizTimer = setInterval(function () {
        // decrement timer
        timer--;
        // update timer on the page
        timerEL.textContent = timer;
        // stop timer once it reaches 0
        if (timer <= 0) {
            clearInterval(quizTimer);
        }

    }, 1000)

}

function nextQuestion() {
    // if we're done with the last question, go to last page
    if (index >= questions.length) {
        lastPage();
    }

    else {
        // current question is stored in this variable
        var currentQuestion = questions[index];

        console.log(currentQuestion);
        // empty page to get it ready for next question
        displayBoxEl.textContent = "";
        // setting a question in the "questions" object to the p tag on the page
        questionText.textContent = currentQuestion.title;
        // adding question to page
        displayBoxEl.append(questionText);

        var questionBox = document.createElement("div")

        for (let i = 0; i < currentQuestion.choices.length; i++) {
            //  create button for answers
            var answerButton = document.createElement("button");
            // add the answer to the buttons
            answerButton.textContent = currentQuestion.choices[i];
            // give event to the button
            answerButton.addEventListener("click", checkAnswer);
            // add buttons to page
            questionBox.append(answerButton);
        }

        displayBoxEl.append(questionBox);
    }
}

function checkAnswer(event) {
    // get the text of the choice to compare
    var userAnswer = event.target.textContent;
    // checking if user answered correctly
    if (userAnswer === questions[index].answer) {

    }
    else {
        timer = timer - 10;
    }

    // move index to next question
    index++;

    nextQuestion();
}