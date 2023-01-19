import { foodScreen } from "../../tamaImports";
import { showImage, hideImage } from "../../animations/MovmentAnimation";
import { hideAllExtraScreens } from "../../misc/usefulFunctions";
import { feed } from "../mainFunctions";
import { allEatSnackAnimations } from "../../animations/EatingAnimations";

/////////// FOOD
function FoodEvent(state) {
  if (state.foodAnimationGoing || state.tamaIsMad) {
    return;
  }

  if (
    state.screenState.lightsIsActive ||
    state.gameState.gameIsRunning ||
    state.screenState.healthIsActive ||
    state.screenState.health2IsActive ||
    state.screenState.foodIsActive === false
  ) {
    hideAllExtraScreens(state);
    showImage(foodScreen);
    state.screenState.foodIsActive = true;
    return;
  }

  if (state.screenState.foodIsActive === true) {
    hideAllExtraScreens(state);
    foodScreen.style.visibility = "hidden";
    state.screenState.foodIsActive = false;
  }
}

function MealEvent(state) {
  if (state.tamaHealth < 5) {
    state.foodAnimationGoing = true;
    feed(1, state);
    allEatSnackAnimations(state);
  }

  hideAllExtraScreens(state);
}

function SnackEvent(state) {
  if (state.tamaHappy <= 5) {
    state.foodAnimationGoing = true;
    feed(2, state);
    allEatSnackAnimations(state);

    if (state.needAttention === true) {
      state.needAttention = false;
      state.tamaSpoiled++;
    }
  }

  hideAllExtraScreens(state);
}

export { FoodEvent, MealEvent, SnackEvent };
