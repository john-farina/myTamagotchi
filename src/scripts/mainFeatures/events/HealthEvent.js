import { hideImage, showImage } from "../../animations/MovmentAnimation";
import { hideAllExtraScreens } from "../../misc/usefulFunctions";
import { healthScreen, healthScreen2 } from "../../tamaImports";

function HealthEvent(state) {
  if (state.foodAnimationGoing) {
    return;
  }

  if (
    state.screenState.healthIsActive === true &&
    state.screenState.health2IsActive === false
  ) {
    hideImage(healthScreen);
    showImage(healthScreen2);
    state.screenState.health2IsActive = true;
  } else if (
    state.screenState.healthIsActive &&
    state.screenState.healthIsActive
  ) {
    hideImage(healthScreen2);
    hideImage(healthScreen);
    state.screenState.healthIsActive = false;
    state.screenState.health2IsActive = false;

    return;
  }

  if (
    state.screenState.foodIsActive ||
    state.screenState.lightsIsActive ||
    state.gameState.gameIsRunning ||
    !state.screenState.healthIsActive
  ) {
    hideAllExtraScreens(state);
    healthScreen.style.visibility = "visible";
    state.screenState.healthIsActive = true;
  }
}

export { HealthEvent };
