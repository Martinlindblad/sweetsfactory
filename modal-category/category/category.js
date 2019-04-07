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

// toggle shopping cart
(function() {
    const cartInfo = document.querySelector('.cart-info');
    const cart = document.querySelector('.cart');

    cartInfo.addEventListener('click', () => cart.classList.toggle('show-cart'));
})();


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



