import { hideAllExtraScreens } from "../../misc/usefulFunctions";
import { showImage, hideImage } from "../../animations/MovmentAnimation";
import { lightsScreen, lightsOffScreen } from "../../tamaImports";

function LightEvent(state) {
  if (state.foodAnimationGoing) {
    return;
  }

  if (state.screenState.lightsIsActive) {
    hideAllExtraScreens(state);

    hideImage(lightsScreen);

    state.screenState.lightsIsActive = false;

    return;
  }

  if (state.lightIsOff && !state.screenState.lightsIsActive) {
    hideImage(lightsOffScreen);

    showImage(lightsScreen);

    state.screenState.lightsIsActive = true;

    return;
  }

  hideAllExtraScreens(state);

  showImage(lightsScreen);

  state.screenState.lightsIsActive = true;
}

function LightsOnAndOff(state, isOff) {
  if (isOff) {
    state.lightIsOff = true;

    hideImage(lightsScreen);

    state.screenState.lightsIsActive = false;

    showImage(lightsOffScreen);

    return;
  }

  hideImage(lightsScreen);

  state.screenState.lightsIsActive = false;

  hideImage(lightsOffScreen);

  state.lightIsOff = false;

  console.log(state.lightIsOff);
}

export { LightEvent, LightsOnAndOff };
