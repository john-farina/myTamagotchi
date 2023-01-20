import { MenuEvent } from "../MenuEvent";
import { menuButton } from "../../tamaImports";
import { ReturnThemeEventListeners } from "../themes/ReturnThemeEventListeners";
import { ReturnHelpEventListeners } from "./ReturnHelpEventListeners";

export function ReturnMenuEvents(state) {
  menuButton.addEventListener("click", function () {
    MenuEvent(state);
  });

  ReturnThemeEventListeners(state);

  ReturnHelpEventListeners(state);
}
