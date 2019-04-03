const cartBtn = document.querySelector('.cart-info');
const cart = document.querySelector('.cart');

const scrollTop = document.querySelector('.gotopbtn');
const aboutSec = document.querySelector('#about');
const topOfAbout = aboutSec.offsetTop;

// display shopping cart
cartBtn.addEventListener('click', () => {
    cart.classList.add('show-cart');
});

// click outside the shopping cart to hide it
document.addEventListener('click', (e) => {
    if(!e.target.closest('.cart'))
    // console.log('click');
    return;

    cart.classList.toggle('show-cart')
});

// toggle scroll top arrow when it hits #about
function toTop() {
    (window.scrollY >= topOfAbout) ? scrollTop.classList.remove('hidden') : scrollTop.classList.add('hidden');
}

window.addEventListener('scroll', toTop);