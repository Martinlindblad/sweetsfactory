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



// __________________GET JSON_____________________

$.getJSON('sweets.json', function( data ) {
    console.log(data);
    let doughnut = data.Doughnut;
    let cupcake = data.Cupcake;
    let chocolate = data.Chocolate;
    let cookie = data.Cookies;
    let candy = data.Candy;
    console.log(doughnut);
    console.log(cupcake);
    console.log(chocolate);
    console.log(cookie);
    console.log(candy);
    
    
    
    
    (function() {
        const productsEl1 = document.querySelector(".products-container1");
        const productsEl2 = document.querySelector(".products-container2");
        const productsEl3 = document.querySelector(".products-container3");
        const productsEl4 = document.querySelector(".products-container4");
        const productsEl5 = document.querySelector(".products-container5");
        // const productsTitle = document.querySelector(".row");
        const cartEl = document.querySelector('.cart-item');
        const qtyEl = document.querySelector('.item-qty');
        
        
        //   generate the products with info from json
        function generateProducts() {
         
            doughnut.forEach(doughnut => {
                var productsDiv = document.createElement("div");
              
                productsDiv.classList.add("col-lg-4", "card", "mx-4", "mx-2");
                console.log(doughnut);
          
            productsDiv.innerHTML = `
            <img src='${doughnut.imageUrl}' alt='${doughnut.name}' class="card-img">
            <h4 class="card-text text-center text-capitalize">${doughnut.name}</h4>
            <p class="card-text">${doughnut.description}</p>
            <p class="card-text"><strong class="text-capitalize">Ingredients: </strong>
            ${doughnut.ingredients
            }</p>
            <p><button class="btn btn-outline-secondary text-uppercase" role="button">ADD TO CART</button><strong class="ml-5 price">$ ${
                (doughnut.price).toFixed(2)
            }</strong>/ 1 piece</p>
            `;
           
            productsEl1.appendChild(productsDiv);
            console.log(productsDiv);
        });
        var titleDiv = document.createElement("div");
      
        cupcake.forEach(cupcake => {
            var productsDiv = document.createElement("div");
       
            productsDiv.classList.add("col-lg-4", "card", "mx-4", "mx-2");
            
   
            productsDiv.innerHTML = `
            <img src='${cupcake.imageUrl}' alt='${cupcake.name}' class="card-img">
            <h4 class="card-text text-center text-capitalize">${cupcake.name}</h4>
            <p class="card-text">${cupcake.description}</p>
            <p class="card-text"><strong class="text-capitalize">Ingredients: </strong>
            ${cupcake.ingredients
            }</p>
            <p><button class="btn btn-outline-secondary text-uppercase" data-toggle="modal" data-target="#exampleModal" role="button">ADD TO CART</button><strong class="ml-5 price">$ ${
                (cupcake.price).toFixed(2)
            }</strong>/ 1 piece</p>
            `;
            productsEl2.appendChild(productsDiv);
           
            console.log(productsDiv);
        });
        var titleDiv = document.createElement("div");
       
        chocolate.forEach(chocolate => {
            var productsDiv = document.createElement("div");
            // productsDiv.className = "col-lg-4";
            productsDiv.classList.add("col-lg-4", "card", "mx-4", "mx-2");
            
            
            productsDiv.innerHTML = `
            <img src='${chocolate.imageUrl}' alt='${chocolate.name}' class="card-img">
            <h4 class="card-text text-center text-capitalize">${chocolate.name}</h4>
            <p class="card-text">${chocolate.description}</p>
            <p class="card-text"><strong class="text-capitalize">Ingredients: </strong>
            ${chocolate.ingredients
            }</p>
            <p><button class="btn btn-outline-secondary text-uppercase" data-toggle="modal" data-target="#exampleModal" role="button">ADD TO CART</button><strong class="ml-5 price">$ ${
                (chocolate.price).toFixed(2)
            }</strong>/ 1 piece</p>
            `;
            productsEl3.appendChild(productsDiv);
            
            console.log(productsDiv);
        });
        
        cookie.forEach(cookie => {
            var productsDiv = document.createElement("div");
            // productsDiv.className = "col-lg-4";
            productsDiv.classList.add("col-lg-4", "card", "mx-4", "mx-2");
            
          
            productsDiv.innerHTML = `
            <img src='${cookie.imageUrl}' alt='${cookie.name}' class="card-img">
            <h4 class="card-text text-center text-capitalize">${cookie.name}</h4>
            <p class="card-text">${cookie.description}</p>
            <p class="card-text"><strong class="text-capitalize">Ingredients: </strong>
            ${cookie.ingredients
            }</p>
            <p><button class="btn btn-outline-secondary text-uppercase" data-toggle="modal" data-target="#exampleModal" role="button">ADD TO CART</button><strong class="ml-5 price">$ ${
                (cookie.price).toFixed(2)
            }</strong>/ 1 piece</p>
            `;
            productsEl4.appendChild(productsDiv);
          
            console.log(productsDiv);
        });
       
        candy.forEach(candy => {
            var productsDiv = document.createElement("div");
            // productsDiv.className = "col-lg-4";
            productsDiv.classList.add("col-lg-4", "card", "mx-4", "mx-2");
            
            
            productsDiv.innerHTML = `
            <img src='${candy.imageUrl}' alt='${candy.name}' class="card-img">
            <h4 class="card-text text-center text-capitalize">${candy.name}</h4>
            <p class="card-text">${candy.description}</p>
            <p class="card-text"><strong class="text-capitalize">Ingredients: </strong>
            ${candy.ingredients
            }</p>
            <p><button class="btn btn-outline-secondary text-uppercase" role="button">ADD TO CART</button><strong class="ml-5 price">$ ${
                (candy.price).toFixed(2)
            }</strong>/ 1 piece</p>
            `;
            productsEl5.appendChild(productsDiv);
            
            console.log(productsDiv);
        });
    }
    
    generateProducts();
   
    
    function generateCart() {
        cartEl.innerHTML = '';
    }
    
})();

});







/*------------------ toggle shopping cart -------------------*/

(function() {
    const cartInfo = document.querySelector('.cart-info');
    const cart = document.querySelector('.cart');

    cartInfo.addEventListener('click', () => cart.classList.toggle('show-cart'));
})();

