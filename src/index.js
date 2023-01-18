import { state, tamaState } from "./scripts/state";
let myInterval;
let foodIsActive = false;
let lightsIsActive = false;
let gameIsRunning = false;
let gameTimeCount = 0;
let gameTimeStore = 0;
let playerSelectedChoice = false;
let playerSelection = 0;
let computerSelection = 0;
let playerScore = 0;
let computerScore = 0;
let gameHappy = false;
let gameMad = false;
let gameEnded = false;
let gameAnimateCount = 0;
let healthIsActive = false;
let health2IsActive = false;
let menuIsOpen = false;
let themeMenuIsOpen = false;
let alertSoundPlayed = false;

/////////////////////////////////////All of Tama's query selections
import {
  option1,
  optionsMenu,
  optionsButton,
  color5Button,
  color3Button,
  color2Button,
  color1Button,
  themeMenu,
  themeButton,
  dropDownMenu,
  menuButton,
  button3,
  button2,
  button1,
  deviceButtons,
  tamagotchiContainer,
  hungerMeter,
  gravestoneText,
  gravestoneTwo,
  gravestone,
  snackButton,
  mealButton,
  child1Sick,
  child1Low,
  child1,
  childClass,
  characterClass,
  eggClass,
  alertButton,
  disciplineButton,
  cleaningLine,
  cleanButton,
  healthScreen2,
  healthScreen,
  healButton,
  playerChoiceTwo,
  playerChoiceOne,
  playerChoiceDiv,
  gameTimer,
  gameScreen,
  gameButton,
  lightsOff,
  lightsOn,
  lightButton,
  lightsOffScreen,
  lightsScreen,
  healthButton,
  foodScreen,
  helpAttention,
  helpDiscpline,
  healthGif,
  helpHealth,
  poopGif,
  helpClean,
  sickGif,
  helpSick,
  gameGif,
  helpGame,
  lightsGif,
  helpLights,
  foodGif,
  helpEat,
  helpScreen,
  helpMenuButton,
} from "./scripts/tamaImports";
import {
  randomNumGen,
  timeMathToSec,
  displayFlex,
  displayHide,
} from "./scripts/misc/usefulFunctions";
import { hideImage, showImage } from "./scripts/animations/MovmentAnimation";
import { updateFood } from "./scripts/animations/FoodFunctions";
import { allEatSnackAnimations } from "./scripts/animations/EatingAnimations";
import {
  updateHeartSvg,
  updateDisciplineSvg,
} from "./scripts/animations/Hearts";
import {
  madAlertAnimate,
  happyAlertAnimate,
} from "./scripts/animations/AlertAnimations";
import {
  chooseOneAnimation,
  computerGuess,
  showGameCharacter,
  characterMadEmoteAnimations,
  characterHappyEmoteAnimations,
  updateScoreView,
  updateScore,
} from "./scripts/mainFeatures/Game";

function quitGame() {
  if (gameEnded) {
    gameHappy = false;
    gameMad = false;
    gameAnimateCount = 0;
    gameIsRunning = false;
    state.gameState.gameRound = 0;
    gameTimeCount = 0;
    gameTimeStore = 0;
    playerSelectedChoice = false;
    playerSelection = 0;
    computerSelection = 0;
    playerScore = 0;
    computerScore = 0;
    hideImage(gameScreen);
  }
}

function updateGameTimerAndRestart() {
  if (gameTimeCount <= 24) {
    gameTimeCount++;
    if (gameTimeCount % 3 === 0 && gameTimeStore < 30) {
      gameTimeStore++;
      gameTimer.innerHTML = `${gameTimeStore}`;
    }
  } else if (gameTimeCount > 24) {
    state.gameState.gameRound += 1;
    playerSelectedChoice = false;
    playerSelection = 0;
    gameTimeCount = 0;
    gameTimeStore = 0;
  }
}

