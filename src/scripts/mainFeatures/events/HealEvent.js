import { hideAllExtraScreens } from "../../misc/usefulFunctions";
import { heal } from "../mainFunctions";

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
