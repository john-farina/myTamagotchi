import { hideImage, showImage } from "./MovmentAnimation";
import { timeMathToSec } from "../misc/usefulFunctions";
import { madAlert1, madAlert2, happyAlert } from "../tamaImports";
let animateCount = 0;

function madAlertAnimate(state) {
  if (animateCount <= 11 && state.tamaIsMad === true) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      animateCount++;
      hideImage(madAlert2);
      showImage(madAlert1);
    } else {
      animateCount++;
      hideImage(madAlert1);
      showImage(madAlert2);
    }
  } else if (animateCount > 7 && state.tamaIsMad === true) {
    state.tamaIsMad = false;
    animateCount = 0;
    hideImage(madAlert1);
    hideImage(madAlert2);
  }
}

function happyAlertAnimate(state) {
  if (animateCount <= 5 && state.tamaIsHappy === true) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      animateCount++;
      showImage(happyAlert);
    } else {
      animateCount++;
      hideImage(happyAlert);
    }
  } else if (animateCount > 5 && state.tamaIsHappy === true) {
    state.tamaIsHappy = false;
    animateCount = 0;
    hideImage(happyAlert);
  }
}

export { madAlertAnimate, happyAlertAnimate };