function scoreAutoQuit() {
  if (playerScore > 2) {
    gameIsRunning = false;
    gameEnded = true;
    state.tamaHappy++;
    state.tamaIsHappy = true;
    quitGame();
  } else if (computerScore > 2) {
    gameIsRunning = false;
    gameEnded = true;
    quitGame();
  }
}

function updateAndPlayGameAnimations() {
  if (gameIsRunning) {
    updateGameTimerAndRestart();
    chooseOneAnimation(state, playerSelectedChoice, gameTimeStore);
    updateScoreView(playerSelection, computerSelection, gameHappy, gameMad);
    showGameCharacter(state);
    characterMadEmoteAnimations(gameMad, gameHappy, gameAnimateCount, state);
    characterHappyEmoteAnimations(gameHappy, gameMad, gameAnimateCount, state);
    quitGame();
  }
  scoreAutoQuit();
}

import {
  removeAllChildAndTeen,
  eggHatchAnimation,
  placePoop,
  autoAlert,
  showGravestone,
} from "./scripts/animations/MiscTamaAnimation";

import { updateTheme } from "./scripts/misc/Themes";

import { updateChracterPicture } from "./scripts/animations/UpdateCharacter";

function updatePictures() {
  updateTheme(state);
  happyAlertAnimate(state);
  madAlertAnimate(state);
  updateFood(state);
  placePoop(state);
  autoAlert(state);
  eggHatchAnimation(state);
  allEatSnackAnimations(state);
  updateHeartSvg(state);
  updateDisciplineSvg(state);
  updateChracterPicture(state, gameIsRunning);
  showGravestone(state);
  updateAndPlayGameAnimations();
}

function startAnimation() {
  myInterval = setInterval(updatePictures, 400);
  state.gameStarted = true;
  state.tamaDead = false;
  state.timeState.gameStart = new Date();
}

startAnimation();

/////////////////////////////////////AUTO DEGENERATION FUNCTIONS
import {
  givePoop,
  autoHealthDegen,
  autoHappyDegen,
  getSick,
  ifSick,
} from "./scripts/mainFeatures/TamaHealth";

