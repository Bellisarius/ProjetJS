var play = document.getElementById("play");
var video = document.getElementById("Video");
var sourceVideo = document.getElementById("sourceVideo");
var skipBack = document.getElementById("skipBack");
var skipForward = document.getElementById("skip");
var restart = document.getElementById("restart");
var addVideo = document.getElementById("add");
var URL = document.getElementById("URL");  
var listeURL = [];
var nbrURL=0;
var videoCheck=false;
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
    
    /*addVideo.addEventListener("click",function() {
        if (URL.value !== ""){
                       video.src = URL.value; //https://az813057.vo.msecnd.net/testdrive/ieblog/2011/nov/pp4_blog_demo.mp4
                       video.load();  
                       play.click();  
                     } else {
                        errMessage("Enter a valid video URL");
                     }
    });*/
    
    addVideo.addEventListener("click",function() {
        if(videoCheck===false)
        {
            if (URL.value !== "")
            {
                video.src = URL.value; //https://az813057.vo.msecnd.net/testdrive/ieblog/2011/nov/pp4_blog_demo.mp4
                video.load();  
                play.click();  
                videoCheck = true;
                URL.value ="";
                
                
            } else {
                errMessage("Enter a valid video URL");
            }
        }
        else
        {
            if (URL.value !== "")
            {
                listeURL[nbrURL] = URL.value;
                ajoutPlaylist();
                nbrURL++;
                
                
            } else {
                errMessage("Enter a valid video URL");
            }
        }
        

    });
    
    video.addEventListener("ended", function()
    {
        if (nbrURL > 0)
        {
            video.src = listeURL[0];
            video.load();  
            play.click();  
            
            for(var i=0;i<nbrURL;i++)
            {
                if (i !== nbrURL-1)
                {
                    listeURL[i] = listeURL[i+1];
                }
                
            }
            nbrURL--;
        }
    });
    
function ajoutPlaylist()
{
    var parentDiv = document.getElementById("playlist").parentNode;
    var newVideo = document.createElement("div"); 
    newVideo.setAttribute("id","playlist"+nbrURL);
   // newVideo.innerHTML = URL.value;
    parentDiv.appendChild(newVideo,null);
    
    var text = document.createElement("span");
    text.innerHTML =URL.value;
    document.getElementById("playlist"+nbrURL).appendChild(text,null);
    
    var buttonRemove = document.createElement("button");
        buttonRemove.innerHTML = "Remove";
        buttonRemove.addEventListener("click", function(evt)
        {
            var target =evt.target;
            if (target.tagName === "BUTTON")
            {
                var parentId = target.parentElement.id;
                var div = document.getElementById(parentId);
                document.getElementsByTagName("body")[0].removeChild(div);
            }
        });
    document.getElementById("playlist"+nbrURL).appendChild(buttonRemove,null);
    
    var buttonUp = document.createElement("button");
        buttonUp.innerHTML = "up";
        buttonUp.addEventListener("click", function(evt)
        {
            var target =evt.target;
            if (target.tagName === "BUTTON")
            {
                var parentId = target.parentElement.id;
                var currentDiv = document.getElementById(parentId);
                if(currentDiv.getAttribute("id")!=="playlist0")
                {
                    var previous = currentDiv.previousSibling.getAttribute("id");
                    var temp = document.getElementById(previous).firstChild.innerHTML;
                    document.getElementById(previous).firstChild.innerHTML = currentDiv.firstChild.innerHTML;
                    currentDiv.firstChild.innerHTML = temp;
                }
            }
        });
        document.getElementById("playlist"+nbrURL).appendChild(buttonUp,null);            
}
    
