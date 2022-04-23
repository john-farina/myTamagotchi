let tamaState = [
  "Egg", //0
  "Child_1", //1
  "Child_2", //2
  "Teen_1", //3 (for Child_1)
  "Teen_2", //4 (for Child_2)
  "Secret_Adult", //5 (for Teen_1 (small chance of getting))
  "Secret_Adult_2", //6 (for Teen_2 (small chance of getting)))
  "Adult_1", //7 (for Teen_1 && Teen_2) (healthy and good care)
  "Adult_2", //8 (for Teen_1 && Teen_2) (healthy)
  "Adult_3", //9 (for Teen_1 && Teen_2) (healthy)
  "Adult_4", //10 (for Teen_1 && Teen_2) (sick and unhealthy)
  "Secret_Adult_Evolve" //11 (ONLY for Secret_Adult_2)
];
const state = {
  gameStarted: false,
  tamaName: "Larry",
  tamaAge: 0,
  tamaHatch: 4,
  tamaStage: tamaState,
  tamaDead: false,
  tamaHealth: 1,
  tamaHappy: 3,
  needAttention: false,
  tamaDiscipline: 0,
  tamaSpoiled: 0,
  tamaNeglect: 0,
  tamaPoop: 0,
  tamaSick: false,
  timeState: {
    gameStart: new Date(),
    lastHatchCycle: new Date(),
    lastInteract: new Date(),
    lastEvolve: new Date(),
    lastPoop: new Date(),
    lastSick: new Date(),
    lastHealth: new Date(),
    lastHappy: new Date(),
    lastComplain: new Date(),
    lastAnimation: new Date()
  }
};
let count = 0;
let minCount = 0;
let hourCount = 0;
let myInterval;

const heart1 = document.querySelector("#heart1");
const heart2 = document.querySelector("#heart2");
const heart3 = document.querySelector("#heart3");
const heart4 = document.querySelector("#heart4");
const heart5 = document.querySelector("#heart5");

const happy1 = document.querySelector("#hunger1");
const happy2 = document.querySelector("#hunger2");
const happy3 = document.querySelector("#hunger3");
const happy4 = document.querySelector("#hunger4");
const happy5 = document.querySelector("#hunger5");

const sickAlert = document.querySelector("#sickAlert");

const eggClass = document.querySelector(".egg");
const eggState1 = document.querySelector("#eggState1");
const eggState2 = document.querySelector("#eggState2");
const eggState3 = document.querySelector("#eggState3");

const childClass = document.querySelector(".child");
const child1 = document.querySelector("#child1");
const child1Low = document.querySelector("#child1-low");
const child1Sick = document.querySelector("#child1-sick");
const child2 = document.querySelector("#child2");

const teenClass = document.querySelector(".teen");
const teen1 = document.querySelector("#teen1");
const teen2 = document.querySelector("#teen2");

const adultClass = document.querySelector(".adult");
const adult1 = document.querySelector("#adult1");
const adult2 = document.querySelector("#adult2");
const adult3 = document.querySelector("#adult3");
const adult4 = document.querySelector("#adult4");
const adult5 = document.querySelector("#adult5");
const adult6 = document.querySelector("#adult6");

const poop1 = document.querySelector("#poop1");
const poop2 = document.querySelector("#poop2");
const poop3 = document.querySelector("#poop3");
const poop4 = document.querySelector("#poop4");

const mealButton = document.querySelector("#mealButton");
const snackButton = document.querySelector("#snackButton");
const meal1 = document.querySelector("#meal1");
const meal2 = document.querySelector("#meal2");
const snack1 = document.querySelector("#snack1");
const snack2 = document.querySelector("#snack2");

const gravestone = document.querySelector("#gravestone");

const hungerMeter = document.querySelector("#hungerMeter");

/////////////////////////////////////USEFUL FUNCTIONS
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

if (greaterAndLessThen(10, 20, randomNumGen(30)) === true) {
  console.log("its true!");
}

