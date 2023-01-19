import { state, tamaState } from "./scripts/state";
let myInterval;
let foodIsActive = false;
let lightsIsActive = false;
let healthIsActive = false;
let health2IsActive = false;
let menuIsOpen = false;
let themeMenuIsOpen = false;

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
  quitGame,
  scoreAutoQuit,
} from "./scripts/mainFeatures/game/Game";

function updateGameTimerAndRestart() {
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

function updateAndPlayGameAnimations() {
  if (state.gameState.gameIsRunning) {
    updateGameTimerAndRestart();
    chooseOneAnimation(
      state,
      state.gameState.playerSelectedChoice,
      state.gameState.gameTimeStore
    );
    updateScoreView(
      state.gameState.playerSelection,
      state.gameState.computerSelection,
      state.gameState.gameHappy,
      state.gameState.gameMad
    );
    showGameCharacter(state);
    characterMadEmoteAnimations(
      state.gameState.gameMad,
      state.gameState.gameHappy,
      state.gameState.gameAnimateCount,
      state
    );
    characterHappyEmoteAnimations(
      state.gameState.gameHappy,
      state.gameState.gameMad,
      state.gameState.gameAnimateCount,
      state
    );
    quitGame(state);
  }

  scoreAutoQuit(state);
}

function playGame() {
  if (state.gameState.gameIsRunning != false) {
    if (state.gameState.gameTimeStore < 8) {
      console.log("game running", state.gameState.gameTimeStore);
    } else if (state.gameState.gameTimeStore === 8) {
      state.gameState.playerSelectedChoice = false;
      state.gameState.playerSelection = 0;
      state.gameState.gameTimeStore = 0;
      console.log("game ended", state.gameState.gameTimeStore);
    }
  }
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
  updateChracterPicture(state, state.gameState.gameIsRunning);
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

import {
  givePoop,
  autoHealthDegen,
  autoHappyDegen,
  getSick,
  ifSick,
} from "./scripts/mainFeatures/TamaHealth";

import {
  letThereBeLife,
  eggHatch,
  eggToBaby,
  babyToTeen,
  teenToAdult,
  autoDeath,
} from "./scripts/mainFeatures/CreateUpdateLife";

function stop() {
  clearInterval(myInterval);
  state.gameStarted = false;
}

function autoAge() {
  if (timeMathToSec(state.timeState.gameStart) % 86400 == 0) {
    //1 DAY
    state.tamaAge++;
    console.log(tamaState);
  }

  letThereBeLife(state);
  eggHatch(state);
  eggToBaby(state);
  babyToTeen(state);
  teenToAdult(state);
  autoDeath(state, stop);
}

import {
  feed,
  heal,
  clean,
  autoAttentionAlert,
  autoDisciplineTest,
  spoiledAdultAttention,
} from "./scripts/mainFeatures/mainFunctions";

/////////////////////////////////////RUNNING THE GAME
function updateFunctions() {
  if (state.tamaStage == tamaState[0]) {
  } else {
    getSick(state);
    givePoop(state);
    ifSick(state);
    autoHealthDegen(state);
    autoHappyDegen(state);
    autoDisciplineTest(state);
    playGame();
  }
  autoAge();
  autoAttentionAlert(state);
  spoiledAdultAttention(state);
}

function gameLoop() {
  updateFunctions();
}

function start() {
  myInterval = setInterval(gameLoop, 1000);
  state.gameStarted = true;
  state.tamaDead = false;
  state.timeState.gameStart = new Date();
}

start();

function hideAllExtraScreens() {
  hideImage(foodScreen);
  state.screenState.foodIsActive = false;
  hideImage(lightsScreen);
  state.screenState.lightsIsActive = false;
  state.gameState.gameEnded = true;
  quitGame(state);
  hideImage(healthScreen);
  state.screenState.healthIsActive = false;
  hideImage(healthScreen2);
  state.screenState.health2IsActive = false;
}

foodButton.addEventListener("click", function () {
  if (state.foodAnimationGoing || state.tamaIsMad) {
    return;
  }

  if (
    state.screenState.lightsIsActive ||
    state.gameState.gameIsRunning ||
    state.screenState.healthIsActive ||
    state.screenState.health2IsActive ||
    state.screenState.foodIsActive === false
  ) {
    hideAllExtraScreens();
    showImage(foodScreen);
    state.screenState.foodIsActive = true;
    return;
  }

  if (state.screenState.foodIsActive === true) {
    foodScreen.style.visibility = "hidden";
    state.screenState.foodIsActive = false;
  }
});

mealButton.addEventListener("click", function () {
  if (state.tamaHealth < 5) {
    state.foodAnimationGoing = true;
    feed(1, state);
    allEatSnackAnimations(state);
  }

  hideAllExtraScreens();
});

snackButton.addEventListener("click", function () {
  if (state.tamaHappy <= 5) {
    state.foodAnimationGoing = true;
    feed(2, state);
    allEatSnackAnimations(state);

    if (state.needAttention === true) {
      state.needAttention = false;
      state.tamaSpoiled++;
    }
  }

  hideAllExtraScreens();
});

lightButton.addEventListener("click", function () {
  if (state.foodAnimationGoing) {
    return;
  }

  if (
    state.screenState.foodIsActive ||
    state.gameState.gameIsRunning ||
    state.screenState.healthIsActive ||
    state.screenState.health2IsActive
  ) {
    hideAllExtraScreens();
    showImage(lightsScreen);
    state.screenState.lightsIsActive = true;
  }

  if (state.lightIsOff === true && state.screenState.lightsIsActive === false) {
    hideImage(lightsOffScreen);
    showImage(lightsScreen);
    state.screenState.lightsIsActive = true;
  } else if (
    state.lightIsOff === true &&
    state.screenState.lightsIsActive === true
  ) {
    hideImage(lightsScreen);
    showImage(lightsOffScreen);
    state.screenState.lightsIsActive = false;
  } else if (state.screenState.lightsIsActive === false) {
    lightsScreen.style.visibility = "visible";
    state.screenState.lightsIsActive = true;
  } else if (state.screenState.lightsIsActive === true) {
    lightsScreen.style.visibility = "hidden";
    state.screenState.lightsIsActive = false;
  }
});

lightsOn.addEventListener("click", function () {
  hideImage(lightsScreen);
  state.screenState.lightsIsActive = false;
  hideImage(lightsOffScreen);
  state.lightIsOff = false;
  console.log(state.lightIsOff);
});

lightsOff.addEventListener("click", function () {
  state.lightIsOff = true;
  hideImage(lightsScreen);
  state.screenState.lightsIsActive = false;
  showImage(lightsOffScreen);
});

gameButton.addEventListener("click", function () {
  if (state.tamaIsMad != true) {
    hideAllExtraScreens();
    if (foodIsActive === true) {
      hideAllExtraScreens();
      removeAllChildAndTeen();
      showImage(gameScreen);
      state.gameState.gameIsRunning = true;
    } else if (state.gameState.gameIsRunning === false) {
      state.gameState.gameEnded = false;
      state.gameState.gameIsRunning = true;
      removeAllChildAndTeen();
      showImage(gameScreen);
    } else if (state.gameState.gameIsRunning === true) {
      state.gameState.gameEnded = true;
    }
  }
});

playerChoiceOne.addEventListener("click", function () {
  if (state.gameState.playerSelectedChoice != true) {
    state.gameState.playerSelectedChoice = true;
    state.gameState.playerSelection = 1;
    state.gameState.gameTimeStore = 6;
    state.gameState.computerSelection = computerGuess();
    updateScore(
      state.gameState.playerSelection,
      state.gameState.playerScore,
      state.gameState.computerSelection,
      state.gameState.computerScore
    );
  }
});

playerChoiceTwo.addEventListener("click", function () {
  if (state.gameState.playerSelectedChoice != true) {
    state.gameState.playerSelectedChoice = true;
    state.gameState.playerSelection = 2;
    state.gameState.gameTimeStore = 6;
    state.gameState.computerSelection = computerGuess();
    updateScore(
      state.gameState.playerSelection,
      state.gameState.playerScore,
      state.gameState.computerSelection,
      state.gameState.computerScore
    );
  }
});

healButton.addEventListener("click", function () {
  hideAllExtraScreens();
  if (state.tamaIsMad != true) {
    if (state.tamaSick === true) {
      heal(state);
      state.tamaIsMad = true;
    } else {
      state.tamaIsMad = true;
    }
  }
});

healthButton.addEventListener("click", function () {
  if (state.foodAnimationGoing) {
    return;
  }

  if (
    state.screenState.healthIsActive === true &&
    state.screenState.health2IsActive === false
  ) {
    hideImage(healthScreen);
    showImage(healthScreen2);
    state.screenState.health2IsActive = true;
  } else if (
    state.screenState.healthIsActive &&
    state.screenState.healthIsActive
  ) {
    hideImage(healthScreen2);
    hideImage(healthScreen);
    state.screenState.healthIsActive = false;
    state.screenState.health2IsActive = false;

    return;
  }

  if (
    state.screenState.foodIsActive ||
    state.screenState.lightsIsActive ||
    state.gameState.gameIsRunning ||
    !state.screenState.healthIsActive
  ) {
    hideAllExtraScreens();
    healthScreen.style.visibility = "visible";
    state.screenState.healthIsActive = true;
  }
});

cleanButton.addEventListener("click", function () {
  hideAllExtraScreens();
  if (state.tamaPoop > 0) {
    clean(state);
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
