let healthIsActiveXXXX = false;
let foodIsActiveXXXX = false;

const healthButtonXXXX = document.querySelector("#healthButton");
const healthScreenXXXX = document.querySelector("#health-screen");

const foodButtonXXXX = document.querySelector("#foodButton");
const foodScreenXXXX = document.querySelector("#food-screen");
const mealButtonXXXX = document.querySelector("#mealButton");
const snackButtonXXXX = document.querySelector("#snackButton");

const buttonThreeXXXX = document.querySelector("#buttonThree");

healthButtonXXXX.addEventListener("click", function () {
  if (foodIsActiveXXXX === true) {
    foodIsActiveXXXX = false;
    foodScreenXXXX.style.visibility = "hidden";
    healthScreenXXXX.style.visibility = "visible";
    healthIsActiveXXXX = true;
  } else if (healthIsActiveXXXX === false) {
    healthScreenXXXX.style.visibility = "visible";
    healthIsActiveXXXX = true;
  } else if (healthIsActiveXXXX === true) {
    healthScreenXXXX.style.visibility = "hidden";
    healthIsActiveXXXX = false;
  }
});

foodButtonXXXX.addEventListener("click", function () {
  if (healthIsActiveXXXX === true) {
    healthIsActiveXXXX = false;
    healthScreenXXXX.style.visibility = "hidden";
    foodScreenXXXX.style.visibility = "visible";
    foodIsActiveXXXX = true;
  } else if (foodIsActiveXXXX === false) {
    foodScreenXXXX.style.visibility = "visible";
    foodIsActiveXXXX = true;
  } else if (foodIsActiveXXXX === true) {
    foodScreenXXXX.style.visibility = "hidden";
    foodIsActiveXXXX = false;
  }
});

mealButtonXXXX.addEventListener("click", function () {
  foodScreenXXXX.style.visibility = "hidden";
  foodIsActiveXXXX = false;
  //feed meal animation
});

snackButtonXXXX.addEventListener("click", function () {
  foodScreenXXXX.style.visibility = "hidden";
  foodIsActiveXXXX = false;
  //feed meal animation
});

buttonThreeXXXX.addEventListener("click", function () {
  healthIsActiveXXXX = false;
  foodIsActiveXXXX = false;

  healthScreenXXXX.style.visibility = "hidden";
  foodScreenXXXX.style.visibility = "hidden";
});
