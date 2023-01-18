import {
  timeMathToSec,
  randomNumGen,
  displayFlex,
  displayHide,
} from "../misc/usefulFunctions";

import {
  playerChoiceDiv,
  choiceText,
  gameButton,
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
} from "../tamaImports";

import { autoRandomFlip } from "../animations/MovmentAnimation";

import { tamaState } from "../state";

function chooseOneAnimation(state, playerSelectedChoice, gameTimeStore) {
  if (playerSelectedChoice === false && gameTimeStore <= 29) {
    if (timeMathToSec(state.gameStarted) % 3 === 0) {
      playerChoiceDiv.style.gap = "12px";
      choiceText.innerHTML = "choose";
    } else {
      playerChoiceDiv.style.gap = "24px";
      choiceText.innerHTML = "one";
    }
  } else if (playerSelectedChoice === true && gameTimeStore <= 29) {
    playerChoiceDiv.style.gap = "37.5px";
    choiceText.innerHTML = "";
  } else if (playerSelectedChoice === false && gameTimeStore === 30) {
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
  } else if (state.tamaStage === tamaState[8]) {
    displayHide(gameChildOne);
    displayHide(gameChildTwo);
    displayHide(gameTeenOne);
    displayHide(gameTeenTwo);
    displayFlex(gameAdultTwo);
  } else if (state.tamaStage === tamaState[9]) {
    displayHide(gameChildOne);
    displayHide(gameChildTwo);
    displayHide(gameTeenOne);
    displayHide(gameTeenTwo);
    displayFlex(gameAdultThree);
  } else if (state.tamaStage === tamaState[10]) {
    displayHide(gameChildOne);
    displayHide(gameChildTwo);
    displayHide(gameTeenOne);
    displayHide(gameTeenTwo);
    displayFlex(gameAdultFour);
  }
}

function characterMadEmoteAnimations(
  gameMad,
  gameHappy,
  gameAnimateCount,
  state
) {
  if (gameMad != false && gameAnimateCount < 5) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      displayHide(gameMadAlertTwo);

      displayFlex(gameMadAlertOne);
      gameAnimateCount++;
    } else {
      displayHide(gameMadAlertOne);

      displayFlex(gameMadAlertTwo);
      gameAnimateCount++;
    }
  } else {
    gameMad = false;
    gameHappy = false;
    gameAnimateCount = 0;
    displayHide(gameMadAlertTwo);

    displayHide(gameMadAlertOne);
  }
}

function characterHappyEmoteAnimations(
  gameHappy,
  gameMad,
  gameAnimateCount,
  state
) {
  if (gameHappy != false && gameAnimateCount < 5) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      displayFlex(gameHappyAlert);
      gameAnimateCount++;
    } else {
      displayHide(gameHappyAlert);
      gameAnimateCount++;
    }
  } else {
    gameHappy = false;
    gameMad = false;
    gameAnimateCount = 0;
    displayHide(gameHappyAlert);
  }
}

function updateScoreView(
  playerSelection,
  computerSelection,
  gameHappy,
  gameMad
) {
  if (playerSelection === 1 && computerSelection === 1) {
    tamaChoiceOne.style.backgroundColor = "green";

    playerChoiceOne.style.backgroundColor = "green";

    gameHappy = true;
  } else if (playerSelection === 2 && computerSelection === 2) {
    tamaChoiceTwo.style.backgroundColor = "green";
    playerChoiceTwo.style.backgroundColor = "green";
    gameHappy = true;
  } else if (playerSelection === 1 && computerSelection === 2) {
    tamaChoiceTwo.style.backgroundColor = "maroon";
    playerChoiceOne.style.backgroundColor = "maroon";
    gameMad = true;
  } else if (playerSelection === 2 && computerSelection === 1) {
    tamaChoiceOne.style.backgroundColor = "maroon";
    playerChoiceTwo.style.backgroundColor = "maroon";
    gameMad = true;
  } else if (playerSelection === 0) {
    tamaChoiceOne.style.backgroundColor = "transparent";
    tamaChoiceTwo.style.backgroundColor = "transparent";
    playerChoiceOne.style.backgroundColor = "transparent";
    playerChoiceTwo.style.backgroundColor = "transparent";
  }
}

function updateScore(
  playerSelection,
  playerScore,
  computerSelection,
  computerScore
) {
  if (playerSelection === computerSelection) {
    playerScore++;
  } else {
    computerScore++;
  }
}

function updateGameTimerAndRestart(
  gameTimeCount,
  gameTimeStore,
  playerSelectedChoice,
  playerSelection,
  state
) {
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

function scoreAutoQuit(gameEnded, playerScore, computerScore, state) {
  if (playerScore > 2) {
    gameEnded = true;
    state.tamaHappy++;
    state.tamaIsHappy = true;
  } else if (computerScore > 2) {
    gameEnded = true;
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
};
