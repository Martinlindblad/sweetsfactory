// global variables
const scrollTop = document.querySelector('.gotopbtn');
const aboutSec = document.querySelector('#about');
const topOfAbout = aboutSec.offsetTop;

// toggle shopping cart
(function() {
    const cartInfo = document.querySelector('.cart-info');
    const cart = document.querySelector('.cart');

    cartInfo.addEventListener('click', () => cart.classList.toggle('show-cart'));
})();

// add items to cart
(function () {
    const cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach(function(btn) {
        btn.addEventListener('click', (e) => {
            // console.log(e.target);

            if(e.target.parentElement.classList.contains('store-item-icon')) {
                const cartItem = document.createElement('div');

                cartItem.classList.add('cart-item', 'd-flex', 'text-captalize', 'my-3');
                cartItem.innerHTML = `
                    <img src="">
                `;
            }
        });
    });
})();

// toggle scroll top arrow when it hits #about
function toTop() {
    (window.scrollY >= topOfAbout) ? scrollTop.classList.remove('hidden') : scrollTop.classList.add('hidden');
}

window.addEventListener('scroll', toTop);