function getData() {
    // display bestsellers section with json
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(xhttp.responseText)
            const bestsellers = response.bestsellers

            const bestSellerContainer = document.querySelector('.bestseller-container')
            for(let i = 0; i < bestsellers.length; i++) {
                const div = document.createElement('div')
                div.classList.add("col-lg-3", "card", "mx-2")

                div.innerHTML = `
                    <h4 class="card-title text-center">${bestsellers[i].rank}</h4>
                    <img src="${bestsellers[i].imageUrl}" alt="${bestsellers[i].sort}" class="card-img mt-5 mb-2">
                    <p class="card-text text-center text-uppercase">${bestsellers[i].sort}</p>
                    <button class="btn btn-secondary store-item-icon">Add To Cart</button>
                    <p>$<span class="cart-item-price" class="mb-0">${bestsellers[i].price}</span></p>
                `;
                bestSellerContainer.appendChild(div)
            }
        }
    };
    xhttp.open("GET", "bestsellers.json", true);
    xhttp.send();
}
getData()

let addToCartBtn;
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

// add item to cart
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
            <span class="item-text mx-5">${cartItemNames}</span>
            <span class="mx-2">$</span>
            <span id="cart-item-price" class="cart-item-price mb-0 mr-2">${price}</span>
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
    document.getElementsByClassName('cart-total-price')[0].innerText = total.toFixed(2);

    // always get only 2 decimals
    total = Math.round(total * 100) / 100
    // console.log(total);
    showTotalAmount()
}

// update the badge num
function showTotalAmount() {
    let badgeAmount = document.querySelector('.badge')
    const itemsInCart = document.querySelectorAll('.cart-quantity-input')
    const total = []

    itemsInCart.forEach(item => {
        total.push(parseInt(item.value));
    })

    const totalItems = total.reduce((total, items) => {
        total += items;
        return total;
    }, 0)

    console.log(totalItems);
    badgeAmount.innerText = totalItems

    const checkoutBtn = document.querySelector('.btn-checkout')
    checkoutBtn.classList.remove('disabled')
};

// show shopping cart
(function() {
    const cartInfo = document.querySelector('.cart-info');
    const cart = document.querySelector('.cart');

    cartInfo.addEventListener('click', () => cart.classList.toggle('show-cart'));
})();

// toggle scroll top arrow when it hits #about
window.addEventListener('scroll', () => {
    const scrollTop = document.querySelector('.gotopbtn');
    const aboutSec = document.querySelector('#about');
    const topOfAbout = aboutSec.offsetTop;

    (window.scrollY >= topOfAbout) ? scrollTop.classList.remove('hidden') : scrollTop.classList.add('hidden');
});

// about image on the right toggle
(function() {
    const details = document.querySelector('#details')
    const detailsBtn = document.querySelector('#details-btn')
    const aboutImg = document.querySelector('.about-img-container')

    detailsBtn.addEventListener('click', () => {
        details.classList.toggle('show-details')
        aboutImg.classList.toggle('move-down')
    })
})();

window.addEventListener("load", function() {
    addToCartBtn = document.getElementsByClassName('store-item-icon');

    const arr = Array.prototype.slice.call(addToCartBtn);
    console.log(arr)
    console.log(addToCartBtn)
    console.log(addToCartBtn.length)
    for(let i = 0; i < addToCartBtn.length; i++) {
        const btn = addToCartBtn[i]
        btn.addEventListener('click', addToCartClick)
    }
});