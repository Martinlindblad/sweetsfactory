
// todo:
// local storage for add, update, save & remove items or lists



// Show details ( About us )
//Click on button "details" => Toggle between Image and about Information


$('#details').hide();
$('#details-btn').on('click', function () {

    $('#details').toggle(500);
    $('.about-img-container').toggle(500);
})

    
    $(document).ready(function () {
        
        
        
        // Get JSON Objects and Show bestsellers
        $.getJSON('sweets.json', function (data) {
            let bestsellers = data.Bestsellers;
            console.log(data); // Declare object
            (function () {
                let bestSellerContainer = document.querySelector(".bestseller-container");
                
                console.log(bestsellers[0]);
                
                function generateBestSeller() { // Function to generate three divs and children with diffrent flexbox classes.
                    let counter = 1;
                    
                    bestsellers.forEach(bestsellers => { // Decide what will happen with the objects
                        let bestsellerDiv = document.createElement("div");
                        bestsellerDiv.setAttribute("id", "newDiv" + counter++); // Give every div an id-tag
                        
                        
                        
                        bestsellerDiv.classList.add("col-lg-3", "card", "mx-2");   // add standard classes
                        
                        bestsellerDiv.innerHTML = `
                        <h4 class="card-title text-center">${bestsellers.rank}</h4>
                        <img src="${bestsellers.imageUrl}" alt="${bestsellers.sort}" class="card-img mt-5 mb-2">
                        <p class="card-text text-center text-uppercase">${bestsellers.sort}</p>
                        <button class="btn btn-secondary store-item-icon">Add To Cart</button>
                        <p>$<span class="cart-item-price" class="mb-0">${bestsellers.price}</span></p>
                        `;
                        
                        console.log(bestsellerDiv);
                        bestSellerContainer.appendChild(bestsellerDiv);
                        
                    $('#newDiv2').find('img').removeClass('mt-5', 'mb-2'); // Removes Flexbox classes
                    $('#newDiv3').find('img').removeClass('mt-5') // To make the three boxes look more even.
                    
                    
                    
                    
                    
                });
                
            }
            
            generateBestSeller();
            
            
        }());
        
        
        
        
    }); // JSON 
    
});












