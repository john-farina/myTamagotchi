import {
  eggClass,
  child1,
  child1Low,
  child1Sick,
  child2,
  teen1,
  teen2,
  adult5,
  adult6,
  adult1,
  adult2,
  adult3,
  adult4,
  gravestone,
} from "../tamaImports";
import {
  childOneMovement,
  moveLeftToRightRandom,
  autoRandomFlip,
  hideImage,
  showImage,
} from "./MovmentAnimation";
import { removeAllChildAndTeen } from "./MiscTamaAnimation";
import { tamaState } from "../state";

function updateChracterPicture(state) {
  if (
    state.tamaDead ||
    state.foodAnimationGoing ||
    state.gameState.gameIsRunning
  ) {
    return;
  }

  if (state.tamaStage === tamaState[1] && state.tamaSick === false) {
    hideImage(eggClass);
    hideImage(child1Low);

    showImage(child1);

    childOneMovement(state);

    moveLeftToRightRandom(child1, state);
  }

  if (state.tamaStage === tamaState[2]) {
    hideImage(child1);
    hideImage(child1Low);
    hideImage(child1Sick);

    showImage(child2);

    moveLeftToRightRandom(child2, state);
  }

  if (state.tamaStage === tamaState[3]) {
    hideImage(child2);

    showImage(teen1);

    autoRandomFlip(teen1, state);

    moveLeftToRightRandom(teen1, state);
  }

  if (state.tamaStage === tamaState[4]) {
    child2.style.visibility = "hidden";
    hideImage(child2);

    showImage(teen2);

    autoRandomFlip(teen2, state);

    moveLeftToRightRandom(teen2, state);
  }

  if (state.tamaStage === tamaState[5]) {
    removeAllChildAndTeen();

    showImage(adult5);

    autoRandomFlip(adult5, state);

    moveLeftToRightRandom(adult5, state);
  }

  if (state.tamaStage === tamaState[6]) {
    removeAllChildAndTeen();

    showImage(adult6);

    autoRandomFlip(adult6, state);

    moveLeftToRightRandom(adult6, state);
  }

  if (state.tamaStage === tamaState[7]) {
    removeAllChildAndTeen();

    showImage(adult1);

    autoRandomFlip(adult1, state);

    moveLeftToRightRandom(adult1, state);
  }

  if (state.tamaStage === tamaState[8]) {
    removeAllChildAndTeen();

    showImage(adult2);

    autoRandomFlip(adult2, state);

    moveLeftToRightRandom(adult2, state);
  }

  if (state.tamaStage === tamaState[9]) {
    removeAllChildAndTeen();

    showImage(adult3);

    autoRandomFlip(adult3, state);

    moveLeftToRightRandom(adult3, state);
  }

  if (state.tamaStage === tamaState[10]) {
    removeAllChildAndTeen();

    showImage(adult4);

    autoRandomFlip(adult4, state);

    moveLeftToRightRandom(adult4, state);
  }

  if (state.tamaStage === tamaState[13]) {
    showImage(gravestone);
  }
}

export { updateChracterPicture };
