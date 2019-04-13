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
                <p class="card-text text-center text-uppercase">$bestsellers[i].sort}</p>
                <button class="btn btn-secondary store-item-icon">Add To Cart</button>
                <p>$<span class="cart-item-price" class="mb-0">${bestsellers[i].price}</span></p>
            `;
            bestSellerContainer.appendChild(div)
        }
    }
};
xhttp.open("GET", "bestsellers.json", true);
xhttp.send();



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