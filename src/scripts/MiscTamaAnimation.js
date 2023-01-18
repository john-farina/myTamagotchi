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
} from "./tamaImports";
import { tamaState } from "./state";

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
  if (state.tamaStage === tamaState[0]) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      eggState2.style.visibility = "hidden";
      eggState1.style.visibility = "visible";
    } else {
      eggState1.style.visibility = "hidden";
      eggState2.style.visibility = "visible";
    }
  }
}

function placePoop(state) {
  if (state.tamaPoop === 1) {
    poop1.style.visibility = "visible";
  }

  if (state.tamaPoop === 2) {
    poop1.style.visibility = "visible";

    poop2.style.visibility = "visible";
  }

  if (state.tamaPoop === 3) {
    poop1.style.visibility = "visible";

    poop2.style.visibility = "visible";

    poop3.style.visibility = "visible";
  }

  if (state.tamaPoop === 4) {
    poop1.style.visibility = "visible";

    poop2.style.visibility = "visible";

    poop3.style.visibility = "visible";

    poop4.style.visibility = "visible";
  }

  if (state.tamaPoop === 0) {
    poop1.style.visibility = "hidden";

    poop2.style.visibility = "hidden";

    poop3.style.visibility = "hidden";

    poop4.style.visibility = "hidden";
  }
}

function autoAlert(state) {
  if (state.tamaSick === true) {
    sickAlert.style.visibility = "visible";
  } else {
    sickAlert.style.visibility = "hidden";
  }
}

export { removeAllChildAndTeen, eggHatchAnimation, placePoop, autoAlert };
