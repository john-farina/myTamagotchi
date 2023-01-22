import { hideAllExtraScreens } from "../../misc/usefulFunctions";
import { removeAllChildAndTeen } from "../../animations/MiscTamaAnimation";
import { showImage } from "../../animations/MovmentAnimation";
import { gameScreen } from "../../tamaImports";
import { computerGuess } from "./Game";
import { updateScore } from "./Game";

function GameButton(state) {
  let gameState = state.gameState;

  if (state.tamaIsMad) {
    return;
  }

  if (!gameState.gameIsRunning) {
    hideAllExtraScreens(state);

    gameState.gameEnded = false;

    gameState.gameIsRunning = true;

    removeAllChildAndTeen();

    showImage(gameScreen);

    return;
  }

  hideAllExtraScreens(state);

  gameState.gameEnded = true;

  gameState.gameIsRunning = false;
}

function PlayerChoiceOne(state) {
  let gameState = state.gameState;

  if (gameState.playerSelectedChoice) {
    return;
  }

  gameState.playerSelectedChoice = true;
  gameState.playerSelection = 1;
  gameState.gameTimeStore = 6;
  gameState.computerSelection = computerGuess();

  updateScore(state);
}

function PlayerChoiceTwo(state) {
  let gameState = state.gameState;

  if (gameState.playerSelectedChoice) {
    return;
  }

  gameState.playerSelectedChoice = true;
  gameState.playerSelection = 2;
  gameState.gameTimeStore = 6;
  gameState.computerSelection = computerGuess();

  updateScore(state);
}

export { GameButton, PlayerChoiceOne, PlayerChoiceTwo };
