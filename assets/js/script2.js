var goBack = document.querySelector("#go-back");
var clearHighscores = document.querySelector("#clear-highscores");
var listEl = document.querySelector("#list");

var highscores = [];

// when goback is clicked, take page back to index.html
goBack.addEventListener("click", function (event) {
    event.preventDefault();
    window.document.location = "index.html";
})
// when clear highscores is clicked, empty object
clearHighscores.addEventListener("click", function (event) {
    event.preventDefault();
    // clear leaderboard
    listEl.textContent = "";
})


// initializing page
init();

function clearHighscores(event) {
    event.preventDefault();
    highscores = {};

}

function init() {
    // get the stored initials
    var initialsObj = JSON.parse(localStorage.getItem("highscores"))
    if (initialsObj !== null) {
        //set object from local storage to highscores obj
        highscores = initialsObj;
        //put highscores on the page
        renderHighscores();
    }
}

function renderHighscores() {
    // clear highscore before populating it
    listEl.textContent = "";
    // put in the values into the list
    for (var i = 0; i < highscores.length; i++) {
        // setting values to a temp variable
        var tempScore = highscores[i].score;
        var tempInitial = highscores[i].name;
        // create li to put in the values
        var li = document.createElement("li");
        li.textContent = tempInitial + " - " + tempScore;
        // append li into ordered list
        listEl.append(li);
    }
}


