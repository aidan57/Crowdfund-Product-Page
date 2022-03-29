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

const pledgeAmount1 = document.querySelector('#pa1');
const pledgeAmount2 = document.querySelector('#pa2');
const pledgeAmount3 = document.querySelector('#pa3');

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
    if(window.innerWidth > 769) {
        window.scrollTo({top: 200, behavior: 'smooth'})
    } else {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
})

selectRewardBtn.forEach(button => {
    button.addEventListener('click', ()=> {
        overlay.classList.toggle('active')
        defaultModal.classList.toggle('open')
        if(window.innerWidth > 769) {
            window.scrollTo({top: 200, behavior: 'smooth'})
        } else {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    })
})

// PLEDGE CONTAINERS
pledgeContainerRadio1.addEventListener('change', ()=> {
    pledgeContainer1.classList.toggle('clicked')
    pledgeContainer2.classList.remove('clicked')
    pledgeContainer3.classList.remove('clicked')


        pledgeAmount1.addEventListener('click', ()=> {
            priceContainer1.style.borderColor = moderateCyan
        })
        pledgeAmount1.addEventListener('blur', ()=> {
            priceContainer1.style.borderColor = ''
        })
        
    
    pledgeAmount2.value=null;
    pledgeAmount3.value=null;
})

pledgeContainerRadio2.addEventListener('change', ()=> {
    pledgeContainer2.classList.toggle('clicked')
    pledgeContainer1.classList.remove('clicked')
    pledgeContainer3.classList.remove('clicked')

    pledgeAmount2.addEventListener('click', ()=> {
        priceContainer2.style.borderColor = moderateCyan
    })
    pledgeAmount2.addEventListener('blur', ()=> {
        priceContainer2.style.borderColor = ''
    })

    pledgeAmount1.value=null;
    pledgeAmount3.value=null;
})

pledgeContainerRadio3.addEventListener('change', ()=> {
    pledgeContainer3.classList.toggle('clicked')
    pledgeContainer1.classList.remove('clicked')
    pledgeContainer2.classList.remove('clicked')

    pledgeAmount3.addEventListener('click', ()=> {
        priceContainer3.style.borderColor = moderateCyan
    })
    pledgeAmount3.addEventListener('blur', ()=> {
        priceContainer3.style.borderColor = ''
    })

    pledgeAmount1.value=null;
    pledgeAmount2.value=null;
})

const priceContainer1 = document.querySelector('#price-container-1');
const priceContainer2 = document.querySelector('#price-container-2');
const priceContainer3 = document.querySelector('#price-container-3');
const moderateCyan = 'hsl(176, 50%, 47%)';
const darkGray = 'hsl(0, 0%, 48%)';



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

    completedModal.classList.remove('open')
})


// INTERACTIVE PLEDGING

function checkKey() {
    var clean = this.value.replace(/[^0-9]/g, "")
                           .replace(/(,.*?),(.*,)?/, "$1");
    if (clean !== this.value) this.value = clean;
}

document.querySelector('input[id=pa1]').oninput = checkKey;
document.querySelector('input[id=pa2]').oninput = checkKey;
document.querySelector('input[id=pa3]').oninput = checkKey;



const forms = document.querySelectorAll('form');

const form2 = document.querySelector('#form2');
const form3 = document.querySelector('#form3');

const bambooAmount1 = document.querySelector('.bamboo-amount-1');
const bambooAmount2 = document.querySelector('.bamboo-amount-2');
const blackAmount1 = document.querySelector('.black-ed-amount-1');
const blackAmount2 = document.querySelector('.black-ed-amount-2');

form2.addEventListener('submit', (e)=> {
    e.preventDefault();
    bambooAmount1.innerHTML = '100<span>left</span>'
    bambooAmount2.innerHTML = '100<span>left</span>'
})

form3.addEventListener('submit', (e)=> {
    e.preventDefault();
    blackAmount1.innerHTML = '63<span>left</span>'
    blackAmount2.innerHTML = '63<span>left</span>'
})

forms.forEach(form => {
    form.addEventListener('submit', (e)=> {
        e.preventDefault();

// UPDATING STATS
        // PLEDGE AMOUNT 1
        const priceUpdate1 = pledgeAmount1.value;
        let totalMoney = 89914;
        let newTotal1 = totalMoney + parseInt(priceUpdate1);
        if(`${newTotal1}`.length === 5) {
            let spreadTotal = [...`${newTotal1}`];
            spreadTotal.splice(2, 0, ',')
            const moneyBacked = spreadTotal.reduce((total, el) => total + el);
            document.querySelector('#money-total').innerText = `$${moneyBacked}`;
        } else if(`${newTotal1}`.length === 6) {
            let spreadTotal = [...`${newTotal1}`];
            spreadTotal.splice(3, 0, ',')
            const moneyBacked = spreadTotal.reduce((total, el) => total + el);
            document.querySelector('#money-total').innerText = `$${moneyBacked}`;
        }

        // PLEDGE AMOUNT 2
        const priceUpdate2 = pledgeAmount2.value;
        let newTotal2 = totalMoney + parseInt(priceUpdate2);
        if(`${newTotal2}`.length === 5) {
            let spreadTotal = [...`${newTotal2}`];
            spreadTotal.splice(2, 0, ',')
            const moneyBacked = spreadTotal.reduce((total, el) => total + el);
            document.querySelector('#money-total').innerText = `$${moneyBacked}`;
        } else if(`${newTotal2}`.length === 6) {
            let spreadTotal = [...`${newTotal2}`];
            spreadTotal.splice(3, 0, ',')
            const moneyBacked = spreadTotal.reduce((total, el) => total + el);
            document.querySelector('#money-total').innerText = `$${moneyBacked}`;
        }

        // PLEDGE AMOUNT 3
        const priceUpdate3 = pledgeAmount3.value;
        let newTotal3 = totalMoney + parseInt(priceUpdate3);
        if(`${newTotal3}`.length === 5) {
            let spreadTotal = [...`${newTotal3}`];
            spreadTotal.splice(2, 0, ',')
            const moneyBacked = spreadTotal.reduce((total, el) => total + el);
            document.querySelector('#money-total').innerText = `$${moneyBacked}`;
        } else if(`${newTotal3}`.length === 6) {
            let spreadTotal = [...`${newTotal3}`];
            spreadTotal.splice(3, 0, ',')
            const moneyBacked = spreadTotal.reduce((total, el) => total + el);
            document.querySelector('#money-total').innerText = `$${moneyBacked}`;
        }

        // TOTAL BACKERS 
        document.querySelector('#people-total').innerText = '5,008'
       
        

        pledgeContainerRadio1.checked=false;
        pledgeContainerRadio2.checked=false;
        pledgeContainerRadio3.checked=false;

        pledgeAmount1.value=null;
        pledgeAmount2.value=null;
        pledgeAmount3.value=null;
    
        defaultModal.classList.remove('open')
        pledgeContainer1.classList.remove('clicked')
        pledgeContainer2.classList.remove('clicked')
        pledgeContainer3.classList.remove('clicked')

        completedModal.classList.toggle('open')

        if(window.innerWidth > 769) {
            window.scrollTo({top: 170, behavior: 'smooth'})
        } else {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
    })
})

// COMPLETED MODAL
const gotItBtn = document.querySelector('.got-it');
const completedModal = document.querySelector('.completed-modal');

gotItBtn.addEventListener('click', ()=> {
    overlay.classList.remove('active')
    completedModal.classList.remove('open')
})


















