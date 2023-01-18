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
} from "./tamaImports";
import {
  childOneMovement,
  moveLeftToRightRandom,
  autoRandomFlip,
} from "./MovmentAnimation";
import { removeAllChildAndTeen } from "./MiscTamaAnimation";
import { tamaState } from "./state";

function updateChracterPicture(state, gameIsRunning) {
  if (state.tamaDead || state.foodAnimationGoing || gameIsRunning) {
    return;
  }

  // childOneSickAnimation();
  if (state.tamaStage === tamaState[1] && state.tamaSick === false) {
    eggClass.style.visibility = "hidden";

    child1Low.style.visibility = "hidden";

    child1.style.visibility = "visible";

    childOneMovement(state);

    moveLeftToRightRandom(child1, state);
  }

  if (state.tamaStage === tamaState[2]) {
    child1.style.visibility = "hidden";

    child1Low.style.visibility = "hidden";

    child1Sick.style.visibility = "hidden";

    child2.style.visibility = "visible";

    moveLeftToRightRandom(child2, state);
  }

  if (state.tamaStage === tamaState[3]) {
    child2.style.visibility = "hidden";

    teen1.style.visibility = "visible";

    autoRandomFlip(teen1, state);

    moveLeftToRightRandom(teen1, state);
  }

  if (state.tamaStage === tamaState[4]) {
    child2.style.visibility = "hidden";

    teen2.style.visibility = "visible";

    autoRandomFlip(teen2, state);

    moveLeftToRightRandom(teen2, state);
  }

  // SPECIAL CHARACTERS
  if (state.tamaStage === tamaState[5]) {
    removeAllChildAndTeen();

    adult5.style.visibility = "visible";

    autoRandomFlip(adult5, state);

    moveLeftToRightRandom(adult5, state);
  }
  if (state.tamaStage === tamaState[6]) {
    removeAllChildAndTeen();

    adult6.style.visibility = "visible";

    autoRandomFlip(adult6, state);

    moveLeftToRightRandom(adult6, state);
  }

  if (state.tamaStage === tamaState[7]) {
    removeAllChildAndTeen();

    adult1.style.visibility = "visible";

    autoRandomFlip(adult1, state);

    moveLeftToRightRandom(adult1, state);
  }

  if (state.tamaStage === tamaState[8]) {
    removeAllChildAndTeen();

    adult2.style.visibility = "visible";

    autoRandomFlip(adult2, state);

    moveLeftToRightRandom(adult2, state);
  }

  if (state.tamaStage === tamaState[9]) {
    removeAllChildAndTeen();

    adult3.style.visibility = "visible";

    autoRandomFlip(adult3, state);

    moveLeftToRightRandom(adult3, state);
  }

  if (state.tamaStage === tamaState[10]) {
    removeAllChildAndTeen();

    adult4.style.visibility = "visible";

    autoRandomFlip(adult4, state);

    moveLeftToRightRandom(adult4, state);
  }

  if (state.tamaStage === tamaState[13]) {
    gravestone.style.visibility = "visible";
  }
}

export { updateChracterPicture };
