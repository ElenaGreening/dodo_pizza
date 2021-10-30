let basketMeter = document.querySelector(".basket-meter");
let shoppingCart = [];
let stickyBasket = document.querySelector(".sticky-basket");
export let addToBasket = function (prodForBasket) {
  shoppingCart.push(prodForBasket);
  countMeter();
};

let countMeter = function () {
  console.log("call");
  basketMeter.innerText = shoppingCart.length;
  console.log(basketMeter);
  basketMeter.style.textAlign = "center";
  basketMeter.style.color = "#F96900";
  basketMeter.style.textJustify = "center";
  if (shoppingCart.length >= 1) {
    stickyBasket.style.display = "block";
  } else {
    stickyBasket.style.display = "none";
  }
};

let shoppingTrolley = document.querySelector(".dodo-shopping-trolley");
stickyBasket.addEventListener("click", function () {
  shoppingTrolley.style.display = "block";
});
