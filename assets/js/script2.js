var goBack = document.querySelector("#go-back");
var clearHighscores = document.querySelector("#clear-highscores");
var listEl = document.querySelector("#list");

var highscores = {};

goBack.addEventListener("click", function (event) {
    event.preventDefault();
    window.document.location = "index.html";
})

// initializing page
init();

function clearHighscores(event) {
    event.preventDefault();
    highscores = [];

}

function init() {
    // get the stored initials
    var initialsObj = JSON.parse(localStorage.getItem("highscores"))
    if (initialsObj !== null) {
        //set object from storage to highscores obj
        highscores = initialsObj;
        //put highscores on the page
        renderHighscores();
    }
}

function renderHighscores() {
    // clear highscore before populating it
    listEl.textContent = "";
    // put in the values into the list
    for (var i = 0; i < highscores.score.length; i++) {
        var tempScore = highscores.score[i];
        var tempInitial = highscores.playerInitials[i];
        // create li to put in the values
        var li = document.createElement("li");
        li.textContent = tempInitial + " - " + tempScore;
        // append li into ordered list
        listEl.append(li);
    }
}


