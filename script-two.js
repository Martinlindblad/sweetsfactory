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
              
                productsDiv.classList.add("col-lg-4", "card", "mx-4", "my-2");
                console.log(doughnut);
          
            productsDiv.innerHTML = `
            <img src='${doughnut.imageUrl}' alt='${doughnut.name}' class="card-img">
            <h4 class="card-text text-center text-capitalize">${doughnut.name}</h4>
            <p class="card-text">${doughnut.description}</p>
            <p class="card-text"><strong class="text-capitalize">Ingredients: </strong>
            ${doughnut.ingredients
            }</p>
            <p><button class="btn btn-outline-secondary text-uppercase store-item-icon" role="button">ADD TO CART</button><strong class="ml-4 price">$ ${
                (doughnut.price).toFixed(2)
            }</strong>/ 1 piece</p>
            `;
           
            productsEl1.appendChild(productsDiv);
            console.log(productsDiv);
        });
      
        cupcake.forEach(cupcake => {
            var productsDiv = document.createElement("div");
       
            productsDiv.classList.add("col-lg-4", "card", "mx-4", "my-2");
            
   
            productsDiv.innerHTML = `
            <img src='${cupcake.imageUrl}' alt='${cupcake.name}' class="card-img">
            <h4 class="card-text text-center text-capitalize card-title">${cupcake.name}</h4>
            <p class="card-text">${cupcake.description}</p>
            <p class="card-text"><strong class="text-capitalize">Ingredients: </strong>
            ${cupcake.ingredients
            }</p>
            <p><button class="btn btn-outline-secondary text-uppercase store-item-icon" role="button">ADD TO CART</button><strong class="ml-4 price">$ ${
                (cupcake.price).toFixed(2)
            }</strong>/ 1 piece</p>
            `;
            productsEl2.appendChild(productsDiv);
           
            console.log(productsDiv);
        });
       
        chocolate.forEach(chocolate => {
            var productsDiv = document.createElement("div");
            // productsDiv.className = "col-lg-4";
            productsDiv.classList.add("col-lg-4", "card", "mx-4", "my-2");
            
            
            productsDiv.innerHTML = `
            <img src='${chocolate.imageUrl}' alt='${chocolate.name}' class="card-img">
            <h4 class="card-text text-center text-capitalize card-title">${chocolate.name}</h4>
            <p class="card-text">${chocolate.description}</p>
            <p class="card-text"><strong class="text-capitalize">Ingredients: </strong>
            ${chocolate.ingredients
            }</p>
            <p><button class="btn btn-outline-secondary text-uppercase store-item-icon" role="button">ADD TO CART</button><strong class="ml-4 price">$ ${
                (chocolate.price).toFixed(2)
            }</strong>/ 1 piece</p>
            `;
            productsEl3.appendChild(productsDiv);
            
            console.log(productsDiv);
        });
        
        cookie.forEach(cookie => {
            var productsDiv = document.createElement("div");
            // productsDiv.className = "col-lg-4";
            productsDiv.classList.add("col-lg-4", "card", "mx-4", "my-2");
            
          
            productsDiv.innerHTML = `
            <img src='${cookie.imageUrl}' alt='${cookie.name}' class="card-img">
            <h4 class="card-text text-center text-capitalize card-title">${cookie.name}</h4>
            <p class="card-text">${cookie.description}</p>
            <p class="card-text"><strong class="text-capitalize">Ingredients: </strong>
            ${cookie.ingredients
            }</p>
            <p><button class="btn btn-outline-secondary text-uppercase store-item-icon" role="button">ADD TO CART</button><strong class="ml-4 price">$ ${
                (cookie.price).toFixed(2)
            }</strong>/ 100 g</p>
            `;
            productsEl4.appendChild(productsDiv);
          
            console.log(productsDiv);
        });
       
        candy.forEach(candy => {
            var productsDiv = document.createElement("div");
            // productsDiv.className = "col-lg-4";
            productsDiv.classList.add("col-lg-4", "card", "mx-4", "my-2");
            
            
            productsDiv.innerHTML = `
            <img src='${candy.imageUrl}' alt='${candy.name}' class="card-img">
            <h4 class="card-text text-center text-capitalize card-title">${candy.name}</h4>
            <p class="card-text">${candy.description}</p>
            <p class="card-text"><strong class="text-capitalize">Ingredients: </strong>
            ${candy.ingredients
            }</p>
            <p><button class="btn btn-outline-secondary text-uppercase store-item-icon" role="button">ADD TO CART</button><strong class="ml-4 price">$ ${
                (candy.price).toFixed(2)
            }</strong>/ 100 g</p>
            `;
            productsEl5.appendChild(productsDiv);
            
            console.log(productsDiv);
        });
    }
    
    generateProducts();
    
})();

});
