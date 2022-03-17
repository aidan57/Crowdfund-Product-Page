const navbar = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const x = document.querySelector('.x');
const overlay = document.querySelector('.overlay');
const itemContainer = document.querySelector('.item-container');
const statsContainer = document.querySelector('.stats-container');
const bookmarkBtn = document.querySelector('.bookmark-btn');
const bookmarked = document.querySelector('.bookmarked');
const modalClose = document.querySelector('.modal-close');
const defaultModal = document.querySelector('.default-modal');
const backProjectBtn = document.querySelector('.back-project-btn');
const selectRewardBtn = document.querySelectorAll('.reward-btn');
const outOfStock = document.querySelector('.out-of-stock-btn');
const pledgeContainerRadio1 = document.querySelector('input[id=no-reward]');
const pledgeContainerRadio2 = document.querySelector('input[id=bamboo]');
const pledgeContainerRadio3 = document.querySelector('input[value=black-edition]');
const pledgeContainer1 = document.querySelector('#pledge-1');
const pledgeContainer2 = document.querySelector('#pledge-2');
const pledgeContainer3 = document.querySelector('#pledge-3');
const enterPledge = document.querySelector('.enter-pledge');
const pledgeAmount1 = document.querySelector('input[id=pa1]');
const pledgeAmount2 = document.querySelector('input[id=pa2]');
const pledgeAmount3 = document.querySelector('input[id=pa3]');

outOfStock.disabled = true

// NAVBAR
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

// ITEM CONTAINER
bookmarkBtn.addEventListener('click', ()=> {
    bookmarkBtn.classList.toggle('clicked')
});

backProjectBtn.addEventListener('click', ()=> {
    overlay.classList.toggle('active')
    defaultModal.classList.toggle('open')
})

selectRewardBtn.forEach(button => {
    button.addEventListener('click', ()=> {
        overlay.classList.toggle('active')
        defaultModal.classList.toggle('open')
    })
})

// PLEDGE CONTAINERS
pledgeContainerRadio1.addEventListener('change', ()=> {
    pledgeContainer1.classList.toggle('clicked')
    pledgeContainer2.classList.remove('clicked')
    pledgeContainer3.classList.remove('clicked')
})

pledgeContainerRadio2.addEventListener('change', ()=> {
    pledgeContainer2.classList.toggle('clicked')
    pledgeContainer1.classList.remove('clicked')
    pledgeContainer3.classList.remove('clicked')
})

pledgeContainerRadio3.addEventListener('change', ()=> {
    pledgeContainer3.classList.toggle('clicked')
    pledgeContainer1.classList.remove('clicked')
    pledgeContainer2.classList.remove('clicked')
})

// CLOSE PLEDGE CONTAINER
modalClose.addEventListener('click', ()=> {
    overlay.classList.remove('active')
    defaultModal.classList.remove('open')
    pledgeContainer1.classList.remove('clicked')
    pledgeContainer2.classList.remove('clicked')
    pledgeContainer3.classList.remove('clicked')
    pledgeContainerRadio1.checked=false;
    pledgeContainerRadio2.checked=false;
    pledgeContainerRadio3.checked=false;
    pledgeAmount1.value=null;
    pledgeAmount2.value=null;
    pledgeAmount3.value=null;
})

overlay.addEventListener('click', ()=> {
    overlay.classList.remove('active')
    defaultModal.classList.remove('open')
    pledgeContainer1.classList.remove('clicked')
    pledgeContainer2.classList.remove('clicked')
    pledgeContainer3.classList.remove('clicked')
    pledgeContainerRadio1.checked=false;
    pledgeContainerRadio2.checked=false;
    pledgeContainerRadio3.checked=false;
    pledgeAmount1.value=null;
    pledgeAmount2.value=null;
    pledgeAmount3.value=null;

    navbar.classList.remove('open')
    x.classList.remove('open')
    hamburger.classList.remove('open')
    overlay.classList.remove('active')
    itemContainer.classList.remove('change')
    statsContainer.classList.remove('change')
})


// INTERACTIVE PLEDGING
// const userInput = `${'$'} pledgeAmount1.innerText`;





