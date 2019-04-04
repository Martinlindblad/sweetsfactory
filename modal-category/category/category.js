
// Load Document/Start bannerRoll()
$(document).ready(function(){
    bannerRoll();
});
// Load bannerRoll() after first document load. Repeats the action.
setInterval(() => {
    bannerRoll();
    
}, 70000);



function bannerRoll(){       
    let high = $('.img1').height();      // get the hight for one img
    high = high * 5;    // all images have the same size. 6 images. there fore img height*5
    
    $(".banner-roll").stop(true,true).animate({scrollTop: high}, 35000,  // Start the action, will move the page to "high"
        function(){ $(this).stop(true,true).animate({scrollTop: 0}, 35000); // Go back up again
        
});
}






