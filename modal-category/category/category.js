/*--------------------Banner-----------------------*/
// Load Document/Start bannerRoll()
$(document).ready(function(){
    bannerRoll();
});
// Load bannerRoll() after first document load. Repeats the action.
let speed = 1000/60; // 60 fps

setInterval(() => {
    bannerRoll();
    
}, 24800);

function bannerRoll(){       
    let high = $('.img1').height();      // get the hight from one img
    high = high * 5;    // all images have the same size. 6 images. there fore img height*5
    
    $(".banner-roll").stop(true,true).animate({scrollTop: high}, 12000, "linear" ,  // Start the action, will move the page to "high"
        function(){ $(this).stop(true,true).animate({scrollTop: 0}, 12000 , "linear" ); // Go back up again
});
}


/*------------------ toggle shopping cart -------------------*/

(function() {
    const cartInfo = document.querySelector('.cart-info');
    const cart = document.querySelector('.cart');

    cartInfo.addEventListener('click', () => cart.classList.toggle('show-cart'));
})();



 /*-----------modal window-----------------*/
 $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})

$(function () {
    let btn = $('button[data-toggle="modal"]');
    let showAmout = $('.product-price'); // Show price on modal
    let quantity = $('#show-num'); // Show antal styck on modal
    let image = $('.cart-item-image');
    let productName = $(".modal-title");
    let totalAmount = 0; // total summan  
    let defaultq= [];

   

    // När man klickar BUY btn
    btn.on('click', function () {
        let title = $(this).parents()[0].offsetParent.childNodes[3].innerText; // Product name
        let amount = $(this).siblings()[0].firstElementChild.innerHTML; // price each
        let img = $(this).parents()[0].offsetParent.children[0].attributes[0].nodeValue; // image
        productName.html(title);
        image.attr('src', img);
        console.log(amount);
        showAmout.html(amount); // Visa produktens original pris
        quantity.html(1); // Visa 1 på antal fältet
        plus(amount);
        minus(amount);
    });


    /*-------------Count and calculate------------*/
    /*--------plus function-----*/
    function plus(p) {
        $('#plus').on('click', function (e) {
            e.preventDefault();
            defaultq = parseInt($(this).siblings()[1].innerHTML);
            console.log(defaultq);
            defaultq += 1;
            quantity.html(defaultq).val();
            // console.log(quantity[0].innerHTML); // visa antal
            totalAmount = defaultq * p;
            // console.log(totalAmount);
            showPrice(totalAmount);
        });
    }
    /*------minus function-----*/
    function minus(p) {
        $('#minus').on('click', function (e) {
            e.preventDefault();
            defaultq = parseInt($(this).siblings()[0].innerHTML);
            if (defaultq > 1) {
                defaultq -= 1;
                quantity.text(defaultq).val(); // visa antal
                totalAmount = totalAmount - p;
                showPrice(totalAmount);
                console.log(defaultq);
            }
            else {
                defaultq = 1;
                showAmout.html(p);
                console.log(defaultq);
            }
        });
    }

    /*-------------visa pris -----------------*/
    function showPrice(total) {
        showAmout.html(total.toFixed(2));

    }
}); // ready



