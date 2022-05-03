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
  "Secret_Adult_Evolve", //11 (ONLY for Secret_Adult_2)
  "12",
  "Dead"
];
const state = {
  gameStarted: false,
  tamaTheme: 0,
  tamaName: "Larry",
  tamaAge: 8,
  tamaHatch: 4,
  tamaStage: tamaState,
  tamaDead: false,
  tamaHealth: 2,
  tamaHappy: 4,
  tamaIsHappy: false,
  tamaIsMad: false,
  needAttention: false,
  tamaDiscipline: 0,
  tamaSpoiled: 0,
  tamaNeglect: 0,
  tamaPoop: 0,
  tamaSick: false,
  animationCount: 0,
  lightIsOff: false,
  foodAnimationGoing: false,
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
let myInterval2;
let foodIsActive = false;
let lightsIsActive = false;
let gameIsRunning = false;
let gameRound = 0;
let gameTimeCount = 0;
let gameTimeStore = 0;
let lastGuessTime;
let playerSelectedChoice = false;
let playerSelection = 0;
let computerSelection = 0;
let playerScore = 0;
let computerScore = 0;
let gameHappy = false;
let gameMad = false;
let gameEnded = false;
let gameAnimateCount = 0;
let healthIsActive = false;
let animateCount = 0;
let menuIsOpen = false;
let themeMenuIsOpen = false;

const foodScreen = document.querySelector("#food-screen");
const healthButton = document.querySelector("#healthButton");

const lightsScreen = document.querySelector("#lights-screen");
const lightsOffScreen = document.querySelector("#lights-off-screen");
const lightButton = document.querySelector("#lightsButton");
const lightsOn = document.querySelector("#lightsOnButton");
const lightsOff = document.querySelector("#lightsOffButton");

const gameButton = document.querySelector("#gameButton");
const gameScreen = document.querySelector("#game-screen");
const gameTimer = document.querySelector("#game-timer");
const playerChoiceDiv = document.querySelector("#players-choice");
const choiceText = document.querySelector(".choice-text");
const gameMadAlertOne = document.querySelector("#game-mad-alert1");
const gameMadAlertTwo = document.querySelector("#game-mad-alert2");
const gameHappyAlert = document.querySelector("#game-happy-alert");
const playerChoiceOne = document.querySelector("#choice-one");
const playerChoiceTwo = document.querySelector("#choice-two");
const tamaChoiceOne = document.querySelector("#tama-choice-one");
const tamaChoiceTwo = document.querySelector("#tama-choice-two");

const gameChildOne = document.querySelector("#game-child-one");
const gameChildTwo = document.querySelector("#game-child-two");
const gameTeenOne = document.querySelector("#game-teen-one");
const gameTeenTwo = document.querySelector("#game-teen-two");
const gameAdultOne = document.querySelector("#game-adult-one");
const gameAdultTwo = document.querySelector("#game-adult-two");
const gameAdultThree = document.querySelector("#game-adult-three");
const gameAdultFour = document.querySelector("#game-adult-four");
const gameAdultFive = document.querySelector("#game-adult-five");
const gameAdultSix = document.querySelector("#game-adult-six");

const healButton = document.querySelector("#healButton");
const healthScreen = document.querySelector("#health-screen");

const cleanButton = document.querySelector("#clean-button");
const cleaningLine = document.querySelector("#cleaning-line");

const alertButton = document.querySelector("#alertButtonImage");

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
const madAlert1 = document.querySelector("#madAlert1");
const madAlert2 = document.querySelector("#madAlert2");
const happyAlert = document.querySelector("#happyAlert");

const eggClass = document.querySelector(".egg");
const eggState1 = document.querySelector("#eggState1");
const eggState2 = document.querySelector("#eggState2");
const eggState3 = document.querySelector("#eggState3");

const characterClass = document.querySelector(".character");
const childClass = document.querySelector(".child");

const child1 = document.querySelector("#child1");
const child1Low = document.querySelector("#child1-low");
const child1Sick = document.querySelector("#child1-sick");
const child1Side = document.querySelector("#child1-side");
const child1Eat = document.querySelector("#child1-eat");

const child2 = document.querySelector("#child2");
const child2Small = document.querySelector("#child2-small");
const child2Side = document.querySelector("#child2-side");
const child2Eat = document.querySelector("#child2-eat");

const teenClass = document.querySelector(".teen");

const teen1 = document.querySelector("#teen1");
const teen1Eat = document.querySelector("#teen1-eat");
const teen1Sick = document.querySelector("#teen1-sick");

const teen2 = document.querySelector("#teen2");
const teen2Eat = document.querySelector("#teen2-eat");
const teen2Lips = document.querySelector("#teen2-lips");
const teen2Sick = document.querySelector("#teen2-sick");

const adultClass = document.querySelector(".adult");

const adult1 = document.querySelector("#adult1");
const adult1Eat = document.querySelector("#adult1-eat");
const adult1Sick = document.querySelector("#adult1-sick");

const adult2 = document.querySelector("#adult2");
const adult2Eat = document.querySelector("#adult2-eat");
const adult2Sick = document.querySelector("#adult2-sick");
const adult2Lips = document.querySelector("#adult2-lips");

const adult3 = document.querySelector("#adult3");
const adult3Eat = document.querySelector("#adult3-eat");
const adult3Sick = document.querySelector("#adult3-sick");

const adult4 = document.querySelector("#adult4");
const adult4Eat = document.querySelector("#adult4-eat");
const adult4Sick = document.querySelector("#adult4-sick");
const adult4Lips = document.querySelector("#adult4-lips");

const adult5 = document.querySelector("#adult5");
const adult5Eat = document.querySelector("#adult5-eat");
const adult5Sick = document.querySelector("#adult5-sick");

const adult6 = document.querySelector("#adult6");

const poop1 = document.querySelector("#poop1");
const poop2 = document.querySelector("#poop2");
const poop3 = document.querySelector("#poop3");
const poop4 = document.querySelector("#poop4");

const mealButton = document.querySelector("#mealButton");
const snackButton = document.querySelector("#snackButton");
const meal1 = document.querySelector("#meal1");
const meal2 = document.querySelector("#meal2");
const meal2Half = document.querySelector("#meal2half");
const snack1 = document.querySelector("#snack1");
const snack1Half = document.querySelector("#snack1Half");
const snack2 = document.querySelector("#snack2");
const snack2Half = document.querySelector("#snack2Half");

const gravestone = document.querySelector("#gravestone-one");
const gravestoneTwo = document.querySelector("#gravestone-two");
const gravestoneText = document.querySelector("#gravestone-text");

const hungerMeter = document.querySelector("#hungerMeter");

const tamagotchiContainer = document.querySelector("#tamagotchi-container");
const deviceButtons = document.querySelector(".bottom-buttons");
const button1 = document.querySelector("#buttonOne");
const button2 = document.querySelector("#buttonTwo");
const button3 = document.querySelector("#buttonThree");

const menuButton = document.querySelector("#buttonFour");
const dropDownMenu = document.querySelector("#drop-down-menu");
const themeButton = document.querySelector("#theme-selection");
const themeMenu = document.querySelector("#drop-down-color-choice");
const color1Button = document.querySelector("#color1");
const color2Button = document.querySelector("#color2");
const color3Button = document.querySelector("#color3");

const optionsButton = document.querySelector("#options");
const optionsMenu = document.querySelector("#options-menu");
const option1 = document.querySelector("#option1");
const colorsMenu = document.querySelector("#color-choice-menu");
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
function hideImage(character) {
  character.style.visibility = "hidden";
}
function showImage(character) {
  character.style.visibility = "visible";
}

function moveLeftToRightRandom(character) {
  if (state.foodAnimationGoing != true) {
    if (state.tamaPoop <= 2) {
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
  }
}

function autoRandomFlip(character) {
  if (state.foodAnimationGoing != true) {
    if (timeMathToSec(state.timeState.gameStart) % 1 === 0) {
      let randomChoice = randomNumGen(3);
      if (randomChoice === 1 || randomChoice === 2) {
        character.classList.add("flip");
      } else {
        character.classList.remove("flip");
      }
    }
  }
}

function autoLips(character) {}

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
    poop1.style.visibility = "visible";
    poop2.style.visibility = "visible";
  }
  if (state.tamaPoop === 3) {
    poop1.style.visibility = "visible";
    poop2.style.visibility = "visible";
    poop3.style.visibility = "visible";
  }
  if (state.tamaPoop === 4) {
    poop1.style.visibility = "visible";
    poop2.style.visibility = "visible";
    poop3.style.visibility = "visible";
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

function foodAnimation(type) {
  if (type === 1) {
    //meal1
    //FOOD ANIMATION
  } else if (type === 2) {
    //meal2
    //FOOD ANIMATION
    if (state.animationCount > 0 && state.animationCount <= 2) {
      showImage(meal2);
    }
    if (state.animationCount == 3) {
      hideImage(meal2);
      showImage(meal2Half);
    }
    if (state.animationCount == 5) {
      hideImage(meal2Half);
    }
  } else if (type === 3) {
    //snack1
    //FOOD ANIMATION
    if (state.animationCount > 0 && state.animationCount <= 2) {
      showImage(snack2);
    }
    if (state.animationCount == 3) {
      hideImage(snack2);
      showImage(snack2Half);
    }
    if (state.animationCount == 5) {
      hideImage(snack2Half);
    }
  } else if (type === 4) {
    //snack2
    //FOOD ANIMATION
    if (state.animationCount > 0 && state.animationCount <= 2) {
      showImage(snack1);
    }
    if (state.animationCount == 3) {
      hideImage(snack1);
      showImage(snack1Half);
    }
    if (state.animationCount == 5) {
      hideImage(snack1Half);
    }
  }
}

function childOpenMouthAnimate() {
  if (state.tamaStage === tamaState[1]) {
    if (state.foodAnimationGoing === true) {
      if (
        timeMathToSec(state.timeState.gameStart) % 1 === 0 &&
        state.animationCount <= 6
      ) {
        state.animationCount++;
      }
      //CHARACTER ANIMATION
      if (state.animationCount == 1) {
        hideImage(child1);
        hideImage(child1Sick);
        hideImage(child1Low);
        showImage(child1Side);
      }
      if (state.animationCount == 2 || state.animationCount == 4) {
        hideImage(child1Side);
        showImage(child1Eat);
      }
      if (state.animationCount == 3 || state.animationCount == 5) {
        hideImage(child1Eat);
        showImage(child1Side);
      }
      if (state.animationCount == 6) {
        hideImage(child1Side);
        state.foodAnimationGoing = false;
        state.animationCount = 0;
      }
    }
  }
}
function childEatSnackAnimation() {
  childOpenMouthAnimate();
  foodAnimation(3);
}

function childTwoOpenMouthAnimate() {
  if (state.tamaStage === tamaState[2]) {
    if (state.foodAnimationGoing === true) {
      if (
        timeMathToSec(state.timeState.gameStart) % 1 === 0 &&
        state.animationCount <= 6
      ) {
        state.animationCount++;
      }
      //CHARACTER ANIMATION
      if (state.animationCount == 1) {
        hideImage(child2Small);
        hideImage(child2Eat);
        hideImage(child2);
        showImage(child2Side);
      }
      if (state.animationCount == 2 || state.animationCount == 4) {
        hideImage(child2);
        hideImage(child2Side);
        showImage(child2Eat);
      }
      if (state.animationCount == 3 || state.animationCount == 5) {
        hideImage(child2);
        hideImage(child2Eat);
        showImage(child2Side);
      }
      if (state.animationCount == 6) {
        hideImage(child2Side);
        state.foodAnimationGoing = false;
        state.animationCount = 0;
      }
    }
  }
}
function childTwoEatSnackAnimation() {
  childTwoOpenMouthAnimate();
  foodAnimation(3);
}

function teenOpenMouthAnimate() {
  if (state.tamaStage === tamaState[3]) {
    if (state.foodAnimationGoing === true) {
      if (
        timeMathToSec(state.timeState.gameStart) % 1 === 0 &&
        state.animationCount <= 6
      ) {
        state.animationCount++;
      }
      //CHARACTER ANIMATION
      if (state.animationCount == 1) {
        hideImage(teenClass);
        showImage(teen1);
      }
      if (state.animationCount == 2 || state.animationCount == 4) {
        hideImage(teen1);
        showImage(teen1Eat);
      }
      if (state.animationCount == 3 || state.animationCount == 5) {
        hideImage(teen1Eat);
        showImage(teen1);
      }
      if (state.animationCount == 6) {
        hideImage(teen1);
        state.foodAnimationGoing = false;
        state.animationCount = 0;
      }
    }
  }
}
function teenEatSnackAnimation() {
  teenOpenMouthAnimate();
  foodAnimation(3);
}

function teenTwoOpenMouthAnimate() {
  if (state.tamaStage === tamaState[4]) {
    if (state.foodAnimationGoing === true) {
      if (
        timeMathToSec(state.timeState.gameStart) % 1 === 0 &&
        state.animationCount <= 6
      ) {
        state.animationCount++;
      }
      //CHARACTER ANIMATION
      if (state.animationCount == 1) {
        hideImage(teenClass);
        showImage(teen2);
      }
      if (state.animationCount == 2 || state.animationCount == 4) {
        hideImage(teen2);
        showImage(teen2Eat);
      }
      if (state.animationCount == 3 || state.animationCount == 5) {
        hideImage(teen2Eat);
        showImage(teen2);
      }
      if (state.animationCount == 6) {
        hideImage(teen2);
        state.foodAnimationGoing = false;
        state.animationCount = 0;
      }
    }
  }
}
function teenTwoEatSnackAnimation() {
  teenTwoOpenMouthAnimate();
  foodAnimation(3);
}

function adultOneOpenMouthAnimate() {
  if (state.tamaStage === tamaState[7]) {
    if (state.foodAnimationGoing === true) {
      if (
        timeMathToSec(state.timeState.gameStart) % 1 === 0 &&
        state.animationCount <= 6
      ) {
        state.animationCount++;
      }
      //CHARACTER ANIMATION
      if (state.animationCount == 1) {
        hideImage(adultClass);
        showImage(adult1);
      }
      if (state.animationCount == 2 || state.animationCount == 4) {
        hideImage(adult1);
        showImage(adult1Eat);
      }
      if (state.animationCount == 3 || state.animationCount == 5) {
        hideImage(adult1Eat);
        showImage(adult1);
      }
      if (state.animationCount == 6) {
        hideImage(adult1);
        state.foodAnimationGoing = false;
        state.animationCount = 0;
      }
    }
  }
}
function adultOneEatSnackAnimation() {
  adultOneOpenMouthAnimate();
  foodAnimation(3);
}

function adultTwoOpenMouthAnimate() {
  if (state.tamaStage === tamaState[8]) {
    if (state.foodAnimationGoing === true) {
      if (
        timeMathToSec(state.timeState.gameStart) % 1 === 0 &&
        state.animationCount <= 6
      ) {
        state.animationCount++;
      }
      //CHARACTER ANIMATION
      if (state.animationCount == 1) {
        hideImage(adultClass);
        showImage(adult2);
      }
      if (state.animationCount == 2 || state.animationCount == 4) {
        hideImage(adult2);
        showImage(adult2Eat);
      }
      if (state.animationCount == 3 || state.animationCount == 5) {
        hideImage(adult2Eat);
        showImage(adult2);
      }
      if (state.animationCount == 6) {
        hideImage(adult2);
        state.foodAnimationGoing = false;
        state.animationCount = 0;
      }
    }
  }
}
function adultTwoEatSnackAnimation() {
  adultTwoOpenMouthAnimate();
  foodAnimation(3);
}

function adultThreeOpenMouthAnimate() {
  if (state.tamaStage === tamaState[9]) {
    if (state.foodAnimationGoing === true) {
      if (
        timeMathToSec(state.timeState.gameStart) % 1 === 0 &&
        state.animationCount <= 6
      ) {
        state.animationCount++;
      }
      //CHARACTER ANIMATION
      if (state.animationCount == 1) {
        hideImage(adultClass);
        showImage(adult3);
      }
      if (state.animationCount == 2 || state.animationCount == 4) {
        hideImage(adult3);
        showImage(adult3Eat);
      }
      if (state.animationCount == 3 || state.animationCount == 5) {
        hideImage(adult3Eat);
        showImage(adult3);
      }
      if (state.animationCount == 6) {
        hideImage(adult3);
        state.foodAnimationGoing = false;
        state.animationCount = 0;
      }
    }
  }
}
function adultThreeEatSnackAnimation() {
  adultThreeOpenMouthAnimate();
  foodAnimation(3);
}

function adultFourOpenMouthAnimate() {
  if (state.tamaStage === tamaState[10]) {
    if (state.foodAnimationGoing === true) {
      if (
        timeMathToSec(state.timeState.gameStart) % 1 === 0 &&
        state.animationCount <= 6
      ) {
        state.animationCount++;
      }
      //CHARACTER ANIMATION
      if (state.animationCount == 1) {
        hideImage(adultClass);
        showImage(adult4);
      }
      if (state.animationCount == 2 || state.animationCount == 4) {
        hideImage(adult4);
        showImage(adult4Eat);
      }
      if (state.animationCount == 3 || state.animationCount == 5) {
        hideImage(adult4Eat);
        showImage(adult4);
      }
      if (state.animationCount == 6) {
        hideImage(adult4);
        state.foodAnimationGoing = false;
        state.animationCount = 0;
      }
    }
  }
}
function adultFourEatSnackAnimation() {
  adultFourOpenMouthAnimate();
  foodAnimation(3);
}

function adultFiveOpenMouthAnimate() {
  if (state.tamaStage === tamaState[5]) {
    if (state.foodAnimationGoing === true) {
      if (
        timeMathToSec(state.timeState.gameStart) % 1 === 0 &&
        state.animationCount <= 6
      ) {
        state.animationCount++;
      }
      //CHARACTER ANIMATION
      if (state.animationCount == 1) {
        hideImage(adultClass);
        showImage(adult5);
      }
      if (state.animationCount == 2 || state.animationCount == 4) {
        hideImage(adult5);
        showImage(adult5Eat);
      }
      if (state.animationCount == 3 || state.animationCount == 5) {
        hideImage(adult5Eat);
        showImage(adult5);
      }
      if (state.animationCount == 6) {
        hideImage(adult5);
        state.foodAnimationGoing = false;
        state.animationCount = 0;
      }
    }
  }
}
function adultFiveEatSnackAnimation() {
  adultFiveOpenMouthAnimate();
  foodAnimation(3);
}

function allEatSnackAnimations() {
  childEatSnackAnimation();
  childTwoEatSnackAnimation();
  teenEatSnackAnimation();
  teenTwoEatSnackAnimation();
  adultOneEatSnackAnimation();
  adultTwoEatSnackAnimation();
  adultThreeEatSnackAnimation();
  adultFourEatSnackAnimation();
  adultFiveEatSnackAnimation();
  // TEST
}

function removeAllChildAndTeen() {
  eggState1.style.visibility = "hidden";
  eggState2.style.visibility = "hidden";
  eggState3.style.visibility = "hidden";

  child1.style.visibility = "hidden";
  child1Low.style.visibility = "hidden";
  child1Sick.style.visibility = "hidden";
  child1Eat.style.visibility = "hidden";

  child2.style.visibility = "hidden";
  child2Side.style.visibility = "hidden";
  child2Eat.style.visibility = "hidden";
  child2Small.style.visibility = "hidden";
  childClass.style.visibility = "hidden";

  teen1.style.visibility = "hidden";
  teen1Eat.style.visibility = "hidden";
  teen1Sick.style.visibility = "hidden";
  teen2.style.visibility = "hidden";

  teen2Eat.style.visibility = "hidden";
  teen2Sick.style.visibility = "hidden";
  teen2Lips.style.visibility = "hidden";
  teenClass.style.visibility = "hidden";
}

function eggHatchAnimation() {
  if (state.tamaStage === tamaState[0]) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      eggState2.style.visibility = "hidden";
      eggState1.style.visibility = "visible";
    } else {
      eggState1.style.visibility = "hidden";
      eggState2.style.visibility = "visible";
    }
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
    heart1.src = "/tamaPictures2/tamaAlert/tamaHeart/tama_heartFull.svg";
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

function madAlertAnimate() {
  if (animateCount <= 11 && state.tamaIsMad === true) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      animateCount++;
      hideImage(madAlert2);
      showImage(madAlert1);
    } else {
      animateCount++;
      hideImage(madAlert1);
      showImage(madAlert2);
    }
  } else if (animateCount > 11 && state.tamaIsMad === true) {
    state.tamaIsMad = false;
    animateCount = 0;
    hideImage(madAlert1);
    hideImage(madAlert2);
  }
}

