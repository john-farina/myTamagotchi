import {
  timeMathToSec,
  randomNumGen,
  displayFlex,
  displayHide,
} from "../../misc/usefulFunctions";
import { hideImage } from "../../animations/MovmentAnimation";
import { gameScreen } from "../../tamaImports";
import {
  playerChoiceDiv,
  choiceText,
  gameChildOne,
  gameChildTwo,
  gameTeenOne,
  gameTeenTwo,
  gameAdultOne,
  gameAdultTwo,
  gameAdultThree,
  gameAdultFour,
  gameMadAlertOne,
  gameMadAlertTwo,
  gameHappyAlert,
  tamaChoiceOne,
  playerChoiceOne,
  tamaChoiceTwo,
  playerChoiceTwo,
  gameTimer,
} from "../../tamaImports";
import { autoRandomFlip } from "../../animations/MovmentAnimation";
import { tamaState } from "../../state";

function chooseOneAnimation(state) {
  let gameState = state.gameState;

  if (gameState.gameTimeStore <= 29) {
    if (!gameState.playerSelectedChoice) {
      if (timeMathToSec(state.gameStarted) % 3 === 0) {
        playerChoiceDiv.style.gap = "12px";
        choiceText.innerHTML = "choose";
      } else {
        playerChoiceDiv.style.gap = "24px";
        choiceText.innerHTML = "one";
      }

      return;
    }

    playerChoiceDiv.style.gap = "37.5px";
    choiceText.innerHTML = "";
  }

  if (!gameState.playerSelectedChoice) {
    playerChoiceDiv.style.gap = "6px";
    choiceText.innerHTML = "times up";
  }
}

function computerGuess() {
  let randomNum = randomNumGen(21);

  if (randomNum <= 10) {
    return 1;
  } else {
    return 2;
  }
}

function showGameCharacter(state) {
  if (state.tamaStage === tamaState[1]) {
    displayFlex(gameChildOne);

    autoRandomFlip(gameChildOne, state);
  } else if (state.tamaStage === tamaState[2]) {
    displayHide(gameChildOne);
    displayFlex(gameChildTwo);

    autoRandomFlip(gameChildTwo, state);
  } else if (state.tamaStage === tamaState[3]) {
    displayHide(gameChildOne);
    displayHide(gameChildTwo);
    displayFlex(gameTeenOne);

    autoRandomFlip(gameTeenOne, state);
  } else if (state.tamaStage === tamaState[4]) {
    displayHide(gameChildOne);
    displayHide(gameChildTwo);
    displayHide(gameTeenOne);
    displayFlex(gameTeenTwo);
  } else if (state.tamaStage === tamaState[5]) {
  } else if (state.tamaStage === tamaState[6]) {
  } else if (state.tamaStage === tamaState[7]) {
    displayHide(gameChildOne);
    displayHide(gameChildTwo);
    displayHide(gameTeenOne);
    displayHide(gameTeenTwo);
    displayFlex(gameAdultOne);

    autoRandomFlip(gameAdultOne, state);
  } else if (state.tamaStage === tamaState[8]) {
    displayHide(gameChildOne);
    displayHide(gameChildTwo);
    displayHide(gameTeenOne);
    displayHide(gameTeenTwo);
    displayFlex(gameAdultTwo);

    autoRandomFlip(gameAdultTwo, state);
  } else if (state.tamaStage === tamaState[9]) {
    displayHide(gameChildOne);
    displayHide(gameChildTwo);
    displayHide(gameTeenOne);
    displayHide(gameTeenTwo);
    displayFlex(gameAdultThree);

    autoRandomFlip(gameAdultThree, state);
  } else if (state.tamaStage === tamaState[10]) {
    displayHide(gameChildOne);
    displayHide(gameChildTwo);
    displayHide(gameTeenOne);
    displayHide(gameTeenTwo);
    displayFlex(gameAdultFour);

    autoRandomFlip(gameAdultFour, state);
  }
}

function characterMadEmoteAnimations(state) {
  let gameState = state.gameState;

  if (gameState.gameMad && gameState.gameAnimateCount < 5) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      displayHide(gameMadAlertTwo);

      displayFlex(gameMadAlertOne);
      gameState.gameAnimateCount++;
    } else {
      displayHide(gameMadAlertOne);

      displayFlex(gameMadAlertTwo);
      gameState.gameAnimateCount++;
    }

    return;
  }

  gameState.gameMad = false;
  gameState.gameHappy = false;
  gameState.gameAnimateCount = 0;

  displayHide(gameMadAlertTwo);
  displayHide(gameMadAlertOne);
}

