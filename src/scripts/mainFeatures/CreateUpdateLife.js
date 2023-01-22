import { timeMathToSec, randomNumGen } from "../misc/usefulFunctions";
import { tamaState } from "../state";

function randomReturnPercentage(percentage) {
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

console.log(randomReturnPercentage(10));

function letThereBeLife(state) {
  if (timeMathToSec(state.timeState.gameStart) < 10) {
    state.tamaStage = tamaState[0];
  }
}

function eggHatch(state) {
  if (state.tamaStage !== tamaState[0]) {
    return;
  }

  if (state.tamaHatch < 3 && timeMathToSec(state.timeState.gameStart) > 2) {
    if (timeMathToSec(state.timeState.gameStart) % 1 == 0) {
      //every 2 sec 70% to hatch more
      if (randomReturnPercentage(70)) {
        state.tamaHatch++;
      }
    }
  }

  if (state.tamaHatch == 3) {
    state.timeState.lastHatchCycle = new Date();

    state.tamaHatch = 4;
  }

  console.log(state.tamaHatch);
}

function eggToBaby(state) {
  //first KID evolve
  if (state.tamaStage !== tamaState[0] || state.tamaHatch !== 4) {
    return;
  }

  let lastHatchCycle = state.timeState.lastHatchCycle;

  if (timeMathToSec(lastHatchCycle) < 120) {
    if (timeMathToSec(state.timeState.gameStart) % 2 == 0) {
      //every 2 sec - 45% chance to hatch
      if (randomReturnPercentage(100)) {
        state.tamaStage = tamaState[1];

        state.tamaName = state.tamaStage;

        state.timeState.lastEvolve = new Date();
      }
    }

    return;
  } else if (
    timeMathToSec(lastHatchCycle) > 120 //2 min
  ) {
    //100% chance to hatch
    state.tamaStage = tamaState[1];

    state.timeState.lastEvolve = new Date();
  }
}

function babyToToddler(state) {
  //second KID evolve
  if (state.tamaStage !== tamaState[1] || state.foodAnimationGoing) {
  }
  if (
    timeMathToSec(state.timeState.lastEvolve) > 10 &&
    timeMathToSec(state.timeState.lastEvolve) < 120
  ) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      console.log("second kid evolve is running");
      let randomNum = randomNumGen(500);

      if (randomReturnPercentage(80)) {
        state.tamaStage = tamaState[2];

        state.timeState.lastEvolve = new Date();
      }
    }
  } else if (
    state.tamaStage === tamaState[1] &&
    timeMathToSec(state.timeState.lastEvolve) > 120
  ) {
    state.tamaStage = tamaState[2];

    state.timeState.lastEvolve = new Date();
  }
}

function toddlerToTeen(state) {
  if (state.tamaStage !== tamaState[2] || state.foodAnimationGoing) {
    return;
  }

  //BABY TO TEEN
  if (timeMathToSec(state.timeState.lastEvolve) >= 60) {
    //1% percent chance to grow early every 60 seconds
    if (timeMathToSec(state.gameStarted) % 30 == 0) {
      console.log("Toddler to teen evolve is running");

      let randomNum = randomNumGen(2);

      if (randomNum === 0) {
        state.tamaStage = tamaState[3];
      } else {
        state.tamaStage = tamaState[4];
      }
    }
  } else if (
    state.tamaStage == tamaState[2] &&
    timeMathToSec(state.timeState.lastEvolve > 43200) //.5 day
  ) {
    //10% every 60 seconds
    if (timeMathToSec(state.gameStarted) % 60 == 0) {
      let randomNum = randomNumGen(2);
      if (randomNum === 0) {
        state.tamaStage = tamaState[3];
      } else {
        state.tamaStage = tamaState[4];
      }
    }
  } else if (
    state.tamaStage == tamaState[2] &&
    timeMathToSec(state.timeState.lastEvolve > 86400) //1 day
  ) {
    //grow up no matter what
    let randomNum = randomNumGen(2);
    if (randomNum === 0) {
      state.tamaStage = tamaState[3];
    } else {
      state.tamaStage = tamaState[4];
    }
  }
}

function teenToAdult(state) {
  if (
    (state.tamaStage == tamaState[3] || state.tamaStage == tamaState[4]) &&
    timeMathToSec(state.timeState.lastEvolve) > 20 //60 min
  ) {
    if (timeMathToSec(state.timeState.gameStart) % 2 == 0) {
      //1 % chance every 30 seconds to grow up early
      let randomNum = randomNumGen(100);
      if (randomNum > 46) {
        let teenChoice = randomNumGen(100);
        if (teenChoice >= 0 && teenChoice <= 23) {
          state.tamaStage = tamaState[7];
        } else if (teenChoice >= 24 && teenChoice <= 47) {
          state.tamaStage = tamaState[8];
        } else if (teenChoice >= 48 && teenChoice <= 71) {
          state.tamaStage = tamaState[9];
        } else if (teenChoice >= 72 && teenChoice <= 95) {
          //24%
          state.tamaStage = tamaState[10];
        } else if (teenChoice >= 96) {
          //4% - SECRET CHARACTER
          if (state.tamaStage == tamaState[3]) {
            state.tamaStage = tamaState[5]; //secret characters for that character
          } else if (state.tamaStage == tamaState[4]) {
            state.tamaStage = tamaState[6]; //secret characters for that character
          }
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
