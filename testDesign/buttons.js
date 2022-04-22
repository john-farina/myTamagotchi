let healthIsActive = false;
let foodIsActive = false;

const healthButton = document.querySelector("#healthButton");
const healthScreen = document.querySelector("#health-screen");

const foodButton = document.querySelector("#foodButton");
const foodScreen = document.querySelector("#food-screen");
const mealButton = document.querySelector("#mealButton");
const snackButton = document.querySelector("#snackButton");

const buttonThree = document.querySelector("#buttonThree");

healthButton.addEventListener("click", function () {
  if (foodIsActive === true) {
    foodIsActive = false;
    foodScreen.style.visibility = "hidden";
    healthScreen.style.visibility = "visible";
    healthIsActive = true;
  } else if (healthIsActive === false) {
    healthScreen.style.visibility = "visible";
    healthIsActive = true;
  } else if (healthIsActive === true) {
    healthScreen.style.visibility = "hidden";
    healthIsActive = false;
  }
});

foodButton.addEventListener("click", function () {
  if (healthIsActive === true) {
    healthIsActive = false;
    healthScreen.style.visibility = "hidden";
    foodScreen.style.visibility = "visible";
    foodIsActive = true;
  } else if (foodIsActive === false) {
    foodScreen.style.visibility = "visible";
    foodIsActive = true;
  } else if (foodIsActive === true) {
    foodScreen.style.visibility = "hidden";
    foodIsActive = false;
  }
});

mealButton.addEventListener("click", function () {
  foodScreen.style.visibility = "hidden";
  foodIsActive = false;
  //feed meal animation
});

snackButton.addEventListener("click", function () {
  foodScreen.style.visibility = "hidden";
  foodIsActive = false;
  //feed meal animation
});

buttonThree.addEventListener("click", function () {
  healthIsActive = false;
  foodIsActive = false;

  healthScreen.style.visibility = "hidden";
  foodScreen.style.visibility = "hidden";
});
