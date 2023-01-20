import { dropDownMenu, helpScreen, themeMenu } from "../../tamaImports";
import { displayHide, displayFlex } from "../../misc/usefulFunctions";

export function HelpEvent(state) {
  dropDownMenu.classList.remove("menu-animate-open");

  dropDownMenu.classList.add("menu-animate-close");

  setTimeout(() => {
    displayHide(dropDownMenu);
    displayHide(themeMenu);

    dropDownMenu.classList.remove("menu-animate-close");
    dropDownMenu.classList.add("menu-animate-open");

    state.menuIsOpen = false;
  }, 1000);

  setTimeout(() => {
    displayFlex(helpScreen);
  }, 500);
}