function characterHappyEmoteAnimations(state) {
  let gameState = state.gameState;

  if (gameState.gameHappy && gameState.gameAnimateCount < 5) {
    console.log("im happy");
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      displayFlex(gameHappyAlert);
      gameState.gameAnimateCount++;
    } else {
      displayHide(gameHappyAlert);
      gameState.gameAnimateCount++;
    }
  } else {
    gameState.gameHappy = false;
    gameState.gameMad = false;
    gameState.gameAnimateCount = 0;
    displayHide(gameHappyAlert);
  }
}

function updateScoreView(state) {
  let gameState = state.gameState;

  if (gameState.playerSelection === 1) {
    if (gameState.computerSelection === 1) {
      tamaChoiceOne.style.backgroundColor = "green";

      playerChoiceOne.style.backgroundColor = "green";

      gameState.gameHappy = true;

      return;
    }

    if (gameState.computerSelection === 2) {
      tamaChoiceTwo.style.backgroundColor = "maroon";

      playerChoiceOne.style.backgroundColor = "maroon";

      gameState.gameMad = true;

      return;
    }
  }

  if (gameState.playerSelection === 2) {
    if (gameState.computerSelection === 1) {
      tamaChoiceOne.style.backgroundColor = "maroon";
      playerChoiceTwo.style.backgroundColor = "maroon";
      gameState.gameMad = true;

      return;
    }

    if (gameState.computerSelection === 2) {
      tamaChoiceTwo.style.backgroundColor = "green";
      playerChoiceTwo.style.backgroundColor = "green";
      gameState.gameHappy = true;

      return;
    }
  }

  tamaChoiceOne.style.backgroundColor = "transparent";
  tamaChoiceTwo.style.backgroundColor = "transparent";
  playerChoiceOne.style.backgroundColor = "transparent";
  playerChoiceTwo.style.backgroundColor = "transparent";
}

function updateScore(state) {
  let gameState = state.gameState;

  if (gameState.playerSelection === gameState.computerSelection) {
    gameState.playerScore += 1;

    return;
  }

  gameState.computerScore += 1;
}

function scoreAutoQuit(state) {
  let gameState = state.gameState;

  if (gameState.playerScore > 2) {
    gameState.gameEnded = true;

    state.tamaHappy++;

    state.tamaIsHappy = true;

    return;
  }

  if (gameState.computerScore > 2) {
    gameState.gameEnded = true;

    state.tamaIsMad = true;

    return;
  }
}

function quitGame(state) {
  if (state.gameState.gameEnded) {
    state.gameState.gameHappy = false;
    state.gameState.gameMad = false;
    state.gameState.gameAnimateCount = 0;
    state.gameState.gameIsRunning = false;
    state.gameState.gameRound = 0;
    state.gameState.gameTimeCount = 0;
    state.gameState.gameTimeStore = 0;
    state.gameState.playerSelectedChoice = false;
    state.gameState.playerSelection = 0;
    state.gameState.computerSelection = 0;
    state.gameState.playerScore = 0;
    state.gameState.computerScore = 0;
    hideImage(gameScreen);
  }
}

function playGame(state) {
  if (!state.gameState.gameIsRunning) {
    return;
  }

  if (state.gameState.gameTimeStore === 8) {
    state.gameState.playerSelectedChoice = false;

    state.gameState.playerSelection = 0;

    state.gameState.gameTimeStore = 0;

    console.log("Round ended", state.gameState.gameTimeStore);
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
  }

  if (state.gameState.gameTimeCount > 24) {
    state.gameState.gameRound += 1;
    state.gameState.playerSelectedChoice = false;
    state.gameState.playerSelection = 0;
    state.gameState.gameTimeCount = 0;
    state.gameState.gameTimeStore = 0;
  }
}

function updateAndPlayGameAnimations(state) {
  if (state.gameState.gameIsRunning) {
    updateGameTimerAndRestart(state);
    chooseOneAnimation(state);
    updateScoreView(state);
    showGameCharacter(state);
    characterMadEmoteAnimations(state);
    characterHappyEmoteAnimations(state);
    scoreAutoQuit(state);
    quitGame(state);
  }
}

export {
  chooseOneAnimation,
  computerGuess,
  showGameCharacter,
  characterMadEmoteAnimations,
  characterHappyEmoteAnimations,
  updateScoreView,
  updateScore,
  updateGameTimerAndRestart,
  scoreAutoQuit,
  quitGame,
  playGame,
  updateAndPlayGameAnimations,
};
