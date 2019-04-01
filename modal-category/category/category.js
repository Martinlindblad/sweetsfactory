$(document).ready(function(){
    bannerRoll();
});
setInterval(() => {
    bannerRoll();
    
}, 40000);

function bannerRoll(){
    $(".banner-roll").stop(true,true).animate({scrollTop: 1355}, 20000, 
        function(){ $(this).stop(true,true).animate({scrollTop: 0}, 20000); 

});
}






