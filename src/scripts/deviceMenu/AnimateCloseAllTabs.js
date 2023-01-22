import { themeMenu, dropDownMenu } from "../tamaImports";
import { displayHide } from "../misc/usefulFunctions";

export function animateCloseAllTabs(state) {
  themeMenu.classList.remove("second-menu-animate-open");
  themeMenu.classList.add("second-menu-animate-close");

  setTimeout(() => {
    state.themeMenuIsOpen = false;

    displayHide(themeMenu);

    themeMenu.classList.add("second-menu-animate-open");

    themeMenu.classList.remove("second-menu-animate-close");
  }, 990);

  setTimeout(() => {
    dropDownMenu.classList.remove("menu-animate-open");

    dropDownMenu.classList.add("menu-animate-close");

    setTimeout(() => {
      displayHide(dropDownMenu);
      displayHide(themeMenu);
      dropDownMenu.classList.remove("menu-animate-close");

      dropDownMenu.classList.add("menu-animate-open");

      state.menuIsOpen = false;
    }, 990);
  }, 400);
}