function happyAlertAnimate() {
  if (animateCount <= 5 && state.tamaIsHappy === true) {
    if (timeMathToSec(state.timeState.gameStart) % 2 === 0) {
      animateCount++;
      showImage(happyAlert);
    } else {
      animateCount++;
      hideImage(happyAlert);
    }
  } else if (animateCount > 5 && state.tamaIsHappy === true) {
    state.tamaIsHappy = false;
    animateCount = 0;
    hideImage(happyAlert);
  }
}

// let gameIsRunning = false;
// let gameRound = 0;
// let gameTimeCount = 0;
// let gameTimeStore = 0;
// let playerSelectedChoice = false;
// let playerSelection = 0;
// let computerSelection = 0;
// let playerScore = 0;
// let computerScore = 0;

function startGame() {
  gameTimer.innerHTML = "0";
  gameTimeCount = 0;
  gameTimeStore = 0;
}

// const playerChoiceOne = document.querySelector("#choice-one");
// const playerChoiceTwo = document.querySelector("#choice-two");
// const tamaChoiceOne = document.querySelector("#tama-choice-one");
// const tamaChoiceTwo = document.querySelector("#tama-choice-two");

function chooseOneAnimation() {
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
    computerSelection = 1;
  } else {
    computerSelection = 2;
  }
}

