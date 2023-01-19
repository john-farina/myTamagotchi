import { hideImage } from "../animations/MovmentAnimation";
import {
  foodScreen,
  lightsScreen,
  healthScreen,
  healthScreen2,
} from "../tamaImports";
import { quitGame } from "../mainFeatures/game/Game";

function hideAllExtraScreens(state) {
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

function randomNumGen(percent) {
  let randomNum = Math.floor(Math.random() * percent);

  return randomNum;
}

function timeMathToSec(timeStateStamp) {
  let timeMath = Math.floor((new Date() - timeStateStamp) / 1000);

  return timeMath;
}

function greaterAndLessThen(num1, num2, name) {
  let outcome = name >= num1 && name <= num2;

  return outcome;
}

function displayFlex(value) {
  value.style.display = "flex";
  return value;
}

function displayHide(value) {
  value.style.display = "none";
  return value;
}

export {
  randomNumGen,
  timeMathToSec,
  greaterAndLessThen,
  displayFlex,
  displayHide,
  hideAllExtraScreens,
};