/////////////////////////////////////MOVEMENTS/ANIMATION
function moveLeftToRightRandom(character) {
  if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
    let randomChoice = randomNumGen(3);
    if (randomChoice === 1) {
      let randomChoice2 = randomNumGen(5);
      if (randomChoice2 === 3) {
        character.classList.remove("left");
        character.classList.remove("right");
        character.classList.remove("rightSmall");
        character.classList.add("leftSmall");
      } else {
        let randomChoice3 = randomNumGen(5);
        if (randomChoice3 === 3) {
          character.classList.remove("right");
          character.classList.remove("rightSmall");
          character.classList.remove("leftSmall");
          character.classList.add("left");
        }
      }
    } else if (randomChoice === 2) {
      let randomChoice4 = randomNumGen(5);
      if (randomChoice4 === 3) {
        character.classList.remove("left");
        character.classList.remove("leftSmall");
        character.classList.remove("right");
        character.classList.add("rightSmall");
      } else {
        let randomChoice5 = randomNumGen(5);
        if (randomChoice5 === 3) {
          character.classList.remove("left");
          character.classList.remove("leftSmall");
          character.classList.remove("rightSmall");
          character.classList.add("right");
        }
      }
    } else {
      character.classList.remove("left");
      character.classList.remove("leftSmall");
      character.classList.remove("rightSmall");
      character.classList.remove("right");
    }
  }
}

function autoRandomFlip(character) {
  if (timeMathToSec(state.timeState.gameStart) % 1 === 0) {
    let randomChoice = randomNumGen(3);
    if (randomChoice === 1 || randomChoice === 2) {
      character.classList.add("flip");
    } else {
      character.classList.remove("flip");
    }
  }
}

function autoLips(character) {}

function randomMovement(character) {}

function autoAlert() {
  if (state.tamaSick === true) {
    sickAlert.style.visibility = "visible";
  } else {
    sickAlert.style.visibility = "hidden";
  }
}

function placePoop() {
  if (state.tamaPoop === 1) {
    poop1.style.visibility = "visible";
  }
  if (state.tamaPoop === 2) {
    poop2.style.visibility = "visible";
  }
  if (state.tamaPoop === 3) {
    poop3.style.visibility = "visible";
  }
  if (state.tamaPoop === 4) {
    poop4.style.visibility = "visible";
  }
  if (state.tamaPoop === 0) {
    poop1.style.visibility = "hidden";
    poop2.style.visibility = "hidden";
    poop3.style.visibility = "hidden";
    poop4.style.visibility = "hidden";
  }
}

function updateFood() {
  if (timeMathToSec(state.timeState.lastAnimation) > 1) {
    meal1.style.visibility = "hidden";
    meal2.style.visibility = "hidden";
    snack1.style.visibility = "hidden";
    snack2.style.visibility = "hidden";
  }
}

function changePicture() {
  updateFood();
  placePoop();
  autoAlert();
  if (state.tamaStage === tamaState[0]) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      eggState2.style.visibility = "hidden";
      eggState1.style.visibility = "visible";
    } else {
      eggState1.style.visibility = "hidden";
      eggState2.style.visibility = "visible";
    }
  }

  if (state.tamaStage === tamaState[1] && state.tamaSick === true) {
    eggClass.style.visibility = "hidden";
    child1Sick.style.visibility = "hidden";
    child1Low.style.visibility = "visible";
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      let randomChoice = randomNumGen(5);
      if (randomChoice === 3) {
        child1Low.style.visibility = "hidden";
        child1Sick.style.visibility = "visible";
      } else {
        child1Sick.style.visibility = "hidden";
        child1Low.style.visibility = "visible";
      }
    }
  } else if (state.tamaStage === tamaState[1]) {
    eggClass.style.visibility = "hidden";
    child1.style.visibility = "visible";
    child1Low.style.visibility = "hidden";
    moveLeftToRightRandom(child1);
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      let randomChoice = randomNumGen(4);
      if (randomChoice === 3) {
        child1.style.visibility = "hidden";
        child1Low.style.visibility = "visible";
        moveLeftToRightRandom(child1Low);
      } else {
        child1Low.style.visibility = "hidden";
        child1.style.visibility = "visible";
        moveLeftToRightRandom(child1);
      }
    }
  }

  if (state.tamaStage === tamaState[2]) {
    child1.style.visibility = "hidden";
    child1Low.style.visibility = "hidden";
    child1Sick.style.visibility = "hidden";
    child2.style.visibility = "visible";
    moveLeftToRightRandom(child2);
  }

  if (state.tamaStage === tamaState[3]) {
    child2.style.visibility = "hidden";
    teen1.style.visibility = "visible";
    autoRandomFlip(teen1);
  }
  if (state.tamaStage === tamaState[4]) {
    child2.style.visibility = "hidden";
    teen2.style.visibility = "visible";
    autoRandomFlip(teen2);
  }

  // SPECIAL CHARACTERS
  if (state.tamaStage === tamaState[5]) {
    teenClass.style.visibility = "hidden";
    adult5.style.visibility = "visible";
    autoRandomFlip(adult5);
  }
  if (state.tamaStage === tamaState[6]) {
    teenClass.style.visibility = "hidden";
    adult6.style.visibility = "visible";
    autoRandomFlip(adult6);
  }

  if (state.tamaStage === tamaState[7]) {
    teenClass.style.visibility = "hidden";
    adult1.style.visibility = "visible";
    autoRandomFlip(adult1);
  }
  if (state.tamaStage === tamaState[8]) {
    teenClass.style.visibility = "hidden";
    adult2.style.visibility = "visible";
    autoRandomFlip(adult2);
  }
  if (state.tamaStage === tamaState[9]) {
    teenClass.style.visibility = "hidden";
    adult3.style.visibility = "visible";
    autoRandomFlip(adult3);
  }
  if (state.tamaStage === tamaState[10]) {
    teenClass.style.visibility = "hidden";
    adult4.style.visibility = "visible";
    autoRandomFlip(adult4);
  }
}

