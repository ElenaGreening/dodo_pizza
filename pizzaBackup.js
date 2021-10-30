import { products } from "./productsArray.js";

console.log(products);

let sum = 0;

let shoppingCart = [];
let currentProd = {};

let dodoMain = document.querySelector(".dodo-menu");
let createProduct = function (elem) {
  elem.pizzaSize = "medium";
  elem.pizzaDough = "traditional";

  let productCard = document.createElement("div");
  productCard.classList.add("dodo-productCard");
  productCard.classList.add("dodo-productCard--border");
  productCard.classList.add("dodo-productCard--padding");

  let productCardImg = document.createElement("img");
  productCardImg.src = elem.pizzaSizes[1].img.traditional;
  productCardImg.classList.add("dodo-productCard__img");
  productCard.append(productCardImg);

  let productCardInfo = document.createElement("div");
  productCardInfo.classList.add("dodo-productCard__info");
  productCard.append(productCardInfo);

  let productCardTitle = document.createElement("h2");
  productCardTitle.classList.add("dodo-productCard__title");
  productCardTitle.innerText = elem.title;

  productCardInfo.append(productCardTitle);

  let productCardIngredients = document.createElement("p");
  productCardIngredients.classList.add("dodo-productCard__description");

  elem.ingredients.map((elem) => {
    let ingredientsSpan = document.createElement("span");
    ingredientsSpan.innerText = `${elem.name}, `;
    productCardIngredients.append(ingredientsSpan);
  });
  // let template = `от ${elem.title}`

  productCardInfo.append(productCardIngredients);

  let productCardButtonPrice = document.createElement("button");
  productCardButtonPrice.classList.add("dodo-button-price");
  productCardButtonPrice.innerText = `от ${elem.pizzaSizes[1].price}₽`;
  // let template = `от ${elem.title}`
  productCardInfo.append(productCardButtonPrice);

  let productCardPriceInf = document.createElement("div");
  productCardPriceInf.classList.add("dodo-productCard__priceInfo");
  productCardInfo.append(productCardPriceInf);

  let productCardPriceTag = document.createElement("p");
  productCardPriceTag.classList.add("dodo-productCard__priceTag");
  productCardPriceTag.innerText = `от ${elem.pizzaSizes[1].price}₽`;

  productCardPriceInf.append(productCardPriceTag);

  let productCardButtonChoose = document.createElement("button");
  productCardButtonChoose.classList.add("dodo-button-choose");
  productCardButtonChoose.innerText = "Выбрать";
  productCardPriceInf.append(productCardButtonChoose);
  dodoMain.append(productCard);

  // let priceButton = document.querySelector('.dodo-button-price')
  productCardButtonPrice.addEventListener("click", function () {
    createPopUp(elem);
  });
};
products.map(createProduct);

