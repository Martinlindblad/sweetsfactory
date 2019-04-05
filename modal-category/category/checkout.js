function ready() {
    // remove items from the cart
    const removeCartItemBtns = document.getElementsByClassName('cart-item-remove');
    // console.log(removeCartItemBtns);
    for(let i = 0; i < removeCartItemBtns.length; i++) {
        const btn = removeCartItemBtns[i];
        btn.addEventListener('click', removeCartItems);
    }

    const qtyInput = document.getElementsByClassName('cart-quantity-input')
    for(let i = 0; i < qtyInput.length; i++) {
        const input = qtyInput[i]
        input.addEventListener('change', qtyChanged)
    }

    const addToCartBtn = document.getElementsByClassName('store-item-icon')
    for(let i = 0; i < addToCartBtn.length; i++) {
        const btn = addToCartBtn[i]
        btn.addEventListener('click', addToCartClick)
    }

    document.querySelector('.btn-checkout').addEventListener('click', checkoutClick)
}

ready();

function checkoutClick() {
    alert('Thanks for your purchase. Have a nice day!')
    const allItems = document.getElementsByClassName('cart-items')[0]
    while(allItems.hasChildNodes()) {
        allItems.removeChild(allItems.firstChild)
    }
    updateTotal()
}

function removeCartItems(e) {
    const btnClick = e.target;
    btnClick.parentElement.parentElement.remove();
    updateTotal();
}

function qtyChanged(e) {
    const input = e.target
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal()
}

function addToCartClick(e) {
    const btn = e.target
    const cardItem = btn.parentElement
    const cardTxt = cardItem.getElementsByClassName('card-text')[0].innerText
    const price = cardItem.getElementsByClassName('cart-item-price')[0].innerText
    const imageSrc = cardItem.getElementsByClassName('card-img')[0].src

    console.log(cardTxt, price, imageSrc);
    addItemToCart(cardTxt, price, imageSrc);
    updateTotal();
}

function addItemToCart(cardTxt, price, imageSrc) {
    const cartRow = document.createElement('div')
    const cartItems = document.getElementsByClassName('cart-items')[0]
    const cartItemNames = document.getElementsByClassName('item-text')

    for(let i = 0; i < cartItemNames.length; i++) {
        if(cartItemNames[i].innerText === cardTxt) {
            alert('Item has already been added')
            return
        }
    }
    const cartRowContent = `
        <div class="cart-item d-flex align-items-center justify-content-between">
            <img src="${imageSrc}" class="img-fluid card-img" id="item-img" alt="">
            <span class="item-text mx-5">${cardTxt}</span>
            <span>$</span>
            <span id="cart-item-price" class="cart-item-price" class="mb-0">${price}</span>
            <input type="number" value="1" class="cart-quantity-input">
            <button id='cart-item-remove' class="btn cart-item-remove my-auto">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
    cartRow.innerHTML = cartRowContent

    cartItems.append(cartRow)

    cartRow.getElementsByClassName('cart-item-remove')[0].addEventListener('click', removeCartItems)

    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', qtyChanged)
}

function updateTotal() {
    const cartItemContainer = document.getElementsByClassName('cart')[0]
    const cartRows = cartItemContainer.getElementsByClassName('cart-item');
    let total = 0;

    for(let i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];
        const priceEl = cartRow.getElementsByClassName('cart-item-price')[0];
        const qtyEl = cartRow.getElementsByClassName('cart-quantity-input')[0];

        const price = priceEl.innerText;
        const qty = qtyEl.value;
        total = total + (price * qty);
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = total;

    // always get only 2 decimals
    total = Math.round(total * 100) / 100
    // console.log(total);
}


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


