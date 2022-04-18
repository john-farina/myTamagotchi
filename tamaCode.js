let tamaState = [
  "Egg", //0
  "Child_1", //1
  "Child_2", //2
  "Teen_1", //3 (for Child_1)
  "Teen_2", //4 (for Child_2)
  "Secret_Adult", //5 (for Teen_1 (small chance of getting))
  "Secret_Adult_2", //6 (for Teen_2 (small chance of getting)))
  "Adult_1", //7 (for Teen_1 && Teen_2)
  "Adult_2", //8 (for Teen_1 && Teen_2)
  "Adult_3", //9 (for Teen_1 && Teen_2)
  "Adult_4", //10 (for Teen_1 && Teen_2)
  "Secret_Adult_Evolve" //11 (ONLY for Secret_Adult_2)
];
const state = {
  gameStarted: false,
  tamaName: "Larry",
  tamaAge: 0,
  tamaStage: tamaState,
  tamaDead: false,
  tamaHealth: 4,
  tamaHappy: 3,
  tamaDiscipline: 5,
  tamaSpoiled: 0,
  tamaNeglect: 0,
  tamaPoop: 0,
  tamaSick: false,
  timeState: {
    gameStart: new Date(),
    lastInteract: new Date(),
    lastEvolve: new Date(),
    lastPoop: new Date(),
    lastSick: new Date(),
    lastHealth: new Date(),
    lastHappy: new Date()
  }
};
let count = 0;
let minCount = 0;
let hourCount = 0;
let myInterval;

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
const startButton = document.querySelector("#startButton");
const tamaText = document.querySelector("#tamaText");
const hungerMeter = document.querySelector("#hungerMeter");
const timeText = document.querySelector("#timeText");
const tamaStateText = document.querySelector("#tamaStateText");

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

/////////////////////////////////////AUTO INCREASE/GIVE FUNCTIONS

function eggToBaby() {
  //EGG TO BABY
  if (timeMathToSec(state.timeState.gameStart) < 5) {
    // 1 min
    state.tamaStage = tamaState[0]; //EGG
  } else if (
    state.tamaStage == tamaState[0] && //if stil egg
    timeMathToSec(state.timeState.gameStart) > 5 &&
    timeMathToSec(state.timeState.gameStart) < 120 //2 min
  ) {
    if (timeMathToSec(state.timeState.gameStart) % 2 == 0) {
      let randomNum = randomNumGen(200);
      if (randomNum >= 0 && randomNum <= 80) {
        //5% chance every 4 sec to hatch early
        let babyChoice = randomNumGen(2);
        if (babyChoice == 0) {
          state.tamaStage = tamaState[1];
          state.tamaName = prompt(
            "Congrats! you got Child 1 what would u like to name it?",
            "Larry"
          );
          state.timeState.lastEvolve = new Date();
        } else if (babyChoice == 1) {
          state.tamaStage = tamaState[2];
          state.tamaName = prompt(
            "Congrats! you got Child 2 what would u like to name it?",
            "Larry"
          );
          state.timeState.lastEvolve = new Date();
        }
      }
    }
  } else if (
    state.tamaStage == tamaState[0] &&
    timeMathToSec(state.timeState.lastEvolve) > 120 //2 min
  ) {
    //100% chance to hatch
    let babyChoice2 = randomNumGen(2);
    if (babyChoice2 == 0) {
      state.tamaStage = tamaState[1];
      state.timeState.lastEvolve = new Date();
    } else if (babyChoice2 == 1) {
      state.tamaStage = tamaState[2];
      state.timeState.lastEvolve = new Date();
    }
  }
}

function babyToTeen() {
  //BABY TO TEEN
  if (
    state.tamaStage == tamaState[1] ||
    (state.tamaStage == tamaState[2] &&
      timeMathToSec(state.timeState.lastEvolve) <= 5) //10 min
  ) {
    //1% percent chance to grow early every 60 seconds
    if (timeMathToSec(state.gameStarted) % 1 == 0) {
      let randomNum = randomNumGen(100);
      if (randomNum < 46) {
        if (state.tamaStage == tamaState[1]) {
          state.tamaStage = tamaState[3];
        } else if (state.tamaStage == tamaState[2]) {
          state.tamaStage = tamaState[4];
        }
      }
    }
  } else if (
    state.tamaStage == tamaState[1] ||
    (state.tamaStage == tamaState[2] &&
      timeMathToSec(state.timeState.lastEvolve > 43200)) //.5 day
  ) {
    //10% every 60 seconds
    if (timeMathToSec(state.gameStarted) % 60 == 0) {
      let randomNum = randomNumGen(100);
      if (randomNum >= 10 && randomNum <= 20) {
        if (state.tamaStage == tamaState[1]) {
          state.tamaStage = tamaState[3];
        } else if (state.tamaStage == tamaState[2]) {
          state.tamaStage = tamaState[4];
        }
      }
    }
  } else if (
    state.tamaStage == tamaState[1] ||
    (state.tamaStage == tamaState[2] &&
      timeMathToSec(state.timeState.lastEvolve > 86400)) //1 day
  ) {
    //grow up no matter what
    if (state.tamaStage == tamaState[1]) {
      state.tamaStage = tamaState[3];
    } else if (state.tamaStage == tamaState[2]) {
      state.tamaStage = tamaState[4];
    }
  }
}

function autoAge() {
  eggToBaby();
  babyToTeen();
  //TEEN TO ADULT
  if (
    (state.tamaStage == tamaState[3] || state.tamaStage == tamaState[4]) &&
    timeMathToSec(state.timeState.lastEvolve) > 10 //60 min
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
          //4%
          if (state.tamaStage == tamaState[3]) {
            state.tamaStage = tamaState[5]; //secret characters for that character
          } else if (state.tamaStage == tamaState[4]) {
            state.tamaStage = tamaState[6]; //secret characters for that character
          }
        }
      }
    }
  }
  if (timeMathToSec(state.timeState.gameStart) % 86400 == 0) {
    //1 DAY
    state.tamaAge++;
    console.log(tamaState);
  }
}

function autoDeath() {
  if (state.tamaHealth == 0) {
    stop();
    state.tamaDead = true;
  }
}

function givePoop() {
  let randomNum = randomNumGen(1000);
  if (state.tamaPoop == 6) {
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
  if (state.tamaDead == true) {
    hungerMeter.textContent = "im ded";
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
  if (state.tamaStage == tamaState[0]) {
    tamaStateText.textContent = state.tamaStage;
    tamaText.innerHTML = "Im an egg i dont do much";
  } else {
    //Evolve Text
    tamaStateText.textContent = state.tamaStage;
    //Information Text
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
  if (state.tamaDead == true) {
    tamaText.textContent =
      state.tamaName + " died at age " + state.tamaAge + ". :( rip";
  }
  if (state.tamaDead == false) {
  }
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
  if (state.tamaStage == tamaState[0]) {
  } else {
    getSick();
    givePoop();
    ifSick();
    autoHealthDegen();
    autoHappyDegen();
  }
  //   getSick();
  //   givePoop();
  //   ifSick();
  autoAge();
  autoDeath();
  autoAttentionAlert();
  setText();
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

startButton.addEventListener("click", function () {
  start();
});
