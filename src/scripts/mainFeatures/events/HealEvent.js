import { hideAllExtraScreens } from "../../misc/usefulFunctions";

export function HealEvent(state) {
  if (state.tamaIsMad) {
    return;
  }

  state.tamaIsMad = true;

  if (state.tamaSick) {
    heal(state);
  }

  hideAllExtraScreens();
}
