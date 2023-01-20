import { hideAllExtraScreens } from "../../misc/usefulFunctions";
import { randomNumGen } from "../../misc/usefulFunctions";
import { disciplineButton } from "../../tamaImports";

function DisciplineEvent(state) {
  hideAllExtraScreens(state);

  state.tamaIsMad = true;

  if (state.needAttention === true) {
    state.needAttention = false;

    state.tamaDiscipline++;

    return;
  }

  if (randomNumGen(5) === randomNumGen(5)) {
    state.tamaHappy--;
  }
}

function ReturnDisciplineEvent(state) {
  return disciplineButton.addEventListener("click", function () {
    DisciplineEvent(state);
  });
}

export { DisciplineEvent, ReturnDisciplineEvent };
