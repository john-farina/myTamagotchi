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

function foodAnimation(type, state) {
  if (type === 1) {
    //meal1
    //FOOD ANIMATION
  } else if (type === 2) {
    hideAllFood();
    //meal2
    //FOOD ANIMATION
    if (state.animationCount > 0 && state.animationCount <= 2) {
      showImage(meal2);
    }

    if (state.animationCount == 3) {
      hideImage(meal2);

      showImage(meal2Half);
    }

    if (state.animationCount == 5) {
      hideImage(meal2Half);
    }
  } else if (type === 3) {
    //snack1
    //FOOD ANIMATION
    if (state.animationCount > 0 && state.animationCount <= 2) {
      showImage(snack2);
    }

    if (state.animationCount == 3) {
      hideImage(snack2);

      showImage(snack2Half);
    }

    if (state.animationCount == 5) {
      hideImage(snack2Half);
    }
  } else if (type === 4) {
    //snack2
    //FOOD ANIMATION
    if (state.animationCount > 0 && state.animationCount <= 2) {
      showImage(snack1);
    }

    if (state.animationCount == 3) {
      hideImage(snack1);

      showImage(snack1Half);
    }

    if (state.animationCount == 5) {
      hideImage(snack1Half);
    }
  }
}

export { updateFood, hideAllFood, foodAnimation };
