const navbar = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const x = document.querySelector('.x');
const overlay = document.querySelector('.overlay');
const itemContainer = document.querySelector('.item-container');
const statsContainer = document.querySelector('.stats-container');

hamburger.addEventListener('click', ()=> {
    navbar.classList.toggle('open')
    x.classList.toggle('open')
    hamburger.classList.toggle('open')
    overlay.classList.toggle('active')
    itemContainer.classList.toggle('change')
    statsContainer.classList.toggle('change')
});

x.addEventListener('click', ()=> {
    navbar.classList.remove('open')
    x.classList.remove('open')
    hamburger.classList.remove('open')
    overlay.classList.remove('active')
    itemContainer.classList.remove('change')
    statsContainer.classList.remove('change')
});

