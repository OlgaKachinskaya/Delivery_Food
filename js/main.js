const btnCart = document.getElementById('cart');
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.btn-close')

//объявление функций//

const modalOpen = () => {
   modal.classList.toggle('modal--close')
}
const rows = modal.querySelectorAll('.row')
const total = modal.querySelector('.modal-sum')


const getFullPrice = () => {
    let fullPrice = 0
    const rows = modal.querySelectorAll('.row');
    rows.forEach(row => {
        let newPrice=0;
        let priceBlock = row.querySelector('.price')
        let price= +priceBlock.textContent
        fullPrice += price;
    })
    
    total.textContent = fullPrice
}
//вызов функций//
btnCart.addEventListener('click', modalOpen);
btnClose.addEventListener('click', modalOpen);


modal.addEventListener('click', (Event) => {
    if (Event.target == modal) {
        modalOpen()
    }
})

//логгеры//



rows.forEach(row => {
    let newPrice=0;
    let priceBlock = row.querySelector('.price')
    let price= +priceBlock.textContent
    let countBlock = row.querySelector('.count')
    let count = countBlock.textContent
    const btnMinus = row.querySelector('.minus')
    const btnPlus = row.querySelector('.plus')

    const getNewPrice = (count, price) => {
    newPrice = count * price
    priceBlock.textContent = newPrice
    getFullPrice()    
    }
   

    btnMinus.addEventListener('click', () => {
        if (count > 0){
        count --
        countBlock.textContent = count
        getNewPrice(count, price)
    }

    })

    btnPlus.addEventListener('click', () => {
        count ++
        countBlock.textContent = count
        getNewPrice(count,price)
            })

    
})
getFullPrice()
 
const mainIndex = document.getElementById('index')
const mainRest = document.getElementById('restaurant')
const cardsBlockIndex = mainIndex.querySelector('.cards')
const cardsIndex = cardsBlockIndex.querySelectorAll('.card')
const logos = document.querySelectorAll('.logo-link')


const getToMain = () => {
    mainRest.classList.toggle('not--active')
    mainIndex.classList.toggle('not--active')
}

cardsIndex.forEach(card => {
    card.addEventListener('click', () => {
        getToMain()
    })
})
logos.forEach(logo => {
    logo.addEventListener('click', (event) => {
        event.preventDefault();
        if(mainIndex.classList.contains('not--active')) {
            getToMain()
        }
    })
})
