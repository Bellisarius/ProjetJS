var play = document.getElementById("play");
var video = document.getElementById("Video");
var sourceVideo = document.getElementById("sourceVideo");
var skipBack = document.getElementById("skipBack");
var skipForward = document.getElementById("skip");
var restart = document.getElementById("restart");
var addVideo = document.getElementById("add");
var URL = document.getElementById("URL");  

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
    
    addVideo.addEventListener("click",function() {
        if (URL.value !== ""){
                       video.src = URL.value; //https://az813057.vo.msecnd.net/testdrive/ieblog/2011/nov/pp4_blog_demo.mp4
                       video.load();  
                       play.click();  
                     } else {
                        errMessage("Enter a valid video URL");
                     }
    });