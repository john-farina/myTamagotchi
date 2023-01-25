import { randomNumGen, timeMathToSec } from "../misc/usefulFunctions";
import { randomReturnPercentage } from "./CreateUpdateLife";

function autoHealthDegen(state) {
  const secondsSinceGameStart = timeMathToSec(state.timeState.gameStart);
  const secondsSinceLastHealth = timeMathToSec(state.timeState.lastHealth);

  //every 5 seconds check
  if (secondsSinceGameStart % 10 == 0 && secondsSinceLastHealth > 11) {
    if (state.tamaHappy <= 2) {
      //15% chance to loose health 200/3000
      if (randomReturnPercentage(15)) {
        state.tamaHealth -= 1;

        state.timeState.lastHealth = new Date();
      }

      return;
    }

    //NORMAL HEALTH DEGEN
    //3% chance to loose health 90/3000
    if (randomReturnPercentage(3)) {
      state.tamaHealth -= 1;

      state.timeState.lastHealth = new Date();
    }
  }
}

function autoHappyDegen(state) {
  const secondsSinceGameStart = timeMathToSec(state.timeState.gameStart);

  //every 5 seconds run
  if (secondsSinceGameStart % 5 == 0) {
    if (state.tamaHealth <= 2) {
      if (randomReturnPercentage(15)) {
        state.tamaHappy -= 1;

        state.timeState.lastHappy = new Date();
      }

      return;
    }

    //3% percent 90/3000
    if (randomReturnPercentage(3)) {
      state.tamaHappy -= 1;

      state.timeState.lastHappy = new Date();
    }
  }
}

function getSick(state) {
  const secondsSinceLastPoop = timeMathToSec(state.timeState.lastPoop);
  const secondsSinceLastSick = timeMathToSec(state.timeState.lastSick);

  if (state.tamaPoop == 4) {
    //if 6 poop for 15 sec get sick
    if (secondsSinceLastPoop > 15) {
      state.tamaSick = true;
      state.timeState.lastSick = new Date();
    }
  }

  //cant get sick 2 min after getting sick
  if (
    secondsSinceLastSick > 60 ||
    state.timeState.lastSick == state.timeState.gameStart
  ) {
    if (randomReturnPercentage(2)) {
      state.tamaSick = true;
      state.timeState.lastSick = new Date();
    }
  }
}

function givePoop(state) {
  if (state.tamaPoop === 4) {
    return;
  }
  const secondsSinceLastPoop = timeMathToSec(state.timeState.lastPoop);

  if (state.tamaSick == true) {
    if (secondsSinceLastPoop % 10 == 0) {
      if (randomReturnPercentage(25)) {
        state.tamaPoop++;
        state.timeState.lastPoop = new Date();
      }
    }

    return;
  }

  //normally
  if (secondsSinceLastPoop % 30 == 0) {
    if (randomReturnPercentage(11)) {
      state.tamaPoop++;

      state.timeState.lastPoop = new Date();

      if (randomReturnPercentage(25)) {
        //25%: 1/4
        state.tamaHealth--;
      }
    }
  }
}

function ifSick(state) {
  const secondsSinceLastSick = timeMathToSec(state.timeState.lastSick);
  if (state.tamaSick == true) {
    if (secondsSinceLastSick % 15 == 0) {
      state.tamaHealth -= 0.5;
    }
  }
}

export { givePoop, autoHealthDegen, autoHappyDegen, getSick, ifSick };