/////////////////////////////////////GAME FUNCTIONS
function feed(type) {
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

function heal() {
  state.tamaSick = false;
  state.tamaHappy -= 1;
}

function clean() {
  if (state.tamaPoop == 0) {
  } else {
    state.tamaPoop = 0;
    state.tamaHappy++;
  }
}

function autoAttentionAlert() {
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

function autoDisciplineTest() {
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

function spoiledAdultAttention() {
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
      attentionText.textContent = " i want attention";
    } else {
      attentionText.textContent = "";
      state.needAttention = false;
    }
  }
}

function letThereBeLife() {
  if (timeMathToSec(state.timeState.gameStart) < 10) {
    state.tamaStage = tamaState[1];
  }
}

function eggHatch() {
  // if (not hatched) {
  //   give random chance every 30 sec to
  //   add a increase in hatching stage
  //   if doesnt increase in 10 min add a increase (every 10 min)
  //   if hatching stage to 3 go to eggToBaby
  // }
  if (
    state.tamaStage == tamaState[0] && //if egg and 20 seconds has passed
    state.tamaHatch < 3 &&
    timeMathToSec(state.timeState.gameStart) > 2
  ) {
    if (timeMathToSec(state.timeState.gameStart) % 2 == 0) {
      //every 2 seconds have a chance to hatch
      let randomNum = randomNumGen(500);
      if (
        (randomNum >= 100 && randomNum <= 180) ||
        (randomNum >= 300 && randomNum <= 310)
      ) {
        if (state.tamaHatch != 3) {
          state.tamaHatch++;
        }
      }
    }
  }
  if (state.tamaHatch == 3) {
    state.timeState.lastHatchCycle = new Date();
    state.tamaHatch = 4;
  }
}

function eggToBaby() {
  //first KID evolve
  if (
    state.tamaStage == tamaState[0] && //if stil egg
    state.tamaHatch == 4 && //and egg is at hatch level 3
    timeMathToSec(state.timeState.lastHatchCycle) > 10 &&
    timeMathToSec(state.timeState.lastHatchCycle) < 120 //2 min
  ) {
    if (timeMathToSec(state.timeState.gameStart) % 2 == 0) {
      let randomNum = randomNumGen(100);
      if (randomNum >= 75 && randomNum <= 80) {
        //5% chance every 4 sec to hatch early
        state.tamaStage = tamaState[1];
        state.tamaName = state.tamaStage;
        state.timeState.lastEvolve = new Date();
      }
    }
  } else if (
    state.tamaStage == tamaState[0] &&
    timeMathToSec(state.timeState.lastHatchCycle) > 120 //2 min
  ) {
    //100% chance to hatch
    state.tamaStage = tamaState[1];
    state.timeState.lastEvolve = new Date();
  }

  //second KID evolve
  if (
    state.tamaStage == tamaState[1] &&
    timeMathToSec(state.timeState.lastEvolve) > 10 &&
    timeMathToSec(state.timeState.lastEvolve) < 120 &&
    state.foodAnimationGoing != true
  ) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      let randomNum = randomNumGen(500);
      if (randomNum >= 35 && randomNum <= 45) {
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

function babyToTeen() {
  //BABY TO TEEN
  if (
    state.tamaStage == tamaState[2] &&
    timeMathToSec(state.timeState.lastEvolve) >= 60 && //10 min
    state.foodAnimationGoing != true
  ) {
    //1% percent chance to grow early every 60 seconds
    if (timeMathToSec(state.gameStarted) % 30 == 0) {
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

function teenToAdult() {
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

function secretAdultToSpecial() {
  //make it so
}

function autoDeath() {
  if (
    //cant die as an egg or stage one child
    (state.tamaStage === tamaState[1] || state.tamaStage === tamaState[0]) &&
    state.tamaHealth === 0
  ) {
    state.tamaHealth = 1;
  } else if (state.tamaHealth == 0) {
    state.tamaStage = tamaState[13];
    stop();
    state.tamaDead = true;
  }
}

function autoAge() {
  if (timeMathToSec(state.timeState.gameStart) % 86400 == 0) {
    //1 DAY
    state.tamaAge++;
    console.log(tamaState);
  }
  letThereBeLife();
  eggHatch();
  eggToBaby();
  babyToTeen();
  teenToAdult();
  autoDeath();
}

function playGame() {
  if (gameIsRunning != false) {
    if (gameTimeStore < 8) {
      console.log("game running", gameTimeStore);
    } else if (gameTimeStore === 8) {
      playerSelectedChoice = false;
      playerSelection = 0;
      gameTimeStore = 0;
      console.log("game ended", gameTimeStore);
    }
  }
}

//i cant make it so it only plays once in the loop. its very annoying
function playAlertSound() {
  let alertSound = new Audio("../src/tamaPictures/alert.wav");
  if (alertSoundPlayed === true) {
    alertSound.play();
  }
  setInterval(function () {
    alertSound.pause();
    alertSoundPlayed = false;
  }, 400);
}

/////////////////////////////////////RUNNING THE GAME
function updateFunctions() {
  if (state.tamaStage == tamaState[0]) {
  } else {
    getSick(state);
    givePoop(state);
    ifSick(state);
    autoHealthDegen(state);
    autoHappyDegen(state);
    autoDisciplineTest();
    playGame();
  }
  autoAge();
  autoAttentionAlert();
  spoiledAdultAttention();
}

function start() {
  myInterval = setInterval(gameLoop, 1000);
  state.gameStarted = true;
  state.tamaDead = false;
  state.timeState.gameStart = new Date();
}

function stop() {
  clearInterval(myInterval);
  state.gameStarted = false;
}

function ifStarted() {
  if (state.gameStarted == true) {
    start();
  }
}

function gameLoop() {
  updateFunctions();
}
start();

function hideAllExtraScreens() {
  hideImage(foodScreen);
  foodIsActive = false;
  hideImage(lightsScreen);
  lightsIsActive = false;
  quitGame();
  gameEnded = true;
  hideImage(healthScreen);
  healthIsActive = false;
  hideImage(healthScreen2);
  health2IsActive = false;
}

foodButton.addEventListener("click", function () {
  if (state.foodAnimationGoing != true) {
    if (state.tamaIsMad != true) {
      if (lightsIsActive === true) {
        hideAllExtraScreens();
        showImage(foodScreen);
        foodIsActive = true;
      } else if (gameIsRunning === true) {
        hideAllExtraScreens();
        showImage(foodScreen);
        foodIsActive = true;
      } else if (healthIsActive === true) {
        hideAllExtraScreens();
        foodScreen.style.visibility = "visible";
        foodIsActive = true;
      } else if (foodIsActive === false) {
        foodScreen.style.visibility = "visible";
        foodIsActive = true;
      } else if (foodIsActive === true) {
        foodScreen.style.visibility = "hidden";
        foodIsActive = false;
      }
    }
  }
});

mealButton.addEventListener("click", function () {
  if (state.tamaHealth < 5) {
    state.foodAnimationGoing = true;
    feed(1);
    allEatSnackAnimations(state);
  }
  hideAllExtraScreens();
});

// if (state.needAttention === true) {
//     state.tamaIsMad = true;
//     state.needAttention = false;
//     state.tamaDiscipline++;
// } else {
//     state.tamaIsMad = true;
// }

snackButton.addEventListener("click", function () {
  if (state.tamaHappy <= 5) {
    state.foodAnimationGoing = true;
    feed(2);
    allEatSnackAnimations(state);
    if (state.needAttention === true) {
      state.needAttention = false;
      state.tamaSpoiled++;
    }
  }
  hideAllExtraScreens();
});

lightButton.addEventListener("click", function () {
  if (state.foodAnimationGoing != true) {
    if (foodIsActive === true) {
      hideAllExtraScreens();
      showImage(lightsScreen);
      lightsIsActive = true;
    } else if (gameIsRunning === true) {
      hideAllExtraScreens();
      showImage(lightsScreen);
      lightsIsActive = true;
    } else if (healthIsActive === true || health2IsActive === true) {
      hideAllExtraScreens();
      showImage(lightsScreen);
      lightsIsActive = true;
    } else if (state.lightIsOff === true && lightsIsActive === false) {
      hideImage(lightsOffScreen);
      showImage(lightsScreen);
      lightsIsActive = true;
    } else if (state.lightIsOff === true && lightsIsActive === true) {
      hideImage(lightsScreen);
      showImage(lightsOffScreen);
      lightsIsActive = false;
    } else if (lightsIsActive === false) {
      lightsScreen.style.visibility = "visible";
      lightsIsActive = true;
    } else if (lightsIsActive === true) {
      lightsScreen.style.visibility = "hidden";
      lightsIsActive = false;
    }
  }
});
lightsOn.addEventListener("click", function () {
  hideImage(lightsScreen);
  lightsIsActive = false;
  hideImage(lightsOffScreen);
  state.lightIsOff = false;
  console.log(state.lightIsOff);
});
lightsOff.addEventListener("click", function () {
  state.lightIsOff = true;
  hideImage(lightsScreen);
  lightsIsActive = false;
  showImage(lightsOffScreen);
  console.log(state.lightIsOff);
});

gameButton.addEventListener("click", function () {
  if (state.tamaIsMad != true) {
    hideAllExtraScreens();
    if (foodIsActive === true) {
      hideAllExtraScreens();
      removeAllChildAndTeen();
      showImage(gameScreen);
      gameIsRunning = true;
    } else if (gameIsRunning === false) {
      gameEnded = false;
      gameIsRunning = true;
      removeAllChildAndTeen();
      showImage(gameScreen);
    } else if (gameIsRunning === true) {
      gameEnded = true;
    }
  }
});

playerChoiceOne.addEventListener("click", function () {
  if (playerSelectedChoice != true) {
    playerSelectedChoice = true;
    playerSelection = 1;
    gameTimeStore = 6;
    computerSelection = computerGuess();
    updateScore(playerSelection, playerScore, computerSelection, computerScore);
  }
});

playerChoiceTwo.addEventListener("click", function () {
  if (playerSelectedChoice != true) {
    playerSelectedChoice = true;
    playerSelection = 2;
    gameTimeStore = 6;
    computerSelection = computerGuess();
    updateScore(playerSelection, playerScore, computerSelection, computerScore);
  }
});

healButton.addEventListener("click", function () {
  hideAllExtraScreens();
  if (state.tamaIsMad != true) {
    if (state.tamaSick === true) {
      heal();
      state.tamaIsMad = true;
    } else {
      state.tamaIsMad = true;
    }
  }
});

healthButton.addEventListener("click", function () {
  if (state.foodAnimationGoing != true) {
    if (foodIsActive === true) {
      hideAllExtraScreens();
      healthScreen.style.visibility = "visible";
      healthIsActive = true;
    } else if (lightsIsActive === true) {
      hideAllExtraScreens();
      showImage(healthScreen);
      healthIsActive = true;
    } else if (gameIsRunning === true) {
      hideAllExtraScreens();
      showImage(healthScreen);
      healthIsActive = true;
    } else if (healthIsActive === false) {
      healthScreen.style.visibility = "visible";
      healthIsActive = true;
    } else if (healthIsActive === true && health2IsActive === false) {
      hideImage(healthScreen);
      showImage(healthScreen2);
      health2IsActive = true;
    } else if (healthIsActive === true && healthIsActive === true) {
      hideImage(healthScreen2);
      hideImage(healthScreen);
      healthIsActive = false;
      health2IsActive = false;
    }
  }
});

cleanButton.addEventListener("click", function () {
  hideAllExtraScreens();
  if (state.tamaPoop > 0) {
    clean();
    cleaningLine.classList.add("cleanAnimation");
    showImage(cleaningLine);
    setTimeout(function () {
      cleaningLine.classList.remove("cleanAnimation");
      hideImage(cleaningLine);
      state.tamaIsHappy = true;
    }, 800);
  } else {
    cleaningLine.classList.add("cleanAnimation");
    showImage(cleaningLine);
    setTimeout(function () {
      cleaningLine.classList.remove("cleanAnimation");
      hideImage(cleaningLine);
    }, 800);
  }
});

disciplineButton.addEventListener("click", function () {
  hideAllExtraScreens();
  if (state.needAttention === true) {
    state.tamaIsMad = true;
    state.needAttention = false;
    state.tamaDiscipline++;
  } else {
    state.tamaIsMad = true;
    let randomNum = randomNumGen(5);
    if (randomNum === 2) {
      state.tamaHappy--;
    }
  }
});

// const menuButton = document.querySelector("#buttonFour");
// const dropDownMenu = document.querySelector("#drop-down-menu");
// const themeButton = document.querySelector("#theme-selection");
// const themeMenu = document.querySelector("#drop-down-color-choice");
// const color1Button = document.querySelector("#color1");
// const color2Button = document.querySelector("#color2");
// const color3Button = document.querySelector("#color3");

function animateCloseAllTabs() {
  themeMenu.classList.remove("second-menu-animate-open");
  themeMenu.classList.add("second-menu-animate-close");

  setTimeout(function () {
    themeMenuIsOpen = false;
    displayHide(themeMenu);
    themeMenu.classList.add("second-menu-animate-open");
    themeMenu.classList.remove("second-menu-animate-close");
  }, 990);

  setTimeout(function () {
    dropDownMenu.classList.remove("menu-animate-open");
    dropDownMenu.classList.add("menu-animate-close");
    setTimeout(function () {
      displayHide(dropDownMenu);
      displayHide(themeMenu);
      dropDownMenu.classList.remove("menu-animate-close");
      dropDownMenu.classList.add("menu-animate-open");
      menuIsOpen = false;
    }, 990);
  }, 400);
}

menuButton.addEventListener("click", function () {
  if (menuIsOpen === false) {
    menuIsOpen = true;
    displayFlex(dropDownMenu);
  } else if (menuIsOpen === true) {
    if (themeMenuIsOpen === true) {
      animateCloseAllTabs();
    } else {
      dropDownMenu.classList.remove("menu-animate-open");
      dropDownMenu.classList.add("menu-animate-close");
      setTimeout(function () {
        displayHide(dropDownMenu);
        displayHide(themeMenu);
        dropDownMenu.classList.remove("menu-animate-close");
        dropDownMenu.classList.add("menu-animate-open");
        menuIsOpen = false;
      }, 1000);
    }
  }
});

themeButton.addEventListener("click", function () {
  if (themeMenuIsOpen === false) {
    themeMenuIsOpen = true;
    displayFlex(themeMenu);
  } else if (themeMenuIsOpen === true) {
    themeMenu.classList.remove("second-menu-animate-open");
    themeMenu.classList.add("second-menu-animate-close");
    setTimeout(function () {
      themeMenuIsOpen = false;
      displayHide(themeMenu);
      themeMenu.classList.add("second-menu-animate-open");
      themeMenu.classList.remove("second-menu-animate-close");
    }, 1000);
  }
});

//themes
color1Button.addEventListener("click", function () {
  state.tamaTheme = 0;
  animateCloseAllTabs();
});

color2Button.addEventListener("click", function () {
  state.tamaTheme = 1;
  animateCloseAllTabs();
});

color3Button.addEventListener("click", function () {
  state.tamaTheme = 2;
  animateCloseAllTabs();
});

const color4Button = document.querySelector("#color4");
color4Button.addEventListener("click", function () {
  state.tamaTheme = 3;
  animateCloseAllTabs();
});

color5Button.addEventListener("click", function () {
  state.tamaTheme = 4;
  animateCloseAllTabs();
});

// const helpEat = document.querySelector('#help-eat');
// const foodGif = document.querySelector('#food-gif');

// const helpLights = document.querySelector('#help-light');
// const lightsGif = document.querySelector('#lights-gif');

// const helpGame = document.querySelector('#help-game');
// const gameGif = document.querySelector('#game-gif');

// const helpSick = document.querySelector('#help-sick');
// const sickGif = document.querySelector('#sick-gif');

// const helpClean = document.querySelector('#help-clean');
// const poopGif = document.querySelector('#poop-gif');

// const helpHealth = document.querySelector('#help-health');
// const healthGif = document.querySelector('#health-gif');

// const helpDiscpline = document.querySelector('#help-discipline');

// const helpAttention = document.querySelector('#help-attention');

// const helpMenuButton = document.querySelector('#help-menu');
// const helpScreen = document.querySelector('#help-screen');

helpMenuButton.addEventListener("click", function () {
  dropDownMenu.classList.remove("menu-animate-open");
  dropDownMenu.classList.add("menu-animate-close");
  setTimeout(function () {
    displayHide(dropDownMenu);
    displayHide(themeMenu);
    dropDownMenu.classList.remove("menu-animate-close");
    dropDownMenu.classList.add("menu-animate-open");
    menuIsOpen = false;
  }, 1000);
  setTimeout(function () {
    displayFlex(helpScreen);
  }, 500);
});

function hideAllGifs() {
  displayHide(foodGif);
  displayHide(lightsGif);
  displayHide(gameGif);
  displayHide(sickGif);
  displayHide(poopGif);
  displayHide(healthGif);
}

helpEat.addEventListener("click", function () {
  hideAllGifs();
  displayFlex(foodGif);
});

helpLights.addEventListener("click", function () {
  hideAllGifs();
  displayFlex(lightsGif);
});

helpGame.addEventListener("click", function () {
  hideAllGifs();
  displayFlex(gameGif);
});

helpSick.addEventListener("click", function () {
  hideAllGifs();
  displayFlex(sickGif);
});

helpClean.addEventListener("click", function () {
  hideAllGifs();
  displayFlex(poopGif);
});

helpHealth.addEventListener("click", function () {
  hideAllGifs();
  displayFlex(healthGif);
});
