import { state, tamaState } from "./scripts/state";
let myInterval;

import { timeMathToSec } from "./scripts/misc/usefulFunctions";

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

import {
  autoAttentionAlert,
  autoDisciplineTest,
  spoiledAdultAttention,
} from "./scripts/mainFeatures/mainFunctions";

import { ReturnMainEvents } from "./scripts/mainFeatures/events/ReturnMainEvents";

import { ReturnMenuEvents } from "./scripts/deviceMenu/helpScreen/ReturnMenuEvents";

/////////////////////////////////////RUNNING ANIMATIONS
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

/////////////////////////////////////EVENT LISTENERS
ReturnMainEvents(state);

ReturnMenuEvents(state);
