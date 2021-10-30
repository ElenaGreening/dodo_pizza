import { products } from "./productsArray.js";
import { addToBasket } from "./dodoShoppingTrolley.js";

console.log(products);
let toppingArr = [];

let createPopUp = function (product) {
  let pizzaSize = "medium";
  let pizzaDough = "traditional";

  let pizzaSizes = document.querySelectorAll(".dodo-popUp-input");
  function showPizzaSize(event) {
    pizzaSize = event.target.id;
    //дизейблим кнопку тонкое тесто
    let disabledDough = document.getElementById("thin");
    disabledDough.disabled = pizzaSize === "small";
    if (pizzaDough === "thin" && pizzaSize === "small") {
      pizzaDoughes[0].checked = true;
      pizzaDough = "traditional";
    }
    calcPriceWithToppings();
    calcPriceFromSize();
    setUpWeightSizeSpan();
    makeToppings();
  }
  Array.from(pizzaSizes).map((item) =>
    item.addEventListener("click", showPizzaSize)
  );

  let pizzaDoughes = document.querySelectorAll(".dodo-popUp-input-dough");
  function showPizzaDough(event) {
    pizzaDough = event.target.id;
    // if (pizzaDough == "thin") {
    //   toppingArr = toppingArr.filter((elem) => elem.title != "Сырный бортик");
    //   console.log(toppingArr);
    // }
    calcPriceWithToppings();
    calcPriceFromSize();
    setUpDoughSpan();
    makeToppings();
  }
  Array.from(pizzaDoughes).map((item) => {
    item.addEventListener("click", showPizzaDough);
  });

  //IIFE (function(){})()
  let productPopUp = document.querySelector(".dodo-product-popUp");
  productPopUp.style.display = "block";

  let popupArrow = document.querySelector(".popup-arrow");
  popupArrow.addEventListener("click", function () {
    Array.from(pizzaSizes).map((item) => {
      item.removeEventListener("click", showPizzaSize);
    });
    Array.from(pizzaDoughes).map((item) => {
      item.removeEventListener("click", showPizzaDough);
    });
    productPopUp.style.display = "none";
  });

  // изменение изображения
  let popupImg = document.querySelector(".popupImg");
  popupImg.src = product.pizzaSizes[1].img.traditional;

  // id
  let productId = product.id;
  // изменение заголовка
  let popupTitle = document.querySelector(".dodo-product-popUp-header");
  popupTitle.innerText = product.title;

  let popupShortInfo = document.querySelector(".popup-shortInfo");
  popupShortInfo.innerHTML = "";
  let infoSpan1 = document.createElement("span");
  let infoSpan2 = document.createElement("span");
  let infoSpan3 = document.createElement("span");

  function setUpWeightSizeSpan() {
    if (pizzaSize === "small") {
      infoSpan1.innerText = `${product.pizzaSizes[0].size} см, `;
      infoSpan3.innerText = ` ${product.pizzaSizes[0].weight} гр.`;
    } else if (pizzaSize === "medium") {
      infoSpan1.innerText = `${product.pizzaSizes[1].size} см, `;
      infoSpan3.innerText = ` ${product.pizzaSizes[1].weight} гр.`;
    } else if (pizzaSize === "big") {
      infoSpan1.innerText = `${product.pizzaSizes[2].size} см, `;
      infoSpan3.innerText = ` ${product.pizzaSizes[2].weight} гр.`;
    }
  }
  setUpWeightSizeSpan();

  function setUpDoughSpan() {
    if (pizzaDough === "thin") {
      infoSpan2.innerText = ` ${product.dough[0]} , `;
    } else if (pizzaDough === "traditional") {
      infoSpan2.innerText = ` ${product.dough[1]} ,`;
    }
  }
  setUpDoughSpan();
  popupShortInfo.append(infoSpan1);
  popupShortInfo.append(infoSpan2);
  popupShortInfo.append(infoSpan3);

  let infoButton = document.querySelector(".dodo-info-button");

  let popupCalories = document.querySelector(".dodo-popup-calories");

  let popupCaloriesHeader = document.querySelector(
    ".dodo-popup-calories-header"
  );
  popupCaloriesHeader.innerText = "Пищевая ценность на 100 г";
  popupCalories.append(popupCaloriesHeader);

  // -----------------------Работает только 1 кнопка----------
  infoButton.addEventListener("click", function () {
    if (popupCalories.style.display == "none") {
      popupCalories.style.display = "block";
    } else {
      popupCalories.style.display = "none";
    }
  });

  let popupIngredients = document.querySelector(".pizza-ingredients");
  popupIngredients.innerHTML = "";
  product.ingredients.map((elem) => {
    let ingredientsButton = document.createElement("button");
    ingredientsButton.classList.add("popup-ingredientsButton");
    ingredientsButton.innerText = `${elem.name} `;

    if (elem.changeable === true) {
      ingredientsButton.classList.add("popup-ingredientsButton-dashed");
      ingredientsButton.innerText = `${elem.name} `;
      let ingredientsButtonImg = document.createElement("span");
      ingredientsButtonImg.classList.add("ingredientsButtonImg");
      ingredientsButton.append(ingredientsButtonImg);
      ingredientsButton.addEventListener("click", function () {
        if (
          ingredientsButton.classList.contains("ingredientsButton-excluded") ===
          true
        ) {
          ingredientsButton.classList.remove("ingredientsButton-excluded");
          ingredientsButton.classList.add("popup-ingredientsButton-dashed");
          ingredientsButtonImg.classList.remove("ingredientsButtonImg--focus");
          ingredientsButtonImg.classList.add("ingredientsButtonImg");
        } else {
          ingredientsButton.classList.add("ingredientsButton-excluded");
          ingredientsButtonImg.classList.add("ingredientsButtonImg--focus");
        }
        // let ingredientsButtonImg = document.querySelectorAll(
        //   ".ingredientsButtonImg"
        // );
      });
    }
    popupIngredients.append(ingredientsButton);
  });

  // отрисовка дополнительных ингредиентов
  let counter1 = 0;
  let toppingsCont = document.querySelector(".toppings--container");
  toppingArr = [];
  function makeToppings() {
    toppingsCont.innerHTML = "";
    product.additionalIngredients.map((ingredient) => {
      let sweetWrapper = document.createElement("button");
      sweetWrapper.classList.add("dodo-topping-sweetWrapper");
      toppingsCont.append(sweetWrapper);

      let toppingToggle = document.createElement("input");
      toppingToggle.classList.add("dodo-topping-input");

      if (ingredient.title === "Сырный бортик") {
        console.log({ pizzaDough, pizzaSize });
        toppingToggle.disabled = pizzaSize === "small" || pizzaDough === "thin";
      }
      if (toppingArr.includes(ingredient)) {
        toppingToggle.checked = !toppingToggle.disabled;
      }
      // toppingArr = toppingArr.filter((item) => item.disabled === false);

      toppingToggle.addEventListener("click", function () {
        // console.log(ingredient);
        // console.log(toppingToggle.id);
        if (toppingToggle.checked === true) {
          toppingArr.push(ingredient);
          calcPriceWithToppings();
          calcPriceFromSize();
        } else {
          toppingArr = toppingArr.filter(
            (item) => item.title !== ingredient.title
          );
          calcPriceFromSize();
          calcPriceWithToppings();
        }

        console.log(toppingArr);
      });

      toppingToggle.id = "topping__toggle" + counter1;
      toppingToggle.setAttribute("type", "checkbox");

      sweetWrapper.append(toppingToggle);

      let toppingLabel = document.createElement("label");
      toppingLabel.classList.add("dodo-topping-label");
      toppingLabel.setAttribute("for", "topping__toggle" + counter1);

      sweetWrapper.append(toppingLabel);
      counter1++;
      let toppingImg = document.createElement("img");
      toppingImg.classList.add("dodo-topping-img");
      toppingImg.src = ingredient.img;

      toppingLabel.append(toppingImg);

      let toppingHeader = document.createElement("h2");
      toppingHeader.classList.add("topping-header");
      toppingHeader.innerText = ingredient.title;

      toppingLabel.append(toppingHeader);

      let toppingPrice = document.createElement("p");
      toppingPrice.classList.add("topping-price");
      let priceSetUp = function () {
        if (pizzaSize === "small") {
          toppingPrice.innerText = `${ingredient.price.small}₽`;
        } else if (pizzaSize === "medium") {
          toppingPrice.innerText = `${ingredient.price.medium}₽`;
        } else {
          toppingPrice.innerText = `${ingredient.price.big}₽`;
        }
      };
      priceSetUp();
      toppingLabel.append(toppingPrice);
    });
  }
  makeToppings();

  //подсчет цены
  let addedToppingsPrice = 0;
  function calcPriceWithToppings() {
    addedToppingsPrice = 0;
    console.log(pizzaSize, pizzaDough);
    toppingArr.forEach((topping) => {
      console.log(topping.title);
      if (
        (pizzaSize === "small" || pizzaDough === "thin") &&
        topping.title === "Сырный бортик"
      ) {
        console.log(pizzaSize, pizzaDough);
        return;
      }
      addedToppingsPrice = addedToppingsPrice + topping.price[pizzaSize];
    });
    console.log(addedToppingsPrice);
  }

  let toBasketButton = document.querySelector(
    ".dodo-product-popUp-toBasket-button"
  );

  let priceWithToppings = 0;

  function calcPriceFromSize() {
    console.log("ADDED PRICE NOW IS " + addedToppingsPrice);
    if (pizzaSize === "small") {
      let priceSmallWithToppings =
        product.pizzaSizes[0].price + addedToppingsPrice;
      toBasketButton.innerText = ` Добавить в корзину за ${priceSmallWithToppings}  ₽`;
      priceWithToppings = product.pizzaSizes[0].price + addedToppingsPrice;
    } else if (pizzaSize === "medium") {
      let priceMediumWithToppings =
        product.pizzaSizes[1].price + addedToppingsPrice;
      toBasketButton.innerText = ` Добавить в корзину за ${priceMediumWithToppings}  ₽`;
      priceWithToppings = product.pizzaSizes[1].price + addedToppingsPrice;
    } else {
      let priceBigWithToppings =
        product.pizzaSizes[2].price + addedToppingsPrice;
      toBasketButton.innerText = ` Добавить в корзину за ${priceBigWithToppings}  ₽`;
      priceWithToppings = product.pizzaSizes[2].price + addedToppingsPrice;
    }
  }
  // document.querySelector("#thin").addEventListener("click", function () {
  //   calcPriceWithToppings();
  //   calcPriceFromSize();
  // });
  //создание объекта
  function CurrentProd(
    productId,
    title,
    img,
    dough,
    size,
    excludedIngredients,
    toppings,
    price,
    quantity
  ) {
    this.id = productId;
    this.title = title;
    this.img = img;
    this.dough = dough;
    this.size = size;
    this.excludedIngredients = Array.from(
      document.querySelectorAll(".ingredientsButton-excluded")
    ).map((item) => item.textContent);
    this.toppings = toppingArr;
    this.vendorCode =
      this.id +
      this.dough +
      this.size +
      this.excludedIngredients +
      this.toppings;
    this.price = priceWithToppings;
    console.log(this.price);
    this.quantity = 1;
    console.log(this.quantity);
  }

  calcPriceFromSize();

  //посылаем в корзину
  let shoppingTrolley = document.querySelector(".dodo-shopping-trolley");
  let basketMeter = document.querySelector(".basket-meter");

  function sendToBasket() {
    productPopUp.style.display = "none";
    let prodForBasket = new CurrentProd(
      productId,
      popupTitle,
      popupImg,
      pizzaDough,
      pizzaSize
    );
    addToBasket(prodForBasket);
    console.log(prodForBasket);
    toBasketButton.removeEventListener("click", sendToBasket);
  }
  toBasketButton.addEventListener("click", sendToBasket);
  dodoMain.append(stickyBasket);
};

