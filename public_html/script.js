var play = document.getElementById("play");
var video = document.getElementById("Video1");
var skipBack = document.getElementById("skipBack");
var skipForward = document.getElementById("skip");
var restart = document.getElementById("restart");
  
play.addEventListener("click",function() {
       
       if (video.paused) {
          video.play();
          play.textContent = "||";
       } else {
          video.pause();
          play.textContent = ">";
       }
    });

    restart.addEventListener("click",function() {
        video.currentTime = 0;
    });

    skipBack.addEventListener("click",function() {
        video.currentTime -=10;
    });
    
    skipForward.addEventListener("click",function() {
        video.currentTime +=10;
    });