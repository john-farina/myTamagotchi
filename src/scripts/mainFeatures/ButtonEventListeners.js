import { foodScreen } from "../tamaImports";

function FoodButton(state) {
  if (state.foodAnimationGoing || state.tamaIsMad) {
    return;
  }

  if (lightsIsActive || gameIsRunning || healthIsActive || !foodIsActive) {
    hideAllExtraScreens();
    showImage(foodScreen);
    foodIsActive = true;
  }

  if (foodIsActive === true) {
    foodScreen.style.visibility = "hidden";
    foodIsActive = false;
  }
}
