
/*------------------ toggle shopping cart -------------------*/

(function () {
    const cartInfo = document.querySelector('.cart-info');
    const cart = document.querySelector('.cart');

    cartInfo.addEventListener('click', () => cart.classList.toggle('show-cart'));
})();



/*-----------modal window-----------------*/


// $(function () {
// let btn = $('button[data-toggle="modal"]');
// let showAmout = $('.product-price'); // Show price on modal
// let quantity = $('#show-num'); // Show antal styck on modal
// let image = $('.cart-item-image');
// let productName = $(".modal-title");
// let totalAmount = 0; // total summan  
// let defaultq = [];



// // När man klickar BUY btn
// btn.on('click', function () {
//     let title = $(this).parents()[0].offsetParent.childNodes[3].innerText; // Product name
//     let amount = $(this).siblings()[0].firstElementChild.innerHTML; // price each
//     let img = $(this).parents()[0].offsetParent.children[0].attributes[0].nodeValue; // image
//     productName.html(title);
//     image.attr('src', img);
//     console.log(amount);
//     showAmout.html(amount); // Visa produktens original pris
//     quantity.html(1); // Visa 1 på antal fältet
//     plus(amount);
//     minus(amount);
// });


// /*-------------Count and calculate------------*/
// /*--------plus function-----*/
// function plus(p) {
//     $('#plus').on('click', function (e) {
//         e.preventDefault();
//         defaultq = parseInt($(this).siblings()[1].innerHTML);
//         console.log(defaultq);
//         defaultq += 1;
//         quantity.html(defaultq).val();
//         // console.log(quantity[0].innerHTML); // visa antal
//         totalAmount = defaultq * p;
//         // console.log(totalAmount);
//         showPrice(totalAmount);
//     });
// }
// /*------minus function-----*/
// function minus(p) {
//     $('#minus').on('click', function (e) {
//         e.preventDefault();
//         defaultq = parseInt($(this).siblings()[0].innerHTML);
//         if (defaultq > 1) {
//             defaultq -= 1;
//             quantity.text(defaultq).val(); // visa antal
//             totalAmount = totalAmount - p;
//             showPrice(totalAmount);
//             console.log(defaultq);
//         }
//         else {
//             defaultq = 1;
//             showAmout.html(p);
//             console.log(defaultq);
//         }
//     });
// }

// /*-------------visa pris -----------------*/
// function showPrice(total) {
//     showAmout.html(total.toFixed(2));
// }

//}); // ready

/*---------------- checkout validation ---------------*/
$(function () {
    
    // Check firstname, lastname, address and city form
    $('#firstname,#lastname,#address,#city').on('blur', function () {
        // $(this).addClass('bg');
        let chose = $(this).val();
        if (chose === '') {
            $(this).prev().fadeIn();
            $(this).attr('data-valid', 'false');
        }
        else if (chose !== '') {
            $(this).prev().fadeOut();
            $(this).attr('data-valid', 'true');
        }
    });
    
    // Check Email form
    let mailerror = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    $('#mail').on('blur', function () {
        let mail = $('#mail').val();
        if (mail === '') {
            $(this).prev().fadeIn();
            $(this).attr('data-valid', 'false');
        }
        else if (!mail.match(mailerror)) {
            $(this).prev().fadeIn().html("Check your email address");
            $(this).attr('data-valid', 'false');
        }
        else if(mail !== ''){
            $(this).prev().fadeOut();
            $(this).attr('data-valid', 'true');
        }
    });

    // Check phone number form
    $('#tel').on('blur', function () {
        let tel = $('#tel').val();
        if (tel.match(/[^0-9]+/)) {
            $(this).prev().fadeIn().html("Check your phone number");
            $(this).attr('data-valid', 'false');
        }
        if (tel.length < 10) {
            $(this).prev().fadeIn().html("10 characters minimum");
            $(this).attr('data-valid', 'false');
        }
        else {
            $(this).prev().fadeOut();
            $(this).attr('data-valid', 'true');
        }
    });

    // Check postcode form          
    $('#postcode').on('blur', function () {
        let postcode = $('#postcode').val();
        if (postcode === '') {
            console.log("inne");
            $(this).prev().fadeIn();
            $(this).attr('data-valid', 'false');
        }
        if (postcode.match(/[^0-9]+/)) {
            $(this).prev().fadeIn().html("Check your postcode");
            $(this).attr('data-valid', 'false');
        }
        else if(postcode !== ''){
            $(this).prev().fadeOut();
            $(this).attr('data-valid', 'true');
        }
    });

    
    $('button[type="submit"]').on('click', function (e) {
        e.preventDefault();
        if($(this).attr('data-valid', 'true')){
            console.log('true');
        }
        else{
            console.log('false');
        }
    });


})


