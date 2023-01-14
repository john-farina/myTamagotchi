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

export { randomNumGen, timeMathToSec, greaterAndLessThen };
