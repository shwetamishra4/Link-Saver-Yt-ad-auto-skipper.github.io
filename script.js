setInterval(function(){
    
        var timeOut = document.getElementsByClassName("ad-duration-remaining:b");
       
        var skipButton = document.getElementsByClassName("ytp-ad-skip-button");
        if(skipButton!=undefined && skipButton.length > 0){
            console.log("ad detected");
            skipButton[0].click();
         
        } 
        else if(timeOut!=undefined)
        {  timeOut=null;
        } 
        
    },1000)