function updateHeartSvg() {
  if (state.tamaHealth === 0) {
    heart1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 0.5) {
    heart1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartHalf.svg";
    heart2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 1) {
    heart1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 1.5) {
    heart1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartHalf.svg";
    heart3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 2) {
    heart1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 2.5) {
    heart1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartHalf.svg";
    heart4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 3) {
    heart1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    heart5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 3.5) {
    heart1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartHalf.svg";
    heart5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 4) {
    heart1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHealth === 4.5) {
    heart1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartHalf.svg";
  } else if (state.tamaHealth === 5) {
    heart1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    heart5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
  }

  if (state.tamaHappy === 0) {
    happy1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 0.5) {
    happy1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartHalf.svg";
    happy2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 1) {
    happy1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 1.5) {
    happy1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartHalf.svg";
    happy3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 2) {
    happy1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 2.5) {
    happy1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartHalf.svg";
    happy4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 3) {
    happy1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
    happy5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 3.5) {
    happy1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartHalf.svg";
    happy5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 4) {
    happy1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartEmpty.svg";
  } else if (state.tamaHappy === 4.5) {
    happy1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartHalf.svg";
  } else if (state.tamaHappy === 5) {
    happy1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy2.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy3.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy4.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
    happy5.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
  }
}

function autoDeath() {
  if (
    //cant die as an egg or stage one child
    (state.tamaStage === tamaState[1] || state.tamaStage === tamaState[0]) &&
    state.tamaHealth === 0
  ) {
    state.tamaHealth = 1;
  } else if (state.tamaHealth == 0) {
    childClass.style.visibility = "hidden";
    teenClass.style.visibility = "hidden";
    adultClass.style.visibility = "hidden";
    gravestone.style.visibility = "visible";
    stop();
    state.tamaDead = true;
  }
}

function autoAge() {
  if (timeMathToSec(state.timeState.gameStart) % 86400 == 0) {
    //1 DAY
    state.tamaAge++;
    console.log(tamaState);
  }
  letThereBeLife();
  eggHatch();
  eggToBaby();
  babyToTeen();
  teenToAdult();
  autoDeath();
}

function givePoop() {
  let randomNum = randomNumGen(1000);
  if (state.tamaPoop == 4) {
    //cant poop anymore
  } else if (state.tamaSick == true) {
    if (timeMathToSec(state.timeState.lastPoop) % 10 == 0) {
      if (
        //25.5%: 255/1000 - every 10 sec if sick
        (randomNum <= 10 && randomNum >= 95) ||
        (randomNum <= 510 && randomNum >= 595) ||
        (randomNum <= 800 && randomNum >= 885)
      ) {
        state.tamaPoop++;
        state.timeState.lastPoop = new Date();
      }
    }
  } else {
    //normally
    if (timeMathToSec(state.timeState.lastPoop) % 30 == 0) {
      if (
        //10.5%: 105/1000
        (randomNum >= 10 && randomNum <= 45) ||
        (randomNum >= 400 && randomNum <= 435) ||
        (randomNum >= 900 && randomNum <= 935)
      ) {
        state.tamaPoop++;
        state.timeState.lastPoop = new Date();
        let randomNum2 = randomNumGen(4);
        if (randomNum2 == 2) {
          //25%: 1/4
          state.tamaHealth--;
        } else {
        }
      }
    }
  }

  if (state.tamaPoop === 0) {
  }
}

