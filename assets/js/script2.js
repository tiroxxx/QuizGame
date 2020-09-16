var goBack = document.querySelector("#go-back");
var clearHighscores = document.querySelector("#clear-highscores");

var highscores = [];

goBack.addEventListener("click", function(event){ 
    event.preventDefault();
    window.document.location = "index.html";
})

function clearHighscores (event) {
    event.preventDefault();
    highscores = [];

}

function init () {
    // get the stored initials
    var initialsArr = JSON.parse(localStorage.getItem("initialsArr"))
    if (initialsArr !== NULL) {
        //
    }

}
