import { hideImage, showImage } from "../../animations/MovmentAnimation";
import { hideAllExtraScreens } from "../../misc/usefulFunctions";
import { healthScreen, healthScreen2 } from "../../tamaImports";

function HealthEvent(state) {
  let screenState = state.screenState;

  if (state.foodAnimationGoing) {
    return;
  }

  if (!screenState.healthIsActive && !screenState.health2IsActive) {
    showImage(healthScreen);

    screenState.healthIsActive = true;

    return;
  }

  if (screenState.healthIsActive && !screenState.health2IsActive) {
    showImage(healthScreen2);
    screenState.healthIsActive = false;
    screenState.health2IsActive = true;

    return;
  }

  if (screenState.health2IsActive) {
    hideAllExtraScreens(state);
  }
}

export { HealthEvent };