/////////////////////////////////////AUTO DEGENERATION FUNCTIONS
function autoHealthDegen() {
  let randomNum = randomNumGen(3000);
  if (timeMathToSec(state.timeState.gameStart) % 5 == 0) {
    //every 5 seconds check
    if (state.tamaHappy <= 2) {
      // if not happy
      if (
        //15% chance to loose health 200/3000
        (randomNum >= 10 && randomNum <= 70) ||
        (randomNum >= 900 && randomNum <= 970) ||
        (randomNum >= 2300 && randomNum <= 2370)
      ) {
        state.tamaHealth -= 1;
        state.timeState.lastHealth = new Date();
      }
    } else {
      //NORMAL HEALTH DEGEN
      if (
        //3% chance to loose health 90/3000
        (randomNum >= 10 && randomNum <= 30) ||
        (randomNum >= 900 && randomNum <= 930) ||
        (randomNum >= 2300 && randomNum <= 2330)
      ) {
        state.tamaHealth -= 1;
        state.timeState.lastHealth = new Date();
      }
    }
  }
}
function autoHappyDegen() {
  let randomNum = randomNumGen(3000);
  if (timeMathToSec(state.timeState.gameStart) % 5 == 0) {
    //every 5 seconds run
    if (state.tamaHealth <= 2) {
      //if health 2 MORE HAPPY DEGEN
      //15% percent
      if (
        (randomNum >= 100 && randomNum <= 160) ||
        (randomNum >= 1200 && randomNum <= 1280) ||
        (randomNum >= 2800 && randomNum <= 2880)
      ) {
        state.tamaHappy -= 1;
        state.timeState.lastHappy = new Date();
      }
    } else {
      //NORMAL HEAPPY DEGEN
      //3% percent 90/3000
      if (
        (randomNum >= 50 && randomNum <= 80) ||
        (randomNum >= 1600 && randomNum <= 1630) ||
        (randomNum >= 2200 && randomNum <= 2230)
      ) {
        state.tamaHappy -= 1;
        state.timeState.lastHappy = new Date();
      }
    }
  }
}

function getSick() {
  let randomNumber = randomNumGen(4000);

  if (state.tamaPoop == 4) {
    if (timeMathToSec(state.timeState.lastPoop) > 15) {
      //if 6 poop for 15 sec get sick
      state.tamaSick = true;
      state.timeState.lastSick = new Date();
    }
  }

  if (
    timeMathToSec(state.timeState.lastSick) > 60 ||
    state.timeState.lastSick == state.timeState.gameStart
  ) {
    //cant get sick 2 min after getting sick
    if (randomNumber == 8 || randomNumber == 573 || randomNumber == 1362) {
      state.tamaSick = true;
      state.timeState.lastSick = new Date();
    }
  } else {
    //no poop
  }
}

function ifSick() {
  if (state.tamaSick == true) {
    if (timeMathToSec(state.timeState.lastSick) % 15 == 0) {
      state.tamaHealth -= 0.5;
    }
  }
}

/////////////////////////////////////GAME FUNCTIONS
function feed(type) {
  //1 == meal && 2 == snack
  if (state.needAttention === true && type === 2) {
    state.tamaHealth = 5;
    state.needAttention = false;
    state.tamaSpoiled++;
  }

  if (type == 1 && state.tamaHealth < 5) {
    state.tamaHealth++;
  } else if (type == 2 && state.tamaHealth < 5) {
    state.tamaHealth = state.tamaHealth + 0.5;
    if (state.tamaHappy < 5) {
      state.tamaHappy = state.tamaHappy + 0.5;
    }
  } else if (type == 2) {
    state.tamaHealth = state.tamaHealth + 0;
    if (state.tamaHappy < 5) {
      state.tamaHappy = state.tamaHappy + 0.5;
    }
  }
  if (state.tamaHealth >= 5) {
    state.tamaHealth += 0;
  }
  if (type == 2 && state.tamaHealth >= 5) {
    state.tamaHealth = 5;
  } else if (type == 1 && state.tamaHealth >= 5) {
    state.tamaHealth = 5;
    console.log("tamagotchi is full");
  }
}

