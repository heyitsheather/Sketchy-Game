//making the grid:
var canvas = document.querySelector(".screen-grid");
var ctx = canvas.getContext("2d");

// getting the initial drawing dot
//need to add border so dot doesnt run off of canvas
    var dotImg = new Image();
    dotImg.src = "./images/dot.jpg";
    
// initial dot position
    var dotx = 20;
    var doty = 20;

//start drawing
    drawingLoop();

    document.onkeydown = function (event) {
        switch (event.keyCode) {
            case 37: // left arrow
              dotx -= 10;
              break;
        
            case 38: // up arrow
              doty-= 10;
              break;
        
            case 39: // right arrow
              dotx+= 10;
              break;
        
            case 40: // down arrow
              doty+= 10;
              break;
          }
        };
    
        function drawingLoop() {
         
            ctx.drawImage(dotImg, dotx, doty, 10, 10);
            requestAnimationFrame(function () {
            drawingLoop();
            });
          }

  var submitButton = document.querySelector(".submit-button");
  var artistInput = document.querySelector(".artistsNameOfDrawing");

  submitButton.onclick = function(){
    $(".begin-game-button").hide();
    console.log("artist input has submitted " + artistInput.value);
  }
 
  var timer= document.querySelector(".progress");
  var scoreboard= document.querySelector(".scoreboard");
    $(".progress").hide();
    $(".scoreboard").hide();
    $(".screen-grid").hide();
 
  var startButton = document.querySelector(".start-button");  
  startButton.onclick = function(){
    $(".progress").show();
    $(".scoreboard").show();
    $(".screen-grid").show();
  //timer-----------------------------//
    var i = 100;
    var counterBack = setInterval(function () {
    i--;
    if (i >= 0) {
      $('.progress-bar').css('width', i + '%');
        console.log("game has started");
        }else{
          console.log("Drawing timer has finished");
          $('#whatsYourGuess').modal('show');
      clearInterval(counterBack);
    }
  }, 100);
  }
 
var teamGuess = document.querySelector(".teamGuess");
var guessSubmitButton = document.querySelector(".guess-submit");
guessSubmitButton.onclick = function(){
  console.log ("team guessed " + teamGuess.value);
    compareGuessedAnswer ();
    
  
}
var woohooButton = document.querySelector(".woohoo-button")
woohooButton.onclick = function(){
  checkForWinner ();
}

var teamOneScore = document.querySelector('.teamOneScore');
var teamTwoScore = document.querySelector('.teamTwoScore');
function updateTeamOneScore(){
  teamOneScore.textContent=(parseInt(teamOneScore.textContent) + 1);
}  

function updateTeamTwoScore(){
  teamTwoScore.textContent=(parseInt(teamTwoScore.textContent) + 1);
}

var correctGuess;
var incorrectGuess;
function compareGuessedAnswer (){
  if (teamGuess.value.includes(artistInput.value)){
    teamGuess.value = correctGuess;
    console.log("team guessed correctly");
    $('#correctModal').modal('show');
    updateTeamOneScore ()
    return correctGuess;
  }else{
    teamGuess.value = incorrectGuess;
    console.log("team guessed incorrectly");
    $('#incorrectModal').modal('show');
    return incorrectGuess;
  }
  }

  function checkForWinner () {
    if (teamOneScore.text = "3"){
    $('#gameOverModal').modal('show');

  }else if (teamTwoScore.text = "3"){
    $('#gameOverModal').modal('show');

  }else{
    console.log("no winner yet")
  }
}




  // display if answer is correct or not and then update score
  // add a function for when a team wins
  // add turns between team 1 and team 2