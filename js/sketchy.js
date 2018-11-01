//making the grid:

var canvas = document.querySelector(".screen-grid");
var ctx = canvas.getContext("2d");


// var timer= document.querySelector(".progress");
// var scoreboard= document.querySelector(".scoreboard");
// $(".progress").hide();
// $(".scoreboard").hide();


// getting the initial drawing dot
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

//where things get messy----------------------

   
var teamGuess = document.querySelector(".teamGuess");
var guessSubmitButton = document.querySelector(".guess-submit");

guessSubmitButton.onclick = function(){
    console.log ("team guessed " + teamGuess.value);
    
    
  
var correctGuess;
var incorrectGuess;

function compareGuessedAnswer (){
    if (teamGuess.includes(artistInput)){
      teamGuess = correctGuess;
      console.log("team guessed correctly");
      return correctGuess;
    }else{
      teamGuess = incorrectGuess;
      return incorrectGuess;
    }
    }
  }
//timer-----------------
// var i = 100;
// var counterBack = setInterval(function () {
//   i--;
//   if (i >= 0) {
//     $('.progress-bar').css('width', i + '%');
//   // } else if (i===0){
//   //       document.getElementByID(“whatsYourGuess”).style.display = ‘block’;
//   //       console.log("timer is finished"); 
//       }else{
//         console.log("Progress bar gets to 0...");
//         // TODO invoke data target for whatsYourGuess modal
//         //document.getElementById("whatsYourGuess").style.display = "block";
//     clearInterval(counterBack);
//   }
// }, 100);


 //need to add border so dot doesnt run off of canvas
 //need to add life bar https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives
 //need to add timer bar https://codeburst.io/a-countdown-timer-in-pure-javascript-f3cdaae1a1a3