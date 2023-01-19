import { state, tamaState } from "./scripts/state";
let myInterval;
let menuIsOpen = false;
let themeMenuIsOpen = false;

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
  playGame,
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
    playGame(state);
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

import {
  FoodEvent,
  MealEvent,
  SnackEvent,
} from "./scripts/mainFeatures/events/FoodEvent";

foodButton.addEventListener("click", () => {
  FoodEvent(state);
});

mealButton.addEventListener("click", () => {
  MealEvent(state);
});

snackButton.addEventListener("click", () => {
  SnackEvent(state);
});

import {
  LightEvent,
  LightsOnAndOff,
} from "./scripts/mainFeatures/events/LightsEvent";

lightButton.addEventListener("click", () => {
  LightEvent(state);
});

lightsOn.addEventListener("click", () => {
  LightsOnAndOff(state, false);
});

lightsOff.addEventListener("click", function () {
  LightsOnAndOff(state, true);
});

import {
  GameButton,
  PlayerChoiceOne,
  PlayerChoiceTwo,
} from "./scripts/mainFeatures/game/GameEventListeners";

gameButton.addEventListener("click", () => {
  GameButton(state);
});

playerChoiceOne.addEventListener("click", () => {
  PlayerChoiceOne(state);
});

playerChoiceTwo.addEventListener("click", () => {
  PlayerChoiceTwo(state);
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

import { HealthEvent } from "./scripts/mainFeatures/events/HealthEvent";

healthButton.addEventListener("click", function () {
  HealthEvent(state);
});

import { CleanEvent } from "./scripts/mainFeatures/events/CleanEvent";

cleanButton.addEventListener("click", function () {
  CleanEvent(state);
});

import { DisciplineEvent } from "./scripts/mainFeatures/events/DisciplineEvent";

disciplineButton.addEventListener("click", function () {
  DisciplineEvent(state);
});

///////////////////// need to finish rest and clean code

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
