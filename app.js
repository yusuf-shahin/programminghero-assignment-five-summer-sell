// // Bismillahir Rahmanir Rahim

const cards = document.querySelectorAll(`#card`);
const orderedItem = document.querySelector(`#ordered-item`) ;
const totalList = document.querySelector(`#total`) ;
const discountInput = document.querySelector('#discount');
const applyDiscountButton = document.querySelector('#applyDiscount');
const discountPrice = document.querySelector(`#discount-price`) ;
const totalAmount = document.querySelector(`#total-amount`) ;
const clearBtn = document.querySelector(`#clear-btn`) ;
const modal = document.querySelector(`#modal`)

let couponApply = false ;
let itemNum = 1 ;
let discount 
// Click Event of my all cards

for(let i = 0; i < cards.length; i++){

    cards[i].addEventListener('click', () => {
        let name = cards[i].children[1].children[1].innerText;
        let price = cards[i].children[1].children[2].innerText;
        //console.log(name + " " + price ) 
        addItems(name, price)
    });
}

// Add my card name into my list

function addItems(listName, listPrice) {
    orderedItem.innerHTML += `<li>${itemNum}. &nbsp; ${listName} </li>`
    let total = parseFloat(totalList.innerText) + parseFloat(listPrice)
    totalList.textContent = total.toFixed(2).toString()
    itemNum++
    if (couponApply) {
        discount = total / 5 ;
        total -= discount ;
        discountPrice.innerText = discount.toFixed(2).toString()
    }
    totalAmount.innerText = total.toFixed(2).toString()
}

// Discount button function 

applyDiscountButton.addEventListener(`click` , () => {
    let total = parseFloat(totalList.innerText) ;
    if (total < 200.00) {
         return 0
    }
    let coupon = discountInput.value
    //console.log(coupon)
    if (coupon != `SELL200` ){
        alert(`Your Promocode is invalid`) ;
        return 0
    }

    couponApply = true ; 

    discount = total / 5.0 ;
    discountPrice.textContent = discount.toFixed(2).toString() ;

    let mainTotal = total - discount ;
    totalAmount.innerText = mainTotal.toFixed(2).toString() ; 

    discountInput.value = `` ;

})

function clr () {
    orderedItem.innerHTML = ``;
    let total = 0.00;
    discount = 0.00;
    itemNum = 1;
    couponApply = 0;
    totalList.textContent = total.toFixed(2).toString()
    discountPrice.textContent = discount.toFixed(2).toString() ;
    totalAmount.innerText = total.toFixed(2).toString() ; 
}




  
 

  


