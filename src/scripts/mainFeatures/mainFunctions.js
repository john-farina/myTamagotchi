import { hungerMeter, alertButton } from "../tamaImports";
import { tamaState } from "../state";
import { randomNumGen, timeMathToSec } from "../misc/usefulFunctions";

function feed(type, state) {
  //1 == meal && 2 == snack
  if (type == 1 && state.tamaHealth < 5) {
    state.tamaHealth++;
  } else if (type == 2 && state.tamaHealth < 5) {
    if (state.tamaHappy < 5) {
      state.tamaHappy = state.tamaHappy + 1;
    }
  } else if (type == 2) {
    state.tamaHealth = state.tamaHealth + 0;
    if (state.tamaHappy < 5) {
      state.tamaHappy = state.tamaHappy + 1;
    }
  }
  if (state.tamaHealth >= 5) {
    state.tamaHealth += 0;
  }
  if (type == 2 && state.tamaHealth >= 5) {
    state.tamaHealth = 5;
  } else if (type == 1 && state.tamaHealth >= 5) {
    state.tamaHealth = 5;
    console.log("tamagotchi is full");
  }
}

function heal(state) {
  state.tamaSick = false;
  state.tamaHappy -= 1;
}

function clean(state) {
  if (state.tamaPoop == 0) {
  } else {
    state.tamaPoop = 0;
    state.tamaHappy++;
  }
}

function autoAttentionAlert(state) {
  if (state.needAttention != true) {
    if (state.tamaDead == true) {
      hungerMeter.textContent = "im ded";
    } else if (state.tamaStage === tamaState[0]) {
      hungerMeter.textContent = "egg";
    } else if (state.tamaNeglect >= 8) {
      //doesnt tell you when its actually hungry
    } else {
      if (state.tamaHappy <= 2 && state.tamaHealth <= 2) {
        alertButton.style.backgroundColor = "red";
        // hungerMeter.textContent = "im not happy and hungry";
      } else if (state.tamaHappy <= 2) {
        alertButton.style.backgroundColor = "red";
        // hungerMeter.textContent = "im not happy";
      } else if (state.tamaHealth <= 2) {
        alertButton.style.backgroundColor = "red";
        // hungerMeter.textContent = "im hungry";
      } else if (state.tamaHappy > 2) {
        alertButton.style.backgroundColor = "green";
        // hungerMeter.textContent = "";
      } else if (state.tamaHealth >= 2) {
        alertButton.style.backgroundColor = "green";
        // hungerMeter.textContent = "";
      }
    }
  }
}

function autoDisciplineTest(state) {
  //make a noise when full (if dont disicpline increses spoil meter by one
  if (state.tamaHappy >= 5 && state.tamaHealth >= 5) {
    //only happen if full happy and health
    if (
      state.tamaStage == tamaState[1] ||
      state.tamaStage == tamaState[2] ||
      state.tamaStage == tamaState[3] ||
      state.tamaStage == tamaState[4]
    ) {
      //only happen when in teen state
      if (state.tamaDiscipline == 5) {
        //if disciplined dont happen
      } else if (state.tamaDiscipline < 3) {
        if (timeMathToSec(state.timeState.lastComplain) > 60) {
          //only chance to happen 30 min after last happened
          let randomNum = randomNumGen(100);
          if (randomNum >= 50 && randomNum <= 58) {
            //make an attention call
            state.needAttention = true;
            state.timeState.lastComplain = new Date();
          }
        }
        //alert stays for 2 minutes
        if (
          state.needAttention == true &&
          timeMathToSec(state.timeState.lastComplain) < 30
        ) {
          alertSoundPlayed = true;
          alertButton.style.backgroundColor = "red";
        } else {
          alertButton.style.backgroundColor = "green";
          state.needAttention = false;
          if (randomNumGen(5) === 2) {
            state.tamaNeglect++;
          }
        }
      }
    }
  }
}

function spoiledAdultAttention(state) {
  if (
    state.tamaSpoiled >= 7 &&
    (state.tamaStage == tamaState[4] ||
      state.tamaStage == tamaState[5] ||
      state.tamaStage == tamaState[6] ||
      state.tamaStage == tamaState[7] ||
      state.tamaStage == tamaState[8] ||
      state.tamaStage == tamaState[9] ||
      state.tamaStage == tamaState[10] ||
      state.tamaStage == tamaState[11])
  ) {
    if (timeMathToSec(state.timeState.lastComplain) > 60) {
      //only chance to happen 30 min after last happened
      let randomNum = randomNumGen(200);
      if (randomNum >= 40 && randomNum <= 50) {
        //make an attention call
        state.needAttention = true;
        state.timeState.lastComplain = new Date();
      }
    }
    //alert stays for 30 seconds
    if (
      state.needAttention == true &&
      timeMathToSec(state.timeState.lastComplain) < 30
    ) {
    } else {
      state.needAttention = false;
    }
  }
}

function updateGameTimerAndRestart(state) {
  if (state.gameState.gameTimeCount <= 24) {
    state.gameState.gameTimeCount++;
    if (
      state.gameState.gameTimeCount % 3 === 0 &&
      state.gameState.gameTimeStore < 30
    ) {
      state.gameState.gameTimeStore++;
      gameTimer.innerHTML = `${state.gameState.gameTimeStore}`;
    }
  } else if (state.gameState.gameTimeCount > 24) {
    state.gameState.gameRound += 1;
    state.gameState.playerSelectedChoice = false;
    state.gameState.playerSelection = 0;
    state.gameState.gameTimeCount = 0;
    state.gameState.gameTimeStore = 0;
  }
}

function scoreAutoQuit(state) {
  if (state.gameState.playerScore > 2) {
    state.gameState.gameIsRunning = false;
    state.gameState.gameEnded = true;
    state.tamaHappy++;
    state.tamaIsHappy = true;
    quitGame(state);
  } else if (state.gameState.computerScore > 2) {
    state.gameState.gameIsRunning = false;
    state.gameState.gameEnded = true;
    quitGame(state);
  }
}

export {
  feed,
  heal,
  clean,
  autoAttentionAlert,
  autoDisciplineTest,
  spoiledAdultAttention,
  scoreAutoQuit,
};
