let count = 0;
let minCount = 0;
let hourCount = 0;
let tamaState = {
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
let tamaName = "Larry";
let tamaAge = 0;
let tamaHealth = 5;
let tamaHappy = 5;
let tamaDiscipline = 0;
let tamaSpoiled = 0;
let tamaNeglect = 0;
let tamaPoop = 6;
let tamaSick = false;
let timeState = {
  gameStart: new Date(),
  lastInteract: new Date(),
  lastPoop: new Date(),
  lastSick: new Date(),
  lastHealth: new Date()
};
console.log(timeState.gameStart + timeState.lastHealth);

const body = document.querySelector("body");
body.style.backgroundColor = "gray";
const mealButton = document.querySelector("#mealButton");
mealButton.addEventListener("click", function () {
  feed(1);
  timeState.lastInteract = new Date();
});
const snackButton = document.querySelector("#snackButton");
snackButton.addEventListener("click", function () {
  feed(2);
  timeState.lastInteract = new Date();
});
const healButton = document.querySelector("#healButton");
healButton.addEventListener("click", function () {
  heal();
  timeState.lastInteract = new Date();
});
const cleanButton = document.querySelector("#cleanButton");
cleanButton.addEventListener("click", function () {
  clean();
  timeState.lastInteract = new Date();
});
const playButton = document.querySelector("#playButton");
playButton.addEventListener("click", function () {
  playGame();
  timeState.lastInteract = new Date();
});
const nameButton = document.querySelector("#nameButton");
nameButton.addEventListener("click", function () {
  tamaName = prompt("what do u wanna name it?", "larry");
});

const tamaText = document.querySelector("#tamaText");

function start() {
  setInterval(gameLoop, 1000);
  timeState.gameStart = new Date();
}

function updateFunctions() {
  timeKeeping();
  getSick();
  givePoop();
  ifSick();
  autoAge();
  autoHealthDegen();
  //   autoUnHappy();
  autoAttentionAlert();
}

function gameLoop() {
  let tamagotchi = {
    name: tamaName,
    age: tamaAge,
    happy: tamaHappy,
    health: tamaHealth,
    sick: tamaSick,
    poop: tamaPoop
  };
  updateFunctions();

  tamaText.textContent =
    tamagotchi.name +
    ": " +
    "Happy: " +
    tamagotchi.happy +
    " Health: " +
    tamagotchi.health +
    " is sick? " +
    tamagotchi.sick +
    ". " +
    tamagotchi.poop +
    " Poops";
}
start();

function randomNumGen(percent) {
  let randomNum = Math.floor(Math.random() * percent);
  return randomNum;
}
function timeMathToSec(timeStateStamp) {
  let timeMath = Math.floor((new Date() - timeStateStamp) / 1000);
  return timeMath;
}

function autoHealthDegen() {
  let randomNum = randomNumGen(3000);
  if (timeMathToSec(timeState.gameStart) % 5 == 0) {
    //every 5 seconds check
    if (tamaHappy <= 2) {
      // if not happy
      if (
        //15% chance to loose health 200/3000
        (randomNum >= 10 && randomNum <= 70) ||
        (randomNum >= 900 && randomNum <= 970) ||
        (randomNum >= 2300 && randomNum <= 2370)
      ) {
        tamaHealth -= 1;
        timeState.lastHealth = new Date();
      }
    } else {
      //NORMAL HEALTH DEGEN
      if (
        //3% chance to loose health 90/3000
        (randomNum >= 10 && randomNum <= 30) ||
        (randomNum >= 900 && randomNum <= 930) ||
        (randomNum >= 2300 && randomNum <= 2330)
      ) {
        tamaHealth -= 1;
        timeState.lastHealth = new Date();
      }
    }
  }
}

function autoHappyDegen() {
  if (tamaHappy == 5) {
    //LESS JAPPY DEGEN
  } else if (tamaHealth <= 2) {
    //MORE HAPPY DEGEN
  } else {
    //NORMAL HEAPPY DEGEN
  }
}

const hungerMeter = document.querySelector("#hungerMeter");

function autoAttentionAlert() {
  if (tamaHappy <= 2 && tamaHealth <= 2) {
    hungerMeter.textContent = "im not happy and hungry";
  } else if (tamaHappy <= 2) {
    hungerMeter.textContent = "im not happy";
  } else if (tamaHealth <= 2) {
    hungerMeter.textContent = "im hungry";
  } else if (tamaHappy >= 2) {
    hungerMeter.textContent = "";
  } else if (tamaHealth >= 2) {
    hungerMeter.textContent = "";
  }
}

function autoDisciplineTest() {
  //make a noise when full (if dont disicpline increses spoil meter by one)
  let randomNum = randomNumGen(500);
  if (tamaHappy == 5 && tamaHealth == 5) {
    // if full and happy it can do it
    if (tamaDiscipline < 10) {
      if (tamaAge < 1) {
      } else if (tamaAge > 1 && tamaAge <= 3) {
        //this is when all 10 happen
        if (randomNum > 30 && randomNum < 70) {
        }
      } else {
        if (tamaDiscipline == 10) {
          //none will happen
        } else if (tamaSpoiled >= 6 && tamaDiscipline <= 5) {
          //will continue even if adult
        } else if (tamaSpoiled <= 5 && tamaDiscipline < 10) {
          //less of a chance to continue but still can
        }
      }
    } else {
      //dont make attention calls anymore
    }
  }
}

function autoDegenTwo() {
  let randomNum = randomNumGen(100);
  if (tamaHappy <= 2) {
    //not happy more health loss
    if (
      (randomNum > 0 && randomNum < 100) ||
      (randomNum > 800 && randomNum < 900)
    ) {
      tamaHealth--;
      timeState.lastHealth = new Date();
    }
  } else if (timeMathToSec(timeState.lastHealth) > 2) {
    if (randomNum > 0 && randomNum < 100) {
      tamaHealth--;
      timeState.lastHealth = new Date();
    }
  }
}

function autoUnHappy() {
  let randomNum = randomNumGen(200);
  if (randomNum == 69) {
    tamaHealth--;
  }
  //30 sex
  if (Math.floor((new Date() - timeState.gameStart) / 1000) % 30 == 0) {
    //5% chance to decrease
    if (randomNum >= 38 && randomNum <= 47) {
      tamaHealth--;
    }
  } //5 min
  else if (Math.floor((new Date() - timeState.gameStart) / 1000) % 300 == 0) {
    //40% chance to decrease
    if (randomNum >= 10 && randomNum <= 40) {
      tamaHealth--;
    }
  } //10 min
  else if (Math.floor((new Date() - timeState.gameStart) / 1000) % 600 == 0) {
    //60% chance to decrease
    if (randomNum >= 10 && randomNum <= 90) {
      tamaHealth--;
    }
  }
}

function autoAge() {
  //1 day
  if (Math.floor((new Date() - timeState.gameStart) / 1000) % 86400 == 0) {
    tamaAge++;
  }
}

//1 == meal && 2 == snack
function feed(type) {
  if (type == 1 && tamaHealth < 5) {
    tamaHealth++;
  } else if (type == 2 && tamaHealth < 5) {
    tamaHealth = tamaHealth + 0.5;
  } else if (type == 2) {
    tamaHealth = tamaHealth + 0;
  }
  if (tamaHealth >= 5) {
    tamaHealth += 0;
  }
  if (type == 2 && tamaHealth >= 5) {
    tamaHealth = 5;
  } else if (type == 1 && tamaHealth >= 5) {
    tamaHealth = 5;
    console.log("tamagotchi is full");
  }
}

function playGame() {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    let compChoice = randomNumGen(2);
    let playerChoice = prompt("Best out of 3: 0 or 1");
    if (playerChoice == 8) {
      tamaHappy++;
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
    tamaHappy = tamaHappy + 1;
  } else {
    alert("you lost! try again no happy gained");
  }
  if (tamaHappy == 5 || tamaHappy > 5) {
    tamaHappy = 5;
  }
}

function givePoop() {
  let randomNum = randomNumGen(300);
  if (tamaPoop == 6) {
    //cant poop anymore
  } else if (tamaSick == true) {
    if (timeMathToSec(timeState.lastPoop) % 10 == 0) {
      if (randomNum % 5 == 0) {
        //1.6% chance of poop every 10 seconds if sick
        tamaPoop++;
        tamaHealth--;
        timeState.lastPoop = new Date();
      }
    }
  } else {
    //normally
    if (timeMathToSec(timeState.lastPoop) % 30 == 0) {
      if (randomNum % 5 == 0) {
        //1.6% chance of poop every 30 seconds
        tamaPoop++;
        tamaHealth--;
        timeState.lastPoop = new Date();
      }
    }
  }
}

function getSick() {
  let randomNumber = randomNumGen(4000);

  if (tamaPoop == 6) {
    if (timeMathToSec(timeState.lastPoop) > 15) {
      //if 6 poop for 15 sec get sick
      tamaSick = true;
      timeState.lastSick = new Date();
    }
  }

  if (
    timeMathToSec(timeState.lastSick) > 60 ||
    timeState.lastSick == timeState.gameStart
  ) {
    //cant get sick 2 min after getting sick
    if (randomNumber == 8 || randomNumber == 573 || randomNumber == 1362) {
      tamaSick = true;
      timeState.lastSick = new Date();
    }
  } else {
    //no poop
  }
}

function ifSick() {
  if (tamaSick == true) {
    if (timeMathToSec(timeState.lastSick) % 15 == 0) {
      tamaHealth -= 0.5;
    }
  }
}

function heal() {
  tamaSick = false;
  tamaHappy -= 1;
}
function clean() {
  if (tamaPoop == 0) {
  } else {
    tamaPoop = 0;
    tamaHappy++;
  }
}

const timeText = document.querySelector("#timeText");
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
