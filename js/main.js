const btnCart = document.getElementById('cart');
const total = modal.querySelector('.modal-sum')
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.btn-close')
const mainIndex = document.getElementById('index')
const mainRest = document.getElementById('restaurant')
const cardsBlockIndex = mainIndex.querySelector('.cards')
const cardsIndex = cardsBlockIndex.querySelectorAll('.card')
const logos = document.querySelectorAll('.logo-link')
const cardsBlockRest = mainRest.querySelector('.cards')
const cardsRest = cardsBlockRest.querySelectorAll('.card')



let rows = modal.querySelectorAll('.row')


//объявление функций//
    const getProductModal = (nameProduct, priceProduct, index = 
    rows = rowsBlock.querySelectorAll('.row')
    
    console.log(rows);
    
    //console.log(nameProduct);
    //console.log(priceProduct);
    //console.log(index);
   // rows [index]
   // let nameProductBlock = rows[index].querySelector('.product-name')
   // let priceProductBlock = rows[index].querySelector('.price')    

   // nameProductBlock.textContent=nameProduct
   // priceProductBlock.textContent=priceProduct


}
const modalOpen = () => {
   modal.classList.toggle('modal--close')
}

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
const getToMain = () => {
    mainRest.classList.toggle('not--active')
    mainIndex.classList.toggle('not--active')
}
const getNewPrice = (count, price, priceBlock) => {
    let newPrice=0;
    newPrice = count * price
    priceBlock.textContent = newPrice
    getFullPrice()    
    }
//вызов функций//
btnCart.addEventListener('click', modalOpen);
btnClose.addEventListener('click', modalOpen);
//cardsRest.addEventListener('click', console.log(cardsRest));


modal.addEventListener('click', (Event) => {
    if (Event.target == modal) {
        modalOpen()
    }
})

//логгеры//

rows.forEach(row => {
        let priceBlock = row.querySelector('.price')
    let price= +priceBlock.textContent
    let countBlock = row.querySelector('.count')
    let count = countBlock.textContent
    const btnMinus = row.querySelector('.minus')
    const btnPlus = row.querySelector('.plus')

    
   

    btnMinus.addEventListener('click', () => {
        if (count > 0){
        count --
        countBlock.textContent = count
        getNewPrice(count, price, priceBlock)
    }

    })

    btnPlus.addEventListener('click', () => {
        count ++
        countBlock.textContent = count
        getNewPrice(count,price, priceBlock)
            })

    
})
cardsRest.forEach((card, index) => {
    let nameProductBlock = card.querySelector('.card-title')
    let priceProductBlock = card.querySelector('.product-price')
    let nameProduct = nameProductBlock.textContent
    let priceProduct = +priceProductBlock.textContent.slice(0, 3)
    
    const btnProduct = card.querySelector('button')

    btnProduct.addEventListener('click', () => {
        getProductModal(nameProduct, priceProduct, index)
    })



   

})

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

getFullPrice()

