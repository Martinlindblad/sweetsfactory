// remove items from the cart
const removeCartItemBtns = document.getElementsByClassName('cart-item-remove');
// console.log(removeCartItemBtns);
for(let i = 0; i < removeCartItemBtns.length; i++) {
    const btn = removeCartItemBtns[i];
    btn.addEventListener('click', (e) => {
        const btnClick = e.target;
        btnClick.parentElement.parentElement.remove();
        updateTotal();
    });
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
    console.log(total);
}
// updateTotal();

// toggle shopping cart
(function() {
    const cartInfo = document.querySelector('.cart-info');
    const cart = document.querySelector('.cart');

    cartInfo.addEventListener('click', () => cart.classList.toggle('show-cart'));
})();

// add items to cart
// (function () {
//     const cartBtn = document.querySelectorAll('.store-item-icon');

//     cartBtn.forEach(function(btn) {
//         btn.addEventListener('click', (e) => {
//             // console.log(e.target);

//             if(e.target.parentElement.classList.contains('store-item-icon')) {
//                 const cartItem = document.createElement('div');

//                 cartItem.classList.add('cart-item', 'd-flex', 'text-captalize', 'my-3');
//                 cartItem.innerHTML = `
//                 <img src="">
//                 `;
//             }
//         });
//     });
// })();

// toggle scroll top arrow when it hits #about
function toTop() {
    const scrollTop = document.querySelector('.gotopbtn');
    const aboutSec = document.querySelector('#about');
    const topOfAbout = aboutSec.offsetTop;

    (window.scrollY >= topOfAbout) ? scrollTop.classList.remove('hidden') : scrollTop.classList.add('hidden');
}

window.addEventListener('scroll', toTop);