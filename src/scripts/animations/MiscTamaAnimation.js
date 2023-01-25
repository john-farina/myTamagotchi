import {
  eggState1,
  eggState2,
  eggState3,
  child1,
  child1Low,
  child1Sick,
  child1Eat,
  child2,
  child2Side,
  child2Eat,
  child2Small,
  childClass,
  teenClass,
  teen1,
  teen1Eat,
  teen1Sick,
  teen2,
  teen2Eat,
  teen2Sick,
  teen2Lips,
  poop1,
  poop2,
  poop3,
  poop4,
  sickAlert,
  adultClass,
  adult1,
  adult2,
  adult3,
  adult4,
  adult5,
  adult6,
  gravestoneText,
  gravestoneTwo,
  gravestone,
} from "../tamaImports";
import { tamaState } from "../state";
import {
  displayFlex,
  displayHide,
  timeMathToSec,
} from "../misc/usefulFunctions";
import { hideImage, showImage } from "./MovmentAnimation";

function removeAllChildAndTeen() {
  eggState1.style.visibility = "hidden";
  eggState2.style.visibility = "hidden";
  eggState3.style.visibility = "hidden";

  child1.style.visibility = "hidden";
  child1Low.style.visibility = "hidden";
  child1Sick.style.visibility = "hidden";
  child1Eat.style.visibility = "hidden";

  child2.style.visibility = "hidden";
  child2Side.style.visibility = "hidden";
  child2Eat.style.visibility = "hidden";
  child2Small.style.visibility = "hidden";
  childClass.style.visibility = "hidden";

  teen1.style.visibility = "hidden";
  teen1Eat.style.visibility = "hidden";
  teen1Sick.style.visibility = "hidden";
  teen2.style.visibility = "hidden";

  teen2Eat.style.visibility = "hidden";
  teen2Sick.style.visibility = "hidden";
  teen2Lips.style.visibility = "hidden";
  teenClass.style.visibility = "hidden";
}

function eggHatchAnimation(state) {
  if (
    timeMathToSec(state.timeState.gameStart) % 2 === 0 &&
    state.tamaStage === tamaState[0]
  ) {
    hideImage(eggState2);
    showImage(eggState1);
  } else {
    hideImage(eggState1);
    showImage(eggState2);
  }
}

function placePoop(state) {
  if (state.tamaPoop === 1) {
    showImage(poop1);
  }

  if (state.tamaPoop === 2) {
    showImage(poop1);
    showImage(poop2);
  }

  if (state.tamaPoop === 3) {
    showImage(poop1);
    showImage(poop2);
    showImage(poop3);
  }

  if (state.tamaPoop === 4) {
    showImage(poop1);
    showImage(poop2);
    showImage(poop3);
    showImage(poop4);
  }

  if (state.tamaPoop === 0) {
    hideImage(poop1);
    hideImage(poop2);
    hideImage(poop3);
    hideImage(poop4);
  }
}

function autoAlert(state) {
  if (state.tamaSick === true) {
    showImage(sickAlert);

    return;
  }

  hideImage(sickAlert);
}

function showGravestone(state) {
  if (!state.tamaDead) {
    return;
  }

  state.tamaStage = tamaState[13];

  hideImage(poop1);
  hideImage(poop2);
  hideImage(poop3);
  hideImage(poop4);

  hideImage(childClass);
  hideImage(teenClass);
  hideImage(adultClass);
  hideImage(adult1);
  hideImage(adult2);
  hideImage(adult3);
  hideImage(adult4);
  hideImage(adult5);
  hideImage(adult6);

  if (timeMathToSec(state.timeState.lastAnimation) % 2 === 0) {
    displayHide(gravestone);
    displayFlex(gravestoneTwo);
  } else {
    displayHide(gravestoneTwo);
    displayFlex(gravestone);
  }

  gravestoneText.innerHTML = `${state.tamaAge} Years`;
  displayFlex(gravestoneText);
}

export {
  removeAllChildAndTeen,
  eggHatchAnimation,
  placePoop,
  autoAlert,
  showGravestone,
};
