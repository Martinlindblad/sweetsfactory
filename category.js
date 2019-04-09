
 /*--------------------Banner-----------------------*/
 // Load Document/Start bannerRoll()
 $(document).ready(function(){
     bannerRoll();
 });
 // Load bannerRoll() after first document load. Repeats the action.


setInterval(() => {
   bannerRoll();
    
}, 24000);

function bannerRoll(){       
    let imgHigh = $('.img1').height();      // get the Hight from one img
    imgHigh = imgHigh * 5;    // all images have the same size. 6 images. there fore img height*5
    
    $(".banner-roll").stop(true,true).animate({scrollTop: imgHigh}, 12000, "linear" ,  // Start the action, will move the page to "imgHigh"
       function(){ $(this).stop(true,true).animate({scrollTop: 0}, 12000 , "linear" ); // Go back up again
     });
}



