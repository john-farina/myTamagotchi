import { displayFlex, displayHide } from "../misc/usefulFunctions";
import { animateCloseAllTabs } from "./AnimateCloseAllTabs";
import { dropDownMenu, themeMenu } from "../tamaImports";

export function MenuEvent(state) {
  if (!state.menuIsOpen) {
    state.menuIsOpen = true;
    displayFlex(dropDownMenu);
    return;
  }

  if (state.themeMenuIsOpen) {
    animateCloseAllTabs(state);

    return;
  }

  dropDownMenu.classList.remove("menu-animate-open");
  dropDownMenu.classList.add("menu-animate-close");

  setTimeout(function () {
    displayHide(dropDownMenu);
    displayHide(themeMenu);
    dropDownMenu.classList.remove("menu-animate-close");
    dropDownMenu.classList.add("menu-animate-open");
    state.menuIsOpen = false;
  }, 1000);
}
