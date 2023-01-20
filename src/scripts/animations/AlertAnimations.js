import { hideImage, showImage } from "./MovmentAnimation";
import { timeMathToSec } from "../misc/usefulFunctions";
import { madAlert1, madAlert2, happyAlert } from "../tamaImports";
let animateCount = 0;

function madAlertAnimate(state) {
  if (!state.tamaIsMad) {
    return;
  }

  if (animateCount === 11) {
    state.tamaIsMad = false;

    animateCount = 0;

    hideImage(madAlert1);

    hideImage(madAlert2);

    return;
  }

  if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
    animateCount++;

    hideImage(madAlert2);

    showImage(madAlert1);
  } else {
    animateCount++;

    hideImage(madAlert1);

    showImage(madAlert2);
  }
}

function happyAlertAnimate(state) {
  if (!state.tamaIsHappy) {
    return;
  }

  if (animateCount === 6) {
    state.tamaIsHappy = false;

    animateCount = 0;

    hideImage(happyAlert);

    return;
  }

  if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
    animateCount++;

    showImage(happyAlert);
  } else {
    animateCount++;

    hideImage(happyAlert);
  }
}

export { madAlertAnimate, happyAlertAnimate };
