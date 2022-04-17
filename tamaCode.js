let tamaStateOne = {
  1: "Egg",
  2: "Child_1",
  3: "Child_2",
  4: "Teen_1",
  5: "Teen_2",
  6: "Adult_1",
  7: "Adult_2",
  8: "Adult_3",
  9: "Adult_4"
};
let tamaState = [
  "Egg",
  "Child_1",
  "Child_2",
  "Teen_1",
  "Teen_2",
  "Adult_1",
  "Adult_2",
  "Adult_3",
  "Adult_4"
];
const state = {
  tamaName: "Larry",
  tamaAge: 2,
  tamaStage: tamaState,
  tamaHealth: 5,
  tamaHappy: 5,
  tamaDiscipline: 5,
  tamaSpoiled: 0,
  tamaNeglect: 0,
  tamaPoop: 0,
  tamaSick: false,
  timeState: {
    gameStart: new Date(),
    lastInteract: new Date(),
    lastPoop: new Date(),
    lastSick: new Date(),
    lastHealth: new Date()
  }
};
let count = 0;
let minCount = 0;
let hourCount = 0;

//EXAMPLE FOR STATE STORING AND GETTING
// const example = {
//   tamaSwag: 4,
//   tamaNah: 0,
//   timeSwag: {
//     gameFart: new Date()
//   }
// };
// console.log(example.tamaSwag); --> 4
// example.tamaSwag++;
// console.log(example.tamaSwag); --> 5
// console.log(example.timeSwag.gameFart); --> the time & date
//END OF EXAMPLE

const body = document.querySelector("body");
body.style.backgroundColor = "gray";
const mealButton = document.querySelector("#mealButton");
const snackButton = document.querySelector("#snackButton");
const healButton = document.querySelector("#healButton");
const cleanButton = document.querySelector("#cleanButton");
const playButton = document.querySelector("#playButton");
const nameButton = document.querySelector("#nameButton");
const tamaText = document.querySelector("#tamaText");
const hungerMeter = document.querySelector("#hungerMeter");
const timeText = document.querySelector("#timeText");

/////////////////////////////////////USEFUL FUNCTIONS
function randomNumGen(percent) {
  let randomNum = Math.floor(Math.random() * percent);
  return randomNum;
}
function timeMathToSec(timeStateStamp) {
  let timeMath = Math.floor((new Date() - timeStateStamp) / 1000);
  return timeMath;
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
  if (state.tamaHappy == 5) {
    //LESS JAPPY DEGEN
  } else if (state.tamaHealth <= 2) {
    //MORE HAPPY DEGEN
  } else {
    //NORMAL HEAPPY DEGEN
  }
}

/////////////////////////////////////AUTO INCREASE/GIVE FUNCTIONS
function autoAge() {
  //////////EGG TO BABY
  if (timeMathToSec(state.timeState.gameStart) < 5) {
    // 30 min
    state.tamaStage = tamaState[0]; //EGG
  } else if (
    state.tamaStage == tamaState[0] && //if stil egg
    timeMathToSec(state.timeState.gameStart) > 5 && //30 min
    timeMathToSec(state.timeState.gameStart) < 5400 //1.5 hours
  ) {
    let randomNum = randomNumGen(100);
    if (randomNum >= 70 && randomNum <= 80) {
      //10% chance to hatch early
      let babyChoice = randomNumGen(2);
      if (babyChoice == 0) {
        state.tamaStage = tamaState[1];
      } else if (babyChoice == 1) {
        state.tamaStage = tamaState[2];
      }
    }
  } else if (
    state.tamaStage == tamaState[0] &&
    timeMathToSec(state.timeState.gameStart) > 5400
  ) {
    //100% chance to hatch
    let babyChoice2 = randomNumGen(2);
    if (babyChoice2 == 0) {
      state.tamaStage2 = tamaState[1];
    } else if (babyChoice2 == 1) {
      state.tamaStage = tamaState[2];
    }
  }

  //////////KID TO TEEN
  if (
    tamaState.tamaStage == tamaState[1] ||
    tamaState.tamaStage == tamaState[2]
  ) {
  }

  if (timeMathToSec(state.timeState.gameStart) % 86400 == 0) {
    //1 DAY
    state.tamaAge++;
    console.log(tamaState);
  }
}

