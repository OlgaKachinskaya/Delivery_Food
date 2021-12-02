const btnCart = document.getElementById('cart');
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.btn-close')

//объявление функций//

const modalOpen = () => {
   modal.classList.toggle('modal--close')
}

//вызов функций//
btnCart.addEventListener('click', modalOpen);
btnClose.addEventListener('click', modalOpen)

modal.addEventListener('click', (Event) => {
    if (Event.target == modal) {
        modalOpen()
    }
})

//логгеры//

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
 