function displayFlex(value) {
  value.style.display = "flex";
  return value;
}
function displayHide(value) {
  value.style.display = "none";
  return value;
}

function showGameCharacter() {
  if (state.tamaStage === tamaState[1]) {
    displayFlex(gameChildOne);
    autoRandomFlip(gameChildOne);
  } else if (state.tamaStage === tamaState[2]) {
    displayHide(gameChildOne);
    displayFlex(gameChildTwo);
    autoRandomFlip(gameChildTwo);
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

function characterMadEmoteAnimations() {
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
function characterHappyEmoteAnimations() {
  if (gameHappy != false && gameAnimateCount < 5) {
    console.log("imhappy");
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

// let gameIsRunning = false;
// let gameRound = 0;
// let gameTimeCount = 0;
// let gameTimeStore = 0;
// let lastGuessTime;
// let playerSelectedChoice = false;
// let playerSelection = 0;
// let computerSelection = 0;
// let playerScore = 0;
// let computerScore = 0;
// let gameHappy = false;
// let gameMad = false;
// let gameAnimateCount = 0;

function quitGame() {
  if (gameEnded != false) {
    gameHappy = false;
    gameMad = false;
    gameAnimateCount = 0;
    gameIsRunning = false;
    gameRound = 0;
    gameTimeCount = 0;
    gameTimeStore = 0;
    playerSelectedChoice = false;
    playerSelection = 0;
    computerSelection = 0;
    playerScore = 0;
    computerScore = 0;
    hideImage(gameScreen);
  }
}

function updateScoreView() {
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

function updateScore() {
  if (playerSelection === computerSelection) {
    playerScore++;
  } else {
    computerScore++;
  }
}

function updateGameTimerAndRestart() {
  if (gameTimeCount <= 24) {
    gameTimeCount++;
    if (gameTimeCount % 3 === 0 && gameTimeStore < 30) {
      gameTimeStore++;
      gameTimer.innerHTML = `${gameTimeStore}`;
    }
  } else if (gameTimeCount > 24) {
    gameRound++;
    playerSelectedChoice = false;
    playerSelection = 0;
    gameTimeCount = 0;
    gameTimeStore = 0;
  }
}
function scoreAutoQuit() {
  if (playerScore > 2) {
    gameEnded = true;
    state.tamaHappy++;
    state.tamaIsHappy = true;
  } else if (computerScore > 2) {
    gameEnded = true;
  }
}

function updateAndPlayGameAnimations() {
  if (gameIsRunning != false) {
    updateGameTimerAndRestart();
    chooseOneAnimation();
    updateScoreView();
    showGameCharacter();
    characterMadEmoteAnimations();
    characterHappyEmoteAnimations();
    quitGame();
    scoreAutoQuit();
  }
}

function updateTheme() {
  if (state.tamaTheme === 0) {
    tamagotchiContainer.style.backgroundColor = "var(--mintGreen)";
    button1.style.backgroundColor = "var(--redButton)";
    button2.style.backgroundColor = "var(--redButton)";
    button3.style.backgroundColor = "var(--redButton)";

    button1.style.borderColor = "var(--darkerRedButton)";
    button2.style.borderColor = "var(--darkerRedButton)";
    button3.style.borderColor = "var(--darkerRedButton)";
  } else if (state.tamaTheme === 1) {
    tamagotchiContainer.style.backgroundColor = "var(--lightYellow)";
    button1.style.backgroundColor = "var(--purpleButton)";
    button2.style.backgroundColor = "var(--purpleButton)";
    button3.style.backgroundColor = "var(--purpleButton)";

    button1.style.borderColor = "var(--darkerPurpleButton)";
    button2.style.borderColor = "var(--darkerPurpleButton)";
    button3.style.borderColor = "var(--darkerPurpleButton)";
  } else if (state.tamaTheme === 2) {
    tamagotchiContainer.style.backgroundColor = "var(--offWhite)";
    button1.style.backgroundColor = "var(--blackButton)";
    button2.style.backgroundColor = "var(--blackButton)";
    button3.style.backgroundColor = "var(--blackButton)";

    button1.style.borderColor = "var(--darkerBlackButton)";
    button2.style.borderColor = "var(--darkerBlackButton)";
    button3.style.borderColor = "var(--darkerBlackButton)";
  }
}

function childOneSickAnimation() {
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
  }
}
function childOneMovement() {
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

function updateChracterPicture() {
  if (state.tamaDead != true) {
    if (state.foodAnimationGoing != true) {
      if (gameIsRunning != true) {
        childOneSickAnimation();
        if (state.tamaStage === tamaState[1] && state.tamaSick === false) {
          eggClass.style.visibility = "hidden";
          child1Low.style.visibility = "hidden";
          child1.style.visibility = "visible";
          childOneMovement();

          moveLeftToRightRandom(child1);
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

          moveLeftToRightRandom(teen1);
        }
        if (state.tamaStage === tamaState[4]) {
          child2.style.visibility = "hidden";
          teen2.style.visibility = "visible";
          autoRandomFlip(teen2);

          moveLeftToRightRandom(teen2);
        }

        // SPECIAL CHARACTERS
        if (state.tamaStage === tamaState[5]) {
          removeAllChildAndTeen();
          adult5.style.visibility = "visible";
          autoRandomFlip(adult5);

          moveLeftToRightRandom(adult5);
        }
        if (state.tamaStage === tamaState[6]) {
          removeAllChildAndTeen();
          adult6.style.visibility = "visible";
          autoRandomFlip(adult6);

          moveLeftToRightRandom(adult6);
        }

        if (state.tamaStage === tamaState[7]) {
          removeAllChildAndTeen();
          adult1.style.visibility = "visible";
          autoRandomFlip(adult1);

          moveLeftToRightRandom(adult1);
        }
        if (state.tamaStage === tamaState[8]) {
          removeAllChildAndTeen();
          adult2.style.visibility = "visible";
          autoRandomFlip(adult2);

          moveLeftToRightRandom(adult2);
        }
        if (state.tamaStage === tamaState[9]) {
          removeAllChildAndTeen();
          adult3.style.visibility = "visible";
          autoRandomFlip(adult3);

          moveLeftToRightRandom(adult3);
        }
        if (state.tamaStage === tamaState[10]) {
          removeAllChildAndTeen();
          adult4.style.visibility = "visible";
          autoRandomFlip(adult4);

          moveLeftToRightRandom(adult4);
        }
        if (state.tamaStage === tamaState[13]) {
          gravestone.style.visibility = "visible";
        }
      }
    }
  }
}

function showGravestone() {
  if (state.tamaDead === true) {
    state.tamaStage = tamaState[13];
    hideImage(poop1);
    hideImage(poop2);
    hideImage(poop3);
    hideImage(poop4);
    childClass.style.visibility = "hidden";
    teenClass.style.visibility = "hidden";
    adultClass.style.visibility = "hidden";
    adult1.style.visibility = "hidden";
    adult2.style.visibility = "hidden";
    adult3.style.visibility = "hidden";
    adult4.style.visibility = "hidden";
    adult5.style.visibility = "hidden";
    adult6.style.visibility = "hidden";
    if (timeMathToSec(state.timeState.lastAnimation) % 2 === 0) {
      displayFlex(gravestoneText);
      gravestoneText.innerHTML = `${state.tamaAge} Years`;
      displayHide(gravestone);
      displayFlex(gravestoneTwo);
    } else {
      displayFlex(gravestoneText);
      gravestoneText.innerHTML = `${state.tamaAge} Years`;
      displayHide(gravestoneTwo);
      displayFlex(gravestone);
    }
  }
}

function startAnimation() {
  myInterval = setInterval(updatePictures, 400);
  state.gameStarted = true;
  state.tamaDead = false;
  state.timeState.gameStart = new Date();
}

function updatePictures() {
  updateTheme();
  happyAlertAnimate();
  madAlertAnimate();
  updateFood();
  placePoop();
  autoAlert();
  eggHatchAnimation();
  allEatSnackAnimations();
  updateHeartSvg();
  updateChracterPicture();
  showGravestone();
  updateAndPlayGameAnimations();
}
startAnimation();

function autoDeath() {
  if (
    //cant die as an egg or stage one child
    (state.tamaStage === tamaState[1] || state.tamaStage === tamaState[0]) &&
    state.tamaHealth === 0
  ) {
    state.tamaHealth = 1;
  } else if (state.tamaHealth == 0) {
    stop();
    state.tamaStage = tamaState[13];
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

// function playGame() {
//   let score = 0;
//   for (let i = 0; i < 5; i++) {
//     let compChoice = randomNumGen(2);
//     let playerChoice = prompt("Best out of 3: 0 or 1");
//     if (playerChoice == 8) {
//       state.tamaHappy++;
//       break;
//     }
//     if (playerChoice == compChoice) {
//       alert("nice you got it!");
//       score++;
//     } else {
//       alert("woops they chose" + compChoice);
//     }
//     if (score > 2) {
//       break;
//     }
//   }
//   if (score > 2) {
//     alert("you won!!! +1 happy");
//     state.tamaHappy = state.tamaHappy + 1;
//   } else {
//     alert("you lost! try again no happy gained");
//   }
//   if (state.tamaHappy == 5 || state.tamaHappy > 5) {
//     state.tamaHappy = 5;
//   }
// }

function autoAttentionAlert() {
  if (state.tamaDead == true) {
    hungerMeter.textContent = "im ded";
  } else if (state.tamaStage === tamaState[0]) {
    hungerMeter.textContent = "egg";
  } else if (state.tamaNeglect >= 8) {
    //doesnt tell you when its actually hungry
  } else {
    if (state.tamaHappy <= 2 && state.tamaHealth <= 2) {
      alertButton.style.backgroundColor = "red";
      // hungerMeter.textContent = "im not happy and hungry";
    } else if (state.tamaHappy <= 2) {
      alertButton.style.backgroundColor = "red";
      // hungerMeter.textContent = "im not happy";
    } else if (state.tamaHealth <= 2) {
      alertButton.style.backgroundColor = "red";
      // hungerMeter.textContent = "im hungry";
    } else if (state.tamaHappy > 2) {
      alertButton.style.backgroundColor = "green";
      // hungerMeter.textContent = "";
    } else if (state.tamaHealth >= 2) {
      alertButton.style.backgroundColor = "green";
      // hungerMeter.textContent = "";
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
    state.tamaStage = tamaState[13];
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

function playGame() {
  if (gameIsRunning != false) {
    if (gameTimeStore < 8) {
      console.log("game running");
      console.log(playerScore);
    } else if (gameTimeStore === 8) {
      playerSelectedChoice = false;
      playerSelection = 0;
      gameTimeStore = 0;
      console.log("game ended");
    }
  }
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
    playGame();
  }
  autoAge();
  autoAttentionAlert();
  spoiledAdultAttention();
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

foodButton.addEventListener("click", function () {
  if (state.foodAnimationGoing != true) {
    if (healthIsActive === true) {
      healthIsActive = false;
      healthScreen.style.visibility = "hidden";
      foodScreen.style.visibility = "visible";
      foodIsActive = true;
    } else if (lightsIsActive === true) {
      lightsIsActive = false;
      hideImage(lightsScreen);
      showImage(foodScreen);
      foodIsActive = true;
    } else if (foodIsActive === false) {
      foodScreen.style.visibility = "visible";
      foodIsActive = true;
    } else if (foodIsActive === true) {
      foodScreen.style.visibility = "hidden";
      foodIsActive = false;
    }
  }
});

mealButton.addEventListener("click", function () {
  if (state.foodAnimationGoing === false && state.tamaHealth < 5) {
    state.foodAnimationGoing = true;
    feed(1);
    allEatSnackAnimations();
  }
});

snackButton.addEventListener("click", function () {
  if (state.foodAnimationGoing === false && state.tamaHappy < 5) {
    state.foodAnimationGoing = true;
    feed(2);
    allEatSnackAnimations();
  }
});

lightButton.addEventListener("click", function () {
  if (state.lightIsOff === true && lightsIsActive === false) {
    hideImage(lightsOffScreen);
    showImage(lightsScreen);
    lightsIsActive = true;
  } else if (state.lightIsOff === true && lightsIsActive === true) {
    hideImage(lightsScreen);
    showImage(lightsOffScreen);
    lightsIsActive = false;
  } else if (foodIsActive === true) {
    hideImage(foodScreen);
    foodIsActive = false;
    showImage(lightsScreen);
  } else if (lightsIsActive === false) {
    lightsScreen.style.visibility = "visible";
    lightsIsActive = true;
  } else if (lightsIsActive === true) {
    lightsScreen.style.visibility = "hidden";
    lightsIsActive = false;
  }
});
lightsOn.addEventListener("click", function () {
  hideImage(lightsScreen);
  lightsIsActive = false;
  hideImage(lightsOffScreen);
  state.lightIsOff = false;
  console.log(state.lightIsOff);
});
lightsOff.addEventListener("click", function () {
  state.lightIsOff = true;
  hideImage(lightsScreen);
  lightsIsActive = false;
  showImage(lightsOffScreen);
  console.log(state.lightIsOff);
});

gameButton.addEventListener("click", function () {
  if (gameIsRunning === false) {
    gameEnded = false;
    gameIsRunning = true;
    removeAllChildAndTeen();
    showImage(gameScreen);
  } else if (gameIsRunning === true) {
    gameEnded = true;
  }
});
playerChoiceOne.addEventListener("click", function () {
  if (playerSelectedChoice != true) {
    playerSelectedChoice = true;
    playerSelection = 1;
    gameTimeStore = 6;
    computerGuess();
    updateScore();
    lastGuessTime = new Date();
  }
});
playerChoiceTwo.addEventListener("click", function () {
  if (playerSelectedChoice != true) {
    playerSelectedChoice = true;
    playerSelection = 2;
    gameTimeStore = 6;
    computerGuess();
    updateScore();
    lastGuessTime = new Date();
  }
});

healButton.addEventListener("click", function () {
  if (state.tamaIsMad != true) {
    heal();
    state.tamaIsMad = true;
    //add a angry animation here
  }
});

healthButton.addEventListener("click", function () {
  if (foodIsActive === true) {
    foodIsActive = false;
    foodScreen.style.visibility = "hidden";
    healthScreen.style.visibility = "visible";
    healthIsActive = true;
  } else if (healthIsActive === false) {
    healthScreen.style.visibility = "visible";
    healthIsActive = true;
  } else if (healthIsActive === true) {
    healthScreen.style.visibility = "hidden";
    healthIsActive = false;
  }
});

cleanButton.addEventListener("click", function () {
  if (state.tamaPoop > 0) {
    clean();
    cleaningLine.classList.add("cleanAnimation");
    showImage(cleaningLine);
    setTimeout(function () {
      cleaningLine.classList.remove("cleanAnimation");
      hideImage(cleaningLine);
      state.tamaIsHappy = true;
    }, 800);
  } else {
    cleaningLine.classList.add("cleanAnimation");
    showImage(cleaningLine);
    setTimeout(function () {
      cleaningLine.classList.remove("cleanAnimation");
      hideImage(cleaningLine);
    }, 800);
  }
});

// const menuButton = document.querySelector("#buttonFour");
// const dropDownMenu = document.querySelector("#drop-down-menu");
// const themeButton = document.querySelector("#theme-selection");
// const themeMenu = document.querySelector("#drop-down-color-choice");
// const color1Button = document.querySelector("#color1");
// const color2Button = document.querySelector("#color2");
// const color3Button = document.querySelector("#color3");

menuButton.addEventListener("click", function () {
  if (menuIsOpen === false) {
    menuIsOpen = true;
    displayFlex(dropDownMenu);
  } else if (menuIsOpen === true) {
    menuIsOpen = false;
    displayHide(dropDownMenu);
    displayHide(themeMenu);
  }
});

themeButton.addEventListener("click", function () {
  if (themeMenuIsOpen === false) {
    themeMenuIsOpen = true;
    displayFlex(themeMenu);
  } else if (themeMenuIsOpen === true) {
    themeMenuIsOpen = false;
    displayHide(themeMenu);
  }
});

//themes
color1Button.addEventListener("click", function () {
  state.tamaTheme = 0;
  displayHide(dropDownMenu);
  displayHide(themeMenu);
  menuIsOpen = false;
});

color2Button.addEventListener("click", function () {
  state.tamaTheme = 1;
  displayHide(dropDownMenu);
  displayHide(themeMenu);
  menuIsOpen = false;
});

color3Button.addEventListener("click", function () {
  state.tamaTheme = 2;
  displayHide(dropDownMenu);
  displayHide(themeMenu);
  menuIsOpen = false;
});
