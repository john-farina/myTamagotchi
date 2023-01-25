import { timeMathToSec, randomNumGen } from "../misc/usefulFunctions";
import { tamaState } from "../state";

export function randomReturnPercentage(percentage) {
  // 15 out of 100 = 15%
  let randomNumber = Math.floor(Math.random() * 100);

  if (percentage === 1) {
    return randomNumber === 4;
  }

  if (randomNumber > 0 && randomNumber <= percentage) {
    return true;
  }

  return false;
}

function letThereBeLife(state) {
  const secondsSinceGameStart = timeMathToSec(state.timeState.gameStart);

  if (secondsSinceGameStart < 10) {
    state.tamaStage = tamaState[0];
  }
}

function eggHatch(state) {
  const secondsSinceGameStart = timeMathToSec(state.timeState.gameStart);

  if (state.tamaStage !== tamaState[0]) {
    return;
  }

  if (state.tamaHatch < 3 && secondsSinceGameStart > 2) {
    //every 2 sec 70% to hatch more
    if (secondsSinceGameStart % 2 == 0) {
      if (randomReturnPercentage(70)) {
        state.tamaHatch++;
      }
    }
  }

  if (state.tamaHatch == 3) {
    state.timeState.lastHatchCycle = new Date();

    state.tamaHatch = 4;
  }
}

function eggToBaby(state) {
  //first KID evolve
  if (state.tamaStage !== tamaState[0] || state.tamaHatch !== 4) {
    return;
  }

  let secondsSinceLastHatch = timeMathToSec(state.timeState.lastHatchCycle);
  let secondsSinceGameStart = timeMathToSec(state.timeState.gameStart);

  if (secondsSinceLastHatch < 120) {
    if (secondsSinceGameStart % 2 == 0) {
      //every 2 sec - 45% chance to hatch
      if (randomReturnPercentage(70)) {
        state.tamaStage = tamaState[1];

        state.tamaName = state.tamaStage;

        state.timeState.lastEvolve = new Date();
      }
    }

    return;
  }

  //100% chance to hatch
  state.tamaStage = tamaState[1];

  state.timeState.lastEvolve = new Date();
}

function babyToToddler(state) {
  //second KID evolve
  if (state.tamaStage !== tamaState[1] || state.foodAnimationGoing) {
    return;
  }

  let secondsSinceLastEvolve = timeMathToSec(state.timeState.lastEvolve);
  let secondsSinceGameStart = timeMathToSec(state.timeState.gameStart);

  if (secondsSinceLastEvolve > 10 && secondsSinceLastEvolve < 120) {
    if (secondsSinceGameStart % 2 === 0 && randomReturnPercentage(20)) {
      state.tamaStage = tamaState[2];

      state.timeState.lastEvolve = new Date();
    }

    return;
  }

  // after the 120 so 2 mins
  if (secondsSinceLastEvolve > 120) {
    state.tamaStage = tamaState[2];

    state.timeState.lastEvolve = new Date();

    return;
  }
}

function toddlerToTeen(state) {
  if (state.tamaStage !== tamaState[2] || state.foodAnimationGoing) {
    return;
  }

  let secondsSinceLastEvolve = timeMathToSec(state.timeState.lastEvolve);
  let secondsSinceGameStarted = timeMathToSec(state.gameStarted);

  // 1 day - half day - 30 min
  if (secondsSinceLastEvolve > 86400) {
    if (randomReturnPercentage(100)) {
      state.tamaStage = tamaState[3];
    } else {
      state.tamaStage = tamaState[4];
    }
  } else if (secondsSinceLastEvolve > 43200) {
    if (secondsSinceGameStarted % 60 == 0) {
      if (randomReturnPercentage(10)) {
        state.tamaStage = tamaState[3];
      } else {
        state.tamaStage = tamaState[4];
      }
    }
  } else if (secondsSinceLastEvolve >= 2) {
    if (secondsSinceGameStarted % 30 == 0) {
      if (randomReturnPercentage(10)) {
        state.tamaStage = tamaState[3];
      } else {
        state.tamaStage = tamaState[4];
      }
    }
  }
}

function teenToAdult(state) {
  if (
    (state.tamaStage === tamaState[3] || state.tamaStage === tamaState[4]) &&
    timeMathToSec(state.timeState.lastEvolve) > 10 //60 min
  ) {
    if (timeMathToSec(state.timeState.gameStart) % 2 == 0) {
      if (randomReturnPercentage(10)) {
        let teenChoice = randomNumGen(100);

        state.timeState.lastEvolve = new Date();

        //23% EACH
        if (teenChoice >= 0 && teenChoice <= 22) {
          state.tamaStage = tamaState[7];

          return;
        }

        if (teenChoice >= 23 && teenChoice <= 46) {
          state.tamaStage = tamaState[8];

          return;
        }

        if (teenChoice >= 47 && teenChoice <= 69) {
          state.tamaStage = tamaState[9];

          return;
        }

        if (teenChoice >= 70 && teenChoice <= 92) {
          state.tamaStage = tamaState[10];

          return;
        }

        //8% - 2 SECRET CHARACTERS
        if (teenChoice >= 93) {
          if (randomReturnPercentage(50)) {
            state.tamaStage = tamaState[5];

            return;
          }

          state.tamaStage = tamaState[6];

          return;
        }
      }
    }
  }
}

function autoDeath(state, stopGame) {
  if (
    //cant die as an egg or stage one child
    (state.tamaStage === tamaState[1] || state.tamaStage === tamaState[0]) &&
    state.tamaHealth === 0
  ) {
    state.tamaHealth = 1;
  } else if (state.tamaHealth == 0) {
    state.tamaStage = tamaState[13];
    stopGame();
    state.tamaDead = true;
  }
}

export {
  letThereBeLife,
  eggHatch,
  eggToBaby,
  babyToToddler,
  toddlerToTeen,
  teenToAdult,
  autoDeath,
};
