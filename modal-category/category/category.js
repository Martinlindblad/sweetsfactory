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
        const productsEl = document.querySelector(".products-container");
        const productsTitle = document.querySelector(".row");
        const cartEl = document.querySelector('.cart-item');
        const qtyEl = document.querySelector('.item-qty');
        
        
        //   generate the products with info from json
        function generateProducts() {
            var titleDiv = document.createElement("div");
            titleDiv.innerHTML = `<h2 class="text-capitalize"><strong class="banner-title ">D</strong>oughnuts</h2>`;
            titleDiv.classList.add("col-10", "mx-auto", "col-sm-6", "text-center");
            doughnut.forEach(doughnut => {
                var productsDiv = document.createElement("div");
                // productsDiv.className = "col-lg-4";
                productsDiv.classList.add("col-lg-4", "card", "mx-4", "mx-2");
                console.log(doughnut);
                // var divs = $("div > div");
                // for(var i = 0; i < divs.length; i+=3) {
                //   divs.slice(i, i+4).wrapAll("<div class='new'></div>");
                // }

            productsDiv.innerHTML = `
            <img src='${doughnut.imageUrl}' alt='${doughnut.name}' class="card-img">
            <h4 class="card-text text-center text-capitalize">${doughnut.name}</h4>
            <p class="card-text">${doughnut.description}</p>
            <p class="card-text"><strong class="text-capitalize">Ingredients: </strong>
            ${doughnut.ingredients
            }</p>
            <p><button class="btn btn-outline-secondary text-uppercase" data-toggle="modal" data-target="#exampleModal" role="button">ADD TO CART</button><strong class="ml-5 price">$ ${
                doughnut.price
            }</strong>/ 1 piece</p>
            `;
            productsTitle.appendChild(titleDiv);
            productsEl.appendChild(productsDiv);
            console.log(productsDiv);
        });
        var titleDiv = document.createElement("div");
        titleDiv.classList.add("col-10", "mx-auto", "col-sm-6", "text-center");
        cupcake.forEach(cupcake => {
            var productsDiv = document.createElement("div");
            // productsDiv.className = "col-lg-4";
            productsDiv.classList.add("col-lg-4", "card", "mx-4", "mx-2");
            
            titleDiv.innerHTML = `<h2 class="text-capitalize"><strong class="banner-title ">c</strong>upcakes</h2>`
            productsDiv.innerHTML = `
            <img src='${cupcake.imageUrl}' alt='${cupcake.name}' class="card-img">
            <h4 class="card-text text-center text-capitalize">${cupcake.name}</h4>
            <p class="card-text">${cupcake.description}</p>
            <p class="card-text"><strong class="text-capitalize">Ingredients: </strong>
            ${cupcake.ingredients
            }</p>
            <p><button class="btn btn-outline-secondary text-uppercase" data-toggle="modal" data-target="#exampleModal" role="button">ADD TO CART</button><strong class="ml-5 price">$ ${
                cupcake.price
            }</strong>/ 1 piece</p>
            `;
            productsEl.appendChild(productsDiv);
            productsTitle.appendChild(titleDiv);
            console.log(productsDiv);
        });
        var titleDiv = document.createElement("div");
        titleDiv.classList.add("col-10", "mx-auto", "col-sm-6", "text-center");
        chocolate.forEach(chocolate => {
            var productsDiv = document.createElement("div");
            // productsDiv.className = "col-lg-4";
            productsDiv.classList.add("col-lg-4", "card", "mx-4", "mx-2");
            
            titleDiv.innerHTML = `<h2 class="text-capitalize"><strong class="banner-title ">c</strong>hocolates</h2>`
            productsDiv.innerHTML = `
            <img src='${chocolate.imageUrl}' alt='${chocolate.name}' class="card-img">
            <h4 class="card-text text-center text-capitalize">${chocolate.name}</h4>
            <p class="card-text">${chocolate.description}</p>
            <p class="card-text"><strong class="text-capitalize">Ingredients: </strong>
            ${chocolate.ingredients
            }</p>
            <p><button class="btn btn-outline-secondary text-uppercase" data-toggle="modal" data-target="#exampleModal" role="button">ADD TO CART</button><strong class="ml-5 price">$ ${
                chocolate.price
            }</strong>/ 1 piece</p>
            `;
            productsEl.appendChild(productsDiv);
            productsTitle.appendChild(titleDiv);
            console.log(productsDiv);
        });
        var titleDiv = document.createElement("div");
        titleDiv.classList.add("col-10", "mx-auto", "col-sm-6", "text-center");
        cookie.forEach(cookie => {
            var productsDiv = document.createElement("div");
            // productsDiv.className = "col-lg-4";
            productsDiv.classList.add("col-lg-4", "card", "mx-4", "mx-2");
            
            titleDiv.innerHTML = `<h2 class="text-capitalize"><strong class="banner-title ">c</strong>ookies</h2>`
            productsDiv.innerHTML = `
            <img src='${cookie.imageUrl}' alt='${cookie.name}' class="card-img">
            <h4 class="card-text text-center text-capitalize">${cookie.name}</h4>
            <p class="card-text">${cookie.description}</p>
            <p class="card-text"><strong class="text-capitalize">Ingredients: </strong>
            ${cookie.ingredients
            }</p>
            <p><button class="btn btn-outline-secondary text-uppercase" data-toggle="modal" data-target="#exampleModal" role="button">ADD TO CART</button><strong class="ml-5 price">$ ${
                cookie.price
            }</strong>/ 1 piece</p>
            `;
            productsEl.appendChild(productsDiv);
            productsTitle.appendChild(titleDiv);
            console.log(productsDiv);
        });
        var titleDiv = document.createElement("div");
        titleDiv.classList.add("col-10", "mx-auto", "col-sm-6", "text-center");
        candy.forEach(candy => {
            var productsDiv = document.createElement("div");
            // productsDiv.className = "col-lg-4";
            productsDiv.classList.add("col-lg-4", "card", "mx-4", "mx-2");
            
            titleDiv.innerHTML = `<h2 class="text-capitalize"><strong class="banner-title ">c</strong>andy</h2>`
            productsDiv.innerHTML = `
            <img src='${candy.imageUrl}' alt='${candy.name}' class="card-img">
            <h4 class="card-text text-center text-capitalize">${candy.name}</h4>
            <p class="card-text">${candy.description}</p>
            <p class="card-text"><strong class="text-capitalize">Ingredients: </strong>
            ${candy.ingredients
            }</p>
            <p><button class="btn btn-outline-secondary text-uppercase" data-toggle="modal" data-target="#exampleModal" role="button">ADD TO CART</button><strong class="ml-5 price">$ ${
                candy.price
            }</strong>/ 1 piece</p>
            `;
            productsEl.appendChild(productsDiv);
            productsTitle.appendChild(titleDiv);
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



