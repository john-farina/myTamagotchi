import { themeMenu } from "../../tamaImports";
import { displayFlex, displayHide } from "../../misc/usefulFunctions";

export function ThemeEvent(state) {
  if (!state.themeMenuIsOpen) {
    state.themeMenuIsOpen = true;

    displayFlex(themeMenu);

    return;
  }

  themeMenu.classList.remove("second-menu-animate-open");
  themeMenu.classList.add("second-menu-animate-close");

  setTimeout(() => {
    state.themeMenuIsOpen = false;

    displayHide(themeMenu);

    themeMenu.classList.add("second-menu-animate-open");
    themeMenu.classList.remove("second-menu-animate-close");
  }, 1000);
}
