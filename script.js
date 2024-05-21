let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('active');
});
window.addEventListener('scroll', () => {
    navbar.classList.remove('active');
});