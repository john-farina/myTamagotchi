import { hideImage, showImage } from "./MovmentAnimation";
import { timeMathToSec } from "../misc/usefulFunctions";
import { tamaState } from "../state";
import {
  child1,
  child1Sick,
  child1Low,
  child1Side,
  child1Eat,
  child2,
  child2Eat,
  child2Side,
  child2Small,
  teen1,
  teenClass,
  teen1Eat,
  teen2,
  teen2Eat,
  adultClass,
  adult1,
  adult1Eat,
  adult2,
  adult2Eat,
  adult3,
  adult3Eat,
  adult4,
  adult4Eat,
  adult5,
  adult5Eat,
} from "../tamaImports";
import { foodAnimation } from "./FoodFunctions";

function childOpenMouthAnimate(state) {
  if (state.tamaStage != tamaState[1] || !state.foodAnimationGoing) {
    return;
  }

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

function childTwoOpenMouthAnimate(state) {
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

function teenOpenMouthAnimate(state) {
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

function teenTwoOpenMouthAnimate(state) {
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

function adultOneOpenMouthAnimate(state) {
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

function adultTwoOpenMouthAnimate(state) {
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

function adultThreeOpenMouthAnimate(state) {
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

function adultFourOpenMouthAnimate(state) {
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

function adultFiveOpenMouthAnimate(state) {
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

function childEatSnackAnimation(state) {
  childOpenMouthAnimate(state);

  foodAnimation(3, state);
}

function childTwoEatSnackAnimation(state) {
  childTwoOpenMouthAnimate(state);

  foodAnimation(3, state);
}

function teenEatSnackAnimation(state) {
  teenOpenMouthAnimate(state);

  foodAnimation(3, state);
}

function teenTwoEatSnackAnimation(state) {
  teenTwoOpenMouthAnimate(state);

  foodAnimation(3, state);
}

function adultOneEatSnackAnimation(state) {
  adultOneOpenMouthAnimate(state);

  foodAnimation(3, state);
}

function adultTwoEatSnackAnimation(state) {
  adultTwoOpenMouthAnimate(state);

  foodAnimation(3, state);
}

function adultThreeEatSnackAnimation(state) {
  adultThreeOpenMouthAnimate(state);

  foodAnimation(3, state);
}

function adultFourEatSnackAnimation(state) {
  adultFourOpenMouthAnimate(state);

  foodAnimation(3, state);
}

function adultFiveEatSnackAnimation(state) {
  adultFiveOpenMouthAnimate(state);

  foodAnimation(3, state);
}

function allEatSnackAnimations(state) {
  childEatSnackAnimation(state);
  childTwoEatSnackAnimation(state);
  teenEatSnackAnimation(state);
  teenTwoEatSnackAnimation(state);
  adultOneEatSnackAnimation(state);
  adultTwoEatSnackAnimation(state);
  adultThreeEatSnackAnimation(state);
  adultFourEatSnackAnimation(state);
  adultFiveEatSnackAnimation(state);
}

export {
  childEatSnackAnimation,
  childTwoEatSnackAnimation,
  teenEatSnackAnimation,
  teenTwoEatSnackAnimation,
  adultOneEatSnackAnimation,
  adultTwoEatSnackAnimation,
  adultThreeEatSnackAnimation,
  adultFourEatSnackAnimation,
  adultFiveEatSnackAnimation,
  allEatSnackAnimations,
};
