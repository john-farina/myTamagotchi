let count = 58;
let minCount = 0;
let hourCount = 0;
let tamaName = "Tama";
let tamaAge = 0;
let tamaHealth = 5;
let tamaHappy = 2;
let tamaPoop = 0;
let tamaSick = false;

const state = { lastCheckedTime: new Date() };
state.lastCheckedTime = new Date();
console.log(state);

const body = document.querySelector("body");
body.style.backgroundColor = "red";

const mealButton = document.querySelector("#mealButton");
mealButton.addEventListener("click", function () {
  feed(1);
});
const snackButton = document.querySelector("#snackButton");
snackButton.addEventListener("click", function () {
  feed(2);
});

const healButton = document.querySelector("#healButton");
healButton.addEventListener("click", function () {
  heal();
});
const cleanButton = document.querySelector("#cleanButton");
cleanButton.addEventListener("click", function () {
  clean();
});

const playButton = document.querySelector("#playButton");
playButton.addEventListener("click", function () {
  playGame();
});

function start() {
  setInterval(gameLoop, 1000);
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

  getSick();
  givePoop();
  ifSick();
  // timeKeeping();
  console.log(
    tamagotchi.name +
      "'s: " +
      "Happy: " +
      tamagotchi.happy +
      " Health: " +
      tamagotchi.health +
      " is sick? " +
      tamagotchi.sick +
      ". " +
      tamagotchi.poop +
      " Poops"
  );
}
start();

function randomNumGen(percent) {
  let randomNum = Math.floor(Math.random() * percent);
  return randomNum;
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
  tamaHappy = tamaHappy + 1;

  if (tamaHappy == 5 || tamaHappy > 5) {
    tamaHappy = 5;
  }
}

function givePoop() {
  if (tamaPoop == 6) {
    tamaSick = true;
  } else {
    if (tamaHealth == 5) {
      let randomNum = randomNumGen(2000);
      if (
        randomNum == 1000 ||
        randomNum == 500 ||
        randomNum == 1648 ||
        randomNum == 120
      ) {
        tamaPoop += 1;
      }
    } else {
      let randomNum2 = randomNumGen(3000);
      if (randomNum2 == 1212 || randomNum2 == 74 || randomNum2 == 2121) {
        tamaPoop += 1;
      }
    }
  }
}

function getSick() {
  let randomNumber = randomNumGen(5000);
  // console.log(randomNumber);
  if (randomNumber == 8 || randomNumber == 573 || randomNumber == 1362) {
    tamaSick = true;
  }
  return randomNumber;
}

function ifSick() {
  if (tamaSick == true) {
    tamaHealth = tamaHealth - 0.1;
  }
}

function heal() {
  tamaSick = false;
  tamaHappy -= 1;
}
function clean() {
  tamaPoop = 0;
}

function timeKeeping() {
  count++;
  if (count > 1) {
    console.log(`${hourCount} Hour ${minCount} Min ${count} seconds`);
  } else {
    console.log(`${hourCount} Hour ${minCount} Min ${count} seconds`);
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
      console.log(minCount);
    }
  }
}
