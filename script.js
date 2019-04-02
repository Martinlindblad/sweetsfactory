// toggle scroll top arrow when it hits #about
const scrollTop = document.querySelector('.gotopbtn');
const aboutSec = document.querySelector('#about');
const topOfAbout = aboutSec.offsetTop;

function toTop() {
    (window.scrollY >= topOfAbout) ? scrollTop.classList.remove('hidden') : scrollTop.classList.add('hidden');
}

window.addEventListener('scroll', toTop);