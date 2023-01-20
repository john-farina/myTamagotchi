import { state, tamaState } from "./scripts/state";
let myInterval;
let menuIsOpen = false;
let themeMenuIsOpen = false;

import {
  color5Button,
  color3Button,
  color2Button,
  color1Button,
  themeMenu,
  themeButton,
  dropDownMenu,
  menuButton,
  snackButton,
  mealButton,
  disciplineButton,
  cleanButton,
  healthScreen2,
  healthScreen,
  healButton,
  playerChoiceTwo,
  playerChoiceOne,
  gameButton,
  lightsOff,
  lightsOn,
  lightButton,
  lightsScreen,
  healthButton,
  foodScreen,
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
  timeMathToSec,
  displayFlex,
  displayHide,
} from "./scripts/misc/usefulFunctions";

import { hideImage } from "./scripts/animations/MovmentAnimation";

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
  quitGame,
  playGame,
  updateAndPlayGameAnimations,
} from "./scripts/mainFeatures/game/Game";

import {
  eggHatchAnimation,
  placePoop,
  autoAlert,
  showGravestone,
} from "./scripts/animations/MiscTamaAnimation";

import { updateTheme } from "./scripts/misc/Themes";

import { updateChracterPicture } from "./scripts/animations/UpdateCharacter";

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
  updateChracterPicture(state);
  showGravestone(state);
  updateAndPlayGameAnimations(state);
}

function startAnimation() {
  myInterval = setInterval(updatePictures, 400);
  state.gameStarted = true;
  state.tamaDead = false;
  state.timeState.gameStart = new Date();
}

startAnimation();

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
  heal,
  autoAttentionAlert,
  autoDisciplineTest,
  spoiledAdultAttention,
} from "./scripts/mainFeatures/mainFunctions";

/////////////////////////////////////RUNNING THE GAME
function updateFunctions() {
  autoAge();

  if (state.tamaStage === tamaState[0]) {
    return;
  }

  getSick(state);
  givePoop(state);
  ifSick(state);
  autoHealthDegen(state);
  autoHappyDegen(state);
  autoDisciplineTest(state);
  playGame(state);
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

import { ReturnAllEvents } from "./scripts/mainFeatures/events/ReturnAllEvents";

ReturnAllEvents(state);
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