function heal() {
  state.tamaSick = false;
  state.tamaHappy -= 1;
}

function clean() {
  if (state.tamaPoop == 0) {
  } else {
    state.tamaPoop = 0;
    state.tamaHappy++;
  }
}

function playGame() {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    let compChoice = randomNumGen(2);
    let playerChoice = prompt("Best out of 3: 0 or 1");
    if (playerChoice == 8) {
      state.tamaHappy++;
      break;
    }
    if (playerChoice == compChoice) {
      alert("nice you got it!");
      score++;
    } else {
      alert("woops they chose" + compChoice);
    }
    if (score > 2) {
      break;
    }
  }
  if (score > 2) {
    alert("you won!!! +1 happy");
    state.tamaHappy = state.tamaHappy + 1;
  } else {
    alert("you lost! try again no happy gained");
  }
  if (state.tamaHappy == 5 || state.tamaHappy > 5) {
    state.tamaHappy = 5;
  }
}

function autoAttentionAlert() {
  if (state.tamaDead == true) {
    hungerMeter.textContent = "im ded";
  } else if (state.tamaStage === tamaState[0]) {
    hungerMeter.textContent = "egg";
  } else if (state.tamaNeglect >= 8) {
    //doesnt tell you when its actually hungry
  } else {
    if (state.tamaHappy <= 2 && state.tamaHealth <= 2) {
      hungerMeter.textContent = "im not happy and hungry";
    } else if (state.tamaHappy <= 2) {
      hungerMeter.textContent = "im not happy";
    } else if (state.tamaHealth <= 2) {
      hungerMeter.textContent = "im hungry";
    } else if (state.tamaHappy >= 2) {
      hungerMeter.textContent = "";
    } else if (state.tamaHealth >= 2) {
      hungerMeter.textContent = "";
    }
  }
}

function autoDisciplineTest() {
  //make a noise when full (if dont disicpline increses spoil meter by one
  if (state.tamaHappy === 5 && state.tamaHealth === 5) {
    //only happen if full happy and health
    if (
      state.tamaStage == tamaState[1] ||
      state.tamaStage == tamaState[2] ||
      state.tamaStage == tamaState[3] ||
      state.tamaStage == tamaState[4]
    ) {
      //only happen when in teen state
      if (state.tamaDiscipline == 10) {
        //if disciplined dont happen
      } else if (state.tamaDiscipline < 10) {
        if (timeMathToSec(state.timeState.lastComplain) > 60) {
          //only chance to happen 30 min after last happened
          let randomNum = randomNumGen(100);
          if (randomNum >= 40 && randomNum <= 50) {
            //make an attention call
            state.needAttention = true;
            state.timeState.lastComplain = new Date();
          }
        }
        //alert stays for 2 minutes
        if (
          state.needAttention == true &&
          timeMathToSec(state.timeState.lastComplain) < 30
        ) {
          hungerMeter.textContent = " i want attention";
        } else {
          hungerMeter.textContent = "";
          state.needAttention = false;
          if (randomNumGen(5) === 2) {
            state.tamaNeglect++;
          }
        }
      }
    }
  }
}

function spoiledAdultAttention() {
  if (
    state.tamaSpoiled >= 7 &&
    (state.tamaStage == tamaState[4] ||
      state.tamaStage == tamaState[5] ||
      state.tamaStage == tamaState[6] ||
      state.tamaStage == tamaState[7] ||
      state.tamaStage == tamaState[8] ||
      state.tamaStage == tamaState[9] ||
      state.tamaStage == tamaState[10] ||
      state.tamaStage == tamaState[11])
  ) {
    if (timeMathToSec(state.timeState.lastComplain) > 60) {
      //only chance to happen 30 min after last happened
      let randomNum = randomNumGen(200);
      if (randomNum >= 40 && randomNum <= 50) {
        //make an attention call
        state.needAttention = true;
        state.timeState.lastComplain = new Date();
      }
    }
    //alert stays for 30 seconds
    if (
      state.needAttention == true &&
      timeMathToSec(state.timeState.lastComplain) < 30
    ) {
      attentionText.textContent = " i want attention";
    } else {
      attentionText.textContent = "";
      state.needAttention = false;
    }
  }
}

