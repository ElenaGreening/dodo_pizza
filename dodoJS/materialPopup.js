// -------------------------для создания картинок у ингридиентов-----

// let ingredientsButtonImg = document.createElement("img");
// ingredientsButtonImg.classList.add("ingredientsButtonImg");
// ingredientsButtonImg.src = "cross.png";
// ingredientsButtonImg.style.width = "14px";
// ingredientsButtonImg.style.height = "14px";
// ingredientsButton.append(ingredientsButtonImg);

ingredientsButton.addEventListener("click", function () {
    ingredientsButton.style.textDecoration = "line-through";
    let ingredientsButtonImg = document.querySelectorAll(
        ".ingredientsButtonImg"
    );
    // Array.from(ingredientsButtonImg).map((elem) => {
    //   ingredientsButtonImg.src = "arrowback.png";
    // })
    // );
    // }
    popupIngredients.append(ingredientsButton);
return;
// let info = document.createElement('p')
// productPopUp.append(info)
//
// let infoSpan1 = document.createElement('span')
// infoSpan1.innerText = `${product.pizzaSizes[1].size} см, `;
// info.append(infoSpan1)
//
// let infoSpan2 = document.createElement('span')
// infoSpan2.innerText = `${product.dough[1]} , `;
// info.append(infoSpan2)
//
// let infoSpan3 = document.createElement('span')
// infoSpan3.innerText = `${'здесь был вася'} ,`;
// info.append(infoSpan3)

//ингредиенты
// for( let i = 0; i < product.ingredients.length; i++){
//     console.log(product.ingredients[i])
// }
// // ------------------------при добавлении этой инфы в js радиослайдер ломается(маленькой кнопке дается название большая и она в позиции чект)-------------

// let popupInputSize = document.querySelector(".dodo-popUp-input");
// popupInputSize.id = "small";
// popupInputSize.setAttribute("type", "radio");
// popupInputSize.setAttribute("name", "sizes");
// popupInputSize.value = "small";
//
// let popupLabelSize = document.querySelector(".dodo-radio-label");
// popupLabelSize.setAttribute("for", "small");
// popupLabelSize.innerText = "Маленькая";
// popupLabelSize.value = "small";
//
// let popupInputSize2 = document.querySelector(".dodo-popUp-input");
// popupInputSize2.id = "medium";
// popupInputSize2.setAttribute("type", "radio");
// popupInputSize2.setAttribute("name", "sizes");
// popupInputSize2.value = "medium";
// popupInputSize2.checked = true;
//
// let popupLabelSize2 = document.querySelector(".dodo-radio-label");
// popupLabelSize2.setAttribute("for", "medium");
// popupLabelSize2.innerText = "Средняя";
// popupLabelSize2.value = "medium";
//
// let popupInputSize3 = document.querySelector(".dodo-popUp-input");
// popupInputSize3.id = "big";
// popupInputSize3.setAttribute("type", "radio");
// popupInputSize3.setAttribute("name", "sizes");
//
// let popupLabelSize3 = document.querySelector(".dodo-radio-label");
// popupLabelSize3.setAttribute("for", "big");
// popupLabelSize3.value = "big";
// popupLabelSize3.innerText = "Большая";

// // -----тонкое тесто перепрыгнуло в соседний fieldset а fieldsetdough сломался-------
// let fieldsetDough = document.querySelector(".dodo-radio-fieldset");
//
// let popupInputDoughTraditional = document.querySelector(
//   ".dodo-popUp-input-dough"
// );
// console.log(popupInputDoughTraditional);
// popupInputDoughTraditional.id = "traditional";
// popupInputDoughTraditional.setAttribute("type", "radio");
// popupInputDoughTraditional.setAttribute("name", "dough");
// popupInputDoughTraditional.checked = true;
//
// let popupLabelDoughTraditional = document.querySelector(".dodo-radio-label");
// popupLabelDoughTraditional.setAttribute("for", "traditional");
// popupLabelDoughTraditional.innerText = "Традиционное";
//
// let popupInputDoughThin = document.querySelector(".dodo-popUp-input-dough");
// popupInputDoughThin.id = "thin";
// popupInputDoughThin.setAttribute("type", "radio");
// popupInputDoughThin.setAttribute("name", "dough");
//
// let popupLabelDoughThin = document.querySelector(".dodo-radio-label");
// popupLabelDoughThin.setAttribute("for", "thin");
// popupLabelDoughThin.innerText = "Тонкое";

let toppingsCont = document.querySelector('.toppings--container')
if(products.toppings.length > 0){
    e.innerText  = 'Add to pizza'
}


let body = document.querySelector(".dodo-body");

let pizzaSize = "medium";
let pizzaSizes = document.querySelectorAll(".dodo-popUp-input");
function ShowPizzaSize(event) {
    pizzaSize = event.target.id;
    console.log(pizzaSize);
}
Array.from(pizzaSizes).map((item) =>
    item.addEventListener("click", ShowPizzaSize)
);

let pizzaDough = "traditional";
let pizzaDoughes = document.querySelectorAll(".dodo-popUp-input-dough");
function showPizzaDough(event) {
    pizzaDough = event.target.id;
    console.log(pizzaDough);
}
Array.from(pizzaDoughes).map((item) => {
        item.addEventListener("click", showPizzaDough)
    }

// // let toppingPrice = product.pizzaSizes[1].price;
// let pizzaPrices = document. querySelectorAll('.dodo-topping-label')
// function showPizzaPrices(event){
//     toppingPrice = event.target.toppingPrice
//     console.log(toppingPrice)
// }
// Array.from(pizzaPrices).map(item => item.addEventListener('click', showPizzaPrices))


};