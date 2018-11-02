// Test
// $('#team2readytoenter').on('shown.bs.modal', function () {
//   console.log('calling crazy function');
//   $('#pippo').focus();
// })  

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
  var submitButton2 = document.querySelector(".submit-button2");
  var artistInput = document.querySelector(".artistsNameOfDrawing");
  var artistInput2 = document.querySelector(".artistsNameOfDrawing2");

  submitButton.onclick = function(){
    $(".begin-game-button").hide();
    console.log("artist input has submitted " + artistInput.value);
  }

  submitButton2.onclick = function(){
    // $(".begin-game-button").hide();
    console.log("artist input has submitted " + artistInput2.value);
  }
 
  var timer= document.querySelector(".progress");
  var timer2=document.querySelector(".progress2")
  var scoreboard= document.querySelector(".scoreboard");
    $(".progress").hide();
    $(".scoreboard").hide();
    $(".screen-grid").hide();
    $(".progress2").hide();

 
  var startButton = document.querySelector(".start-button");  
  startButton.onclick = function(){
    $(".progress").show();
    $(".scoreboard").show();
    $(".screen-grid").show();
    $(".progress2").hide();

  //timer-----------------------------//
    var i = 100;
    var counterBack = setInterval(function () {
    i--;
    if (i >= 0) {
      $('.progress-bar').css('width', i + '%');
        console.log("game has started");
        }else{
          // $(".progress").hide();
          // $(".scoreboard").hide();
          // $(".screen-grid").hide();
          console.log("Drawing timer has finished");
          $('#whatsYourGuess').modal('show');
      clearInterval(counterBack);
    }
  }, 300);
  // $(".progress").hide();

  }

  var startButton2= document.querySelector(".start-button2");
  startButton2.onclick = function(){
  $(".progress2").show();
  $(".scoreboard").show();
  $(".screen-grid").show();
// timer-----------------------------//
  var j = 100;
  var counterBack = setInterval(function () {
  j--;
  if (j >= 0) {
    $('.progress-bar').css('width', j + '%');
    // $('.progress-bar2').css('width', j + '%');
      console.log("game has started");
      }else{
        // $(".progress").hide();
        //   $(".scoreboard").hide();
        //   $(".screen-grid").hide();
        console.log("Drawing timer has finished");
        $('#whatsYourGuess2').modal('show');
    clearInterval(counterBack);
  }
}, 100);
  }

  
 
var teamGuess = document.querySelector(".teamGuess");
var teamGuess2= document.querySelector(".teamGuess2");

var guessSubmitButton2 = document.querySelector(".guess-submit2")

var guessSubmitButton = document.querySelector(".guess-submit");
guessSubmitButton.onclick = function(){
  console.log ("team guessed " + teamGuess.value);
    compareGuessedAnswer ();
    $(".progress").hide();
}
guessSubmitButton2.onclick = function(){
  console.log("team guessed"+ teamGuess2.value);
    compareGuessedAnswer ();
}
    
  

var woohooButton = document.querySelector(".woohoo-button");
woohooButton.onclick = function(){
  checkForTeamOneWinner ();
}
var woohooButton2 = document.querySelector(".woohoo-button2")
  woohooButton2.onclick = function(){
    checkForTeamTwoWinner ();
}

var bummerButton = document.querySelector(".bummer-button");
// bummerButton.onclick = function(){



var bummerButton2 = document.querySelector(".bummer-button2");
  

function updateTeamOneScore(){
  var teamOneScore = document.querySelector('.teamOneScore');
  teamOneScore.textContent=(parseInt(teamOneScore.textContent) + 1);
}  

function updateTeamTwoScore(){
  var teamTwoScore = document.querySelector('.teamTwoScore');
  teamTwoScore.textContent=(parseInt(teamTwoScore.textContent) + 1);
}

var correctGuess;
var incorrectGuess; 
function compareGuessedAnswer (){

  var teamGuess = document.querySelector(".teamGuess");
  var teamGuess2= document.querySelector(".teamGuess2");
  var artistInput = document.querySelector(".artistsNameOfDrawing");
  var artistInput2 = document.querySelector(".artistsNameOfDrawing2");

  if (teamGuess.value.includes(artistInput.value)){
    teamGuess.value = correctGuess;
    console.log("team guessed correctly");
    $('#correctModal').modal('show');
    updateTeamOneScore ()
    
  }
  else if (teamGuess.value = incorrectGuess){
  console.log("team guessed incorrectly");
  $('#incorrectModal').modal('show');
  
}
  else if (teamGuess2.value.includes(artistInput2.value)){
    teamGuess2.value = correctGuess;
    console.log("team guessed correctly");
    $('#correctModal').modal('show');
    updateTeamTwoScore ()
  }
  else{
    teamGuess2.value = incorrectGuess;
    console.log("team guessed incorrectly");
    $('#incorrectModal').modal('show');
   
  }
}

function checkForTeamOneWinner () {
  var teamOneScore = document.querySelector('.teamOneScore');
    if (parseInt(teamOneScore.textContent)===3){
    $('#gameOverModal').modal('show');
    console.log("team one wins");

  }else{
    console.log("no winner yet");
    $('#team2readytoenter').modal('show');

  }
}
function checkForTeamTwoWinner () {
  var teamTwoScore = document.querySelector('.teamTwoScore');
  if (parseInt(teamTwoScore.textContent)===3){
    $('#gameOverModal2').modal('show');
    console.log("team two wins")

  }else{
      console.log("no winner yet");
      $('#exampleModalCenter').modal('show');
  
    }
  }





  // display if answer is correct or not and then update score for team 2
  // add a function for when a team wins
  // add turns between team 1 and team 2