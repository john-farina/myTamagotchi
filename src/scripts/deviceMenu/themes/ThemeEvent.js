import { themeMenu } from "../../tamaImports";
import { displayFlex, displayHide } from "../../misc/usefulFunctions";

export function ThemeEvent(state) {
  if (state.themeMenuIsOpen === false) {
    state.themeMenuIsOpen = true;
    displayFlex(themeMenu);
  } else if (state.themeMenuIsOpen === true) {
    themeMenu.classList.remove("second-menu-animate-open");
    themeMenu.classList.add("second-menu-animate-close");
    setTimeout(function () {
      state.themeMenuIsOpen = false;
      displayHide(themeMenu);
      themeMenu.classList.add("second-menu-animate-open");
      themeMenu.classList.remove("second-menu-animate-close");
    }, 1000);
  }
}
