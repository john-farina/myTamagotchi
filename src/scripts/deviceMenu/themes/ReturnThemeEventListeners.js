import {
  themeButton,
  color1Button,
  color2Button,
  color3Button,
  color4Button,
  color5Button,
} from "../../tamaImports";
import { ThemeEvent } from "./ThemeEvent";
import { animateCloseAllTabs } from "../AnimateCloseAllTabs";

export function ReturnThemeEventListeners(state) {
  themeButton.addEventListener("click", () => {
    ThemeEvent(state);
  });

  color1Button.addEventListener("click", () => {
    state.tamaTheme = 0;

    animateCloseAllTabs(state);
  });

  color2Button.addEventListener("click", () => {
    state.tamaTheme = 1;

    animateCloseAllTabs(state);
  });

  color3Button.addEventListener("click", () => {
    state.tamaTheme = 2;

    animateCloseAllTabs(state);
  });

  color4Button.addEventListener("click", () => {
    state.tamaTheme = 3;

    animateCloseAllTabs(state);
  });

  color5Button.addEventListener("click", () => {
    state.tamaTheme = 4;

    animateCloseAllTabs(state);
  });
}