function letThereBeLife() {
  if (timeMathToSec(state.timeState.gameStart) < 10) {
    state.tamaStage = tamaState[1];
  }
}

function eggHatch() {
  // if (not hatched) {
  //   give random chance every 30 sec to
  //   add a increase in hatching stage
  //   if doesnt increase in 10 min add a increase (every 10 min)
  //   if hatching stage to 3 go to eggToBaby
  // }
  if (
    state.tamaStage == tamaState[0] && //if egg and 20 seconds has passed
    state.tamaHatch < 3 &&
    timeMathToSec(state.timeState.gameStart) > 2
  ) {
    if (timeMathToSec(state.timeState.gameStart) % 2 == 0) {
      //every 2 seconds have a chance to hatch
      let randomNum = randomNumGen(500);
      if (
        (randomNum >= 0 && randomNum <= 400) ||
        (randomNum >= 300 && randomNum <= 310)
      ) {
        if (state.tamaHatch == 3) {
        } else {
          state.tamaHatch++;
        }
      }
    }
  }
  if (state.tamaHatch == 3) {
    state.timeState.lastHatchCycle = new Date();
    state.tamaHatch = 4;
  }
}

function eggToBaby() {
  //first KID evolve
  if (
    state.tamaStage == tamaState[0] && //if stil egg
    state.tamaHatch == 4 && //and egg is at hatch level 3
    timeMathToSec(state.timeState.lastHatchCycle) > 10 &&
    timeMathToSec(state.timeState.lastHatchCycle) < 120 //2 min
  ) {
    if (timeMathToSec(state.timeState.gameStart) % 2 == 0) {
      let randomNum = randomNumGen(100);
      if (randomNum >= 75 && randomNum <= 80) {
        //5% chance every 4 sec to hatch early
        state.tamaStage = tamaState[1];
        state.tamaName = state.tamaStage;
        state.timeState.lastEvolve = new Date();
      }
    }
  } else if (
    state.tamaStage == tamaState[0] &&
    timeMathToSec(state.timeState.lastHatchCycle) > 120 //2 min
  ) {
    //100% chance to hatch
    state.tamaStage = tamaState[1];
    state.timeState.lastEvolve = new Date();
  }

  //second KID evolve
  if (
    state.tamaStage == tamaState[1] &&
    timeMathToSec(state.timeState.lastEvolve) > 10 &&
    timeMathToSec(state.timeState.lastEvolve) < 120
  ) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      let randomNum = randomNumGen(500);
      if (randomNum >= 35 && randomNum <= 45) {
        state.tamaStage = tamaState[2];
        state.timeState.lastEvolve = new Date();
      }
    }
  } else if (
    state.tamaStage === tamaState[1] &&
    timeMathToSec(state.timeState.lastEvolve) > 120
  ) {
    state.tamaStage = tamaState[2];
    state.timeState.lastEvolve = new Date();
  }
}

function babyToTeen() {
  //BABY TO TEEN
  if (
    state.tamaStage == tamaState[2] &&
    timeMathToSec(state.timeState.lastEvolve) >= 60 //10 min
  ) {
    //1% percent chance to grow early every 60 seconds
    if (timeMathToSec(state.gameStarted) % 30 == 0) {
      let randomNum = randomNumGen(2);
      if (randomNum === 0) {
        state.tamaStage = tamaState[3];
      } else {
        state.tamaStage = tamaState[4];
      }
    }
  } else if (
    state.tamaStage == tamaState[2] &&
    timeMathToSec(state.timeState.lastEvolve > 43200) //.5 day
  ) {
    //10% every 60 seconds
    if (timeMathToSec(state.gameStarted) % 60 == 0) {
      let randomNum = randomNumGen(2);
      if (randomNum === 0) {
        state.tamaStage = tamaState[3];
      } else {
        state.tamaStage = tamaState[4];
      }
    }
  } else if (
    state.tamaStage == tamaState[2] &&
    timeMathToSec(state.timeState.lastEvolve > 86400) //1 day
  ) {
    //grow up no matter what
    let randomNum = randomNumGen(2);
    if (randomNum === 0) {
      state.tamaStage = tamaState[3];
    } else {
      state.tamaStage = tamaState[4];
    }
  }
}

