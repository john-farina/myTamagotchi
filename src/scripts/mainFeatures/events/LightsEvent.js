import { hideAllExtraScreens } from "../../misc/usefulFunctions";
import { showImage, hideImage } from "../../animations/MovmentAnimation";
import { lightsScreen, lightsOffScreen } from "../../tamaImports";

function LightEvent(state) {
  if (state.foodAnimationGoing) {
    return;
  }

  if (
    state.screenState.foodIsActive ||
    state.gameState.gameIsRunning ||
    state.screenState.healthIsActive ||
    state.screenState.health2IsActive
  ) {
    hideAllExtraScreens(state);
    showImage(lightsScreen);
    state.screenState.lightsIsActive = true;
  }

  if (state.lightIsOff === true && state.screenState.lightsIsActive === false) {
    hideImage(lightsOffScreen);
    showImage(lightsScreen);
    state.screenState.lightsIsActive = true;
  } else if (
    state.lightIsOff === true &&
    state.screenState.lightsIsActive === true
  ) {
    hideImage(lightsScreen);
    showImage(lightsOffScreen);
    state.screenState.lightsIsActive = false;
  } else if (state.screenState.lightsIsActive === false) {
    lightsScreen.style.visibility = "visible";
    state.screenState.lightsIsActive = true;
  } else if (state.screenState.lightsIsActive === true) {
    lightsScreen.style.visibility = "hidden";
    state.screenState.lightsIsActive = false;
  }
}

function LightsOnAndOff(state, isOff) {
  if (!isOff) {
    hideImage(lightsScreen);
    state.screenState.lightsIsActive = false;
    hideImage(lightsOffScreen);
    state.lightIsOff = false;
    console.log(state.lightIsOff);
  } else {
    state.lightIsOff = true;
    hideImage(lightsScreen);
    state.screenState.lightsIsActive = false;
    showImage(lightsOffScreen);
  }
}

export { LightEvent, LightsOnAndOff };
