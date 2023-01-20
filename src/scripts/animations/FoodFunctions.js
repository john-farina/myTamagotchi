import { timeMathToSec } from "../misc/usefulFunctions";
import {
  meal1,
  meal2,
  snack1,
  snack2,
  meal2Half,
  snack1Half,
  snack2Half,
} from "../tamaImports";
import { hideImage, showImage } from "./MovmentAnimation";

function updateFood(state) {
  if (timeMathToSec(state.timeState.lastAnimation) > 1) {
    meal1.style.visibility = "hidden";

    meal2.style.visibility = "hidden";

    snack1.style.visibility = "hidden";

    snack2.style.visibility = "hidden";
  }
}

function hideAllFood() {
  hideImage(meal1);
  hideImage(meal2);
  hideImage(meal2Half);
  hideImage(snack1);
  hideImage(snack1Half);
  hideImage(snack2);
  hideImage(snack2Half);
}

function animateFood(meal, mealHalf, state) {
  if (state.animationCount > 0 && state.animationCount <= 2) {
    showImage(meal);
  }

  if (state.animationCount == 3) {
    hideImage(meal);

    showImage(mealHalf);
  }

  if (state.animationCount == 5) {
    hideImage(mealHalf);
  }
}

function foodAnimation(type, state) {
  if (type === 1) {
    animateFood(meal1, meal2Half, state);
  }

  if (type === 2) {
    animateFood(meal2, meal2Half, state);
  }

  if (type === 3) {
    animateFood(snack2, snack2Half, state);
  }

  if (type === 4) {
    animateFood(snack1, snack1Half, state);
  }
}

export { updateFood, hideAllFood, foodAnimation };
