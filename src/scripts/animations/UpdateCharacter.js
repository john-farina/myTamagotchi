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
  eggState1,
  eggState2,
  eggState3,
  teenClass,
  childClass,
  adultClass,
} from "../tamaImports";
import {
  childOneMovement,
  moveLeftToRightRandom,
  autoRandomFlip,
  hideImage,
  showImage,
} from "./MovmentAnimation";
import { tamaState } from "../state";

export function hideAllPlayerImages() {
  hideImage(eggClass);
  hideImage(adultClass);
  hideImage(childClass);
  hideImage(teenClass);
  hideImage(eggState3);
  hideImage(eggState2);
  hideImage(eggState1);
  hideImage(adult4);
  hideImage(adult3);
  hideImage(adult2);
  hideImage(adult1);
  hideImage(adult6);
  hideImage(adult5);
  hideImage(teen2);
  hideImage(teen1);
  hideImage(child2);
  hideImage(child1Low);
  hideImage(child1Sick);
  hideImage(child1);
  hideImage(eggClass);
}

function updateAndMoveCharacters(character, state) {
  // hide everything else
  hideAllPlayerImages();

  showImage(character);

  autoRandomFlip(character, state);

  moveLeftToRightRandom(character, state);
}

function updateChracterPicture(state) {
  if (
    state.tamaDead ||
    state.foodAnimationGoing ||
    state.gameState.gameIsRunning
  ) {
    return;
  }

  if (state.tamaStage === tamaState[1] && state.tamaSick === false) {
    updateAndMoveCharacters(child1, state);

    // special movement only for the child
    childOneMovement(state);
  }

  if (state.tamaStage === tamaState[2]) {
    updateAndMoveCharacters(child2, state);
  }

  if (state.tamaStage === tamaState[3]) {
    updateAndMoveCharacters(teen1, state);
  }

  if (state.tamaStage === tamaState[4]) {
    updateAndMoveCharacters(teen2, state);
  }

  if (state.tamaStage === tamaState[5]) {
    updateAndMoveCharacters(adult5, state);
  }

  if (state.tamaStage === tamaState[6]) {
    updateAndMoveCharacters(adult6, state);
  }

  if (state.tamaStage === tamaState[7]) {
    updateAndMoveCharacters(adult1, state);
  }

  if (state.tamaStage === tamaState[8]) {
    updateAndMoveCharacters(adult2, state);
  }

  if (state.tamaStage === tamaState[9]) {
    updateAndMoveCharacters(adult3, state);
  }

  if (state.tamaStage === tamaState[10]) {
    updateAndMoveCharacters(adult4, state);
  }

  if (state.tamaStage === tamaState[13]) {
    hideAllPlayerImages();

    showImage(gravestone);
  }
}

export { updateChracterPicture };
