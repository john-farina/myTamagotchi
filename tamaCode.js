let count = 0;
let minCount = 0;
let hourCount = 0;
let tamaState = {
    1: 'Egg',
    2: 'Child_1',
    3: 'Child_2',
    4: 'Teen_1',
    5: 'Teen_2',
    6: 'Adult_1',
    7: 'Adult_2',
    8: 'Adult_3',
    9: 'Adult_4',
};
let tamaName = 'Larry';
let tamaAge = 0;
let tamaHealth = 5;
let tamaHappy = 4;
let tamaPoop = 0;
let tamaSick = false;
let timeState = {
    gameStart: new Date(),
    lastInteract: new Date(),
    lastPoop: new Date(),
    lastSick: new Date(),
    lastHealth: new Date(),
};

console.log(tamaState[9]);

const state = { lastCheckedTime: new Date() };
state.lastCheckedTime = new Date();
console.log(state);

const body = document.querySelector('body');
body.style.backgroundColor = 'red';

const mealButton = document.querySelector('#mealButton');
mealButton.addEventListener('click', function () {
    feed(1);
    timeState.lastInteract = new Date();
});
const snackButton = document.querySelector('#snackButton');
snackButton.addEventListener('click', function () {
    feed(2);
    timeState.lastInteract = new Date();
});

const healButton = document.querySelector('#healButton');
healButton.addEventListener('click', function () {
    heal();
    timeState.lastInteract = new Date();
});
const cleanButton = document.querySelector('#cleanButton');
cleanButton.addEventListener('click', function () {
    clean();
    timeState.lastInteract = new Date();
});

const playButton = document.querySelector('#playButton');
playButton.addEventListener('click', function () {
    playGame();
    timeState.lastInteract = new Date();
});

const nameButton = document.querySelector('#nameButton');
nameButton.addEventListener('click', function () {
    tamaName = prompt('what do u wanna name it?', 'larry');
});

const tamaText = document.querySelector('#tamaText');

function start() {
    setInterval(gameLoop, 1000);
    timeState.gameStart = new Date();
}

function gameLoop() {
    let tamagotchi = {
        name: tamaName,
        age: tamaAge,
        happy: tamaHappy,
        health: tamaHealth,
        sick: tamaSick,
        poop: tamaPoop,
    };
    timeKeeping();
    getSick();
    givePoop();
    ifSick();
    autoAge();
    autoDegenTwo();
    autoUnHappy();
    // console.log(Math.floor((new Date() - timeState.gameStart) / 1000));
    // timeKeeping();
    tamaText.textContent =
        tamagotchi.name +
        ': ' +
        'Happy: ' +
        tamagotchi.happy +
        ' Health: ' +
        tamagotchi.health +
        ' is sick? ' +
        tamagotchi.sick +
        '. ' +
        tamagotchi.poop +
        ' Poops';
}
start();

function randomNumGen(percent) {
    let randomNum = Math.floor(Math.random() * percent);
    return randomNum;
}

function autoDegenTwo() {
    if (Math.floor((new Date() - timeState.gameStart) / 1000) % 2 == 0) {
        let randomNum = randomNumGen(2000);
        if (tamaHappy <= 2) {
            //not happy more health loss
            if (
                (randomNum > 10 && randomNum < 100) ||
                (randomNum > 800 && randomNum < 900)
            ) {
                tamaHealth--;
                timeState.lastHealth = new Date();
            }
        } else if (
            Math.floor((new Date() - timeState.lastHealth) / 1000) > 35
        ) {
            if (randomNum > 10 && randomNum < 100) {
                tamaHealth--;
                timeState.lastHealth = new Date();
            }
        }
    }
}

function autoDegen() {
    let randomNum = randomNumGen(200);
    if (tamaHappy <= 2) {
        //IF UNHAPPY WILL LOOSE HEALTH FASTER
        if (randomNum >= 50 && randomNum <= 105) {
            tamaHealth--;
        }
    }
    //if 5 min from interacting will have less chance to loose health
    if (Math.floor((new Date() - timeState.lastInteract) / 1000) < 300) {
        if (randomNum >= 10 && randomNum <= 30) {
            tamaHealth--;
        }
    } else {
        //if u dont interact for 5 min
        if (randomNum == 69) {
            tamaHealth--;
        }
        //30 sex
        if (Math.floor((new Date() - timeState.gameStart) / 1000) % 30 == 0) {
            //10% chance to decrease
            if (randomNum >= 40 && randomNum <= 70) {
                tamaHealth--;
            }
        } //5 min
        else if (
            Math.floor((new Date() - timeState.gameStart) / 1000) % 300 ==
            0
        ) {
            //40% chance to decrease
            if (randomNum >= 30 && randomNum <= 80) {
                tamaHealth--;
            }
        } //10 min
        else if (
            Math.floor((new Date() - timeState.gameStart) / 1000) % 600 ==
            0
        ) {
            //60% chance to decrease
            if (randomNum >= 20 && randomNum <= 120) {
                tamaHealth--;
            }
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
        console.log('tamagotchi is full');
    }
}

function playGame() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let compChoice = randomNumGen(2);
        let playerChoice = prompt('Best out of 3: 0 or 1');
        if (playerChoice == compChoice) {
            alert('nice you got it!');
            score++;
        } else {
            alert('woops they chose' + compChoice);
        }
        if (score > 2) {
            break;
        }
    }
    if (score > 2) {
        alert('you won!!! +1 happy');
        tamaHappy = tamaHappy + 1;
    } else {
        alert('you lost! try again no happy gained');
    }
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
                tamaHealth -= 1;
            }
        } else {
            let randomNum2 = randomNumGen(3000);
            if (randomNum2 == 1212 || randomNum2 == 74 || randomNum2 == 2121) {
                tamaPoop += 1;
                tamaHealth -= 0.5;
            }
        }
    }
}

function getSick() {
    let randomNumber = randomNumGen(5000);
    //add a if statement that makes it so it cant get sick after just getting sick

    // console.log(randomNumber);
    if (randomNumber == 8 || randomNumber == 573 || randomNumber == 1362) {
        tamaSick = true;
        timeState.lastSick = new Date();
    }
    return randomNumber;
}

function ifSick() {
    if (tamaSick == true) {
        if (Math.floor((new Date() - timeState.lastSick) / 1000) % 2 == 0) {
            tamaHealth -= 0.5;
        }
    }
}

function heal() {
    tamaSick = false;
    tamaHappy -= 1;
}
function clean() {
    tamaPoop = 0;
}

const timeText = document.querySelector('#timeText');
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
