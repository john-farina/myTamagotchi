import { randomNumGen, timeMathToSec } from "../misc/usefulFunctions";
import { child1, child1Low } from "../tamaImports";

function hideImage(character) {
  character.style.visibility = "hidden";
}

function showImage(character) {
  character.style.visibility = "visible";
}

function moveLeftToRightRandom(character, state) {
  const removeAllDirections = () => {
    character.classList.remove("left");
    character.classList.remove("right");
    character.classList.remove("rightSmall");
    character.classList.remove("leftSmall");
  };

  if (
    state.foodAnimationGoing ||
    state.tamaPoop >= 2 ||
    timeMathToSec(state.timeState.gameStart) % 2 !== 0
  ) {
    return;
  }

  let randomChoice = randomNumGen(3);

  if (randomChoice === 1) {
    let randomChoice2 = randomNumGen(5);

    if (randomChoice2 === randomNumGen(5)) {
      removeAllDirections();

      character.classList.add("leftSmall");

      return;
    }

    let randomChoice3 = randomNumGen(5);

    if (randomChoice3 === randomNumGen(5)) {
      removeAllDirections();

      character.classList.add("left");
    }

    return;
  }

  if (randomChoice === 2) {
    let randomChoice4 = randomNumGen(5);

    if (randomChoice4 === randomNumGen(5)) {
      removeAllDirections();

      character.classList.add("rightSmall");

      return;
    }

    let randomChoice5 = randomNumGen(5);

    if (randomChoice5 === randomNumGen(5)) {
      removeAllDirections();

      character.classList.add("right");
    }

    return;
  }

  removeAllDirections();
}

function autoRandomFlip(character, state) {
  let randomChoice = randomNumGen(3);

  if (state.foodAnimationGoing) {
    return;
  }

  if (randomChoice === 1 || randomChoice === 2) {
    character.classList.add("flip");

    return;
  }

  character.classList.remove("flip");
}

function childOneMovement(state) {
  let randomChoice = randomNumGen(4);

  if (timeMathToSec(state.timeState.gameStart) % 2 !== 0) {
    return;
  }

  if (randomChoice === randomNumGen(4)) {
    hideImage(child1);
    showImage(child1Low);

    moveLeftToRightRandom(child1Low, state);

    return;
  }

  hideImage(child1Low);
  showImage(child1);
  moveLeftToRightRandom(child1, state);
}

export {
  hideImage,
  showImage,
  moveLeftToRightRandom,
  autoRandomFlip,
  childOneMovement,
};