let createPopUp = function (product) {
  let productPopUp = document.createElement("div");
  productPopUp.classList.add("dodo-product-popUp");

  let popupArrow = document.createElement("div");
  popupArrow.classList.add("popup-arrow");
  productPopUp.append(popupArrow);

  let popupArrowImg = document.createElement("img");
  popupArrowImg.classList.add("popup-arrow-img");
  popupArrowImg.src = "VectorTick.png";
  popupArrow.append(popupArrowImg);

  let popupImg = document.createElement("img");
  popupImg.src = product.pizzaSizes[1].img.traditional;
  popupImg.classList.add("popupImg");
  productPopUp.append(popupImg);

  let infoButton = document.createElement("button");
  infoButton.classList.add("dodo-info-button");
  productPopUp.append(infoButton);

  let infoButtonImg = document.createElement("img");
  infoButtonImg.classList.add("dodo-info-button--img");
  infoButtonImg.src = "VectorInfo.png";
  infoButton.append(infoButtonImg);

  let popupCalories = document.createElement("div");
  popupCalories.classList.add("dodo-popup-calories");
  productPopUp.append(popupCalories);

  let popupCaloriesHeader = document.createElement("h2");
  popupCaloriesHeader.innerText = "Пищевая ценность на 100 г";
  popupCaloriesHeader.classList.add("dodo-popup-calories-header");
  popupCalories.append(popupCaloriesHeader);

  infoButton.addEventListener("click", function () {
    if (popupCalories.style.display == "none") {
      popupCalories.style.display = "block";
      infoButton.style.backgroundColor = "#464C55";
    } else {
      popupCalories.style.display = "none";
      infoButton.style.backgroundColor = "#F0F2F5";
    }
  });

  let popupTitle = document.createElement("h1");
  popupTitle.classList.add("dodo-product-popUp-header");
  popupTitle.innerText = product.title;
  productPopUp.append(popupTitle);

  let info = document.createElement("p");
  productPopUp.append(info);

  let infoSpan1 = document.createElement("span");
  infoSpan1.innerText = `${product.pizzaSizes[1].size} см, `;
  info.append(infoSpan1);

  let infoSpan2 = document.createElement("span");
  infoSpan2.innerText = `${product.dough[1]} , `;
  info.append(infoSpan2);

  let infoSpan3 = document.createElement("span");
  infoSpan3.innerText = `${"здесь был вася"} ,`;
  info.append(infoSpan3);

  let popupIngredients = document.createElement("div");
  popupIngredients.classList.add = "pizza-ingredients";
  productPopUp.append(popupIngredients);

  product.ingredients.map((elem) => {
    let ingredientsSpan = document.createElement("span");
    ingredientsSpan.innerText = `${elem.name}, `;

    if (elem.changeable == true) {
      ingredientsSpan.style.textDecoration = "underline";
      ingredientsSpan.style.textDecorationStyle = "dashed";
    }
    ingredientsSpan.addEventListener("click", function () {
      ingredientsSpan.style.textDecoration = "line-through";
    });
    popupIngredients.append(ingredientsSpan);
  });

  // let popupFieldsets = document.createElement('div')
  // popupFieldsets.classList.add('dodo-popup-fieldsets')
  // productPopUp.append(popupFieldsets)

  let fieldsetSize = document.createElement("fieldset");
  fieldsetSize.classList.add("dodo-radio-fieldset");
  productPopUp.append(fieldsetSize);

  let popupInputSize = document.createElement("input");
  popupInputSize.classList.add("dodo-popUp-input");
  popupInputSize.id = "small";
  popupInputSize.setAttribute("type", "radio");
  popupInputSize.setAttribute("name", "sizes");
  popupInputSize.value = "small";
  fieldsetSize.append(popupInputSize);

  let popupLabelSize = document.createElement("label");
  popupLabelSize.classList.add("dodo-radio-label");
  popupLabelSize.setAttribute("for", "small");
  popupLabelSize.innerText = "Маленькая";
  popupLabelSize.value = "small";
  fieldsetSize.append(popupLabelSize);

  let popupInputSize2 = document.createElement("input");
  popupInputSize2.classList.add("dodo-popUp-input");
  popupInputSize2.id = "medium";
  popupInputSize2.setAttribute("type", "radio");
  popupInputSize2.setAttribute("name", "sizes");
  popupInputSize2.value = "medium";
  popupInputSize2.checked = true;
  fieldsetSize.append(popupInputSize2);

  let popupLabelSize2 = document.createElement("label");
  popupLabelSize2.classList.add("dodo-radio-label");
  popupLabelSize2.setAttribute("for", "medium");
  popupLabelSize2.innerText = "Средняя";
  popupLabelSize2.value = "medium";
  fieldsetSize.append(popupLabelSize2);

  let popupInputSize3 = document.createElement("input");
  popupInputSize3.classList.add("dodo-popUp-input");
  popupInputSize3.id = "big";
  popupInputSize3.setAttribute("type", "radio");
  popupInputSize3.setAttribute("name", "sizes");
  fieldsetSize.append(popupInputSize3);

  let popupLabelSize3 = document.createElement("label");
  popupLabelSize3.classList.add("dodo-radio-label");
  popupLabelSize3.setAttribute("for", "big");
  popupLabelSize3.value = "big";
  popupLabelSize3.innerText = "Большая";
  fieldsetSize.append(popupLabelSize3);

  let fieldsetDough = document.createElement("fieldset");
  fieldsetDough.classList.add("dodo-radio-fieldset");
  productPopUp.append(fieldsetDough);

  let popupInputDoughTraditional = document.createElement("input");
  popupInputDoughTraditional.classList.add("dodo-popUp-input-dough");
  popupInputDoughTraditional.id = "traditional";
  popupInputDoughTraditional.setAttribute("type", "radio");
  popupInputDoughTraditional.setAttribute("name", "dough");
  popupInputDoughTraditional.checked = true;
  fieldsetDough.append(popupInputDoughTraditional);

  let popupLabelDoughTraditional = document.createElement("label");
  popupLabelDoughTraditional.classList.add("dodo-radio-label");
  popupLabelDoughTraditional.setAttribute("for", "traditional");
  popupLabelDoughTraditional.innerText = "Традиционное";
  fieldsetDough.append(popupLabelDoughTraditional);

  let popupInputDoughThin = document.createElement("input");
  popupInputDoughThin.classList.add("dodo-popUp-input-dough");
  popupInputDoughThin.id = "thin";
  popupInputDoughThin.setAttribute("type", "radio");
  popupInputDoughThin.setAttribute("name", "dough");
  fieldsetDough.append(popupInputDoughThin);

  let popupLabelDough2 = document.createElement("label");
  popupLabelDough2.classList.add("dodo-radio-label");
  popupLabelDough2.setAttribute("for", "thin");
  popupLabelDough2.innerText = "Тонкое";
  fieldsetDough.append(popupLabelDough2);

  let popupTitle2 = document.createElement("h2");
  //поменяй класс или добавь модификатор
  popupTitle2.classList.add("dodo-product-popUp-header");
  popupTitle2.innerText = "Добавить в пиццу";
  productPopUp.append(popupTitle2);

  let toppingsCont = document.createElement("fieldset");
  toppingsCont.classList.add("toppings--container");
  productPopUp.append(toppingsCont);
  // if(products.toppings.length > 0){
  //     e.innerText  = 'Add to pizza'
  // }
  let counter = 0;
  console.log(product.additionalIngredients);
  product.additionalIngredients.map((elem) => {
    let sweetWrapper = document.createElement("button");
    sweetWrapper.classList.add("dodo-topping-sweetWrapper");
    // sweetWrapper.addEventListener('click', function (){
    //
    // })
    toppingsCont.append(sweetWrapper);

    let toppingToggle = document.createElement("input");
    toppingToggle.classList.add("dodo-topping-input");
    toppingToggle.addEventListener("click", function () {
      console.log(elem.price.medium);
    });

    toppingToggle.id = "topping__toggle" + counter;
    toppingToggle.setAttribute("type", "checkbox");

    sweetWrapper.append(toppingToggle);

    let toppingLabel = document.createElement("label");
    toppingLabel.classList.add("dodo-topping-label");
    toppingLabel.setAttribute("for", "topping__toggle" + counter);

    sweetWrapper.append(toppingLabel);

    counter++;

    let toppingImg = document.createElement("img");
    toppingImg.classList.add("dodo-topping-img");
    toppingImg.src = elem.img;

    toppingLabel.append(toppingImg);

    let toppingHeader = document.createElement("h2");
    toppingHeader.classList.add("topping-header");
    toppingHeader.innerText = elem.title;

    toppingLabel.append(toppingHeader);

    let toppingPrice = document.createElement("p");
    toppingPrice.classList.add("topping-price");
    toppingPrice.innerText = `${elem.price.medium}₽`;

    toppingLabel.append(toppingPrice);
  });

  popupArrow.addEventListener("click", function () {
    popupArrow.parentNode.remove();
  });

  let toBasketButton = document.createElement("button");
  toBasketButton.classList.add("dodo-product-popUp-toBasket-button");
  toBasketButton.innerText = ` Добавить в корзину за ${product.pizzaSizes[1].price} ₽`;

  productPopUp.append(toBasketButton);

  let body = document.querySelector(".dodo-body");
  body.append(productPopUp);

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
  Array.from(pizzaDoughes).map((item) =>
    item.addEventListener("click", showPizzaDough)
  );

  // // let toppingPrice = product.pizzaSizes[1].price;
  // let pizzaPrices = document. querySelectorAll('.dodo-topping-label')
  // function showPizzaPrices(event){
  //     toppingPrice = event.target.toppingPrice
  //     console.log(toppingPrice)
  // }
  // Array.from(pizzaPrices).map(item => item.addEventListener('click', showPizzaPrices))

  let stickyBasket = document.querySelector(".sticky-basket");
  let basketMeter = document.querySelector(".basket-meter");
  toBasketButton.addEventListener("click", function () {
    sum++;
    basketMeter.innerText = sum;
    basketMeter.style.textAlign = "center";
    basketMeter.style.color = "#F96900";
    toBasketButton.parentNode.remove();
    basketMeter.style.textJustify = "center";
    if (sum >= 1) {
      stickyBasket.style.display = "block";
    } else {
      stickyBasket.style.display = "none";
    }
  });
  dodoMain.append(stickyBasket);
};
