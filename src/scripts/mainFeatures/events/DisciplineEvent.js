import { hideAllExtraScreens } from "../../misc/usefulFunctions";
import { randomNumGen } from "../../misc/usefulFunctions";
import { disciplineButton } from "../../tamaImports";

function DisciplineEvent(state) {
  hideAllExtraScreens(state);
  if (state.needAttention === true) {
    state.tamaIsMad = true;
    state.needAttention = false;
    state.tamaDiscipline++;
  } else {
    state.tamaIsMad = true;
    let randomNum = randomNumGen(5);
    if (randomNum === 2) {
      state.tamaHappy--;
    }
  }
}

function ReturnDisciplineEvent(state) {
  return disciplineButton.addEventListener("click", function () {
    DisciplineEvent(state);
  });
}

export { DisciplineEvent, ReturnDisciplineEvent };
