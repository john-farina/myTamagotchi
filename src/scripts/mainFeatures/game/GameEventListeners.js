import { hideAllExtraScreens } from "../../misc/usefulFunctions";
import { removeAllChildAndTeen } from "../../animations/MiscTamaAnimation";
import { showImage } from "../../animations/MovmentAnimation";
import { gameScreen } from "../../tamaImports";
import { computerGuess } from "./Game";
import { updateScore } from "./Game";

function GameButton(state) {
  if (state.tamaIsMad != true) {
    hideAllExtraScreens(state);
    if (state.screenState.foodIsActive === true) {
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
}

function PlayerChoiceOne(state) {
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
}

function PlayerChoiceTwo(state) {
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
}

export { GameButton, PlayerChoiceOne, PlayerChoiceTwo };