function teenToAdult() {
  if (
    (state.tamaStage == tamaState[3] || state.tamaStage == tamaState[4]) &&
    timeMathToSec(state.timeState.lastEvolve) > 20 //60 min
  ) {
    if (timeMathToSec(state.timeState.gameStart) % 2 == 0) {
      //1 % chance every 30 seconds to grow up early
      let randomNum = randomNumGen(100);
      if (randomNum > 46) {
        let teenChoice = randomNumGen(100);
        if (teenChoice >= 0 && teenChoice <= 23) {
          state.tamaStage = tamaState[7];
        } else if (teenChoice >= 24 && teenChoice <= 47) {
          state.tamaStage = tamaState[8];
        } else if (teenChoice >= 48 && teenChoice <= 71) {
          state.tamaStage = tamaState[9];
        } else if (teenChoice >= 72 && teenChoice <= 95) {
          //24%
          state.tamaStage = tamaState[10];
        } else if (teenChoice >= 96) {
          //4% - SECRET CHARACTER
          if (state.tamaStage == tamaState[3]) {
            state.tamaStage = tamaState[5]; //secret characters for that character
          } else if (state.tamaStage == tamaState[4]) {
            state.tamaStage = tamaState[6]; //secret characters for that character
          }
        }
      }
    }
  }
}

function secretAdultToSpecial() {
  //make it so
}

function autoDeath() {
  if (
    //cant die as an egg or stage one child
    (state.tamaStage === tamaState[1] || state.tamaStage === tamaState[0]) &&
    state.tamaHealth === 0
  ) {
    state.tamaHealth = 1;
  } else if (state.tamaHealth == 0) {
    childClass.style.visibility = "hidden";
    teenClass.style.visibility = "hidden";
    adultClass.style.visibility = "hidden";
    gravestone.style.visibility = "visible";
    stop();
    state.tamaDead = true;
  }
}

function autoAge() {
  if (timeMathToSec(state.timeState.gameStart) % 86400 == 0) {
    //1 DAY
    state.tamaAge++;
    console.log(tamaState);
  }
  letThereBeLife();
  eggHatch();
  eggToBaby();
  babyToTeen();
  teenToAdult();
  autoDeath();
}

/////////////////////////////////////RUNNING THE GAME
function updateFunctions() {
  if (state.tamaStage == tamaState[0]) {
  } else {
    getSick();
    givePoop();
    ifSick();
    autoHealthDegen();
    autoHappyDegen();
    autoDisciplineTest();
  }
  changePicture();
  autoAge();
  autoAttentionAlert();
  spoiledAdultAttention();
  updateHeartSvg();
}

function start() {
  myInterval = setInterval(gameLoop, 1000);
  state.gameStarted = true;
  state.tamaDead = false;
  state.timeState.gameStart = new Date();
}

function stop() {
  clearInterval(myInterval);
  state.gameStarted = false;
}

function ifStarted() {
  if (state.gameStarted == true) {
    start();
  }
}

function gameLoop() {
  updateFunctions();
}
start();

function randomMeal(type) {
  if (state.tamaHealth < 5) {
    if (type === 1) {
      let randmNum = randomNumGen(2);
      if (randmNum === 1) {
        meal2.style.visibility = "hidden";
        meal1.style.visibility = "visible";
        state.timeState.lastAnimation = new Date();
      } else {
        meal1.style.visibility = "hidden";
        meal2.style.visibility = "visible";
        state.timeState.lastAnimation = new Date();
      }
    } else if (type === 2) {
      let randmNum = randomNumGen(2);
      if (randmNum === 1) {
        snack2.style.visibility = "hidden";
        snack1.style.visibility = "visible";
        state.timeState.lastAnimation = new Date();
      } else {
        snack1.style.visibility = "hidden";
        snack2.style.visibility = "visible";
        state.timeState.lastAnimation = new Date();
      }
    }
  }
}

mealButton.addEventListener("click", function () {
  feed(1);
  randomMeal(1);
});

snackButton.addEventListener("click", function () {
  feed(2);
  randomMeal(2);
});
