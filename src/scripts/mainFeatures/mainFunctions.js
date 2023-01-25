import { hungerMeter, alertButton } from "../tamaImports";
import { tamaState } from "../state";
import { randomNumGen, timeMathToSec } from "../misc/usefulFunctions";
import { randomReturnPercentage } from "./CreateUpdateLife";

function feed(type, state) {
  // Check if the type is a meal
  if (type === 1) {
    if (state.tamaHealth < 5) {
      state.tamaHealth++;
    }
  }

  // Check if the type is a snack
  if (type === 2) {
    if (state.tamaHealth < 5) {
      state.tamaHealth++;
    }

    if (state.tamaHappy < 5) {
      state.tamaHappy++;
    }
  }

  // Limit tamagotchi's health to 5
  if (state.tamaHealth > 5) {
    state.tamaHealth = 5;
  }
}

function heal(state) {
  state.tamaSick = false;

  state.tamaHappy -= 1;
}

function clean(state) {
  if (state.tamaPoop !== 0) {
    state.tamaPoop = 0;

    state.tamaHappy++;
  }
}

function autoAttentionAlert(state) {
  if (
    state.needAttention ||
    state.tamaDead ||
    state.tamaNeglect >= 8 ||
    state.tamaStage === tamaState[0]
  ) {
    return;
  }

  if (state.tamaHappy > 2 || state.tamaHealth >= 2) {
    alertButton.style.backgroundColor = "green";
  }

  if (state.tamaHappy <= 2 || state.tamaHealth <= 2) {
    // "im not happy and hungry";
    alertButton.style.backgroundColor = "red";
  }
}

function autoDisciplineTest(state) {
  //make a noise when full (if dont disicpline increses spoil meter by one
  //only happen if full happy and health

  if (
    state.tamaDiscipline === 5 ||
    (state.tamaHappy < 5 && state.tamaHealth < 5)
  ) {
    return;
  }

  const timeSinceLastComplain = timeMathToSec(state.timeState.lastComplain);

  if (
    state.tamaStage == tamaState[1] ||
    state.tamaStage == tamaState[2] ||
    state.tamaStage == tamaState[3] ||
    state.tamaStage == tamaState[4]
  ) {
    //only happen when in teen + child state
    if (state.tamaDiscipline < 5) {
      if (timeSinceLastComplain > 60) {
        if (randomReturnPercentage(30)) {
          //make an attention call
          state.needAttention = true;
          state.timeState.lastComplain = new Date();
        }
      }
    }

    //alert stays for 2 minutes
    if (state.needAttention == true && timeSinceLastComplain < 60) {
      alertButton.style.backgroundColor = "red";
    } else {
      alertButton.style.backgroundColor = "green";

      state.needAttention = false;

      state.tamaNeglect++;
    }
  }
}

function spoiledAdultAttention(state) {
  // only applys to adults
  if (
    state.tamaStage === tamaState[1] ||
    state.tamaStage === tamaState[2] ||
    state.tamaStage === tamaState[3]
  ) {
    return;
  }

  const secondsSinceLastComplain = timeMathToSec(state.timeState.lastComplain);

  if (secondsSinceLastComplain > 60) {
    if (randomReturnPercentage(20)) {
      //make an attention call
      state.needAttention = true;

      state.timeState.lastComplain = new Date();
    }
  }

  //alert stays for 30 seconds
  if (state.needAttention && secondsSinceLastComplain < 30) {
  } else {
    state.needAttention = false;
  }
}

export {
  feed,
  heal,
  clean,
  autoAttentionAlert,
  autoDisciplineTest,
  spoiledAdultAttention,
};