function givePoop() {
  let randomNum = randomNumGen(300);
  if (state.tamaPoop == 6) {
    //cant poop anymore
  } else if (state.tamaSick == true) {
    if (timeMathToSec(state.timeState.lastPoop) % 10 == 0) {
      if (randomNum % 5 == 0) {
        //1.6% chance of poop every 10 seconds if sick
        state.tamaPoop++;
        state.tamaHealth--;
        state.timeState.lastPoop = new Date();
      }
    }
  } else {
    //normally
    if (timeMathToSec(state.timeState.lastPoop) % 30 == 0) {
      if (randomNum % 5 == 0) {
        //1.6% chance of poop every 30 seconds
        state.tamaPoop++;
        state.tamaHealth--;
        state.timeState.lastPoop = new Date();
      }
    }
  }
}

function getSick() {
  let randomNumber = randomNumGen(4000);

  if (state.tamaPoop == 6) {
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
  if (type == 1 && state.tamaHealth < 5) {
    state.tamaHealth++;
  } else if (type == 2 && tamaHealth < 5) {
    state.tamaHealth = state.tamaHealth + 0.5;
  } else if (type == 2) {
    state.tamaHealth = state.tamaHealth + 0;
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

function autoDisciplineTest() {
  //make a noise when full (if dont disicpline increses spoil meter by one)
  let randomNum = randomNumGen(500);
  if (state.tamaHappy == 5 && state.tamaHealth == 5) {
    // if full and happy it can do it
    if (state.tamaDiscipline < 10) {
      if (state.tamaAge < 1) {
      } else if (state.tamaAge > 1 && state.tamaAge <= 3) {
        //this is when all 10 happen
        if (randomNum > 30 && randomNum < 70) {
        }
      } else {
        if (state.tamaDiscipline == 10) {
          //none will happen
        } else if (state.tamaSpoiled >= 6 && state.tamaDiscipline <= 5) {
          //will continue even if adult
        } else if (state.tamaSpoiled <= 5 && state.tamaDiscipline < 10) {
          //less of a chance to continue but still can
        }
      }
    } else {
      //dont make attention calls anymore
    }
  }
}

/////////////////////////////////////MISC
function setText() {
  tamaText.textContent =
    state.tamaName +
    ": " +
    "Happy: " +
    state.tamaHappy +
    " Health: " +
    state.tamaHealth +
    " is sick? " +
    state.tamaSick +
    ". " +
    state.tamaPoop +
    " Poops";
}

function timeKeeping() {
  count++;
  if (count > 1) {
    timeText.textContent = `${hourCount} Hour ${minCount} Min ${count} seconds`;
  } else {
    timeText.textContent = `${hourCount} Hour ${minCount} Min ${count} seconds`;
  }
  if (count % 60 == 0) {
    minCount++;
    count = 0;
  }
  if (minCount % 60 == 0) {
    if (minCount == 0) {
    } else {
      hourCount++;
      minCount = 0;
      count = 0;
      timeText.textContent = minCount;
    }
  }
}

/////////////////////////////////////RUNNING THE GAME
function updateFunctions() {
  timeKeeping();
  getSick();
  givePoop();
  ifSick();
  autoAge();
  autoHealthDegen();
  //   autoUnHappy();
  autoAttentionAlert();
  setText();
}

function start() {
  setInterval(gameLoop, 1000);
  state.timeState.gameStart = new Date();
}

function gameLoop() {
  updateFunctions();
  console.log(state.tamaAge);
  console.log(state.tamaStage);
}
start();

////////////////////EVENT LISTENERS
mealButton.addEventListener("click", function () {
  feed(1);
  state.timeState.lastInteract = new Date();
});

snackButton.addEventListener("click", function () {
  feed(2);
  state.timeState.lastInteract = new Date();
});

healButton.addEventListener("click", function () {
  heal();
  state.timeState.lastInteract = new Date();
});

cleanButton.addEventListener("click", function () {
  clean();
  state.timeState.lastInteract = new Date();
});

playButton.addEventListener("click", function () {
  playGame();
  state.timeState.lastInteract = new Date();
});

nameButton.addEventListener("click", function () {
  state.tamaName = prompt("what do u wanna name it?", "larry");
});