function makeVendorCode() {}
let dodoMain = document.querySelector(".dodo-menu");

// ------------------------создание продукта----------------------------

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

  productCardButtonPrice.id = elem.id;

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
};
products.map((elem) => createProduct(elem));

// ---------отрисовка попапа по id ------------------
let productButtonPrices = document.querySelectorAll(".dodo-button-price");
let findId = function (evt) {
  let buttonId = evt.target.id;
  let productById = products.find((elem) => elem.id === +buttonId);
  createPopUp(productById);

  console.log(productById);
};

Array.from(productButtonPrices).map((elem) =>
  elem.addEventListener("click", findId)
);
let beeMobSection = document.querySelector(".BeeMob-section")

let makeOrderForm = document.querySelector(".BeeMob-makeOrderForm")
beeMobSection.append(makeOrderForm)

let fillOutForm = document.querySelector(".fillOutForm")
fillOutForm.classList.add("borderTop")

let selectedServicesHeader = document.querySelector(".BeeMob-selectedServices_header")

let makeOrderFormContainer = document.querySelector(".BeeMob-displayRow")
makeOrderForm.append(selectedServicesHeader)
makeOrderForm.append(makeOrderFormContainer)
makeOrderForm.append(fillOutForm)


let containerForServices = document.querySelector(".BeeMob-selectedServices")
makeOrderFormContainer.append(containerForServices)


