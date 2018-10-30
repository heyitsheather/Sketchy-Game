//making the grid:

var canvas = document.querySelector(".screen-grid");
var ctx = canvas.getContext("2d");

  
// attempting the grid underneath 
//for (var i=0; i< 50; i++){
//     for (var j=0; j< 70; j++){

//     }}



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
          //timer bar
          function progress(timeleft, timetotal, $element) {
            var progressBarWidth = timeleft * $element.width() / timetotal;
            $element
                .find('div')
                .animate({ width: progressBarWidth }, 500)
                .html(timeleft + " seconds to go");
            if(timeleft > 0) {
                setTimeout(function() {
                    progress(timeleft - 1, timetotal, $element);
                }, 1000);
            }
        };
        
        progress(180, 180, $('.progressBar'));
          //need to add border so dot doesnt run off of canvas
          
          //need to add life bar https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives
          //need to add timer bar https://codeburst.io/a-countdown-timer-in-pure-javascript-f3cdaae1a1a3
          
          //MODAL CODE-------------

          // Get the modal
var modal = document.getElementById('instructionsBox');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
     