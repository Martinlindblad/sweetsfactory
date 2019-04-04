const scrollTop = document.querySelector('.gotopbtn');
const aboutSec = document.querySelector('#about');
const topOfAbout = aboutSec.offsetTop;

// toggle shopping cart
(function() {
    const cartInfo = document.querySelector('.cart-info');
    const cart = document.querySelector('.cart');

    cartInfo.addEventListener('click', () => cart.classList.toggle('show-cart'));
})();

// toggle scroll top arrow when it hits #about
function toTop() {
    (window.scrollY >= topOfAbout) ? scrollTop.classList.remove('hidden') : scrollTop.classList.add('hidden');
}

window.addEventListener('scroll', toTop);