let totalPrice = document.querySelector(".totalPrice")
makeOrderFormContainer.append(totalPrice)

document.getElementById("20").checked = false;
document.getElementById("346").checked = false;
document.getElementById("C106").checked = false;

let selectedServicesArr = []
let prices = []
let chosenLabel = Array.from(document.querySelectorAll(".BeeMob-calculator-fieldset__label"))

let inputs = Array.from(document.querySelectorAll(".BeeMob-calculator-CustomRadio")
).map(item => item.addEventListener("click", makeServices ))

// Array.from(document.querySelectorAll(".BeeMob-calculator-CustomRadio").map( item => item.addEventListener("click", function (){
//     if (item.checked === true){
//         item.checked = false
//     }
// })))


function makeServices () {
  let selectedServicesArr = []
  let prices = []

  Array.from(document.querySelectorAll(".BeeMob-calculator-CustomRadio")
  ).map(input => {
    if (input.checked) {
      selectedServicesArr.push(input)
    }
  })
  console.log(selectedServicesArr)

  containerForServices.innerHTML = "";
  selectedServicesArr.map(item => {
    let serviceItem = document.createElement('div')
    serviceItem.classList.add("BeeMob-selectedServices_item")
    containerForServices.append(serviceItem)
    let serviceDescription = document.createElement('p')
    serviceDescription.classList.add("BeeMob-selectedServices-elem")
    switch (item.id){
      case "346":
        serviceDescription.innerHTML = "Monthly Expenses 0-15.6k";
        break;
      case "447":
        serviceDescription.innerHTML = "Expenses per month 15.7-48.6k"
        break;
      case "577":
        serviceDescription.innerHTML = "Expenses per month  48.7-100.6k"
        break;
      case "question":
        serviceDescription.innerHTML = "Other"
        break;
      case "C106":
        serviceDescription.innerHTML = "C-Corporation per month "
        break;
      case "S106":
        serviceDescription.innerHTML = "S-corporation/Partnership"
        break;
      case "76":
        serviceDescription.innerHTML = "Self Employed"
        break;
      case "other":
        serviceDescription.innerHTML = "Other"
        break;
      case "20":
        serviceDescription.innerHTML = "Monthly Base"
        break;
      case "r10":
        serviceDescription.innerHTML = "Monthly Rental Property"
        break;
      case "i10":
        serviceDescription.innerHTML = "Monthyl Invetsments+K1"
        break;
      case  "q":
        serviceDescription.innerHTML = "Other"
        break;
      default:
        serviceDescription.innerHTML = "whoops something went wrong"
    }
    serviceItem.append(serviceDescription)

    let servicePrice = document.createElement("p")
    servicePrice.classList.add("BeeMob-selectedServices-elem")
    if (item.id === "346") {
      let price = 346
      servicePrice.innerText = price + `$`
      prices.push(price)
    }
    else if (item.id === "447") {
      let price = 447
      servicePrice.innerText = price + `$`
      prices.push(price)
    }

    else if (item.id === "577") {
      let price = 577
      servicePrice.innerText = price + `$`
      prices.push(price)
    }
    else if (item.id === "question") {
      let price = 0
      prices.push(price)
      let pictureQuestion = document.createElement("img")
      pictureQuestion.classList.add("pictureQuestion")
      pictureQuestion.src = "socmed/Group.svg"
      servicePrice.append(pictureQuestion)
    }
    else if (item.id === "C106") {
      let price = 106
      servicePrice.innerText = price + `$`
      prices.push(price)
    }
    else if (item.id === "S106") {
      let price = 106
      servicePrice.innerText = price + `$`
      prices.push(price)
    }
    else if (item.id === "76") {
      let price = 76
      servicePrice.innerText = price + `$`
      prices.push(price)
    }
    else if (item.id === "other") {
      let price = 0
      prices.push(price)
      let pictureQuestion = document.createElement("img")
      pictureQuestion.classList.add("pictureQuestion")
      pictureQuestion.src = "socmed/Group.svg"
      servicePrice.append(pictureQuestion)
    }
    else if (item.id === "20") {
      let price = 20
      servicePrice.innerText = price + `$`
      prices.push(price)
    }
    else if (item.id === "r10") {
      let price = 10
      servicePrice.innerText = price + `$`
      prices.push(price)
    }
    else if (item.id === "i10") {
      let price = 10
      servicePrice.innerText = price + `$`
      prices.push(price)
    }
    else if (item.id === "q") {
      let price = 0
      prices.push(price)
      let pictureQuestion = document.createElement("img")
      pictureQuestion.classList.add("pictureQuestion")
      pictureQuestion.src = "socmed/Group.svg"
      servicePrice.append(pictureQuestion)
    }

    serviceItem.append(servicePrice)

    let serviceImg = document.createElement("div")
    serviceImg.classList.add("BeeMob-crossImg")
    serviceItem.append(serviceImg)

    function calcPrices (prices){
      let sum = 0;
      for (let i = 0; i < prices.length; i++){
        sum += prices[i]
      }
      console.log(sum)
      return sum
    }
    calcPrices()
  })
  console.log(prices)
}
