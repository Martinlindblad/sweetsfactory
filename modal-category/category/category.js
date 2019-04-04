/*--------------------Banner-----------------------*/
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


/*------------------ cart -------------------*/
const scrollTop = document.querySelector('.gotopbtn');
const aboutSec = document.querySelector('#about');
const topOfAbout = aboutSec.offsetTop;

// toggle shopping cart
(function() {
    const cartInfo = document.querySelector('.cart-info');
    const cart = document.querySelector('.cart');

    cartInfo.addEventListener('click', () => cart.classList.toggle('show-cart'));
})();

// toggle scroll top arrow when it hits #about
function toTop() {
    (window.scrollY >= topOfAbout) ? scrollTop.classList.remove('hidden') : scrollTop.classList.add('hidden');
}

window.addEventListener('scroll', toTop);

/*-------------------- toggle scroll top arrow  ---------------------*/
        const scrollTop = document.querySelector('.gotopbtn');
        const productsSec = document.querySelector('#products');
        const topOfAbout = productsSec.offsetTop;

        function toTop() {
            (window.scrollY >= topOfAbout) ? scrollTop.classList.remove('hidden') : scrollTop.classList.add('hidden');
        }

        window.addEventListener('scroll', toTop);





