const foodButtonXXXX = document.querySelector("#foodButton");
const foodScreenXXXX = document.querySelector("#food-screen");
const mealButtonXXXX = document.querySelector("#mealButton");
const snackButtonXXXX = document.querySelector("#snackButton");

const buttonThreeXXXX = document.querySelector("#buttonThree");

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
