const foodMenu = document.querySelector("#food-menu");
const foodButton = document.querySelector("#foodButton");
const foodText = document.querySelector(".food-text");
const snackText = document.querySelector(".snack-text");

foodButton.addEventListener("click", function () {
  foodMenu.style.visibility = "visible";
});

foodText.addEventListener("click", function () {
  foodMenu.style.visibility = "hidden";
});

snackText.addEventListener("click", function () {
  foodMenu.style.visibility = "hidden";
});
