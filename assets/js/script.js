var displayBoxEl = document.querySelector(".questionBox");
var timerEL = document.querySelector(".timer");
var resultMessageEl = document.querySelector(".resultMessage");
var titleEl = document.querySelector("#title");
var songEl = document.querySelector("#song");

// object that has the highscores
var highscoresArr = [];

// creating p tag for timer
var timerTextEl = document.createElement("p");
timerTextEl.setAttribute("id", "timerText")
// creating result message
var resultMessage = document.createElement("h6");
//  creating instruction message/questions 
var questionText = document.createElement("h3");
questionText.setAttribute("id", "questions")
// creating start button
var startButton = document.createElement("button");
startButton.setAttribute("id", "startbutton")

// timer variable
var timer = 0;
// index for question array
var index = 0;
// starts quiz when start button is clicked
startButton.addEventListener("click", startQuiz);
// sets up the starting page

openingPage();

function startQuiz() {
    songEl.play();
    // displays times after quiz starts
    displayTimer();
    // goes to the first question
    nextQuestion();
}

function openingPage() {
    // setting timer and index to initial value
    timer = 75;
    index = 0;
    // adding the instructions to the starting page
    questionText.textContent = "Dare to test your Star Wars knowledge?! Try to get all of them right and claim the title of Jedi Master or Sith Lord.";
    // adding label to start button
    startButton.textContent = "Start Quiz!";
    // append both elements to the starting page
    displayBoxEl.append(questionText, startButton);
}

function lastPage() {
    // clears result message
    resultMessageEl.textContent = ""
    // stores the final timer
    var finalScore = timer;
    // creating form for initials
    var inputBox = document.createElement("form");
    // adding and id to the form
    inputBox.setAttribute("id", "input-form");
    // creating label for form
    var inputLabel = document.createElement("label");
    inputLabel.textContent = "Enter Initials: ";
    // creating the input bar
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "initials");
    // creating submit button for form
    var submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Submit");
    // append all of the form elements to the form
    inputBox.append(inputLabel, input, submitButton);

    // if timer is negative, set final score to 0
    if (finalScore < 0) {
        finalScore = 0;
    }
    // erases the questions to start fresh
    displayBoxEl.textContent = "";
    // gets rid of timer
    timerEL.setAttribute("class", "hide");
    // last page title
    titleEl.textContent = "Welcome to the End";
    // adds final mesasge
    questionText.textContent = "Your final score is " + finalScore;
    // puts all elements on the page
    displayBoxEl.append(titleEl, questionText, inputBox);

    // when click on submit, store the initials in local storage
    inputBox.onsubmit = function (event) {
        event.preventDefault();
        // check if theres anything on the local storage
        // creating variable to store the information in the local storage
        var storedInfo = JSON.parse(localStorage.getItem("highscores"));
        // if theres stuff in the local storage
        if (storedInfo !== null) {
            //give the info to the highscore array
            highscoresArr = storedInfo;
        }
        //create object to store initials and score
        var highscoreObj = {
            name: inputBox.initials.value,
            score: finalScore
        }
        // push object into highscore array
        highscoresArr.push(highscoreObj);


        localStorage.setItem("highscores", JSON.stringify(highscoresArr));
        // go back to starting screen
        songEl.pause();
        window.document.location = "highscores.html";
    }


}

function displayTimer() {
    // display timer
    timerTextEl.textContent = "Timer: " + timer;
    timerEL.append(timerTextEl)

    var quizTimer = setInterval(function () {
        // decrement timer
        timer--;
        // update timer on the page
        timerTextEl.textContent = "Timer: " + timer;
        // stop timer once it reaches 0 or we're at the last page
        if (timer <= 0) {
            clearInterval(quizTimer);
            lastPage();
        }

    }, 1000)
}

function nextQuestion() {
    // if we're done with the last question or time runs out go to last page
    if (index >= questions.length || timer <= 0) {
        lastPage();
    }

    else {
        // current question is stored in this variable
        var currentQuestion = questions[index];

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
        //display correct if answer is correct
        resultMessage.textContent = "Correct!";
        resultMessageEl.append(resultMessage);


    }
    else {
        timer = timer - 10;
        // display incorrect if answer is incorrect
        resultMessage.textContent = "Incorrect!";
        resultMessageEl.append(resultMessage);
    }

    // move index to next question
    index++;

    nextQuestion();
}