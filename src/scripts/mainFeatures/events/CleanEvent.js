import { hideAllExtraScreens } from "../../misc/usefulFunctions";
import { clean } from "../mainFunctions";
import { cleaningLine } from "../../tamaImports";
import { showImage, hideImage } from "../../animations/MovmentAnimation";

function CleanEvent(state) {
  hideAllExtraScreens(state);

  if (state.tamaPoop > 0) {
    clean(state);

    setTimeout(() => {
      state.tamaIsHappy = true;
    }, 600);
  }

  cleaningLine.classList.add("cleanAnimation");

  showImage(cleaningLine);

  setTimeout(() => {
    cleaningLine.classList.remove("cleanAnimation");

    hideImage(cleaningLine);
  }, 800);
}

export { CleanEvent };
